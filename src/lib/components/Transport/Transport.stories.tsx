import type { Meta, StoryObj } from '@storybook/svelte';
import { action } from '@storybook/addon-actions';

import Transport from './Transport.svelte';

const meta = {
	title: 'Components/Transport',
	component: Transport,
	excludeStories: /.*Data$/,
	tags: ['docsPage'],
	parameters: {
		layout: 'padded'
	},
	argTypes: {
		onAddItems: { action: 'onAddItems' }
	}
} satisfies Meta<Transport>;

export default meta;
type Story = StoryObj<typeof meta>;

export const actionsData = {
	onAddTransport: action('onAddTransport')
};

const Template = ({ ...args }) => ({
	Component: Transport,
	props: args,
    on: {
		...actionsData
	}
});

export const Empty: Story = Template.bind({});
Empty.args = {
    showTransportForm: true,
    data:{
        title: '✈️ Transport',
        meta: {
            borderClass: '',
            bgClasses: 'bg-white/90',
        }
    }
};

export const Default: Story = Template.bind({});
Default.args = {
    data:{
        eventId: '123',
        title: '✈️ Transport',
        meta: {
            borderClass: 'border-2',
        },
        outbound: {
            from:{
                date: '2021-01-01',
                time: '12:00',
                airport: 'LHR',
                flight: 'BA123'
            },
            to:{
                date: '2021-01-01',
                time: '14:00',
                airport: 'LAX'
            }
        },
        inbound: {
            from:{
                date: '2021-10-01',
                time: '19:00',
                airport: 'LAX',
                flight: 'BA124'
            },
            to:{
                date: '2021-11-01',
                time: '12:00',
                airport: 'LHR'
            }
        },
    }
};
