<script setup>

const schema = ref([])
const route = useRoute()
console.log(route.params.slug);
schema.value = route.params.slug
schema.value[schema.value.length - 1] = "ui-schema"

const schemes = await queryContent(...schema.value).find()
console.log(schemes);
</script>
<template>
  <ContentDoc v-slot="{ doc }">
    <article>
      <h1>{{ doc.title }}</h1>
      <code>
        {{ doc.action }}
      </code>
    </article>
  </ContentDoc>
</template>