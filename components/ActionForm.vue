<script setup>
import '@jsfe/shoelace';
import "@shoelace-style/shoelace"
import '@shoelace-style/shoelace/dist/themes/light.css';
import '@shoelace-style/shoelace/dist/components/button/button.js';
import '@shoelace-style/shoelace/dist/components/icon/icon.js';
import '@shoelace-style/shoelace/dist/components/input/input.js';
import '@shoelace-style/shoelace/dist/components/rating/rating.js';

const props = defineProps(['schema', 'uiSchema']);
const dialog = ref(false)
const dialogContent = ref('');
const handleSubmit = (e, aaa, mode) => {

  dialog.value = true;
  dialogContent.value = e
}
const closeDialog = () => {
  dialog.value = false;
}
</script>
<template>
  <jsf-shoelace .schema="props.schema" .uiSchema="props.uiSchema" .submitCallback="handleSubmit"></jsf-shoelace>

  <v-dialog v-model="dialog" width="auto">
    <v-card>
      <v-card-text>
        <h3 class="text-h6">Submit action with:</h3>
        {{ dialogContent }}
      </v-card-text>
      <v-card-actions>
        <v-btn color="primary" block @click="closeDialog">Close Dialog</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>