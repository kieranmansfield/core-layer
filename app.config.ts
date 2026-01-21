export default defineAppConfig({
  coreLayer: {},
})

declare module '@nuxt/schema' {
  interface AppConfigInput {
    coreLayer?: {
      /** Project name */
      name?: string
    }
  }
}
