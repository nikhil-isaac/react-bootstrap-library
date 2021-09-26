import React from "react";

import { Breadcrumb } from "react-bootstrap";

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
  title: "Components/Breadcrumb",
  component: Breadcrumb,
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

export const Example = () => (
  <Breadcrumb>
    <Breadcrumb.Item href="#">Home</Breadcrumb.Item>
    <Breadcrumb.Item href="#">Library</Breadcrumb.Item>
    <Breadcrumb.Item active>Active</Breadcrumb.Item>
  </Breadcrumb>
);
