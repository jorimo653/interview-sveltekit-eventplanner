<script lang="ts">
    import LoadingIndicator from '$lib/components/LoadingIndicator.svelte';
    import { enhance } from '$app/forms';

    let creatingEvent = $state(false);
    let { form } = $props();
</script>

<LoadingIndicator loading={creatingEvent} />

{#if form?.error}
    <p>{form.error}</p>
{/if}

<form method="POST" use:enhance={() => {
    creatingEvent = true;
    return async ({ update }) => {
        await update();
        creatingEvent = false;
    };
}}>
    <!-- form for creating new event -->
    <label for="title">Title</label>
    <input type="text" id="title" name="title" required>
    <textarea id="description" name="description" rows="4" cols="50" placeholder="Description"></textarea>
    <label for="date">Date</label>
    <input type="datetime-local" id="date" name="date" required>
    <button type="submit">Create Event</button>
</form>