/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_API_URL: string
  readonly VITE_WS_URL: string
  readonly VITE_ACCESS_PIN: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}