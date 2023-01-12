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
	data: {
		title: '🎯 My Itinerary',
		meta: { borderClass: 'border-green-200', bgClasses: 'bg-white/90' },
        items: []
	}
};

export const Default: Story = {
	args: {
		data: {
			title: '🎯 My Itinerary',
			meta: { borderClass: 'border-red-200', bgClasses: 'bg-white/90' },
			items: ['Item 1', 'Item 2', 'Item 3', 'Item 4', 'Item 4']
		}
	}
};
