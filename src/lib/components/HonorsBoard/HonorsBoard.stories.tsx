import type { Meta, StoryObj } from '@storybook/svelte';
import { action } from '@storybook/addon-actions';

import HonorsBoard from './HonorsBoard.svelte';

const meta = {
	title: 'Components/HonorsBoard',
	component: HonorsBoard,
	excludeStories: /.*Data$/,
	tags: ['docsPage'],
	parameters: {
		layout: 'padded'
	},
	argTypes: {
		onAddItems: { action: 'onAddItems' }
	}
} satisfies Meta<HonorsBoard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const actionsData = {
	onAddItems: action('onAddItems')
};

const Template = ({ onAddItems, ...args }) => ({
	Component: HonorsBoard,
	props: args,
	on: {
		...actionsData
	}
});

export const Default: Story = Template.bind({});
Default.args = {
	data: {
		title: '🏆 Past Champions',
		items: [
            {
                emoji: '🍇',
                team: 'Marionberry',
                year: 2019,
                venue: 'Ventura County, CA'
            },
            {
                emoji: '🥑',
                team: 'Avocado',
                year: 2020,
                venue: 'Palm Springs, CA'
            },
            {
                emoji: '🍊',
                team: 'Sumo Citrus',
                year: 2021,
                venue: 'Bend, OR'
            },
            {
                emoji: '🦠',
                team:'Not Played',
                year: 2022,
                venue: 'Pandemic'
            },
            {
                emoji: '🍇',
                team: 'Marionberry',
                year: 2023,
                venue: 'Palm Desert, CA'
            }
        ]
	}
};
