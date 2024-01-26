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
  <v-container>

    <ContentDoc v-slot="{ doc }">
      <div class="content-doc">
        <v-expansion-panels>
          <v-expansion-panel title="Action source">
            <v-expansion-panel-text>
              <pre><code>{{ doc.action }}</code></pre>
            </v-expansion-panel-text>
          </v-expansion-panel>
          <v-expansion-panel title="UI Schema source">
            <v-expansion-panel-text>
              <pre><code>{{ uiSchema }}</code></pre>
            </v-expansion-panel-text>
          </v-expansion-panel>
        </v-expansion-panels>

        <template v-if="doc.action.arguments">
          <h2 class="text-h5">Arguments</h2>
          <ActionForm :schema="{
            type: 'object',
            properties: doc.action.arguments
          }" :uiSchema="uiSchema" />
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
  </v-container>
</template>

<style>
.content-doc {
  display: grid;
  gap: 24px;
}
</style>