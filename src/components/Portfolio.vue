<template>
  <v-container class="fill-height">
    <v-responsive class="align-center text-center fill-height">
      <v-img
        height="300"
        src="https://avatars.githubusercontent.com/u/95316873?v=4"
      />

      <div class="text-h4 font-weight-medium pb-4 pt-4">
        Welcome to my Portfolio!
      </div>

      <h1 class="text-h2 font-weight-bold">I'm Breno Martins!</h1>

      <div class="py-4" />

      <v-row class="d-flex align-center justify-center">
        <v-col cols="auto">
          <v-btn
            href="https://vuetifyjs.com/components/all/"
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
      <v-col cols="auto">
        <v-btn
          @click="showMoreAboutMe()"
          color="primary"
          min-width="228"
          rel="noopener noreferrer"
          size="x-large"
          target="_blank"
          variant="flat"
        >
          <v-icon
            v-if="showMore"
            icon="mdi-arrow-collapse-down"
            size="large"
            start
          />
          <v-icon
            v-if="!showMore"
            icon="mdi-arrow-collapse-up"
            size="large"
            start
          />

          Lorem, ipsum.
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
