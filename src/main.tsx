import "./style.css";
// @ts-expect-error
import "m3-dreamland/styles";

import { css, type Component } from "dreamland/core";
import { DynamicScheme, Hct, SchemeStyles, Variant } from "m3-dreamland";

import { CardShowcase } from "./showcase/Card";
import { ButtonShowcase } from "./showcase/Button";
import { ChipShowcase } from "./showcase/Chip";
import { LinearProgressShowcase } from "./showcase/LinearProgress";
import { LoadingIndicatorShowcase } from "./showcase/LoadingIndicator";
import { SliderShowcase } from "./showcase/Slider";
import { SwitchShowcase } from "./showcase/Switch";
import { TextFieldShowcase } from "./showcase/TextField";
import { ToggleButtonShowcase } from "./showcase/ToggleButton";

let scheme = new DynamicScheme({
	sourceColorHct: Hct.fromInt(0x00c875a1),
	contrastLevel: 0,
	specVersion: "2025",
	variant: Variant.VIBRANT,
	isDark: true,
});

export let App: Component = function() {
	return (
		<div id="app">
			<SchemeStyles scheme={scheme} motion="expressive">
				<div class="content">
					<div class="m3dl-font-display-medium">M3-Dreamland</div>
					<p>
						A Material 3 Expressive component library for <a href="https://dreamland.js.org" target="_blank">dreamland.js</a>. Inspired by m3-svelte.
					</p>
					<div class="showcase">
						<CardShowcase />
						<ButtonShowcase />
						<SwitchShowcase />
						<SliderShowcase />
						<ChipShowcase />
						<LinearProgressShowcase />
						<LoadingIndicatorShowcase />
						<TextFieldShowcase />
						<ToggleButtonShowcase />
					</div>
				</div>
			</SchemeStyles>
		</div>
	)
}
App.style = css`
	:scope > :global(.m3dl-scheme-styles) {
		font-family: var(--m3dl-font);

		height: 100%;
		width: 100%;

		overflow-y: auto;

		background: rgb(var(--m3dl-color-background));
		color: rgb(var(--m3dl-color-on-background));
		
		padding: 1em;
	}

	.content {	
		max-width: 100rem;
		margin: auto;
	}

	.showcase {
		margin-top: 1rem;

		display: grid;
		grid-template-columns: 1fr 1fr 1fr;
		gap: 2rem;
	}

	@media (max-width: 1000px) {
		.showcase {
			grid-template-columns: 1fr 1fr;
		}
	}

	@media (max-width: 600px) {
		.showcase {
			grid-template-columns: 1fr;
		}
	}
`;


document.querySelector("#app")!.replaceWith(<App />);
