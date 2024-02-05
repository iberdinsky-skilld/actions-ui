<script setup>
import "@shoelace-style/shoelace"
import '@shoelace-style/shoelace/dist/themes/light.css';
import '~/assets/styles.css'

const drawerIsOpen = ref(false);
const actions = ref([]);
const actionsQuery = await queryContent('/').where({ title: 'Action' }).find();
actions.value = actionsQuery;

const { afterEach } = useRouter()

afterEach(() => {
  drawerIsOpen.value = false
})


</script>
<template>
  <NuxtLayout>
    <sl-drawer label="Actions" placement="start" class="drawer-placement-start" :open="drawerIsOpen"
      :onSlAfterHide="() => drawerIsOpen = false">

      <sl-menu>
        <sl-menu-item v-for="link of actions" @click="navigateTo(link._path)">
          {{ link?.action?.title }}
        </sl-menu-item>
      </sl-menu>


      <div slot="footer">
        <sl-button variant="primary" @click=" drawerIsOpen = false">Close</sl-button>
      </div>
    </sl-drawer>

    <header class="header">
      <sl-button class="main-menu" variant="primary" size="large" @click=" drawerIsOpen = true">Components list</sl-button>
    </header>

    <NuxtPage></NuxtPage>

  </NuxtLayout>
</template>
