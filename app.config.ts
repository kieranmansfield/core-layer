export default defineAppConfig({
  coreLayer: {
    // 404 Page defaults (all optional)
    notFound: {
      // Visual
      icon: 'i-lucide-file-question',
      title: 'Page Not Found',
      description: "The page you're looking for doesn't exist or has been moved.",
      showPath: true,

      // Actions
      showHomeButton: true,
      homeButtonLabel: 'Go Home',
      homeButtonTo: '/',
      showBackButton: true,
      backButtonLabel: 'Go Back',

      // Custom actions (empty by default)
      actions: [],

      // Suggestions (disabled by default)
      suggestions: {
        enabled: false,
        title: 'You might be looking for:',
        links: []
      }
    }
  },
})

declare module '@nuxt/schema' {
  interface AppConfigInput {
    coreLayer?: {
      /** Project name */
      name?: string

      /** 404 Not Found page configuration */
      notFound?: {
        // Visual
        /** Icon to display (Nuxt UI icon name) */
        icon?: string
        /** Page title */
        title?: string
        /** Description text */
        description?: string
        /** Whether to show the attempted path */
        showPath?: boolean

        // Actions
        /** Whether to show the "Go Home" button */
        showHomeButton?: boolean
        /** Label for the "Go Home" button */
        homeButtonLabel?: string
        /** Destination for the "Go Home" button */
        homeButtonTo?: string
        /** Whether to show the "Go Back" button */
        showBackButton?: boolean
        /** Label for the "Go Back" button */
        backButtonLabel?: string
        /** Custom action buttons */
        actions?: Array<{
          /** Button label */
          label: string
          /** Navigation destination (route path) */
          to?: string
          /** Button icon (Nuxt UI icon name) */
          icon?: string
          /** Button color */
          color?: 'primary' | 'neutral' | 'error' | 'success'
          /** Button variant */
          variant?: 'solid' | 'outline' | 'ghost' | 'soft'
          /** Click handler (alternative to 'to') */
          click?: () => void
        }>

        // Suggestions
        /** Suggestions section configuration */
        suggestions?: {
          /** Whether to show the suggestions section */
          enabled?: boolean
          /** Section title */
          title?: string
          /** Suggested links */
          links?: Array<{
            /** Link label */
            label: string
            /** Link destination */
            to: string
            /** Link icon (Nuxt UI icon name) */
            icon?: string
          }>
        }
      }
    }
  }
}
