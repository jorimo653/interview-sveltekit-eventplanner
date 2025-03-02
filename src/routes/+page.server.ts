import { fetchAllEvents, deleteEventById } from "$lib/server/remote-events";
import { error } from "@sveltejs/kit";
import type { Actions } from "@sveltejs/kit";
import type { PageServerLoad } from "./$types";

export const load: PageServerLoad = async () => {
  return { events: fetchAllEvents() };
};

export const actions = {
  deleteEvent: async ({ request }) => {
    const data = await request.formData();
    const id = data.get("id");
    if (!id) error(404);
    deleteEventById(+id);
  },
} satisfies Actions;
