<script lang="ts">
  import EventList from "$lib/components/EventList.svelte";

    let { data } = $props();
</script>

<h2>Wait a minute, you're not supposed to be here.</h2>

{#await data.events}
    <p>Loading...</p>
{:then events} 
    <EventList {events} />
{/await}

