<template>
  <v-container>
    <v-row class="d-flex align-center justify-center pt-12">
      <v-col cols="8">
        <v-card elevation="10" class="py-5 px-5">
          <v-row class="pb-5">
            <v-card-title class="pb-4">{{ personMock.name }}</v-card-title>
            <v-divider />
          </v-row>
          <v-row>
            <v-col cols="4">
              <v-card class="mb-2">
                <v-img
                  class="fancy-border rounded-circle"
                  max-width="400"
                  max-height="400"
                  aspect-ratio="1"
                  src="https://cdn.vuetifyjs.com/images/cards/docks.jpg"
                  cover
                >
                </v-img>
                <div v-if="personMock.hasPope" class="overlay-bottom-right">
                  <v-tooltip
                    location="end"
                    activator="parent"
                    :text="$t('description.tooltips.popeCoatOfArms')"
                  ></v-tooltip>
                  <v-img src="../src/assets/vatican-city.svg" mxax-height="100">
                  </v-img>
                </div>
              </v-card>
              <v-list>
                <v-list-item two-line>
                  <v-list-item-content>
                    <v-list-item-title class="pr-5 py-1 font-weight-medium">
                      <v-icon
                        class="mr-2 mb-1"
                        color="primary"
                        size="small"
                        icon="mdi-account"
                      />
                      {{ $t("description.fullname") }}
                    </v-list-item-title>
                    <v-list-item-subtitle class="ml-8">
                      {{ personMock.name }}
                    </v-list-item-subtitle>
                    <v-list-item-title class="pr-5 py-1 font-weight-medium">
                      <v-icon
                        class="mr-2 mb-1"
                        color="success"
                        size="small"
                        icon="mdi-flare"
                      />
                      {{ $t("description.birthInfo") }}
                    </v-list-item-title>
                    <v-list-item-subtitle class="ml-8">
                      {{ personMock.birthDay }} - {{ personMock.birthCity }}
                    </v-list-item-subtitle>
                    <v-list-item-title class="pr-5 py-1 font-weight-medium">
                      <v-icon
                        class="mr-2 mb-1"
                        color="error"
                        size="small"
                        icon="mdi-cross-outline"
                      />
                      {{ $t("description.deathInfo") }}
                    </v-list-item-title>
                    <v-list-item-subtitle class="ml-8">
                      {{ personMock.diedAt }} - {{ personMock.dieCity }}
                    </v-list-item-subtitle>
                    <v-list-item-title class="pr-5 py-1 font-weight-medium">
                      <v-icon
                        class="mr-2 mb-1"
                        color="primary"
                        size="small"
                        icon="mdi-book-cross"
                      />
                      <v-tooltip
                        location="start"
                        activator="parent"
                        :text="$t('description.tooltips.canon')"
                      ></v-tooltip>
                      {{ $t("description.canon") }}
                    </v-list-item-title>
                    <v-list-item-subtitle class="ml-8">
                      {{ personMock.canon }}
                    </v-list-item-subtitle>
                    <v-list-item-title class="pr-5 py-1 font-weight-medium">
                      <v-icon
                        class="mr-2 mb-1"
                        color="primary"
                        size="small"
                        icon="mdi-church-outline"
                      />
                      <v-tooltip
                        location="start"
                        activator="parent"
                        :text="$t('description.tooltips.liturgicalFeast')"
                      ></v-tooltip>
                      {{ $t("description.liturgicalFeast") }}
                    </v-list-item-title>
                    <v-list-item-subtitle class="ml-8">
                      {{ personMock.party }}
                    </v-list-item-subtitle>
                    <v-list-item-title
                      v-if="personMock.hasPope"
                      class="pr-5 py-1 font-weight-medium"
                    >
                      <v-icon
                        class="mr-2 mb-1"
                        color="primary"
                        size="small"
                        icon="mdi-chess-king"
                      />
                      <v-tooltip
                        location="start"
                        activator="parent"
                        :text="$t('description.tooltips.papacyTime')"
                      ></v-tooltip>
                      {{ $t("description.papacyTime") }}
                    </v-list-item-title>
                    <v-list-item-subtitle
                      v-if="personMock.hasPope"
                      class="ml-8"
                    >
                      {{ personMock.papacy }}
                    </v-list-item-subtitle>
                  </v-list-item-content>
                </v-list-item>
              </v-list>
              <v-card>
                <v-divider v-if="personMock.hasPope" class="pt-5" />
              </v-card>
              <div v-if="personMock.hasPope">
                <v-img
                  v-if="personMock.coatOfArms"
                  :src="personMock.coatOfArms"
                  max-height="150"
                ></v-img>
                <v-img
                  v-else
                  src="../src/assets/unknown-coat-of-arms.svg"
                  max-height="150"
                ></v-img>
                <v-card-subtitle class="d-flex align-center justify-center">
                  {{ $t("description.popeCoatOfArms") }}
                </v-card-subtitle>
                <v-card-subtitle
                  v-if="!personMock.coatOfArms"
                  class="text-center pt-2"
                >
                  {{ $t("description.popeCoatOfArmsNotFound") }}
                </v-card-subtitle>
              </div>
            </v-col>
            <v-col cols="8">
              <v-card color="green" class="py-2 px-2 ml-0" rounded="shaped">
                <p class="text-justify">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                  dapibus tortor a ex commodo, a euismod urna pellentesque.
                  Fusce ac gravida mauris. Donec nibh enim, pharetra sit amet
                  enim sed, posuere cursus arcu. Morbi rhoncus ut metus eget
                  tempus. Aenean at ante nec ligula fringilla tempor. In posuere
                  hendrerit rutrum. Proin sit amet ante turpis. Nullam rutrum mi
                  nec sapien ullamcorper, at iaculis ipsum mattis. Sed iaculis
                  tortor id egestas rutrum. Ut quis tempus nibh, ac hendrerit
                  risus. Suspendisse felis risus, dictum vitae faucibus
                  ullamcorper, malesuada et erat. Ut a malesuada neque, sit amet
                  maximus libero. Praesent sed eleifend dui, ac tempor elit. Sed
                  at metus sollicitudin, condimentum elit vel, iaculis nibh.
                  Aliquam erat volutpat. Pellentesque lacinia sapien a metus
                  tempor varius. Aenean nec urna orci. Nullam neque augue,
                  iaculis quis ullamcorper sit amet, tempor vel dolor. Fusce ut
                  volutpat augue. Vivamus non rutrum ex. Maecenas ut ipsum ex.
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                  dapibus tortor a ex commodo, a euismod urna pellentesque.
                  Fusce ac gravida mauris. Donec nibh enim, pharetra sit amet
                  enim sed, posuere cursus arcu. Morbi rhoncus ut metus eget
                  tempus. Aenean at ante nec ligula fringilla tempor. In posuere
                  hendrerit rutrum. Proin sit amet ante turpis. Nullam rutrum mi
                  nec sapien ullamcorper, at iaculis ipsum mattis. orem ipsum
                  dolor sit amet, consectetur adipiscing elit. Donec dapibus
                  tortor a ex commodo, a euismod urna pellentesque. Fusce ac
                  gravida mauris. Donec nibh enim, pharetra sit amet enim sed,
                  posuere cursus arcu. Morbi rhoncus ut metus eget tempus.
                  Aenean at ante nec ligula fringilla tempor. In posuere
                  hendrerit rutrum. Proin sit amet ante turpis. Nullam rutrum mi
                  nec sapien ullamcorper, at iaculis ipsum mattis. Sed iaculis
                  tortor id egestas rutrum. Ut quis tempus nibh, ac hendrerit
                  risus. Suspendisse felis risus, dictum vitae faucibus
                  ullamcorper, malesuada et erat. Ut a malesuada neque, sit amet
                  maximus libero. Praesent sed eleifend dui, ac tempor elit. Sed
                  at metus sollicitudin, condimentum elit vel, iaculis nibh.
                  Aliquam erat volutpat. Pellentesque lacinia sapien a metus
                  tempor varius. Aenean nec urna orci. Nullam neque augue,
                  iaculis quis ullamcorper sit amet, tempor vel dolor. Fusce ut
                  volutpat augue. Vivamus non rutrum ex. Maecenas ut ipsum ex.
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                  dapibus tortor a ex commodo, a euismod urna pellentesque.
                </p>
              </v-card>
            </v-col>
          </v-row>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data: () => ({
    datatableKeys: [
      {
        id: 1,
        key: "Nome completo",
        value: "name",
        icon: "mdi-account",
        color: "primary",
      },
      {
        id: 2,
        key: "Data de nascimento",
        value: "birthDay",
        icon: "mdi-flare",
        color: "success",
      },
      {
        id: 3,
        key: "Local de nascimento",
        value: "birthCity",
        icon: "mdi-map-marker-outline",
        color: "success",
      },
      {
        id: 4,
        key: "Data de falecimento",
        value: "diedAt",
        icon: "mdi-cross-outline",
        color: "error",
      },
      {
        id: 5,
        key: "Local de falecimento",
        value: "dieCity",
        icon: "mdi-map-marker-outline",
        color: "error",
      },
      {
        id: 6,
        key: "Canon",
        value: "canon",
        icon: "mdi-book-cross",
        color: "primary",
      },
      {
        id: 7,
        key: "Festa",
        value: "party",
        icon: "mdi-church-outline",
        color: "primary",
      },
      {
        id: 8,
        key: "Tempo",
        value: "papacy",
        icon: "mdi-chess-king",
        color: "primary",
      },
    ],
    personMock: {
      name: "José da Silva Gomes Santos",
      birthDay: "01/09/1980",
      diedAt: "09/01/2020",
      birthCity: "Rio Branco/AC",
      dieCity: "São Paulo/SP",
      canon: "12/12/1997",
      party: "12/12",
      hasPope: true,
      papacy: "1990-2000",
      coatOfArms: "../src/assets/holy-see-coat-of-arms.svg",
    },
  }),
};
</script>

<style scoped>
.rounded-left {
  border-top-left-radius: 10px;
  border-bottom-left-radius: 10px;
}
.rounded-right {
  border-top-right-radius: 10px;
  border-bottom-right-radius: 10px;
}

.fancy-border {
  border: 7px solid #b88846;
  background-color: pink;
}
.overlay-bottom-right {
  z-index: 9 !important;
  position: absolute;
  top: 35%;
  left: 65%;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: 25%;
}

.full-width-td {
  width: 100% !important;
}
.pope-tooltip {
  position: relative !important;
  margin: -50px !important;
}
</style>
