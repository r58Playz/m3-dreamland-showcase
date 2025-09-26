import { css, type Component, type ComponentChild } from "dreamland/core";
import { Button, Card, Icon } from "m3-dreamland";
import arrowLeft from "@ktibow/iconset-material-symbols/keyboard-arrow-left";
import arrowRight from "@ktibow/iconset-material-symbols/keyboard-arrow-right";

export let Spinner: Component<{ title: string,  options: any[], option: any }> = function() {
	let click = (delta: number) => () => {
		let idx = this.options.findIndex(x => x === this.option);
		idx += delta + this.options.length;
		idx %= this.options.length;
		this.option = this.options[idx];
	}

	return (
		<div>
			{this.title}:
			<Button variant="tonal" on:click={click(-1)} icon="full"><Icon icon={arrowLeft} /></Button>
			{use(this.option)}
			<Button variant="tonal" on:click={click(1)} icon="full"><Icon icon={arrowRight} /></Button>
		</div>
	)
}

export let Showcase: Component<{ title: string, children: ComponentChild[] }> = function(cx) {
	return (
		<div>
			<Card variant="elevated">
				<div class="m3dl-font-headline-medium title">{this.title}</div>
				<div class="twiddles">
					{cx.children[0]}
				</div>
			</Card>
			{cx.children[1]}
		</div>
	)
}
Showcase.style = css`
	:scope {
		display: flex;
		flex-direction: column;
		gap: 1rem;
	}

	.twiddles {
		display: flex;
		flex-direction: column;
		gap: 0.5rem;
	}

	.twiddles > :global(*) {
		display: flex;
		gap: 0.5rem;
		align-items: center;
	}
	.twiddles > :global(div > .m3dl-slider) {
		flex: 1;
	}
	
	.title { margin-bottom: 0.5rem; }
`;
