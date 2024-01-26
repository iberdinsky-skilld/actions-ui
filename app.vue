<script setup>
const actions = ref([]);
const actionsQuery = await queryContent('/').where({ title: 'Action' }).find();
actions.value = actionsQuery;


</script>
<template>
  <NuxtLayout>
    <v-app>
      <v-navigation-drawer>
        <v-list-item link title="Homepage" to="/"></v-list-item>
        <v-divider></v-divider>
        <v-list-item link :title="link?.action?.title" v-for="link of actions" :key="link._path" :to="link._path"></v-list-item>
      </v-navigation-drawer>

      <NuxtLink v-for="link of actions" :key="link._path" :to="link._path">
        {{ link?.action?.title }}
      </NuxtLink>
      <v-main>
        <NuxtPage></NuxtPage>
      </v-main>
    </v-app>
  </NuxtLayout>
</template>
