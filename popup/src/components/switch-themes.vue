<template>
  <div>
    <el-switch
      v-model="isDark"
      active-icon="Moon"
      inactive-icon="Sunny"
    />
  </div>
</template>

<script lang="ts">
export default {
  name: 'SdSwitchThemes',
};
</script>

<script setup lang="ts">
import { useDark } from '@vueuse/core';

const isDark = useDark();
</script>
