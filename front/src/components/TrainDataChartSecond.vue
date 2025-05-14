<script setup lang="ts">
import { ref, computed, watch, onMounted } from "vue";
import { Bar, Line } from "vue-chartjs";
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  BarElement,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
} from "chart.js";
import { fetchTrainData } from "../services/dataService";
import type { TrainData } from "../types";
import StatisticsCards from "./StatisticsCards.vue";

ChartJS.register(
  Title,
  Tooltip,
  Legend,
  BarElement,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement
);

const nbTrains = ref<number | null>(null);

onMounted(async () => {
  try {
    const url = "http://localhost:3000/data";
    const res = await fetch(url);
    const json = await res.json();

    console.log("📦 Données brutes reçues :", json);

    // nbTrains.value = json.nb_train_prevu;
    nbTrains.value = json;
    console.log("✅ nbTrains.value =", nbTrains.value);
  } catch (err) {
    console.error("❌ Erreur lors de l’appel à l’API:", err);
    nbTrains.value = null;
  }
});

const props = defineProps<{
  selectedDepartureStation: string | null;
  selectedArrivalStation: string | null;
}>();

const isLoading = ref(false);
const error = ref<string | null>(null);
const trainData = ref<TrainData | null>(null);

const chartData = computed<any>(() => {
  if (!trainData.value) return null;

  const data = trainData.value;

  return {
    labels: [
      "Trains totaux",
      "Départs en retard",
      "Arrivées en retard",
      "Retard > 15min",
      "Retard > 30min",
      "Retard > 60min",
    ],
    datasets: [
      {
        label: "Nombre de trains",
        data: [
          data.totalTrains,
          data.delayedDepartures,
          data.delayedArrivals,
          data.delays.above15min,
          data.delays.above30min,
          data.delays.above60min,
        ],
        backgroundColor: [
          "rgba(59, 130, 246, 0.8)", // Bleu pour total
          "rgba(245, 158, 11, 0.8)", // Orange pour départs retardés
          "rgba(239, 68, 68, 0.8)", // Rouge pour arrivées retardées
          "rgba(239, 68, 68, 0.6)", // Rouge plus clair pour >15min
          "rgba(239, 68, 68, 0.4)", // Rouge encore plus clair pour >30min
          "rgba(239, 68, 68, 0.2)", // Rouge très clair pour >60min
        ],
        borderColor: [
          "rgb(59, 130, 246)",
          "rgb(245, 158, 11)",
          "rgb(239, 68, 68)",
          "rgb(239, 68, 68)",
          "rgb(239, 68, 68)",
          "rgb(239, 68, 68)",
        ],
        borderWidth: 1,
      },
    ],
  };
});

const yearlyData = computed(() => {
  return {
    labels: [
      "Jan",
      "Fév",
      "Mar",
      "Avr",
      "Mai",
      "Juin",
      "Juil",
      "Août",
      "Sep",
      "Oct",
      "Nov",
      "Déc",
    ],
    datasets: [
      {
        label: "2023",
        data: Array.from(
          { length: 12 },
          () => Math.floor(Math.random() * 30) + 5
        ),
        borderColor: "rgba(59, 130, 246, 0.8)",
        backgroundColor: "rgba(59, 130, 246, 0.1)",
        tension: 0.4,
        fill: false,
      },
      {
        label: "2024",
        data: Array.from(
          { length: 12 },
          () => Math.floor(Math.random() * 30) + 10
        ),
        borderColor: "rgba(245, 158, 11, 0.8)",
        backgroundColor: "rgba(245, 158, 11, 0.1)",
        tension: 0.4,
        fill: false,
      },
      {
        label: "2025",
        data: Array.from(
          { length: 12 },
          () => Math.floor(Math.random() * 30) + 15
        ),
        borderColor: "rgba(239, 68, 68, 0.8)",
        backgroundColor: "rgba(239, 68, 68, 0.1)",
        tension: 0.4,
        fill: false,
      },
    ],
  };
});

