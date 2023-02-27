import type { Meta, StoryObj } from '@storybook/svelte';
import { action } from '@storybook/addon-actions';

import Countdown from './Countdown.svelte';

const meta = {
	title: 'Components/Countdown',
	component: Countdown,
	tags: ['docsPage'],
	parameters: {
		layout: 'padded'
	}
} satisfies Meta<Countdown>;

export default meta;
type Story = StoryObj<typeof meta>;

const Template = ({ ...args }) => ({
	Component: Countdown,
	props: args
});

export const FutureEvent: Story = {
	args: {
        data: {
            meta: { borderClass: 'border-red-500', bgClasses: 'bg-gradient-to-b from-cyan-500 to-blue-500' },
			startDate: '2024-01-13',
			endDate: '2024-01-15',
		}
	}
};
export const PastEvent: Story = {
	args: {
        data: {
            meta: { borderClass: 'border-red-500', bgClasses: 'bg-gradient-to-b from-cyan-500 to-blue-500' },
			startDate: '2023-01-13',
			endDate: '2023-01-15',
		}
	}
};
