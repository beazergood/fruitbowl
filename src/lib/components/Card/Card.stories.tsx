import type { Meta, StoryObj } from '@storybook/svelte';

import CardView from './CardView.svelte';

const meta = {
	title: 'Components/Card',
	component: CardView,
	tags: ['docsPage'],
	parameters: {
		layout: 'padded'
	}
} satisfies Meta<CardView>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Example: Story = {
	args: {
        meta: {borderClass: 'border-red-200'},
	}
};



