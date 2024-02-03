<template>
  <v-col class="shrink">
    <v-expand-transition v-show="store.showMoreAboutMe">
      <v-card
        class="mx-auto no-color-background"
        plain
        elevation="0"
        max-width="500"
      >
        <v-list class="no-color-background">
          <v-list-item v-for="(item, i) in list_projects" :key="i">
            <v-icon>mdi-github</v-icon>
            <v-list-item-title v-text="item.name"></v-list-item-title>
            <v-list-item-subtitle
              ><a :href="item.link"
                >Click here to access it</a
              ></v-list-item-subtitle
            >
          </v-list-item>
        </v-list>
        <p class="font-italic text-h6">You can find more on my Github! 😉</p>
      </v-card>
    </v-expand-transition>
  </v-col>
</template>

<script setup>
import useAppStore from "@/store/app";

// Data:
const store = useAppStore();

const list_projects = ref([
  {
    name: "Recipe Blog (Python/Django)",
    link: "https://github.com/Breno-MT/Django_Project",
  },
  {
    name: "Python WebScraping (Python)",
    link: "https://github.com/Breno-MT/RealPython_WebScraping",
  },
  {
    name: "Flask Project with MongoDB (Python/Flask/MongoDB)",
    link: "https://github.com/Breno-MT/Pymongo-Flask",
  },
  {
    name: "Flask project with MongoDB (Python/Flask/MongoDB)",
    link: "https://github.com/Breno-MT/LABinventory-BackEnd",
  },
  {
    name: "VueJS Project (VueJS/JavaScript)",
    link: "https://github.com/Breno-MT/LABInventory-FrontEnd",
  },
  {
    name: "Flask project with PostGreSQL (Python/Flask/PostGreSQL)",
    link: "https://github.com/Breno-MT/Modulo-3-Flask",
  },
  {
    name: "BackEnd project for inventory (Python/Flask/PostGreSQL)",
    link: "https://github.com/Breno-MT/Dev-Inventory",
  },
]);
</script>

<style scoped>
.no-color-background {
  background-color: rgba(0, 0, 0, 0);
}
</style>
