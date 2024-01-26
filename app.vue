<script setup>
const links = ref([]);
const query = await queryContent('actions').where({ title: 'Action' }).find();
links.value = query;

</script>
<template>
  <!-- <ContentNavigation :query="query"> -->
    <NuxtLink v-for="link of links" :key="link._path" :to="link._path">
      {{ link?.action?.title }}
    </NuxtLink>
  <!-- </ContentNavigation> -->
  <NuxtPage></NuxtPage>
</template>
