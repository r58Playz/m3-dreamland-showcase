
import type { Component } from "dreamland/core";
import { Showcase, Spinner } from ".";
import { Button, Switch } from "m3-dreamland";
import type { ButtonIcon, ButtonVariant, ComponentSize } from "m3-dreamland";

export let ButtonShowcase: Component<{}, {
	variant: ButtonVariant,
	size: ComponentSize,
	shape: "round" | "square",
	icon: ButtonIcon,
	disabled: boolean,
}> = function() {
	this.variant = "filled";
	this.size = "s";
	this.shape = "round";
	this.icon = "left";
	this.disabled = false;

	return (
		<Showcase title="Button">
			<>
				<Spinner title="Variant" options={["elevated", "filled", "tonal", "outlined", "text"]} option={use(this.variant)} />
				<Spinner title="Size" options={["xs", "s", "m", "l", "xl"]} option={use(this.size)} />
				<Spinner title="Shape" options={["round", "square"]} option={use(this.shape)} />
				<div>Disabled: <Switch value={use(this.disabled)} /></div>
			</>
			<Button
				variant={use(this.variant)}
				size={use(this.size)}
				shape={use(this.shape)}
				icon={use(this.icon)}
				disabled={use(this.disabled)}
			>
				Button
			</Button>
		</Showcase>
	)
}
