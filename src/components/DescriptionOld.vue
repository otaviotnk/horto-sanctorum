<template>
  <div class="identification">
    <!-- <div class="description">{{ description }}</div> -->
    <div class="description">teste descrição</div>
    <div class="info">
      <div class="photo-container">
        <!-- <img class="photo" :src="photoUrl" alt="Photo"> -->
      </div>
      <div class="details">
        <div class="info-item">
          <!-- <img class="icon" src="nome-icon.png" alt="Nome"> -->
          <span class="label">Nome completo:</span>
          <span class="value">TESTE TESTE</span>
          <!-- <span class="value">{{ fullName }}</span> -->
        </div>
        <div class="info-item">
          <!-- <img class="icon" src="local-nascimento-icon.png" alt="Local de Nascimento"> -->
          <span class="label">Local de Nascimento:</span>
          <!-- <span class="value">{{ birthPlace }}</span> -->
          <span class="value">TESTE TESTE</span>
        </div>
        <div class="info-item">
          <!-- <img class="icon" src="data-nascimento-icon.png" alt="Data de Nascimento"> -->
          <span class="label">Data de Nascimento:</span>
          <!-- <span class="value">{{ formatDate(birthDate) }}</span> -->
          <span class="value">TESTE TESTE</span>
        </div>
        <div class="info-item">
          <!-- <img class="icon" src="data-falecimento-icon.png" alt="Data de Falecimento"> -->
          <span class="label">Data de Falecimento:</span>
          <!-- <span class="value">{{ formatDate(deathDate) }}</span> -->
          <span class="value">TESTE TESTE</span>
        </div>
        <div class="info-item">
          <!-- <img class="icon" src="local-falecimento-icon.png" alt="Local de Falecimento"> -->
          <span class="label">Local de Falecimento:</span>
          <!-- <span class="value">{{ deathPlace }}</span> -->
          <span class="value">TESTE TESTE</span>
        </div>
        <div class="info-item">
          <img class="icon" src="data-festa-icon.png" alt="Data da Festa">
          <span class="label">Data da Festa:</span>
          <!-- <span class="value">{{ formatDate(partyDate) }}</span> -->
          <span class="value">TESTE TESTE</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    description: String,
    photoUrl: String,
    fullName: String,
    birthPlace: String,
    birthDate: Date,
    deathDate: Date,
    deathPlace: String,
    partyDate: Date
  },
  methods: {
    formatDate(date) {
      // Lógica para formatar a data como desejado
    }
  }
};
</script>

<style>
.identification {
  display: flex;
  align-items: center;
  gap: 16px;
}

.description {
  flex: 1;
}

.info {
  display: flex;
  align-items: center;
  gap: 16px;
}

.photo-container {
  height: 50%;
}

.photo {
  height: 100%;
  width: auto;
}

.details {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.info-item {
  display: flex;
  align-items: center;
  gap: 8px;
}

.icon {
  height: 24px;
  width: 24px;
}

.label {
  font-weight: bold;
}

.value {
  flex: 1;
}
</style>
