<script lang="ts">
  let { title, description, date = "", eventId, posIdx } = $props();

  let isListCard = $derived(posIdx != null);
</script>

<div data-theme="light" class="card card-bordered bg-base-100 w-96 shadow-xl">
  <div class="card-body flex items-center">
    {#if isListCard}
      <h2 class="card-title">{posIdx + 1}: {title}</h2>
    {:else}
      <h2 class="card-title">{title}</h2>
    {/if}
    {#if date}
      <p>{date}</p>
    {/if}
    <p>{description}</p>
    {#if isListCard}
      <div class="card-actions flex w-full justify-evenly">
        <a
          href="/editevent/{eventId}"
          class="btn btn-outline btn-neutral flex flex-1">Edit</a
        >
        <form
          method="POST"
          action="?/deleteEvent"
          class="btn btn-outline btn-warning flex flex-1"
        >
          <input type="hidden" name="id" value={eventId} />
          <button>Delete</button>
        </form>
      </div>
    {:else}
      <div class="card-actions flex w-full">
        <a
          class="btn btn-outline btn-primary flex flex-1"
          href="/"
          role="button">Back to Home</a
        >
      </div>
    {/if}
  </div>
</div>
