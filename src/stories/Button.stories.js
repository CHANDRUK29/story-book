import Button from "../components/Button";

export default {
    title: "components/Button",
    component: Button,
    /**
     *  argTypes is used to define and control the arguments (or props) that can be passed 
     * to your components in the Storybook UI. It allows you to define how the component's 
     * props should be controlled, validated, and displayed in the Storybook interface. 
     * This is useful for creating interactive documentation and providing better control
     *  over how users can interact with the components within Storybook.
     */
    argTypes: { handleClick: { action: 'handleClick' } }
}

// defining the template and respective args for button  component
const Template = args => <Button {...args} />

// binding the button component and creating different stories based on our use case

export const danger = Template.bind({});
danger.args = {
    backgroundColor: 'red',
    label: 'Click Me',
    color: 'white',
    size: "md"
}

export const primary = Template.bind({})
primary.args = {
    backgroundColor: 'blue',
    label: 'Click Me',
    color: 'white',
    size: "md"
}

export const success = Template.bind({})
success.args = {
    backgroundColor: 'green',
    label: 'Click Me',
    color: 'white',
    size: "md"
}

export const warning = Template.bind({})
warning.args = {
    backgroundColor: 'orange',
    label: 'Click Me',
    color: 'white',
    size: "md"
}

export const small = Template.bind({})
small.args = {
    backgroundColor:'grey',
    label: 'Click Me',
    color: 'black',
    size: "sm"
}
export const medium = Template.bind({})
medium.args = {
    backgroundColor:'grey',
    label: 'Click Me',
    color: 'black',
    size: "md"
}
export const large = Template.bind({})
large.args = {
    backgroundColor:'grey',
    label: 'Click Me',
    color: 'black',
    size: "lg"
}