<script setup>

const uiSchema = ref({})
const schemaRoute = ref([])
const route = useRoute()
schemaRoute.value = route.params.slug
schemaRoute.value[schemaRoute.value.length - 1] = "ui-schema"
const schemes = await queryContent(...schemaRoute.value).find()

uiSchema.value = schemes.length ? schemes[0].uiSchema : {}

</script>
<template>
  <div class="container">

    <ContentDoc v-slot="{ doc }">
      <div class="content-doc">

        <sl-details summary="Action source">
          <pre><code>{{ doc.action }}</code></pre>
        </sl-details>
        <sl-details summary="UI Schema source">
          <pre><code>{{ uiSchema }}</code></pre>
        </sl-details>

        <template v-if="doc.action.arguments">
          <h2 class="text-h5">Arguments</h2>
          <ActionForm :schema="{
            type: 'object',
            properties: doc.action.arguments
          }" :uiSchema="uiSchema" :actionPath="doc._file" />
        </template>

        <template v-if="doc.action.options">
          <h2 class="text-h5">Options</h2>
          <ActionForm :schema="{
            type: 'object',
            properties: doc.action.options
          }" :uiSchema="uiSchema" />
        </template>
      </div>

    </ContentDoc>
  </div>
</template>

<style>
.content-doc {
  display: grid;
  gap: 24px;
}
</style>