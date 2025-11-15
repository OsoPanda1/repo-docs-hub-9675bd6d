import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

// Plugins institucionales TAMV y multinube (puedes modularizar)
import tamvAnalytics from "@tamv/plugins/analytics";
import tamvFederatedUi from "@tamv/plugins/federated-ui";
import tamvSeoMeta from "@tamv/plugins/seo-meta";
import tamvDocsGen from "@tamv/plugins/docs-gen";
import tamvMonitoring from "@tamv/plugins/monitoring";
import viteCompression from "vite-plugin-compression";
import { visualPreview } from "@tamv/plugins/visual-preview";

// Carga variables de entorno según modo + multinube
export default defineConfig(({ command, mode }) => {
  // Load environment (.env) with fallback
  const env = loadEnv(mode, process.cwd(), "");

  const IS_DEVELOPMENT = command === "serve" || mode === "development";
  const IS_FLAGSHIP = env.VITE_FLAGSHIP === "true";

  return {
    server: {
      host: "::",
      port: env.VITE_PORT ? Number(env.VITE_PORT) : 8080,
      strictPort: true,
      open: IS_DEVELOPMENT,
      proxy: {
        "/api": { target: env.VITE_API_URL || "https://api.tamv.online", changeOrigin: true },
        "/dashboard": { target: env.VITE_DASHBOARD_URL || "https://dashboard.tamv.online", changeOrigin: true },
      },
    },
    plugins: [
      react(),
      IS_DEVELOPMENT && componentTagger(),
      tamvAnalytics({ compliancePI: true, XRReady: IS_FLAGSHIP }),
      tamvFederatedUi({ theme: env.VITE_THEME || "luxury", nodes: env.VITE_FEDERATED_NODES?.split(",") || ["mx","us","eu"] }),
      tamvSeoMeta({
        title: "TAMV MD-X4 – Civilización Quantum",
        description: "XR | IA Ética | DreamSpaces | Compliance PI | Onboarding 3D | Crisis Monitor",
        keywords: "TAMV, IA ética, Web4, XR, PI, DreamSpaces, compliance, BookPI, onboarding, Isabella AI, crisis, publishing",
        canonical: "https://tamv.online",
        author: "Edwin Oswaldo Castillo Trejo",
        organization: "TAMV MD-X4 Quantum Team",
      }),
      tamvDocsGen({ mode, flag: IS_FLAGSHIP }),
      tamvMonitoring({ endpoint: env.VITE_MONITOR_URL || "https://monitor.tamv.network/api/logs" }),
      IS_FLAGSHIP && visualPreview({ theme: "quantum", opengl: true }),
      viteCompression(),
    ].filter(Boolean),
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "./src"),
        "@assets": path.resolve(__dirname, "./src/assets"),
        "@modules": path.resolve(__dirname, "./src/modules"),
        "@xr": path.resolve(__dirname, "./src/xr"),
      },
    },
    build: {
      outDir: "dist",
      sourcemap: true,
      assetsInlineLimit: 8192,
      chunkSizeWarningLimit: 1200,
      rollupOptions: {
        output: {
          manualChunks: {
            "vendor-react": ["react", "react-dom"],
            "tamv-xr": ["three", "@react-three/fiber", "@react-three/drei"],
            "tamv-modules": ["@tamv/plugins/federated-ui", "@tamv/plugins/monitoring"],
          },
        },
      },
      minify: "esbuild",
      brotliSize: false,
    },
    define: {
      __APP_ENV__: JSON.stringify(env.APP_ENV),
      __TAMV_FLAGSHIP__: IS_FLAGSHIP,
    },
    preview: {
      port: 5174,
      open: true,
    },
    optimizeDeps: {
      include: ["react", "three", "@tamv/plugins/federated-ui"],
      exclude: ["@tamv/core-testing"],
    },
    // Metadata institucional y PI-ready (para builds/monitor CI/CD)
    tamvMeta: {
      buildBy: "TAMV MD-X4 CI/CD",
      timestamp: Date.now(),
      compliancePI: true,
      nodes: env.VITE_FEDERATED_NODES?.split(",") || ["mx","us","eu"],
      version: env.VITE_APP_VERSION || "3.0.0",
      scope: "XR, Web4, Web5, multinube, PI, compliance, luxury, crisis, publishing, monitoring",
      flagship: IS_FLAGSHIP,
      devNotes: "Config flagship institucional, plugins premium, visualización XR y compliance PI.",
    },
  };
});
