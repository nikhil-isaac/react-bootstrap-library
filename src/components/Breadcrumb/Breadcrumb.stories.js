import React from "react";

import { Breadcrumb } from "react-bootstrap";

export default {
  title: "Components/Breadcrumb",
  component: Breadcrumb,
};

export const Example = () => (
  <Breadcrumb>
    <Breadcrumb.Item href="#">Home</Breadcrumb.Item>
    <Breadcrumb.Item href="#">Library</Breadcrumb.Item>
    <Breadcrumb.Item active>Active</Breadcrumb.Item>
  </Breadcrumb>
);
