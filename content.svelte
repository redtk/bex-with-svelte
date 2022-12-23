<script lang="ts">
  import type { PlasmoCSUIAnchor, PlasmoGetOverlayAnchor } from "plasmo"

  import { Storage } from "@plasmohq/storage"

  import BexHome from "~components/BexHome.svelte"

  // Props
  // svelte-ignore unused-export-let
  export let anchor: PlasmoCSUIAnchor

  // Other declarations
  export const getOverlayAnchor: PlasmoGetOverlayAnchor = async () => {
    return document.querySelector("body")
  }

  const storage = new Storage()

  let isSidebarOpen = ""

  storage.watch({
    isSidebarOpen: (value) => {
      isSidebarOpen = value.newValue
    }
  })
</script>

{#if isSidebarOpen}
  <BexHome />
{/if}
