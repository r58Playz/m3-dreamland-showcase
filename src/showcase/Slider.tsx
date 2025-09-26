
import type { Component } from "dreamland/core";
import { Showcase, Spinner } from ".";
import { Slider, Switch } from "m3-dreamland";
import type { ComponentSize } from "m3-dreamland";

export let SliderShowcase: Component<{}, {
	value: number,
	size: ComponentSize,
	ticks: boolean,
	endStop: boolean,
	disabled: boolean,
	steps: boolean,
}> = function() {
	this.value = 50;
	this.size = "s";
	this.ticks = false;
	this.endStop = false;
	this.disabled = false;
	this.steps = false;

	return (
		<Showcase title="Slider">
			<>
				<Spinner title="Size" options={["xs", "s", "m", "l", "xl"]} option={use(this.size)} />
				<div>Ticks: <Switch value={use(this.ticks)} /></div>
				<div>End Stop: <Switch value={use(this.endStop)} /></div>
				<div>Disabled: <Switch value={use(this.disabled)} /></div>
				<div>Steps: <Switch value={use(this.steps)} /></div>
			</>
			<Slider
				value={use(this.value)}
				size={use(this.size)}
				ticks={use(this.ticks)}
				endStop={use(this.endStop)}
				disabled={use(this.disabled)}
				step={use(this.steps).map(s => s ? 10 : "any")}
				indicator={n => n.toFixed(0)}
			/>
		</Showcase>
	)
}
