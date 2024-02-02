<template>
  <v-footer color="#bdb4b6" class="text-center d-flex flex-column">
    <div>
      <v-btn
        v-for="icon in icons"
        :key="icon.icon"
        class="mx-4"
        :icon="icon.icon"
        :href="icon.link"
        variant="text"
        target="_blank"
      ></v-btn>
    </div>

    <div class="pt-0">
      Challenging myself to new things or making the best of what I know,
      searching and studying about technologies to be prepared to new
      challenges.
    </div>

    <v-divider></v-divider>

    <div>{{ new Date().getFullYear() }} — <strong>By Breno.</strong></div>
  </v-footer>
</template>

<script setup>
const icons = ref([
  { icon: "mdi-github", link: "https://github.com/Breno-MT" },
  {
    icon: "mdi-stack-overflow",
    link: "https://stackoverflow.com/users/17271257/breno",
  },
  {
    icon: "mdi-linkedin",
    link: "https://www.linkedin.com/in/breno-martins-95080a205/",
  },
]);
</script>

<style scoped></style>
