<script lang="ts">
    import EventForm from "$lib/components/EventForm.svelte";
    import { enhance } from '$app/forms';
    import type { Event } from "$lib/server/remote-events.js";
    import LoadingIndicator from "$lib/components/LoadingIndicator.svelte";

    let { data, form } = $props();
    let submitBtnText = 'Save Changes';
    
    let loading = $state(false);

    let initialFormValues: Partial<Omit<Event, 'id'>> = $state({ title: "", description: "", date: "" });

    $effect(() => {
        data.eventData.then((values) => {
            initialFormValues = { ...values };
        });
    });
</script>

{#if form?.error}
    <p>{form.error}</p>
{/if}

{#if loading}
    <LoadingIndicator {loading} />
{:else} 
    <!-- todo: reintroduce eventform component -->
    <form method="POST" use:enhance={() => {
        loading = true;
        return async ({ update }) => {
            await update();
            loading = false;
        };
    }}>
        <!-- form for creating new event -->
        <label for="title">Title</label>
        <input type="text" id="title" name="title" bind:value={initialFormValues.title} required>
        <textarea id="description" name="description" rows="4" cols="50" bind:value={initialFormValues.description} placeholder="Description"></textarea>
        <label for="date">Date</label>
        <input type="datetime-local" id="date" name="date" bind:value={initialFormValues.date} required>
        <button type="submit">{submitBtnText}</button>
    </form>
{/if}