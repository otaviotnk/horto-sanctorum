<template>
  <!-- <v-app id="inspire"> -->
  <v-app>
    <v-app-bar class="px-5">
      <template v-slot:append>
        <v-menu>
          <template v-slot:activator="{ props }">
            <v-btn
              variant="plain"
              v-bind="props"
              icon="mdi-dots-vertical"
            ></v-btn>
          </template>
          <v-list
            style="overflow-y: auto"
            class="pr-n12"
            xstyle="margin-left: -50px"
          >
            <v-list-item v-for="(item, i) in menuList" :key="i">
              <v-list-item-title>{{ item.title }}</v-list-item-title>
            </v-list-item>
          </v-list>
        </v-menu>
      </template>
      <!-- <template v-slot:append>
        <div class="d-flex justify-space-around">
          <v-menu location="start" transition="scale-transition">
            <template v-slot:activator="{ props }">
              <v-btn
                icon="mdi-dots-vertical"
                class="mx-12"                
                dark
                outline
                v-bind="props"
              >
                Dropdown
              </v-btn>
            </template>

            <v-list background-color="primary">
              <v-list-item v-for="(item, index) in items" :key="index">
                <v-list-item-title>{{ item.title }}</v-list-item-title>
              </v-list-item>
            </v-list>
          </v-menu>
        </div>
      </template> -->
    </v-app-bar>

    <v-card>
      <v-navigation-drawer expand-on-hover rail v-model="drawer">
        <v-list density="compact" nav v-for="item in items" :key="item.id">
          <v-list-item
            link
            :prepend-icon="item.icon"
            :title="item.title"
            :value="item.value"
            :to="item.path"
          ></v-list-item>
        </v-list>
      </v-navigation-drawer>
    </v-card>

    <v-main class="index-background">
      <router-view />
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
    drawer: true,
    group: null,
    menuList: [
      { title: "Click Me" },
      { title: "Click Me" },
      { title: "Click Me" },
      { title: "Click Me 2" },
    ],
    items: [
      {
        id: 1,
        icon: "mdi-folder",
        title: "Página 1",
        value: "foo",
        path: "/",
      },
      {
        id: 2,
        icon: "mdi-account-multiple",
        title: "Sobre",
        value: "bar",
        path: "/about",
      },
      {
        id: 3,
        icon: "mdi-account-multiple",
        title: "Lista",
        value: "fizz",
        path: "/list",
      },
      {
        id: 4,
        icon: "mdi-account-multiple",
        title: "Página 4",
        value: "buzz",
        path: "/buzz",
      },
    ],
  }),
  mounted() {
    //console.log(this.drawer);
  },
  watch: {
    group() {
      this.drawer = false;
    },
  },
};
</script>
<style  scoped>
.index-background {
  background-color: #9a2b19;
}
</style>