const chartOptions = computed<any>(() => {
  return {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false,
      },
      title: {
        display: true,
        text: "Statistiques des retards de trains",
        font: {
          family: "'Inter', sans-serif",
          size: 16,
          weight: "bold",
        },
      },
      tooltip: {
        backgroundColor: "rgba(0, 0, 0, 0.8)",
        titleFont: {
          family: "'Inter', sans-serif",
          size: 14,
        },
        bodyFont: {
          family: "'Inter', sans-serif",
          size: 13,
        },
        padding: 10,
        cornerRadius: 6,
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        title: {
          display: true,
          text: "Nombre de trains",
          font: {
            family: "'Inter', sans-serif",
            size: 12,
          },
        },
        ticks: {
          font: {
            family: "'Inter', sans-serif",
          },
        },
      },
      x: {
        ticks: {
          font: {
            family: "'Inter', sans-serif",
          },
          maxRotation: 45,
          minRotation: 45,
        },
      },
    },
  };
});

const yearlyChartOptions = computed<any>(() => {
  return {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: true,
        position: "top" as const,
      },
      title: {
        display: true,
        text: "Évolution des retards par année",
        font: {
          family: "'Inter', sans-serif",
          size: 16,
          weight: "bold",
        },
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        title: {
          display: true,
          text: "Retard moyen (minutes)",
          font: {
            family: "'Inter', sans-serif",
            size: 12,
          },
        },
      },
    },
  };
});

const loadData = async () => {
  if (!props.selectedDepartureStation || !props.selectedArrivalStation) return;

  isLoading.value = true;
  error.value = null;

  try {
    trainData.value = await fetchTrainData(
      props.selectedDepartureStation,
      props.selectedArrivalStation
    );
  } catch (err) {
    error.value = "Erreur lors du chargement des données";
    console.error(err);
  } finally {
    isLoading.value = false;
  }
};

watch(
  [() => props.selectedDepartureStation, () => props.selectedArrivalStation],
  () => {
    loadData();
  }
);

onMounted(() => {
  if (props.selectedDepartureStation && props.selectedArrivalStation) {
    loadData();
  }
});
</script>

<template>
  <div class="chart-wrapper">
    <div v-if="isLoading" class="chart-loading">Chargement des données...</div>

    <div v-else-if="error" class="chart-error">
      {{ error }}
    </div>

    <div
      v-else-if="!selectedDepartureStation || !selectedArrivalStation"
      class="no-data"
    >
      <p>
        Veuillez sélectionner les gares de départ et d'arrivée pour afficher les
        statistiques
      </p>
    </div>

    <div v-else-if="!trainData" class="no-data">
      <p>Aucune donnée disponible pour ce trajet</p>
    </div>

    <div v-else>
      <div class="chart-container">
        <Bar :data="chartData" :options="chartOptions" />
      </div>

      <div class="yearly-chart-container">
        <Line :data="yearlyData" :options="yearlyChartOptions" />
      </div>

      <div class="prediction-box">
        <p>
          D'après nos estimations sur le mois de juin 2025, les trains auront un
          retard de 20 mins.
        </p>
      </div>

      <div class="additional-content">
        <h3>Ma nouvelle demande</h3>
        <p>Contenu supplémentaire ajouté à la suite de la page.</p>
      </div>

      <StatisticsCards :data="trainData" />
    </div>
  </div>
</template>

<style scoped>
.chart-wrapper {
  position: relative;
  width: 100%;
}

.chart-container {
  height: 400px;
  margin-bottom: var(--space-8);
}

.yearly-chart-container {
  height: 400px;
  margin: var(--space-8) 0;
  padding: var(--space-4);
  background-color: white;
  border-radius: var(--radius);
  box-shadow: var(--shadow-sm);
}

.chart-loading,
.chart-error,
.no-data {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 400px;
  color: var(--color-neutral-500);
  text-align: center;
}

.chart-error {
  color: var(--color-error-500);
}

.prediction-box {
  background-color: var(--color-primary-50);
  border: 1px solid var(--color-primary-200);
  border-radius: var(--radius);
  padding: var(--space-4);
  margin: var(--space-4) 0;
}

.prediction-box p {
  color: var(--color-primary-900);
  margin: 0;
  font-weight: var(--font-weight-medium);
}

.additional-content {
  margin-top: var(--space-8);
  padding: var(--space-4);
  background-color: white;
  border-radius: var(--radius);
  box-shadow: var(--shadow-sm);
}

.additional-content h3 {
  color: var(--color-neutral-900);
  margin-bottom: var(--space-4);
}
</style>
