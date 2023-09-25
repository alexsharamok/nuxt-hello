import manifest from "./lib/uniform/contextManifest.json";
import { ManifestV2 } from "@uniformdev/context";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  css: ["~/styles/global.css"],
  modules: ["@uniformdev/uniform-nuxt", "nuxt-security"],
  security: {
    headers: {
      crossOriginEmbedderPolicy: 'credentialless',
      contentSecurityPolicy: {
        'frame-ancestors': ["'self' https://uniform.app"],
      },      
    }
  },
  uniform: {
    projectId: process.env.UNIFORM_PROJECT_ID,
    readOnlyApiKey: process.env.UNIFORM_API_KEY,
    apiHost: process.env.UNIFORM_CLI_BASE_URL,
    edgeApiHost: process.env.UNIFORM_CLI_BASE_EDGE_URL,
    manifest: manifest as ManifestV2,
    defaultConsent: true,
    outputType: "standard",
  },
});
