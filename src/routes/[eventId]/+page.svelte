<script lang="ts">
	import EventCard from "$lib/components/EventCard.svelte";
    import type { PageData } from "./$types";

    let {data}: {data: PageData} = $props();
</script>


<div class="h-[100vh] flex justify-center items-center">
    {#if data.event}
        <EventCard
            title={data.event.title}
            description={data.event.description}
            date={data.event.date}
            eventId={data.event.id}
            posIdx={null}
        />
    {/if}
</div>
