<script lang="ts">
  import EventForm from "$lib/components/EventForm";
  import LoadingIndicator from "$lib/components/LoadingIndicator";
  import ErrorAlert from "$lib/components/ErrorAlert";

  let { data, form } = $props();
</script>

{#if form?.error}
  <ErrorAlert message={form.error} />
{/if}

{#await data.eventData}
  <LoadingIndicator />
{:then initialFormValues}
  <EventForm
    submitBtnText="Save Changes"
    loadingText="Saving changes"
    {initialFormValues}
  />
{/await}
