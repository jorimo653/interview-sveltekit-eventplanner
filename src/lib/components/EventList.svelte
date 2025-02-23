<script lang="ts">
    let { events } = $props();
</script>

{#each events as event}
    <div>
        <h2 class="text-lg font-bold">{event.id}: {event.title}</h2>
        <p>{event.description}</p>
        <p>{event.date}</p>
        <div class="actions">
            <a href="/editevent/{event.id}">Edit</a>
        </div>
    </div>
{/each}