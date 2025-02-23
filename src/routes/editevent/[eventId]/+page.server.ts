import { validateDate } from '$lib/helpers/validateDate.js';
import { fetchEventById, updateEventById,  } from '$lib/server/remote-events.js';
import type { Event } from '$lib/server/remote-events.js';
import { error, fail, redirect } from '@sveltejs/kit';
import type { Actions } from '@sveltejs/kit'

export function load({ params }) {
    const eventData = fetchEventById(+params.eventId);
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

        if (!validateDate(date)) {
            return fail(422, {
                description: data.get("date"),
                error: "Date cannot be in the past.",
            });
        }

        const { eventId } = params;
        if (!eventId) error(500);
        const updatedEvent = await updateEventById(+eventId, event);
        redirect(303, `/${updatedEvent?.id}`)
    },
} satisfies Actions;