import path from "path";

// eslint-disable-next-line no-undef
export default defineNuxtConfig({
  alias: {
    "@": path.resolve(__dirname, "."),
  },
  modules: [
    [
      "@pinia/nuxt",
      {
        autoImports: [["defineStore", "definePiniaStore"]],
      },
    ],
  ],
});
