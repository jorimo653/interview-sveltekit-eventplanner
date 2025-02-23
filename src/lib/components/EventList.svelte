<script lang="ts">
    let { events } = $props();
</script>

{#each events as event}
    <div>
        <h2 class="text-lg font-bold">{event.id}: {event.title}</h2>
        <p>{event.description}</p>
        <p>{event.date}</p>
        <div class="actions">
            <a href="/editevent/{event.id}" role="button" class="edit-button">Edit</a>
            <form method="POST" action="?/deleteevent" class="delete-button">
                <input type="hidden" name="id" value={event.id} />
                <button>Delete</button>
            </form>
        </div>
    </div>
{/each}

<style>
    .actions {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        width: 100%;

        padding: 0 1rem;
        /* width: min-content; */
        background-color: rgb(16, 15, 15);
        color: rgb(232, 222, 222);

        .edit-button {
            color: black;
            background-color: pink;
        }

        .delete-button {
            background-color: salmon;
        }
    }
</style>