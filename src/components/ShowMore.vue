<template>
   <v-col class="shrink">
      <v-expand-transition v-show="store.showMoreAboutMe">
        <p class="text-h4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, et recusandae doloribus, nulla consectetur cumque quod quo perspiciatis similique cum rerum temporibus blanditiis inventore ipsa cupiditate labore nesciunt! Placeat alias asperiores assumenda, nemo sapiente rem. Est facere omnis minima doloribus corporis tempora deserunt placeat perferendis deleniti laborum, adipisci qui cupiditate!</p>
      </v-expand-transition>
    </v-col>
</template>

<script setup>
import useAppStore from "@/store/app";

// Data:
const store = useAppStore();
</script>

<style scoped></style>
