<template>
  <v-app id="inspire">
    <!-- <v-system-bar>
      system bar
      <v-spacer></v-spacer>

      <v-icon>mdi-square</v-icon>

      <v-icon>mdi-circle</v-icon>

      <v-icon>mdi-triangle</v-icon>
    </v-system-bar> -->

    <!-- <v-app-bar class="px-5">
      <v-app-bar-nav-icon @click="drawer = !drawer">
        <v-icon icon="mdi-menu" />
      </v-app-bar-nav-icon>

      <v-toolbar-title class="pl-4">Cabeçalho</v-toolbar-title>
    </v-app-bar>

    <v-card>
      <v-navigation-drawer expand-on-hover rail v-model="drawer">
        <v-list density="compact" nav v-for="item in items" :key="id">
          <v-list-item
            link
            :prepend-icon="item.icon"
            :title="item.title"
            :value="item.value"
            :to="item.path"
            
          ></v-list-item>
        </v-list>
      </v-navigation-drawer>
    </v-card> -->

    <v-main class="index-background">
      <router-view/>
      <v-container>
        <v-row>
          <template v-for="n in 2" :key="n">
            <v-col class="mt-2" cols="12">
              <strong>Categoria {{ n }}</strong>
            </v-col>

            <v-col v-for="j in 6" :key="`${n}${j}`" cols="12" md="2">
              <v-sheet elevation="10" rounded height="150">
                Imagem aqui
              </v-sheet>
            </v-col>
          </template>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
export default {
  computed: {
    // getCategories() {
    //   return this.$store.getters.getCategories
    // },
  },
  data: () => ({
    // drawer: true,
    // group: null,
    // itemsList: null,
    // items: [
    //   {
    //     id: 1,
    //     icon: "mdi-folder",
    //     title: "Página 1",
    //     value: "foo",
    //     path: "/about", //De repente, vale a pena só carregar o componente e não redirecionar
    //   },
    //   {
    //     id: 2,
    //     icon: "mdi-account-multiple",
    //     title: "Página 2",
    //     value: "bar",
    //     path: "",
    //   },
    //   {
    //     id: 3,
    //     icon: "mdi-account-multiple",
    //     title: "Página 3",
    //     value: "fizz",
    //     path: "",
    //   },
    //   {
    //     id: 4,
    //     icon: "mdi-account-multiple",
    //     title: "Página 4",
    //     value: "buzz",
    //     path: "",
    //   },
    //],
  }),
  mounted() {
    //console.log(this.drawer);
  },
  watch: {
    // group() {
    //   this.drawer = false;
    // },
  },
};
</script>
<style scoped>
.index-background {
  background-color: #9a2b19;
}
</style>
