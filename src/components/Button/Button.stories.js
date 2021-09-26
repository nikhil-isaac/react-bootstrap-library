import React from "react";

import { Button } from "react-bootstrap";

const variantOptions = [
  "primary",
  "secondary",
  "success",
  "warning",
  "danger",
  "info",
  "light",
  "dark",
  "outline-primary",
  "outline-secondary",
  "outline-success",
  "outline-warning",
  "outline-danger",
  "outline-info",
  "outline-light",
  "outline-dark",
];

const sizeOptions = ["lg", "md", "sm"];

export default {
  title: "Components/Button",
  component: Button,
  argTypes: {
    variant: {
      options: variantOptions,
      control: { type: "select" },
    },
    size: {
      options: sizeOptions,
      control: { type: "select" },
    },
    active: { control: { type: "boolean" } },
    disabled: { control: { type: "boolean" } },
  },
};

const Template = (args) => <Button {...args} />;

export const ButtonVariant = Template.bind({});
ButtonVariant.args = {
  variant: "primary",
  children: "Button",
};

export const Sizes = Template.bind({});
Sizes.args = {
  children: "Button",
};

export const Small = Template.bind({});
Small.args = {
  size: "small",
  children: "Button",
};
