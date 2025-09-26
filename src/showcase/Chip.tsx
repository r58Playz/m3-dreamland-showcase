
import type { Component } from "dreamland/core";
import { Showcase, Spinner } from ".";
import { Chip, Switch } from "m3-dreamland";
import type { ChipVariant } from "m3-dreamland";

export let ChipShowcase: Component<{}, {
	variant: ChipVariant,
	elevated: boolean,
	value: boolean,
	disabled: boolean,
}> = function() {
	this.variant = "assist";
	this.elevated = false;
	this.value = false;
	this.disabled = false;

	return (
		<Showcase title="Chip">
			<>
				<Spinner title="Variant" options={["input", "assist", "filter", "suggestion"]} option={use(this.variant)} />
				<div>Elevated: <Switch value={use(this.elevated)} /></div>
				<div>Selected: <Switch value={use(this.value)} /></div>
				<div>Disabled: <Switch value={use(this.disabled)} /></div>
			</>
			<div>
				<Chip
					variant={use(this.variant)}
					elevated={use(this.elevated)}
					value={use(this.value)}
					disabled={use(this.disabled)}
					on:click={() => this.value = !this.value}
				>
					Chip
				</Chip>
			</div>
		</Showcase>
	)
}
