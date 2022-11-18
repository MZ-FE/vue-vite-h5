<template>
  <Icon :icon="icon" v-bind="bindAttrs" />
</template>

<script setup lang="ts">
import { computed, useAttrs } from 'vue';
import { Icon } from '@iconify/vue';

interface Props {
  /** 图标名称 */
  icon?: string;
}
defineProps<Props>();
const attrs = useAttrs();
const bindAttrs = computed<{ class: string; style: string }>(() => ({
  class: (attrs.class as string) || '',
  style: (attrs.style as string) || '',
}));
</script>

<style scoped></style>
