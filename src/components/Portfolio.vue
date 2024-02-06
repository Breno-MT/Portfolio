<template>
  <v-container class="fill-height">
    <v-responsive class="align-center text-center fill-height">
      <v-img
        height="250"
        src="https://avatars.githubusercontent.com/u/95316873?v=4"
      />

      <div class="pb-1 pt-3">
        <p class="text-h5 font-weight-light font-italic">
          Welcome to my Portfolio!
        </p>
      </div>

      <h1 class="text-h4 font-weight-bold">I'm Breno Martins!</h1>

      <div class="py-1" />

      <v-row class="d-flex align-center justify-center">
        <v-col cols="auto">
          <v-btn
            href="https://www.linkedin.com/in/breno-martins-95080a205/"
            min-width="164"
            rel="noopener noreferrer"
            target="_blank"
            variant="text"
          >
            <v-icon color="primary" icon="mdi-linkedin" size="large" start />

            LinkedIn
          </v-btn>
        </v-col>

        <v-col cols="auto">
          <v-btn
            href="https://stackoverflow.com/users/17271257/breno"
            min-width="164"
            rel="noopener noreferrer"
            target="_blank"
            variant="text"
          >
            <v-icon
              color="#f57d00"
              icon="mdi-stack-overflow"
              size="large"
              start
            />

            Stack Overflow
          </v-btn>
        </v-col>
        <v-col cols="auto">
          <v-btn
            href="https://github.com/Breno-MT"
            min-width="164"
            rel="noopener noreferrer"
            target="_blank"
            variant="text"
          >
            <v-icon icon="mdi-github" size="large" start />

            Github
          </v-btn>
        </v-col>
      </v-row>

      <div class="py-3" />
      <AboutMe />

      <v-col cols="auto">
        <v-btn
          @click="showMoreAboutMe()"
          color="#696465"
          min-width="228"
          rel="noopener noreferrer"
          size="x-large"
          target="_blank"
          variant="flat"
        >
          <v-icon v-if="!showMore">mdi-chevron-up</v-icon>
          <v-icon v-else>mdi-chevron-down</v-icon>

          Projects
        </v-btn>
      </v-col>
      <ShowMore :expand="showMore" />
    </v-responsive>
  </v-container>
</template>

<script setup>
import useAppStore from "@/store/app";

// Data:
const store = useAppStore();
const showMore = ref(store.showMoreAboutMe);

// Methods:
const showMoreAboutMe = () => {
  store.$patch((state) => {
    state.valueShowMoreAboutMe = !showMore.value;
  });
  showMore.value = store.showMoreAboutMe;
};
</script>
