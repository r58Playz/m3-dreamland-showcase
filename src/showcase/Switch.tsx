
import type { Component } from "dreamland/core";
import { Showcase } from ".";
import { Switch } from "m3-dreamland";

export let SwitchShowcase: Component<{}, {
	value: boolean,
	disabled: boolean,
}> = function() {
	this.value = false;
	this.disabled = false;

	return (
		<Showcase title="Switch">
			<>
				<div>Disabled: <Switch value={use(this.disabled)} /></div>
			</>
			<Switch
				value={use(this.value)}
				disabled={use(this.disabled)}
			/>
		</Showcase>
	)
}
