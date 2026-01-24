<!-- <script setup lang="ts">
const appConfig = useAppConfig()
const coreLayer = appConfig.coreLayer as { name?: string } | undefined

useSeoMeta({
  title: coreLayer?.name || 'Core Layer',
  description: 'Foundation layer for Nuxt applications',
})
</script> -->

<template>
  <div class="flex min-h-screen items-center justify-center p-4">
    <UContainer>
      <div class="mx-auto max-w-2xl text-center">
        <UEmpty
          icon="i-lucide-layers"
          title="Core Layer"
          description="Foundation layer successfully loaded. This is a placeholder page - projects extending this layer should create their own pages/index.vue."
          size="xl"
        />
      </div>
    </UContainer>
  </div>
</template>
