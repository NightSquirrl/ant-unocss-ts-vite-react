/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_LOGO_NAME: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}

declare namespace JSX {
  interface IntrinsicElements {
    "spline-viewer": React.DetailedHTMLProps<any>;
  }
}
