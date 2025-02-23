<script lang="ts">
  let { text = "Loading" } = $props();
</script>

<span class="loading-indicator">
  <p>{text}</p>
  <span class="loading loading-spinner loading-md"></span>
</span>

<style>
  .loading-indicator {
    display: flex;
    flex-direction: row;
    justify-content: center;
    flex: 1;
    font-size: 2rem;

    p {
      margin-right: 1rem;
    }
  }
</style>
