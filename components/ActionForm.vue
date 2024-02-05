<script setup>
import '@jsfe/shoelace';
import '@shoelace-style/shoelace/dist/components/dialog/dialog.js';
const props = defineProps(['actionPath', 'schema', 'uiSchema']);
const dialog = ref(false)
const dialogContent = ref('');

const handleSubmit = async (e) => {
  const { data, error, pending, status } = await useFetch('/api/action', {
    method: 'POST',
    body: {
      action: props.schema,
      arguments: e,
      file: props.actionPath,
    }
  })
  dialog.value = true;
  dialogContent.value = data
}
const closeDialog = () => {
  dialog.value = false;
}

</script>
<template>
  <jsf-shoelace .schema="props.schema" .uiSchema="props.uiSchema" .submitCallback="handleSubmit"></jsf-shoelace>

  <sl-dialog label="Dialog" class="dialog-overview" :open="dialog" :onSlRequestClose="closeDialog">
    <pre>{{ dialogContent }}</pre>
  </sl-dialog>
</template>