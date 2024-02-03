<template>
  <div class="pb-9">
    <p class="text-h5 text-wrap font-weight-medium font-italic">
      I'm a Software Developer from Brazil who enjoys studying and is always up
      for learning. I find the dynamic nature of technology exciting, constantly
      seeking ways to improve and discovering new things in the field is a must
      for me.
    </p>
  </div>
  <div class="pb-5">
    <p class="text-h5 text-wrap">Working Experiencies:</p>
    <v-col class="shrink">
      <v-card
        class="mx-auto no-color-background"
        plain
        elevation="0"
        max-width="500"
      >
        <v-list class="pa-0 ma-0 no-color-background">
          <v-list-item v-for="(item, i) in list_jobs" :key="i">
            <v-icon>mdi-desktop-classic</v-icon>
            <v-list-item-title
              v-text="item.name"
              class="text-h5 font-weight-bold"
            ></v-list-item-title>
            <v-list-item-subtitle
              v-text="item.date_worked"
              class="font-weight-bold font-italic"
            ></v-list-item-subtitle>
            <v-list-item-subtitle
              v-text="item.location"
              class="font-weight-bold font-italic"
            ></v-list-item-subtitle>
            <br>
            <p class="text-body-4 text-wrap font-weight-bold">
              {{ item.job_description }}
            </p>
          </v-list-item>
        </v-list>
      </v-card>
    </v-col>
  </div>
  <div class="pb-3 pt-3">
    <p class="text-h5 text-wrap">
      Technologies that I use to work (always open to more):
    </p>
  </div>
  <div class="pb-3">
    <v-container>
      <v-row no-gutters>
        <v-col
          color="primary"
          v-for="item in list_technologies"
          cols="12"
          sm="4"
        >
          <v-list class="pa-0 ma-0 no-color-background">
            <img height="60" :src="item.icon" />
            <p>{{ item.title }}</p>

            <br />
          </v-list>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script setup>
// Data
const list_technologies = ref([
  {
    title: "Python",
    icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original.svg",
  },
  {
    title: "Flask",
    icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/flask/flask-original.svg",
  },
  {
    title: "Django",
    icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/django/django-plain-wordmark.svg",
  },
  {
    title: "Pytest",
    icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/pytest/pytest-original.svg",
  },
  {
    title: "MongoDB",
    icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-plain-wordmark.svg",
  },
  {
    title: "PostGreSQL",
    icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/postgresql/postgresql-original.svg",
  },
  {
    title: "Google DataStore",
    icon: "https://www.ibm.com/content/dam/adobe-cms/instana/media_logo/Google-Cloud-Datastore-Monitoring.png/_jcr_content/renditions/cq5dam.web.1280.1280.png",
  },
  {
    title: "VueJs",
    icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/vuejs/vuejs-original.svg",
  },
  {
    title: "Javascript",
    icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-plain.svg",
  },
  {
    title: "Cypress",
    icon: "https://cdn.icon-icons.com/icons2/3911/PNG/512/cypress_logo_icon_247239.png",
  },
  {
    title: "Google Cloud Services (GCP)",
    icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/googlecloud/googlecloud-original.svg",
  },
  {
    title: "Docker",
    icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/docker/docker-original.svg",
  },
]);

const list_jobs = ref([
  {
    name: "Conecta Nuvem",
    date_worked: "From Dec 2022 - Dec 2023",
    job_description:
      "Improving and implementing the software based on Google Cloud Services, working as a Software Developer using Python, Flask, Pytest, Cloud Run, Docker on the Back End. On the Front End I used Vuetify, VueJs and Firebase hosting services (Google).",
    location: "Remote",
  },
  {
    name: "EEB INFORMÁTICA",
    date_worked: "From Apr 2022 - Jun 2022",
    job_description: "Desktop computer, laptop maintenance work.",
    location: "On-site, Florianópolis SC",
  },
]);
</script>

<style scoped>
.no-color-background {
  background-color: rgba(0, 0, 0, 0);
}
</style>
