
import type { Component } from "dreamland/core";
import { Showcase } from ".";
import { LoadingIndicator, Slider, Switch } from "m3-dreamland";

export let LoadingIndicatorShowcase: Component<{}, {
	size: number,
	container: boolean,
	center: boolean,
}> = function() {
	this.size = 48;
	this.container = false;
	this.center = false;

	return (
		<Showcase title="Loading Indicator">
			<>
				<div>Size: <Slider value={use(this.size)} min={12} max={96} indicator={n => n.toFixed(0) + "px"} /></div>
				<div>Container: <Switch value={use(this.container)} /></div>
				<div>Center: <Switch value={use(this.center)} /></div>
			</>
			<LoadingIndicator
				size={use(this.size)}
				container={use(this.container)}
				center={use(this.center)}
			/>
		</Showcase>
	)
}
