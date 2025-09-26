
import type { Component } from "dreamland/core";
import { Showcase } from ".";
import { LinearProgress, Slider } from "m3-dreamland";

export let LinearProgressShowcase: Component<{}, {
	progress: number,
	thickness: number,
}> = function() {
	this.progress = 50;
	this.thickness = 8;

	return (
		<Showcase title="Linear Progress">
			<>
				<div>Progress: <Slider value={use(this.progress)} indicator={n => n.toFixed(0) + "%"} /></div>
				<div>Thickness: <Slider value={use(this.thickness)} min={4} max={20} indicator={n => n.toFixed(0) + "px"} /></div>
			</>
			<LinearProgress
				progress={use(this.progress)}
				thickness={use(this.thickness)}
			/>
		</Showcase>
	)
}
