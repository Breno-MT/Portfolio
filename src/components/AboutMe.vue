<template>
  <div class="pb-6">
    <p class="text-h5 text-wrap font-weight-medium font-italic">
      I'm a Software Developer from Brazil who loves studying, always learning
      and is fascinated by the constant changes and room for improvement,
      discovering new things in the field of Technology is a must.
    </p>
  </div>
  <div class="pb-3 pt-3">
    <p class="text-h5 text-wrap">I work with the following technologies (always open to more):</p>
  </div>
  <div class="pb-3">
    <v-container>
      <v-row no-gutters>
        <v-col color="primary" v-for="item in list_technologies" cols="12" sm="4">
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
</script>

<style scoped>
.no-color-background {
  background-color: rgba(0, 0, 0, 0);
}
</style>
