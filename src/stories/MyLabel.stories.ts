import { Meta, StoryObj } from "@storybook/react";
import { MyLabel } from "../components/MyLabel";

const meta = {
    title: 'UI/MyLabel',
    component: MyLabel,
    tags: ['autodocs'],
    parameters: {
        layout: 'centered',
    },
    argTypes: {
        size: {
            control: { type: 'inline-radio' },
            fontColor: { type: 'color' },
        },
    },    
} satisfies Meta<typeof MyLabel>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Basic: Story = {
    args: {
        label: 'Hello, World!',
    },
};

export const AllCaps: Story = {
    args: {
        label: 'All Caps',
        size: 'normal',
        allCaps: true,
    },
};

export const Secondary: Story = {
    args: {
        label: 'Secondary',
        size: 'normal',
        color: 'text-secondary',
    },
};

export const CustomColors: Story = {
    args: {
        label: 'Custom Colors',
        size: 'normal',
        fontColor: '#912626',
    },
};
