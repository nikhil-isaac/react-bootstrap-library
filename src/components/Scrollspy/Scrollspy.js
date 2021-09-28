import React from "react";
import "./scrollspy.css";

export const Scrollspy = () => (
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
        <div className="bd-example">
          <nav
            id="navbar-example2"
            className="navbar navbar-light bg-light px-3"
          >
            <a className="navbar-brand" href="#">
              Navbar
            </a>
            <ul className="nav nav-pills">
              <li className="nav-item">
                <a className="nav-link active" href="#scrollspyHeading1">
                  First
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#scrollspyHeading2">
                  Second
                </a>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  data-bs-toggle="dropdown"
                  href="#"
                  role="button"
                  aria-expanded="false"
                >
                  Dropdown
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <a className="dropdown-item" href="#scrollspyHeading3">
                      Third
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#scrollspyHeading4">
                      Fourth
                    </a>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <a className="dropdown-item" href="#scrollspyHeading5">
                      Fifth
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
          </nav>
          <div
            data-bs-spy="scroll"
            data-bs-target="#navbar-example2"
            data-bs-offset="0"
            className="scrollspy-example"
            tabindex="0"
          >
            <h4 id="scrollspyHeading1">First heading</h4>
            <p>
              This is some placeholder content for the scrollspy page. Note that
              as you scroll down the page, the appropriate navigation link is
              highlighted. It's repeated throughout the component example. We
              keep adding some more example copy here to emphasize the scrolling
              and highlighting.
            </p>
            <h4 id="scrollspyHeading2">Second heading</h4>
            <p>
              This is some placeholder content for the scrollspy page. Note that
              as you scroll down the page, the appropriate navigation link is
              highlighted. It's repeated throughout the component example. We
              keep adding some more example copy here to emphasize the scrolling
              and highlighting.
            </p>
            <h4 id="scrollspyHeading3">Third heading</h4>
            <p>
              This is some placeholder content for the scrollspy page. Note that
              as you scroll down the page, the appropriate navigation link is
              highlighted. It's repeated throughout the component example. We
              keep adding some more example copy here to emphasize the scrolling
              and highlighting.
            </p>
            <h4 id="scrollspyHeading4">Fourth heading</h4>
            <p>
              This is some placeholder content for the scrollspy page. Note that
              as you scroll down the page, the appropriate navigation link is
              highlighted. It's repeated throughout the component example. We
              keep adding some more example copy here to emphasize the scrolling
              and highlighting.
            </p>
            <h4 id="scrollspyHeading5">Fifth heading</h4>
            <p>
              This is some placeholder content for the scrollspy page. Note that
              as you scroll down the page, the appropriate navigation link is
              highlighted. It's repeated throughout the component example. We
              keep adding some more example copy here to emphasize the scrolling
              and highlighting.
            </p>
          </div>
        </div>
      </div>
    </article>
  </>
);
