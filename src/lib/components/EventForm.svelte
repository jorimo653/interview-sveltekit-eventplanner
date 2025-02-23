<script lang="ts">
    import { enhance } from '$app/forms';

    export type EventFormFields = {
        title: string;
        description: string;
        date: string;
    }

    export interface EventFormProps {
        submitBtnText: string;
        action?: string;
        initialFormValues?: Partial<EventFormFields>;
    }

    let { submitBtnText, action, initialFormValues }: EventFormProps = $props();
    let loading = $state(false);

    let initialValues = {
        title: initialFormValues?.title ?? '',
        description: initialFormValues?.description ?? '',
        date: initialFormValues?.description ?? ''
    };

    $effect(() => {
        console.log({initialValues});
    })
</script>

<form method="POST" {action} use:enhance={() => {
    loading = true;
    return async ({ update }) => {
        await update();
        loading = false;
    };
}}>
    <!-- form for creating new event -->
    <label for="title">Title</label>
    <input type="text" id="title" name="title" bind:value={initialValues.title} required>
    <textarea id="description" name="description" rows="4" cols="50" bind:value={initialValues.description} placeholder="Description"></textarea>
    <label for="date">Date</label>
    <input type="datetime-local" id="date" name="date" bind:value={initialValues.date} required>
    <button type="submit">{submitBtnText}</button>
</form>