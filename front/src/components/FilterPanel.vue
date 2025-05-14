<script setup lang="ts">
import { Station } from '../types'

defineProps<{
  stations: Station[]
  selectedDepartureStation: string | null
  selectedArrivalStation: string | null
}>()

const emit = defineEmits<{
  'departure-change': [stationId: string]
  'arrival-change': [stationId: string]
}>()

const handleDepartureChange = (event: Event) => {
  const select = event.target as HTMLSelectElement
  emit('departure-change', select.value)
}

const handleArrivalChange = (event: Event) => {
  const select = event.target as HTMLSelectElement
  emit('arrival-change', select.value)
}
</script>

<template>
  <div class="filter-panel card">
    <div class="card-header">
      <h3>Filtres</h3>
    </div>
    
    <div class="form-group">
      <label for="departure-select" class="form-label">Gare de départ</label>
      <select 
        id="departure-select" 
        class="form-select"
        :value="selectedDepartureStation"
        @change="handleDepartureChange"
      >
        <option value="">Sélectionnez une gare de départ</option>
        <option v-for="station in stations" :key="station.id" :value="station.id">
          {{ station.name }}
        </option>
      </select>
    </div>
    
    <div class="form-group">
      <label for="arrival-select" class="form-label">Gare d'arrivée</label>
      <select 
        id="arrival-select" 
        class="form-select"
        :value="selectedArrivalStation"
        @change="handleArrivalChange"
        :disabled="!selectedDepartureStation"
      >
        <option value="">Sélectionnez une gare d'arrivée</option>
        <option 
          v-for="station in stations" 
          :key="station.id" 
          :value="station.id"
          :disabled="station.id === selectedDepartureStation"
        >
          {{ station.name }}
        </option>
      </select>
    </div>
    
    <div class="filter-info">
      <p>Sélectionnez les gares de départ et d'arrivée pour visualiser les statistiques des trains.</p>
    </div>
  </div>
</template>

<style scoped>
.filter-panel {
  height: fit-content;
}

.filter-info {
  margin-top: var(--space-6);
  padding-top: var(--space-4);
  border-top: 1px solid var(--color-neutral-200);
  font-size: 0.875rem;
  color: var(--color-neutral-500);
}
</style>