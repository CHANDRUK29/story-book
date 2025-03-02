import Stack from "../components/Stack";


export default {
    title: 'components/Stack',
    component: Stack,
    /**
     *  argTypes is used to define and control the arguments (or props) that can be passed 
     * to your components in the Storybook UI. It allows you to define how the component's 
     * props should be controlled, validated, and displayed in the Storybook interface. 
     * This is useful for creating interactive documentation and providing better control
     *  over how users can interact with the components within Storybook.
     */
    argTypes: {
        numberOfChildren: { type: "number", defaultValue: 4 }
    }
}

// defining the template and respective args for button  component
const Template = ({ numberOfChildren, ...args }) => (
    <Stack {...args}>
        {[...Array(numberOfChildren).keys()].map(n => (
            <div
                style={{
                    width: '50px', height: '50px', backgroundColor: 'purple',
                    display: 'flex', justifyContent: 'center', alignItems: "center"
                }}>
                {n + 1}
            </div>
        ))}
    </Stack>
)

// binding the Stack component and creating different stories based on our use case
export const Default = Template.bind({})
Default.args = {
    numberOfChildren:4,
    direction: 'row',
    spacing: 2,
    wrap: false
}
export const Horizontal = Template.bind({})
Horizontal.args = {
    numberOfChildren:10,
    direction: 'row',
    spacing: 2,
    wrap: true
}
export const Vertical = Template.bind({})
Vertical.args = {
    numberOfChildren:10,
    direction: 'column',
    spacing: 2,
    wrap: true
}
export const NoSpacing = Template.bind({})
NoSpacing.args = {
    numberOfChildren:4,
    direction: 'row',
    spacing: 0,
    wrap: false
}
export const Wrap = Template.bind({})
Wrap.args = {
    numberOfChildren:40,
    direction: 'row',
    spacing: 2,
    wrap: true
}
export const Empty = Template.bind({})
Empty.args = {
    numberOfChildren:0,
    direction: 'row',
    spacing: 2,
    wrap: false
}