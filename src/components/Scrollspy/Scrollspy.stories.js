import { Scrollspy } from "./Scrollspy";
import React from "react";
import "./scrollspy.css";

export default {
  title: "Components/Scrollspy",
  component: Scrollspy,
};

export const ScrollSpyEx = () => <Scrollspy />;

export const ScrollSpyBas = () => (
  <>
    <article className="my-3" id="scrollspy">
      <div className="bd-heading sticky-xl-top align-self-start mt-5 mb-3 mt-xl-0 mb-xl-2">
        <h3>Scrollspy</h3>
        <a
          className="d-flex align-items-center"
          href="../components/scrollspy/"
        >
          Documentation
        </a>
      </div>

      <div>
        <div className="bd-example"></div>
        <div className="row">
          <div className="col-4">
            <nav
              id="navbar-example3"
              class="navbar navbar-light bg-light flex-column align-items-stretch p-3"
            >
              <a class="navbar-brand" href="#">
                Navbar
              </a>
              <nav class="nav nav-pills flex-column">
                <a class="nav-link" href="#item-1">
                  Item 1
                </a>
                <nav class="nav nav-pills flex-column">
                  <a class="nav-link ms-3 my-1" href="#item-1-1">
                    Item 1-1
                  </a>
                  <a class="nav-link ms-3 my-1" href="#item-1-2">
                    Item 1-2
                  </a>
                </nav>
                <a class="nav-link" href="#item-2">
                  Item 2
                </a>
                <a class="nav-link" href="#item-3">
                  Item 3
                </a>
                <nav class="nav nav-pills flex-column">
                  <a class="nav-link ms-3 my-1" href="#item-3-1">
                    Item 3-1
                  </a>
                  <a class="nav-link ms-3 my-1" href="#item-3-2">
                    Item 3-2
                  </a>
                </nav>
              </nav>
            </nav>
          </div>
          <div className="col-8">
            <div
              data-bs-spy="scroll"
              data-bs-target="#navbar-example3"
              data-bs-offset="0"
              tabindex="0"
              className="scrollspy-example-2"
            >
              <h4 id="item-1">Item 1</h4>
              <p>
                This is some placeholder content for the scrollspy page. Note
                that as you scroll down the page, the appropriate navigation
                link is highlighted. It's repeated throughout the component
                example. We keep adding some more example copy here to emphasize
                the scrolling and highlighting.
              </p>
              <h5 id="item-1-1">Item 1-1</h5>
              <p>
                This is some placeholder content for the scrollspy page. Note
                that as you scroll down the page, the appropriate navigation
                link is highlighted. It's repeated throughout the component
                example. We keep adding some more example copy here to emphasize
                the scrolling and highlighting.
              </p>
              <h5 id="item-1-2">Item 1-2</h5>
              <p>
                This is some placeholder content for the scrollspy page. Note
                that as you scroll down the page, the appropriate navigation
                link is highlighted. It's repeated throughout the component
                example. We keep adding some more example copy here to emphasize
                the scrolling and highlighting.
              </p>
              <h4 id="item-2">Item 2</h4>
              <p>
                This is some placeholder content for the scrollspy page. Note
                that as you scroll down the page, the appropriate navigation
                link is highlighted. It's repeated throughout the component
                example. We keep adding some more example copy here to emphasize
                the scrolling and highlighting.
              </p>
              <h4 id="item-3">Item 3</h4>
              <p>
                This is some placeholder content for the scrollspy page. Note
                that as you scroll down the page, the appropriate navigation
                link is highlighted. It's repeated throughout the component
                example. We keep adding some more example copy here to emphasize
                the scrolling and highlighting.
              </p>
              <h5 id="item-3-1">Item 3-1</h5>
              <p>
                This is some placeholder content for the scrollspy page. Note
                that as you scroll down the page, the appropriate navigation
                link is highlighted. It's repeated throughout the component
                example. We keep adding some more example copy here to emphasize
                the scrolling and highlighting.
              </p>
              <h5 id="item-3-2">Item 3-2</h5>
              <p>
                This is some placeholder content for the scrollspy page. Note
                that as you scroll down the page, the appropriate navigation
                link is highlighted. It's repeated throughout the component
                example. We keep adding some more example copy here to emphasize
                the scrolling and highlighting.
              </p>
            </div>
          </div>
        </div>
      </div>
    </article>
  </>
);

export const ListGroup = () => (
  <>
    <div id="list-example" class="list-group">
      <a class="list-group-item list-group-item-action" href="#list-item-1">
        Item 1
      </a>
      <a class="list-group-item list-group-item-action" href="#list-item-2">
        Item 2
      </a>
      <a class="list-group-item list-group-item-action" href="#list-item-3">
        Item 3
      </a>
      <a class="list-group-item list-group-item-action" href="#list-item-4">
        Item 4
      </a>
    </div>
    <div
      data-bs-spy="scroll"
      data-bs-target="#list-example"
      data-bs-offset="0"
      class="scrollspy-example"
      tabindex="0"
    >
      <h4 id="list-item-1">Item 1</h4>
      <p>
        This is some placeholder content for the scrollspy page. Note that as
        you scroll down the page, the appropriate navigation link is
        highlighted. It's repeated throughout the component example. We keep
        adding some more example copy here to emphasize the scrolling and
        highlighting.
      </p>
      <h4 id="list-item-2">Item 2</h4>
      <p>
        This is some placeholder content for the scrollspy page. Note that as
        you scroll down the page, the appropriate navigation link is
        highlighted. It's repeated throughout the component example. We keep
        adding some more example copy here to emphasize the scrolling and
        highlighting.
      </p>
      <h4 id="list-item-3">Item 3</h4>
      <p>
        This is some placeholder content for the scrollspy page. Note that as
        you scroll down the page, the appropriate navigation link is
        highlighted. It's repeated throughout the component example. We keep
        adding some more example copy here to emphasize the scrolling and
        highlighting.
      </p>
      <h4 id="list-item-4">Item 4</h4>
      <p>
        This is some placeholder content for the scrollspy page. Note that as
        you scroll down the page, the appropriate navigation link is
        highlighted. It's repeated throughout the component example. We keep
        adding some more example copy here to emphasize the scrolling and
        highlighting.
      </p>
    </div>
  </>
);
