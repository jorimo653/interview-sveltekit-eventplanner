<script lang="ts">
  import EventList from "$lib/components/EventList.svelte";
	import type { PageData } from "./$types";

    let {data}: {data: PageData} = $props();
</script>

<h1>Welcome to SvelteKit</h1>
<p>Visit <a href="https://svelte.dev/docs/kit">svelte.dev/docs/kit</a> to read the documentation</p>

<h1 class="text-xl">Events</h1>
{#await data.events}
   <h2>Loading events...</h2> 
{:then events} 
    <EventList {events} />
{:catch error}
    <p>Failed to load events: {error.message}</p>
{/await}

<a class="btn" href="/newevent" role="button">Add Event</a>

<style>
    .actions {
        padding: 0 1rem;
        width: min-content;
        background-color: rgb(16, 15, 15);
        color: rgb(232, 222, 222);
    }
</style>