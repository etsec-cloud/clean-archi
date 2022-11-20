import path from "path";

// eslint-disable-next-line no-undef
export default defineNuxtConfig({
  alias: {
    "@": path.resolve(__dirname, "."),
  },
  modules: [
    "formidable",
    [
      "@pinia/nuxt",
      {
        autoImports: [["defineStore", "definePiniaStore"]],
      },
    ],
  ],
});
