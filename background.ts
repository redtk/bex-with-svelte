export { }

import { Storage } from "@plasmohq/storage"

const storage = new Storage()

let isSidebarOpen = false

chrome.action.onClicked.addListener(async () => {
    isSidebarOpen = !isSidebarOpen
    await storage.set("isSidebarOpen", isSidebarOpen)
})
