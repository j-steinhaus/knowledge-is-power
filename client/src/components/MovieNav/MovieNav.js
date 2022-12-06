import React from "react";
import { Link, useLocation } from "react-router-dom";
import { Container, Menu, Header, Image } from "semantic-ui-react";
import mainLogo from "./assets/mainLogo.png";

// navigation display 
const MovieNav = () => {
  const location = useLocation();
  return (
    <>
      <Header className="navHeader">
        <Container>
          <Menu stackable fixed="top">
            <Menu.Item className="navBar" as="a" header>
              <Image
                src={mainLogo}
                className="mainLogo"
                size="small"
                alt="logo"
                style={{ height: 30, width: "auto" }}
              />
            </Menu.Item>
            <Menu.Item className="navItem">
              {" "}
              <Link
                to="/main"
                className={
                  location.pathname === "/main" ? "nav-link active" : "nav-link"
                }
              >
                Home
              </Link>
            </Menu.Item>
            <Menu.Item>
              <Link
                to="/movies"
                className={
                  location.pathname === "/movies"
                    ? "nav-link active"
                    : "nav-link"
                }
              >
                My Videos
              </Link>
            </Menu.Item>
            <Menu.Item
              className="navItem"
              action="logout"
              method="post"
              as="form"
            >
              <button type="submit" className="nav-link navTextButton">
                Logout
              </button>
            </Menu.Item>
          </Menu>
        </Container>
      </Header>
    </>
  );
}

export default MovieNav;