<script setup>
import spec from '../docs/openapi/openapi.yaml';
console.log(spec)
</script>

<template>
  <SwaggerUI :spec="spec"/>
</template>