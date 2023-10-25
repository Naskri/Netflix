/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly SUPABASE_URL: string
  readonly SUPABSE_API_KEY: string
  readonly TMDB_API_KEY: string
  readonly TMDB_TOKEN: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
