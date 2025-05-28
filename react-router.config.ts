import type { Config } from "@react-router/dev/config";

export default {
  future: { unstable_middleware: true, unstable_optimizeDeps: true },
  ssr: true,
} satisfies Config;
