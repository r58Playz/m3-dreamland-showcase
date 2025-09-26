
import type { Component } from "dreamland/core";
import { Showcase, Spinner } from ".";
import { Switch, TextFieldFilled } from "m3-dreamland";

export let TextFieldShowcase: Component<{}, {
	value: string,
	type: "text" | "password",
	placeholder: string,
	supporting: string,
	errored: boolean,
	multiline: boolean,
}> = function() {
	this.value = "";
	this.type = "text";
	this.placeholder = "Placeholder";
	this.supporting = "Supporting text";
	this.errored = false;
	this.multiline = false;

	return (
		<Showcase title="Text Field">
			<>
				<Spinner title="Type" options={["text", "password"]} option={use(this.type)} />
				<div>Errored: <Switch value={use(this.errored)} /></div>
				<div>Multiline: <Switch value={use(this.multiline)} /></div>
				<TextFieldFilled value={use(this.placeholder)} placeholder="Placeholder" />
				<TextFieldFilled value={use(this.supporting)} placeholder="Supporting text" />
			</>
			<TextFieldFilled
				value={use(this.value)}
				type={use(this.type)}
				placeholder={use(this.placeholder)}
				supporting={use(this.supporting)}
				errored={use(this.errored)}
				multiline={use(this.multiline)}
			/>
		</Showcase>
	)
}
