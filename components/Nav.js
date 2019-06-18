import React from 'react';
import Link from 'next/link';
import { Container, Dropdown } from 'semantic-ui-react';

const Nav = ({ currentPage }) => (
  <header>
    <Container>
      <Link href="/">
        <a className="nav-home">Albion Tools</a>
      </Link>
      <a className="nav-item">
        <Dropdown text="Crafting">
          <Dropdown.Menu>
            <Dropdown.Item text="Black Market Crafting" />
          </Dropdown.Menu>
        </Dropdown>
      </a>
    </Container>
    <style jsx>{`
      header {
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 1em;
        font-size: 1.2rem;
        background: #531405;
        z-index: 1;
        box-shadow: 0px 3px 5px 0px rgba(44, 62, 80, 0.75);
      }
      header a {
        color: #d7cecc;
        text-decoration: none;
      }
      header a:hover {
        color: #ffdfbc;
      }
      .nav-item {
        margin: 0px 20px;
      }
      .nav-home {
        font-size: 1.8rem;
      }
    `}</style>
  </header>
);

export default Nav;
