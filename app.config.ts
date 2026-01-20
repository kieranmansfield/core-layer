export default defineAppConfig({
  baseLayer: {},
})

declare module '@nuxt/schema' {
  interface AppConfigInput {
    baseLayer?: {
      /** Project name */
      name?: string
    }
  }
}
