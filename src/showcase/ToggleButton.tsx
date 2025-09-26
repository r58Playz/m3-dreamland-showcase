
import type { Component } from "dreamland/core";
import { Showcase, Spinner } from ".";
import { Switch, ToggleButton } from "m3-dreamland";
import type { ButtonIcon, ComponentSize, ToggleButtonVariant } from "m3-dreamland";

export let ToggleButtonShowcase: Component<{}, {
	value: boolean,
	variant: ToggleButtonVariant,
	size: ComponentSize,
	icon: ButtonIcon,
	disabled: boolean,
}> = function() {
	this.value = false;
	this.variant = "filled";
	this.size = "s";
	this.icon = "left";
	this.disabled = false;

	return (
		<Showcase title="Toggle Button">
			<>
				<Spinner title="Variant" options={["elevated", "filled", "tonal", "outlined"]} option={use(this.variant)} />
				<Spinner title="Size" options={["xs", "s", "m", "l", "xl"]} option={use(this.size)} />
				<div>Disabled: <Switch value={use(this.disabled)} /></div>
			</>
			<ToggleButton
				value={use(this.value)}
				variant={use(this.variant)}
				size={use(this.size)}
				icon={use(this.icon)}
				disabled={use(this.disabled)}
			>
				Toggle Button
			</ToggleButton>
		</Showcase>
	)
}
