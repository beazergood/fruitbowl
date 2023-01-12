import type { Meta, StoryObj } from '@storybook/svelte';

import EventList from './EventList.svelte';

const meta = {
	title: 'Components/EventList',
	component: EventList,
	tags: ['docsPage'],
	parameters: {
		layout: 'padded'
	}
} satisfies Meta<EventList>;

export default meta;
type Story = StoryObj<typeof meta>;

const Template = ({ ...args }) => ({
	Component: EventList,
	props: args
});

export const Default: Story = {
	args: {
		data: [
			{
                id: '1',
                href:"/palmdesert2023",
				info: {
                    name: 'Palm Desert 2023',
                    emoji: '🌴',
                    startDate: '2023-02-13',
                    endDate: '2023-02-16',
				}
			},
			{
                id: '2',
                href:"/ski",
                info: {
                    name: 'Courmayeur Ski 2023',
                    emoji: '⛷️',
                    startDate: '2023-01-13',
                    endDate: '2023-01-13',
				}
			}
		]
	}
};
