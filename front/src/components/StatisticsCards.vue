<script setup lang="ts">
import type { TrainData } from '../types'

defineProps<{
  data: TrainData | null
}>()
</script>

<template>
  <div v-if="data" class="statistics-grid">
    <!-- Section 1: Pourcentages -->
    <div class="stats-section">
      <h3>Statistiques générales</h3>
      <div class="stats-cards">
        <div class="stat-card">
          <div class="stat-value">{{ Math.round((data.totalTrains - data.delayedDepartures) / data.totalTrains * 100) }}%</div>
          <div class="stat-label">Trains partis à l'heure</div>
        </div>
        <div class="stat-card warning">
          <div class="stat-value">{{ Math.round(data.delayedDepartures / data.totalTrains * 100) }}%</div>
          <div class="stat-label">Trains partis en retard</div>
        </div>
        <div class="stat-card error">
          <div class="stat-value">{{ Math.round(data.delayedArrivals / data.totalTrains * 100) }}%</div>
          <div class="stat-label">Trains arrivés en retard</div>
        </div>
      </div>
    </div>

    <!-- Section 2: Moyennes -->
    <div class="stats-section">
      <h3>Moyennes des retards</h3>
      <div class="stats-cards">
        <div class="stat-card info">
          <div class="stat-value">{{ Math.round(data.averageDelayDeparture) }} min</div>
          <div class="stat-label">Retard moyen au départ</div>
        </div>
        <div class="stat-card info">
          <div class="stat-value">{{ Math.round(data.averageDelayArrival) }} min</div>
          <div class="stat-label">Retard moyen à l'arrivée</div>
        </div>
      </div>
    </div>

    <!-- Section 3: Nombre de retards -->
    <div class="stats-section">
      <h3>Détail des retards</h3>
      <div class="stats-cards">
        <div class="stat-card">
          <div class="stat-value">{{ data.delays.above15min }}</div>
          <div class="stat-label">Retards > 15 min</div>
        </div>
        <div class="stat-card">
          <div class="stat-value">{{ data.delays.above30min }}</div>
          <div class="stat-label">Retards > 30 min</div>
        </div>
        <div class="stat-card">
          <div class="stat-value">{{ data.delays.above60min }}</div>
          <div class="stat-label">Retards > 60 min</div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.statistics-grid {
  margin-top: var(--space-8);
  display: grid;
  gap: var(--space-8);
}

.stats-section {
  display: grid;
  gap: var(--space-4);
}

.stats-section h3 {
  color: var(--color-neutral-700);
  font-size: 1.125rem;
  margin: 0;
}

.stats-cards {
  display: grid;
  gap: var(--space-4);
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
}

.stat-card {
  background: white;
  border: 1px solid var(--color-neutral-200);
  border-radius: var(--radius);
  padding: var(--space-4);
  text-align: center;
}

.stat-value {
  font-size: 1.5rem;
  font-weight: var(--font-weight-bold);
  color: var(--color-neutral-900);
  margin-bottom: var(--space-2);
}

.stat-label {
  font-size: 0.875rem;
  color: var(--color-neutral-600);
}

.stat-card.warning .stat-value {
  color: var(--color-warning-500);
}

.stat-card.error .stat-value {
  color: var(--color-error-500);
}

.stat-card.info .stat-value {
  color: var(--color-primary-600);
}
</style>