<script setup lang="ts">
import { ref, onMounted } from 'vue'
import TrainDataChart from './components/TrainDataChart.vue'
import FilterPanel from './components/FilterPanel.vue'
import AppHeader from './components/AppHeader.vue'
import { Station } from './types'
import { fetchStations } from './services/dataService'

const isLoading = ref(true)
const stations = ref<Station[]>([])
const selectedDepartureStation = ref<string | null>(null)
const selectedArrivalStation = ref<string | null>(null)

onMounted(async () => {
  try {
    stations.value = await fetchStations()
  } catch (error) {
    console.error('Error fetching stations:', error)
  } finally {
    isLoading.value = false
  }
})

const handleDepartureChange = (stationId: string) => {
  selectedDepartureStation.value = stationId
  // Reset arrival station when departure changes
  selectedArrivalStation.value = null
}

const handleArrivalChange = (stationId: string) => {
  selectedArrivalStation.value = stationId
}
</script>

<template>
  <div class="app-container">
    <AppHeader />
    
    <div v-if="isLoading" class="loading">
      Chargement des données...
    </div>
    
    <div v-else class="grid">
      <FilterPanel 
        :stations="stations"
        :selectedDepartureStation="selectedDepartureStation"
        :selectedArrivalStation="selectedArrivalStation"
        @departure-change="handleDepartureChange"
        @arrival-change="handleArrivalChange"
      />
      
      <div class="chart-card card">
        <div class="card-header">
          <h2>Statistiques de retards</h2>
          <div v-if="selectedDepartureStation && selectedArrivalStation" class="route-info">
            <p>
              {{ stations.find(s => s.id === selectedDepartureStation)?.name }}
              →
              {{ stations.find(s => s.id === selectedArrivalStation)?.name }}
            </p>
          </div>
        </div>
        
        <TrainDataChart 
          :selectedDepartureStation="selectedDepartureStation"
          :selectedArrivalStation="selectedArrivalStation"
        />
      </div>
    </div>
  </div>
</template>

<style>
.loading {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 200px;
  color: var(--color-neutral-500);
}

.chart-card {
  height: 100%;
}

.route-info {
  color: var(--color-neutral-700);
  margin-bottom: var(--space-4);
  font-weight: var(--font-weight-medium);
}

.route-info p {
  margin: 0;
}
</style>