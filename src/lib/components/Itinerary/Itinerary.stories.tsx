import type { Meta, StoryObj } from '@storybook/svelte';
import { action } from '@storybook/addon-actions';

import Itinerary from './Itinerary.svelte';

const meta = {
	title: 'Components/Itinerary',
	component: Itinerary,
	excludeStories: /.*Data$/,
	tags: ['docsPage'],
	parameters: {
		layout: 'padded'
	},
	argTypes: {
		onAddItems: { action: 'onAddItems' }
	}
} satisfies Meta<Itinerary>;

export default meta;
type Story = StoryObj<typeof meta>;

export const actionsData = {
	onAddItems: action('onAddItems')
};

const Template = ({ onAddItems, ...args }) => ({
	Component: Itinerary,
	props: args,
	on: {
		...actionsData
	}
});

export const Empty: Story = Template.bind({});
Empty.args = {
	metadata: { borderClass: 'border-green-200' },
	data: {
		title: '🎯 My Itinerary',
        items: []
	}
};

export const Default: Story = {
	args: {
		metadata: { borderClass: 'border-red-200' },
		data: {
			title: '🎯 My Itinerary',
			items: ['Item 1', 'Item 2', 'Item 3', 'Item 4', 'Item 4']
		}
	}
};
