import type { Meta, StoryObj } from '@storybook/svelte';

import Sidebar from './Sidebar.svelte';

const meta = {
	title: 'Components/Sidebar',
	component: Sidebar,
	excludeStories: /.*Data$/,
	tags: ['docsPage'],
	parameters: {
		layout: 'padded'
	},
	argTypes: {
		onAddItems: { action: 'onAddItems' }
	}
} satisfies Meta<Sidebar>;

export default meta;
type Story = StoryObj<typeof meta>;

const Template = ({ ...args }) => ({
	Component: Sidebar,
	props: args
});

export const Default: Story = Template.bind({});
Default.args = {};
