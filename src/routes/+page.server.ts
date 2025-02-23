import { fetchAllEvents, deleteEventById, createEvent } from '$lib/server/remote-events';
import { error, fail, redirect, type Actions } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async () => {
    return { events: fetchAllEvents() }
};

const validateDate = (date: string): boolean => {
    return new Date(date) >= new Date();
}

export const actions = {
    deleteevent: async ({ request }) => {
        const data = await request.formData();
        const id = data.get('id');
        if (!id) error(404);
        deleteEventById(+id);
    },

    default: async ({ request }) => {
        const formdata = await request.formData();
        const title = formdata.get('title')?.toString();
        const description = formdata.get('description')?.toString();
        const date = formdata.get('date')?.toString();
        if (!title || !date) {
            error(400, 'Title and Date are required');
        }

        if (!validateDate(date)) {
            return fail(422, {
                description: formdata.get("date"),
                error: "Date cannot be in the past.",
            });
        }
        const newEvent = await createEvent({title, description, date});
        redirect(303, `/${newEvent.id}`);
    }
} satisfies Actions;

