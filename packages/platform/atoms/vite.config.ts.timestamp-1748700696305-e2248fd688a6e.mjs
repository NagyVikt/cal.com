// vite.config.ts
import react from "file:///home/deadpool/cal.com/node_modules/@vitejs/plugin-react-swc/index.mjs";
import path from "path";
import { resolve } from "path";
import { defineConfig, loadEnv } from "file:///home/deadpool/cal.com/node_modules/vite/dist/node/index.js";
import dts from "file:///home/deadpool/cal.com/node_modules/vite-plugin-dts/dist/index.mjs";
import Inspect from "file:///home/deadpool/cal.com/node_modules/vite-plugin-inspect/dist/index.mjs";
var __vite_injected_original_dirname = "/home/deadpool/cal.com/packages/platform/atoms";
var vite_config_default = defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), "");
  const webAppUrl = env.NEXT_PUBLIC_WEBAPP_URL ?? "https://app.cal.com";
  return {
    optimizeDeps: {
      include: [
        "@calcom/lib",
        "@calcom/features",
        "@calcom/prisma",
        "@calcom/dayjs",
        "@calcom/platform-constants",
        "@calcom/platform-types",
        "@calcom/platform-utils"
      ]
    },
    plugins: [Inspect(), react(), dts({ insertTypesEntry: true })],
    define: {
      "process.env.NEXT_PUBLIC_WEBAPP_URL": `"${webAppUrl}"`
    },
    ssr: {
      noExternal: ["turndown"]
      // Example if you want to disable SSR for your library
    },
    build: {
      commonjsOptions: {
        include: [/@calcom\/lib/, /@calcom\/features/, /node_modules/]
      },
      lib: {
        entry: [resolve(__vite_injected_original_dirname, "index.ts")],
        name: "CalAtoms",
        fileName: "cal-atoms"
      },
      rollupOptions: {
        external: ["react", "fs", "path", "os", "react-dom", "react-awesome-query-builder"],
        output: {
          globals: {
            react: "React",
            "react-dom": "ReactDOM"
          }
        }
      }
    },
    resolve: {
      alias: {
        fs: resolve("../../../node_modules/rollup-plugin-node-builtins"),
        path: resolve("../../../node_modules/rollup-plugin-node-builtins"),
        os: resolve("../../../node_modules/rollup-plugin-node-builtins"),
        "@": path.resolve(__vite_injected_original_dirname, "./src"),
        "@calcom/lib/markdownToSafeHTML": path.resolve(__vite_injected_original_dirname, "./lib/markdownToSafeHTML"),
        "@calcom/lib/hooks/useLocale": path.resolve(__vite_injected_original_dirname, "./lib/useLocale"),
        "@radix-ui/react-tooltip": path.resolve(__vite_injected_original_dirname, "./src/components/ui/tooltip.tsx"),
        "@radix-ui/react-dialog": path.resolve(__vite_injected_original_dirname, "./src/components/ui/dialog.tsx"),
        ".prisma/client": path.resolve(__vite_injected_original_dirname, "../../prisma-client"),
        "@prisma/client": path.resolve(__vite_injected_original_dirname, "../../prisma-client"),
        "@calcom/prisma": path.resolve(__vite_injected_original_dirname, "../../prisma"),
        "@calcom/dayjs": path.resolve(__vite_injected_original_dirname, "../../dayjs"),
        "@calcom/platform-constants": path.resolve(__vite_injected_original_dirname, "../constants/index.ts"),
        "@calcom/platform-types": path.resolve(__vite_injected_original_dirname, "../types/index.ts"),
        "@calcom/platform-utils": path.resolve(__vite_injected_original_dirname, "../constants/index.ts"),
        "@calcom/web/public/static/locales/en/common.json": path.resolve(
          __vite_injected_original_dirname,
          "../../../apps/web/public/static/locales/en/common.json"
        )
      }
    }
  };
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCIvaG9tZS9kZWFkcG9vbC9jYWwuY29tL3BhY2thZ2VzL3BsYXRmb3JtL2F0b21zXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCIvaG9tZS9kZWFkcG9vbC9jYWwuY29tL3BhY2thZ2VzL3BsYXRmb3JtL2F0b21zL3ZpdGUuY29uZmlnLnRzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9ob21lL2RlYWRwb29sL2NhbC5jb20vcGFja2FnZXMvcGxhdGZvcm0vYXRvbXMvdml0ZS5jb25maWcudHNcIjtpbXBvcnQgcmVhY3QgZnJvbSBcIkB2aXRlanMvcGx1Z2luLXJlYWN0LXN3Y1wiO1xuaW1wb3J0IHBhdGggZnJvbSBcInBhdGhcIjtcbmltcG9ydCB7IHJlc29sdmUgfSBmcm9tIFwicGF0aFwiO1xuaW1wb3J0IHsgZGVmaW5lQ29uZmlnLCBsb2FkRW52IH0gZnJvbSBcInZpdGVcIjtcbmltcG9ydCBkdHMgZnJvbSBcInZpdGUtcGx1Z2luLWR0c1wiO1xuaW1wb3J0IEluc3BlY3QgZnJvbSBcInZpdGUtcGx1Z2luLWluc3BlY3RcIjtcblxuZXhwb3J0IGRlZmF1bHQgZGVmaW5lQ29uZmlnKCh7IG1vZGUgfSkgPT4ge1xuICBjb25zdCBlbnYgPSBsb2FkRW52KG1vZGUsIHByb2Nlc3MuY3dkKCksIFwiXCIpOyAvLyAuZW52IGluc2lkZSBvZiBwYWNrYWdlcy9wbGF0Zm9ybS9hdG9tc1xuICBjb25zdCB3ZWJBcHBVcmwgPSBlbnYuTkVYVF9QVUJMSUNfV0VCQVBQX1VSTCA/PyBcImh0dHBzOi8vYXBwLmNhbC5jb21cIjtcbiAgcmV0dXJuIHtcbiAgICBvcHRpbWl6ZURlcHM6IHtcbiAgICAgIGluY2x1ZGU6IFtcbiAgICAgICAgXCJAY2FsY29tL2xpYlwiLFxuICAgICAgICBcIkBjYWxjb20vZmVhdHVyZXNcIixcbiAgICAgICAgXCJAY2FsY29tL3ByaXNtYVwiLFxuICAgICAgICBcIkBjYWxjb20vZGF5anNcIixcbiAgICAgICAgXCJAY2FsY29tL3BsYXRmb3JtLWNvbnN0YW50c1wiLFxuICAgICAgICBcIkBjYWxjb20vcGxhdGZvcm0tdHlwZXNcIixcbiAgICAgICAgXCJAY2FsY29tL3BsYXRmb3JtLXV0aWxzXCIsXG4gICAgICBdLFxuICAgIH0sXG4gICAgcGx1Z2luczogW0luc3BlY3QoKSwgcmVhY3QoKSwgZHRzKHsgaW5zZXJ0VHlwZXNFbnRyeTogdHJ1ZSB9KV0sXG4gICAgZGVmaW5lOiB7XG4gICAgICBcInByb2Nlc3MuZW52Lk5FWFRfUFVCTElDX1dFQkFQUF9VUkxcIjogYFwiJHt3ZWJBcHBVcmx9XCJgLFxuICAgIH0sXG4gICAgc3NyOiB7XG4gICAgICBub0V4dGVybmFsOiBbXCJ0dXJuZG93blwiXSwgLy8gRXhhbXBsZSBpZiB5b3Ugd2FudCB0byBkaXNhYmxlIFNTUiBmb3IgeW91ciBsaWJyYXJ5XG4gICAgfSxcbiAgICBidWlsZDoge1xuICAgICAgY29tbW9uanNPcHRpb25zOiB7XG4gICAgICAgIGluY2x1ZGU6IFsvQGNhbGNvbVxcL2xpYi8sIC9AY2FsY29tXFwvZmVhdHVyZXMvLCAvbm9kZV9tb2R1bGVzL10sXG4gICAgICB9LFxuICAgICAgbGliOiB7XG4gICAgICAgIGVudHJ5OiBbcmVzb2x2ZShfX2Rpcm5hbWUsIFwiaW5kZXgudHNcIildLFxuICAgICAgICBuYW1lOiBcIkNhbEF0b21zXCIsXG4gICAgICAgIGZpbGVOYW1lOiBcImNhbC1hdG9tc1wiLFxuICAgICAgfSxcbiAgICAgIHJvbGx1cE9wdGlvbnM6IHtcbiAgICAgICAgZXh0ZXJuYWw6IFtcInJlYWN0XCIsIFwiZnNcIiwgXCJwYXRoXCIsIFwib3NcIiwgXCJyZWFjdC1kb21cIiwgXCJyZWFjdC1hd2Vzb21lLXF1ZXJ5LWJ1aWxkZXJcIl0sXG4gICAgICAgIG91dHB1dDoge1xuICAgICAgICAgIGdsb2JhbHM6IHtcbiAgICAgICAgICAgIHJlYWN0OiBcIlJlYWN0XCIsXG4gICAgICAgICAgICBcInJlYWN0LWRvbVwiOiBcIlJlYWN0RE9NXCIsXG4gICAgICAgICAgfSxcbiAgICAgICAgfSxcbiAgICAgIH0sXG4gICAgfSxcbiAgICByZXNvbHZlOiB7XG4gICAgICBhbGlhczoge1xuICAgICAgICBmczogcmVzb2x2ZShcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9yb2xsdXAtcGx1Z2luLW5vZGUtYnVpbHRpbnNcIiksXG4gICAgICAgIHBhdGg6IHJlc29sdmUoXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvcm9sbHVwLXBsdWdpbi1ub2RlLWJ1aWx0aW5zXCIpLFxuICAgICAgICBvczogcmVzb2x2ZShcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9yb2xsdXAtcGx1Z2luLW5vZGUtYnVpbHRpbnNcIiksXG4gICAgICAgIFwiQFwiOiBwYXRoLnJlc29sdmUoX19kaXJuYW1lLCBcIi4vc3JjXCIpLFxuICAgICAgICBcIkBjYWxjb20vbGliL21hcmtkb3duVG9TYWZlSFRNTFwiOiBwYXRoLnJlc29sdmUoX19kaXJuYW1lLCBcIi4vbGliL21hcmtkb3duVG9TYWZlSFRNTFwiKSxcbiAgICAgICAgXCJAY2FsY29tL2xpYi9ob29rcy91c2VMb2NhbGVcIjogcGF0aC5yZXNvbHZlKF9fZGlybmFtZSwgXCIuL2xpYi91c2VMb2NhbGVcIiksXG4gICAgICAgIFwiQHJhZGl4LXVpL3JlYWN0LXRvb2x0aXBcIjogcGF0aC5yZXNvbHZlKF9fZGlybmFtZSwgXCIuL3NyYy9jb21wb25lbnRzL3VpL3Rvb2x0aXAudHN4XCIpLFxuICAgICAgICBcIkByYWRpeC11aS9yZWFjdC1kaWFsb2dcIjogcGF0aC5yZXNvbHZlKF9fZGlybmFtZSwgXCIuL3NyYy9jb21wb25lbnRzL3VpL2RpYWxvZy50c3hcIiksXG4gICAgICAgIFwiLnByaXNtYS9jbGllbnRcIjogcGF0aC5yZXNvbHZlKF9fZGlybmFtZSwgXCIuLi8uLi9wcmlzbWEtY2xpZW50XCIpLFxuICAgICAgICBcIkBwcmlzbWEvY2xpZW50XCI6IHBhdGgucmVzb2x2ZShfX2Rpcm5hbWUsIFwiLi4vLi4vcHJpc21hLWNsaWVudFwiKSxcbiAgICAgICAgXCJAY2FsY29tL3ByaXNtYVwiOiBwYXRoLnJlc29sdmUoX19kaXJuYW1lLCBcIi4uLy4uL3ByaXNtYVwiKSxcbiAgICAgICAgXCJAY2FsY29tL2RheWpzXCI6IHBhdGgucmVzb2x2ZShfX2Rpcm5hbWUsIFwiLi4vLi4vZGF5anNcIiksXG4gICAgICAgIFwiQGNhbGNvbS9wbGF0Zm9ybS1jb25zdGFudHNcIjogcGF0aC5yZXNvbHZlKF9fZGlybmFtZSwgXCIuLi9jb25zdGFudHMvaW5kZXgudHNcIiksXG4gICAgICAgIFwiQGNhbGNvbS9wbGF0Zm9ybS10eXBlc1wiOiBwYXRoLnJlc29sdmUoX19kaXJuYW1lLCBcIi4uL3R5cGVzL2luZGV4LnRzXCIpLFxuICAgICAgICBcIkBjYWxjb20vcGxhdGZvcm0tdXRpbHNcIjogcGF0aC5yZXNvbHZlKF9fZGlybmFtZSwgXCIuLi9jb25zdGFudHMvaW5kZXgudHNcIiksXG4gICAgICAgIFwiQGNhbGNvbS93ZWIvcHVibGljL3N0YXRpYy9sb2NhbGVzL2VuL2NvbW1vbi5qc29uXCI6IHBhdGgucmVzb2x2ZShcbiAgICAgICAgICBfX2Rpcm5hbWUsXG4gICAgICAgICAgXCIuLi8uLi8uLi9hcHBzL3dlYi9wdWJsaWMvc3RhdGljL2xvY2FsZXMvZW4vY29tbW9uLmpzb25cIlxuICAgICAgICApLFxuICAgICAgfSxcbiAgICB9LFxuICB9O1xufSk7XG4iXSwKICAibWFwcGluZ3MiOiAiO0FBQTRULE9BQU8sV0FBVztBQUM5VSxPQUFPLFVBQVU7QUFDakIsU0FBUyxlQUFlO0FBQ3hCLFNBQVMsY0FBYyxlQUFlO0FBQ3RDLE9BQU8sU0FBUztBQUNoQixPQUFPLGFBQWE7QUFMcEIsSUFBTSxtQ0FBbUM7QUFPekMsSUFBTyxzQkFBUSxhQUFhLENBQUMsRUFBRSxLQUFLLE1BQU07QUFDeEMsUUFBTSxNQUFNLFFBQVEsTUFBTSxRQUFRLElBQUksR0FBRyxFQUFFO0FBQzNDLFFBQU0sWUFBWSxJQUFJLDBCQUEwQjtBQUNoRCxTQUFPO0FBQUEsSUFDTCxjQUFjO0FBQUEsTUFDWixTQUFTO0FBQUEsUUFDUDtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLE1BQ0Y7QUFBQSxJQUNGO0FBQUEsSUFDQSxTQUFTLENBQUMsUUFBUSxHQUFHLE1BQU0sR0FBRyxJQUFJLEVBQUUsa0JBQWtCLEtBQUssQ0FBQyxDQUFDO0FBQUEsSUFDN0QsUUFBUTtBQUFBLE1BQ04sc0NBQXNDLElBQUksU0FBUztBQUFBLElBQ3JEO0FBQUEsSUFDQSxLQUFLO0FBQUEsTUFDSCxZQUFZLENBQUMsVUFBVTtBQUFBO0FBQUEsSUFDekI7QUFBQSxJQUNBLE9BQU87QUFBQSxNQUNMLGlCQUFpQjtBQUFBLFFBQ2YsU0FBUyxDQUFDLGdCQUFnQixxQkFBcUIsY0FBYztBQUFBLE1BQy9EO0FBQUEsTUFDQSxLQUFLO0FBQUEsUUFDSCxPQUFPLENBQUMsUUFBUSxrQ0FBVyxVQUFVLENBQUM7QUFBQSxRQUN0QyxNQUFNO0FBQUEsUUFDTixVQUFVO0FBQUEsTUFDWjtBQUFBLE1BQ0EsZUFBZTtBQUFBLFFBQ2IsVUFBVSxDQUFDLFNBQVMsTUFBTSxRQUFRLE1BQU0sYUFBYSw2QkFBNkI7QUFBQSxRQUNsRixRQUFRO0FBQUEsVUFDTixTQUFTO0FBQUEsWUFDUCxPQUFPO0FBQUEsWUFDUCxhQUFhO0FBQUEsVUFDZjtBQUFBLFFBQ0Y7QUFBQSxNQUNGO0FBQUEsSUFDRjtBQUFBLElBQ0EsU0FBUztBQUFBLE1BQ1AsT0FBTztBQUFBLFFBQ0wsSUFBSSxRQUFRLG1EQUFtRDtBQUFBLFFBQy9ELE1BQU0sUUFBUSxtREFBbUQ7QUFBQSxRQUNqRSxJQUFJLFFBQVEsbURBQW1EO0FBQUEsUUFDL0QsS0FBSyxLQUFLLFFBQVEsa0NBQVcsT0FBTztBQUFBLFFBQ3BDLGtDQUFrQyxLQUFLLFFBQVEsa0NBQVcsMEJBQTBCO0FBQUEsUUFDcEYsK0JBQStCLEtBQUssUUFBUSxrQ0FBVyxpQkFBaUI7QUFBQSxRQUN4RSwyQkFBMkIsS0FBSyxRQUFRLGtDQUFXLGlDQUFpQztBQUFBLFFBQ3BGLDBCQUEwQixLQUFLLFFBQVEsa0NBQVcsZ0NBQWdDO0FBQUEsUUFDbEYsa0JBQWtCLEtBQUssUUFBUSxrQ0FBVyxxQkFBcUI7QUFBQSxRQUMvRCxrQkFBa0IsS0FBSyxRQUFRLGtDQUFXLHFCQUFxQjtBQUFBLFFBQy9ELGtCQUFrQixLQUFLLFFBQVEsa0NBQVcsY0FBYztBQUFBLFFBQ3hELGlCQUFpQixLQUFLLFFBQVEsa0NBQVcsYUFBYTtBQUFBLFFBQ3RELDhCQUE4QixLQUFLLFFBQVEsa0NBQVcsdUJBQXVCO0FBQUEsUUFDN0UsMEJBQTBCLEtBQUssUUFBUSxrQ0FBVyxtQkFBbUI7QUFBQSxRQUNyRSwwQkFBMEIsS0FBSyxRQUFRLGtDQUFXLHVCQUF1QjtBQUFBLFFBQ3pFLG9EQUFvRCxLQUFLO0FBQUEsVUFDdkQ7QUFBQSxVQUNBO0FBQUEsUUFDRjtBQUFBLE1BQ0Y7QUFBQSxJQUNGO0FBQUEsRUFDRjtBQUNGLENBQUM7IiwKICAibmFtZXMiOiBbXQp9Cg==
