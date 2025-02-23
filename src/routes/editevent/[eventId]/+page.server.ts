import { goto } from '$app/navigation';
import { fetchEventById, updateEventById,  } from '$lib/server/remote-events.js';
import type { Event } from '$lib/server/remote-events.js';
import type { Actions } from '@sveltejs/kit';

export function load({ params }) {
    const eventData = fetchEventById(+params.eventId);
    console.log({eventData})
    return { eventData };
}

export const actions = {
    default: async ({ request, params }) => {
        const data = await request.formData();
        const event: Partial<Event> = {};
        const title = data.get("title") as string;
        const description = data.get("description") as string;
        const date = data.get("date") as string;
        
        if (title) event.title = title;
        if (description) event.description = description;
        if (date) event.date = date;

        const { eventId } = params;
        if (eventId) {
            updateEventById(+eventId, event).then(() => {
                // todo - this doesn't work
                goto("/");
            })
        }
    },
} satisfies Actions;