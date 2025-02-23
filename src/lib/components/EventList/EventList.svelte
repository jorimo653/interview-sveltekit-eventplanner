<script lang="ts">
  import EventCard from "../EventCard";

  let { events } = $props();
</script>

<div class="grid lg:grid-cols-3 gap-8">
  {#each events as event, posIdx}
    <EventCard
      title={event.title}
      description={event.description}
      eventId={event.id}
      {posIdx}
    />
  {/each}
</div>
