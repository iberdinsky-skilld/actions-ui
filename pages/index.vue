<script setup>
const actions = ref([]);
const actionsQuery = await queryContent('/').where({ title: 'Action' }).find();
actions.value = actionsQuery;
const snackbar = ref(false);
</script>

<template>
  <v-container class="page-wrapper">
    <h1 class="text-h4">Actions UI</h1>
    <p>
      All components (actions) by default show their arguments and options on the form as text elements. An additional UI
      configuration file may also appear.
    </p>
    <p>
      More information:
      https://github.com/json-schema-form-element/jsfe
      https://jsfe.js.org/Sink/AllFeatures

    </p>
    <p>
      The application was built using Nuxt:
      https://nuxt.com/

    </p>
    <p>
      Yaml files are searched using:
      https://content.nuxt.com/

    </p>

    <h2 class="text-h4">Actions list</h2>
    <v-row>
      <v-col v-for="action in actions" :key="action" cols="12" sm="4">
        <v-card :title="action.action.title" :subtitle="action.action.description" text="...">
          <v-card-actions>
            <v-btn variant="tonal" @click="snackbar = true">Run action</v-btn>
            <v-btn :to="action._path">Review</v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
  <v-snackbar v-model="snackbar">

    Action runned with default arguments (one day it will!)

    <template v-slot:actions>
      <v-btn color="pink" variant="text" @click="snackbar = false">
        Close
      </v-btn>
    </template>
  </v-snackbar>
</template>

<style scoped>
.page-wrapper {
  display: grid;
  gap: 24px;
}
</style>