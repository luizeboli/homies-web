declare module "process" {
  global {
    namespace NodeJS {
      interface ProcessEnv {
        NEXT_PUBLIC_API_URL: string;
        NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY: string;
      }
    }
  }
}
