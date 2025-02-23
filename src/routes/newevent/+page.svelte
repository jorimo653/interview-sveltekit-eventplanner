<script lang="ts">
    import EventForm from '$lib/components/EventForm.svelte';
    import ErrorAlert from '$lib/components/ErrorAlert.svelte';

    let { form } = $props();
</script>

{#if form?.error}
    <ErrorAlert message={form.error} />
{/if}

<EventForm submitBtnText="Create Event" loadingText="Creating event" />
