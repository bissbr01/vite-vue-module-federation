/// <reference types="vite/client" />

declare module '*.vue' {
  import type { DefineComponent } from 'vue'
  const component: DefineComponent<{}, {}, any>
  export default component
}

declare module '*.md' {
  import type { ComponentOptions } from 'vue'
  const Component: ComponentOptions
  export default Component
}

// Here we would import a *.d.ts that the modules would supply to get the proper types
declare module "remote-retailing/*" { }
declare module "remote-inventory/*" { }
