<script lang="ts">
    let { label, unit, id, value = $bindable() } = $props();
</script>

<label class="label" for={id}>{label}</label>
<label class="input my-1 w-full">
    <span class="label">{unit}</span>
    <input {id} type="number" bind:value />
</label>
