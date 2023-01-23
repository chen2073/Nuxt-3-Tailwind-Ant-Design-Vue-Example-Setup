export default defineNuxtConfig({
  routeRules: {
    '/': { ssr: true }, 
    // '/about': { ssr: true },
    '/api/**': { cors: true },
  },
  css: ['~/assets/css/main.css'],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  plugins:['@/plugins/antd'],
})
