import type { Component } from "dreamland/core";
import { Showcase, Spinner } from ".";
import { Card, Switch } from "m3-dreamland";

export let CardShowcase: Component<{}, { variant: "elevated" | "filled" | "outlined", clickable: boolean }> = function() {
	this.clickable = false;
	this.variant = "filled";

	return (
		<Showcase title="Card">
			<>
				<Spinner title="Variant" options={["elevated", "filled", "outlined"]} option={use(this.variant)} />
				<div>Clickable: <Switch value={use(this.clickable)} /></div>
			</>
			{use(this.clickable).andThen(
				<Card on:click={() => { }} variant={use(this.variant)}>Card</Card>,
				<Card variant={use(this.variant)}>Card</Card>
			)}
		</Showcase>
	)
}
