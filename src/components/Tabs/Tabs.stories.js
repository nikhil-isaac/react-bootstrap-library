import React, { useState } from "react";

import { Tabs, Tab, Row, Col, Nav } from "react-bootstrap";

export default {
  title: "Components/Tabs",
  component: Tabs,
};

const para1 = () =>
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In hendrerit nisl malesuada leo feugiat pulvinar. Mauris sed feugiat quam. Proin imperdiet rhoncus convallis. Donec id mauris vitae nisl volutpat tristique nec ut felis. Cras sit amet diam libero. Quisque in metus sem. Morbi sit amet luctus arcu. Nullam varius erat sapien, sed facilisis metus malesuada tristique. Phasellus sem ex, sollicitudin a erat in, elementum dapibus eros. Suspendisse vulputate neque justo, in elementum est vestibulum at. ";

const para2 = () =>
  "Vivamus ac mollis nibh. Proin laoreet pulvinar viverra. Cras id blandit leo. Proin ultrices venenatis lectus vitae posuere. Duis vel consequat odio, in rutrum lacus. Sed imperdiet pretium mi eu ultrices. Suspendisse turpis ligula, feugiat non leo nec, posuere varius dui. Cras eget mauris ante. Integer dignissim euismod lacus at pretium. Phasellus efficitur laoreet mauris a suscipit. ";

export const UncontrolledTabs = () => (
  <Tabs
    defaultActiveKey="profile"
    id="uncontrolled-tab-example"
    className="mb-3"
  >
    <Tab eventKey="home" title="Home">
      {para1()}
    </Tab>
    <Tab eventKey="profile" title="Profile">
      {para2()}
    </Tab>
    <Tab eventKey="contact" title="Disabled" disabled>
      {para1()}
    </Tab>
  </Tabs>
);

export const ControlledTabs = () => {
  const [key, setKey] = useState("home");

  return (
    <Tabs
      id="controlled-tab-example"
      activeKey={key}
      onSelect={(k) => setKey(k)}
      className="mb-3"
    >
      <Tab eventKey="home" title="Home">
        {para1()}
      </Tab>
      <Tab eventKey="profile" title="Profile">
        {para2()}
      </Tab>
      <Tab eventKey="contact" title="Disabled" disabled>
        {para1()}
      </Tab>
    </Tabs>
  );
};

export const CustomTabLayout = () => (
  <Tab.Container id="left-tabs-example" defaultActiveKey="first">
    <Row>
      <Col sm={3}>
        <Nav variant="pills" className="flex-column">
          <Nav.Item>
            <Nav.Link eventKey="first">Tab 1</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="second">Tab 2</Nav.Link>
          </Nav.Item>
        </Nav>
      </Col>
      <Col sm={9}>
        <Tab.Content>
          <Tab.Pane eventKey="first">{para1()}</Tab.Pane>
          <Tab.Pane eventKey="second">{para2()}</Tab.Pane>
        </Tab.Content>
      </Col>
    </Row>
  </Tab.Container>
);
