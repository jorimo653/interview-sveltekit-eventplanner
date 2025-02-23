import { fetchAllEvents } from '$lib/server/remote-events'

export function load() {
    console.log("/editevent load called")
    return { events: fetchAllEvents() }
}

export const actions = {
    editevent: () => {
        console.log("action editevent called")
    }
}