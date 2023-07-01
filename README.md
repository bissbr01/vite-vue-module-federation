# Micro Frontend POC

New to micro frontends?  [Here is a great article intro,](https://micro-frontends.org/)  [ or here is a video.](https://www.youtube.com/watch?v=xHSeFDT9W_Q)

This POC demonstrates some of the capabilities of [`vite`](https://vitejs.dev/) and module federation to orchestrate micro frontend vue apps.  It leverages [vite-plugin-federation](https://single-spa.js.org/docs/getting-started-overview#architectural-overview) with 1 host app and 2 remote apps.

## Architecture

This monorepo contains 3 projects:
1. host-layout: 
    - vue app responsible for routing and layout for other micro frontends
    - imports: 
        - remote-inventory: `Inventory`
        - remote-retailing: `BuyNow`, `Cart`
2. remote-inventory: 
    - vue app that fetches from an API and displays 10 cards. 
    - imports: 
        - remote-retailing's `BuyNow` button.
    - exports: `Inventory`
3. remote-retailing: 
    - vue app that uses pinia store to track shoping cart.  Clicking `BuyNow` button adds item to `Cart`. 
    - exports: `BuyNow`, `Cart`

At the root of each of these projects you will find `vite.config.ts`.  Within, you can find the code for configuring the module federation.

Let's look first at the host app's config: 
```ts
federation({
      name: 'host-app',
      remotes: {
        'remote-retailing': "http://localhost:5001/assets/remoteEntry.js",
        'remote-inventory': "http://localhost:5002/assets/remoteEntry.js",
      },
      shared: ['vue', 'pinia']
    })
```
`host-layout` app connects to two remotes: `remote-retailing` and `remote-inventory`. While those projects have their own unique dependencies that are compiled with the project at build time, two larger libraries (`vue` and `pinia`) are fetched when `host-layout` is loaded and shared between the projects so as not to load 2 or 3 duplicate libraries in the browser.  

When the browser loads `host-layout`, the app fetches the two remotes and asynchrously imports the modules it requests from those remotes.  This happens in `host-layout`'s `main.ts` here:
```ts
const BuyNow = defineAsyncComponent(() => import("remote-retailing/BuyNow"));
const Cart = defineAsyncComponent(() => import("remote-retailing/Cart"));
const Inventory = defineAsyncComponent(() => import("remote-inventory/Inventory"))
```

Each of the two remotes export their modules using a config in their project's root dir's `vite.config.ts`.  For example, in `remote-retailing`:
```ts
federation({
      name: 'remote-retailing',
      filename: 'remoteEntry.js',
      exposes: {
        './BuyNow': './src/components/BuyNow.vue',
        './Cart': './src/components/Cart.vue',
      },
      shared: ['vue', 'pinia']
    })
```

## Setup

This project uses `pnpm`.  If needed, [setup steps are here.](https://pnpm.io/installation)

Clone the repo, `cd` to root dir of repo, then run:
```bash
pnpm install
```
Then build and serve the 3 apps by running:
```bash
pnpm restart
```
Then open a browser to http://localhost:5000/#/ so see the app.

## Commands 
```bash
pnpm build        # build all projects
pnpm serve        # serve all projects
pnpm restart      # stop, rebuild, and serve all projects
pnpm dev:hosts    # serve host on vite dev server (hmr enabled)
```
*** While each project can be run with `pnpm dev` to run on `vite`'s dev server, a host can only import modules from a remote if the remote has been built and served for production (`pnpm build & pnpm preview`).