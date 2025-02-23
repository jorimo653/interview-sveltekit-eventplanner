<script lang="ts">
  import { enhance } from "$app/forms";
  import LoadingIndicator from "../LoadingIndicator.svelte";

  const {
    submitBtnText = "",
    initialFormValues = {
      title: "",
      description: "",
      date: "",
    },
    loadingText = "Loading",
  } = $props();

  let loading = $state(false);
</script>

<form
  class="shadow-md join join-vertical gap-4 flex px-[20rem] py-[5rem]"
  method="POST"
  use:enhance={() => {
    loading = true;
    return async ({ update }) => {
      await update();
      loading = false;
    };
  }}
>
  <label for="title">Title</label>
  <input
    type="text"
    id="title"
    name="title"
    class="input input-bordered w-full join-item"
    bind:value={initialFormValues.title}
    data-testid="event-input-title"
    required
  />
  <textarea
    id="description"
    class="textarea textarea-info join-item w-full"
    name="description"
    rows="4"
    cols="50"
    placeholder="Description"
    data-testid="event-input-description"
    bind:value={initialFormValues.description}
  ></textarea>
  <label for="date">Date</label>
  <input
    type="datetime-local"
    id="date"
    name="date"
    class="input input-bordered w-full join-item"
    bind:value={initialFormValues.date}
    data-testid="event-input-date"
    required
  />
  <button
    class="btn btn-accent w-full join-item"
    type="submit"
    data-testid="event-submit-btn">{submitBtnText}</button
  >
</form>

{#if loading}
  <LoadingIndicator text={loadingText} />
{/if}
