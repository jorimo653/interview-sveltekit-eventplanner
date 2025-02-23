import { fetchAllEvents } from "$lib/server/remote-events";

export function load() {
  return { events: fetchAllEvents() };
}
