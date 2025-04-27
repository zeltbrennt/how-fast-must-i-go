<script lang="ts">
    import Input from "./Input.svelte";
    import { hoursToString } from "./util";

    let currentDist = $state<number>(50);
    let currentAvgSpeed = $state<number>(20);
    let desiredAvgSpeed = $state<number>(30);
    let targetDistance = $state<number>(100);
    let targetTime = $derived(targetDistance / desiredAvgSpeed);
    let currentTime = $derived(currentDist / currentAvgSpeed);
    let remainingDistance = $derived(targetDistance - currentDist);
    let remainingTime = $derived(
        targetDistance / desiredAvgSpeed - currentTime
    );
    let speedNeeded = $derived(remainingDistance / remainingTime);
</script>

<main>
    <div class="hero">
        <div class="hero-content text-center">
            <div class="max-w-md flex flex-col">
                <h1 class="text-5xl py-6">How fast must I go?</h1>

                <Input
                    label="Current Distance"
                    unit="km"
                    id="currentDist"
                    bind:value={currentDist}
                />
                <Input
                    label="Current Average Speed"
                    unit="km/h"
                    id="currentAvgSpeed"
                    bind:value={currentAvgSpeed}
                />
                <div class="py-4"></div>
                <Input
                    label="Target Distance"
                    unit="km"
                    id="targetDistance"
                    bind:value={targetDistance}
                />
                <Input
                    label="Target Average Speed"
                    unit="km/h"
                    id="desiredAvgSpeed"
                    bind:value={desiredAvgSpeed}
                />
                <p class="text my-10">
                    <span class="text-3xl">
                        {speedNeeded.toFixed(1)} km/h
                    </span>
                </p>
                <div class="divider">WHY?</div>
                <p>
                    To average {desiredAvgSpeed} km/h on a {targetDistance} km tour,
                    you need to finish the tour in {hoursToString(targetTime)}.
                    After riding on average {currentAvgSpeed}
                    km/h for {currentDist} km means, you have been on tour for
                    {hoursToString(currentTime)}. That leaves {hoursToString(
                        remainingTime
                    )} to finish the remaining {remainingDistance} km.
                </p>
            </div>
        </div>
    </div>
</main>
