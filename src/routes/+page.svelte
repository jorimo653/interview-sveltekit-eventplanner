<script lang="ts">
    import AppHero from "$lib/components/AppHero.svelte";
    import EventList from "$lib/components/EventList.svelte";
    import LoadingIndicator from "$lib/components/LoadingIndicator.svelte";
	import type { PageData } from "./$types";

    let { data }: { data: PageData } = $props();
</script>

<AppHero />
<main class="px-10 py-6">
    {#await data.events}
        <LoadingIndicator />
    {:then events} 
        <EventList {events} />
    {:catch error}
        <p>Failed to load events: {error.message}</p>
    {/await}
</main>