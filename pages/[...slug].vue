<script setup>
const actions = useState('actions')
const action = ref({})
const route = useRoute()

action.value = actions.value.find((element) => JSON.stringify(element._path) === JSON.stringify(route.params.slug))
</script>
<template>
  <div class="container">


    <div class="content-doc">

      <sl-details summary="Action source">
        <pre><code>{{ action.data }}</code></pre>
      </sl-details>
      <sl-details summary="UI Schema source">
        <pre><code>{{ action.schema }}</code></pre>
      </sl-details>

      <template v-if="action.data.action.arguments">
        <h2 class="text-h5">Arguments</h2>
        <ActionForm :schema="{
          type: 'object',
          properties: action.data.action.arguments
        }" :uiSchema="action.schema.uiSchema" :actionPath="action._path" />
      </template>

      <template v-if="action.data.action.options">
        <h2 class="text-h5">Options</h2>
        <ActionForm :schema="{
          type: 'object',
          properties: action.data.action.options
        }" :uiSchema="action.schema.uiSchema" :actionPath="action._path"/>
      </template>
    </div>


  </div>
</template>

<style>
.content-doc {
  display: grid;
  gap: 24px;
}
</style>