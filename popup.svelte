<script lang="ts">
  import { onMount } from "svelte"

  import { Storage } from "@plasmohq/storage"

  const storage = new Storage()

  let isSidebarOpen = false

  onMount(async () => {
    await storage.set("isSidebarOpen", isSidebarOpen)
  })

  const handleClick = async () => {
    isSidebarOpen = !isSidebarOpen
    await storage.set("isSidebarOpen", isSidebarOpen)
  }
</script>

<a href={null} on:click={handleClick}>
  sidebar: {isSidebarOpen}
</a>
