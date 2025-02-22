<script lang="ts">
    import { SyncLoader } from 'svelte-loading-spinners';
    let { loading } = $props();
</script>

{#if loading}
    <span class="loading-indicator">
        <p>Loading</p>
        <div class="spinner-container">
            <SyncLoader size={2} color="#FF3E00" unit="rem" />
        </div>
    </span>
{/if}

<style>
    .loading-indicator {
        display: flex;
        flex-direction: row;
        flex: 1;
        font-size: 2rem;
        color: #FF3E00;

        p {
            margin-right: 1rem;
        }

        .spinner-container {
            transform: translateY(0.5rem);
        }
    }
</style>