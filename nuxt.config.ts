// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ['@nuxtjs/tailwindcss', '@nuxtjs/supabase'],
  hooks: {
    'components:dirs': (dirs) => {
      dirs.unshift({
        path: '~/components',
        // this is required else Nuxt will autoImport `.ts` file
        extensions: ['.vue'],
        // prefix for your components, eg: UiButton
        prefix: '',
        // prevent adding another prefix component by it's path.
        pathPrefix: false
      }),
      dirs.unshift({
        path: '~/components/ui',
        // this is required else Nuxt will autoImport `.ts` file
        extensions: ['.vue'],
        // prefix for your components, eg: UiButton
        prefix: '',
        // prevent adding another prefix component by it's path.
        pathPrefix: false
      })
    }
  },
  // This is added from supabase.nuxtjs.org because it keep giving a 404 error upon getting to the landing page.
  supabase: {
    // Options
    redirectOptions: {
      login: '/auth',
      callback: '/confirm',
      exclude: ['/'], //means it will not require authentication to get to the '/' page.
    }
  }
})
