import React, { useState, useEffect } from "react";
import {
  Container,
  Nav,
  Navbar,
  NavDropdown,
  Offcanvas,
} from "react-bootstrap";
import style from "./header.module.scss";
import Link from "next/link";
import Image from "next/image";
import Buttons from "../Button";
import { useRouter } from "next/dist/client/router";
import link from "next/link";
import axios from "axios";
function Header(props) {
  // const [data, setData] = useState(props.headerData.data[0].attributes);
  const [listshow, setListShow] = useState(true);

  const ShowDropDown = () => {
    setListShow(true);
  };
  const HideDropDown = () => {
    {
      urlName === "about-us" &&
        setTimeout(() =>
          props?.reference?.current?.scrollIntoView({
            behaviour: "smooth",
          })
        );
    }
    setListShow(false);
  };
  const router = useRouter();

  const [urlName, setUrlName] = useState(router.asPath);
  useEffect(() => {
    setUrlName(router.asPath.split("/")[1]);
  }, [router.asPath]);

  const services = [
    "bot-development-services",
    "robotic-process-automation-services",
    "business-intelligence-consulting-services",
    "data-analytics-services",
    "natural-language-processing-services",
    "computer-vision-services",
    "machine-learning-services",
    "cloud-application-development-services",
    "devops-consulting-services",
    "quality-engineering-services",
    "software-prototyping-services",
  ];
  const Resources = ["ebooks", "case-study", "white-paper", "videos"];

  // const CapitalizedUrl = urlName?.charAt(0).toUpperCase() + urlName?.slice(1);
  const [show, setShow] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const controlNavbar = () => {
    if (typeof window !== "undefined") {
      if (window.scrollY > lastScrollY) {
        setShow(true);
      } else {
        setShow(false);
      }

      // remember current page location to use in the next move
      setLastScrollY(window.scrollY);
    }
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", controlNavbar);

      // cleanup function
      return () => {
        window.removeEventListener("scroll", controlNavbar);
      };
    }
  }, [lastScrollY, controlNavbar]);
  return (
    <Navbar
      expand="lg"
      className={`${style.navbar_active} ${show && style.hidden}`}
    >
      <Container className={style.header}>
        <Container className={style.header_sub}>
          {/* <Link> */}

          <Navbar.Brand style={{ cursor: "pointer" }} className={style.logo}>
            {props?.headerData?.data?.attributes?.logo?.link && (
              <Link
                href={props?.headerData?.data?.attributes?.logo?.link}
                passHref
                prefetch={false}
              >
                <a
                  href={props?.headerData?.data?.attributes?.logo?.link}
                  // target="_blank"
                >
                  <div className={style.logo_a}>
                    <Image
                      priority
                      src={
                        props?.headerData?.data?.attributes?.logo?.image?.data
                          ?.attributes?.url
                      }
                      layout="intrinsic"
                      height={37}
                      width={200}
                      alt={
                        props?.headerData?.data?.attributes?.logo
                          ?.image_alt_text
                      }
                    />
                  </div>
                </a>
              </Link>
            )}
          </Navbar.Brand>
          <div className={style.menubar}>
            <ul>
              {props.headerData?.data?.attributes?.menu?.map((menu, index) => {
                return (
                  <Link href={menu?.link} key={index} passHref prefetch={false}>
                    {/* <a href={menu?.link}> */}
                    <li
                      className={`${style.menubar__list} ${
                        menu.name === "Services" &&
                        services.indexOf(urlName) > -1
                          ? style.list_active
                          : menu.name === "Resources" &&
                            Resources.indexOf(urlName) > -1
                          ? style.list_active
                          : urlName === menu.link.split("/")[1]
                          ? style.list_active
                          : ""
                      }`}
                      key={"header" + index}
                      onMouseEnter={ShowDropDown}
                    >
                      {menu.name === "Get In Touch" ? (
                        <Buttons
                          variant="primary"
                          name={menu.name}
                          url={menu.link}
                        />
                      ) : (
                        <>
                          {menu?.name || menu?.title}{" "}
                          {menu?.Submenu?.length > 0 && (
                            <div
                              className={`${style.drop_down_icon} ${
                                menu.name === "Services" &&
                                services.indexOf(urlName) > -1
                                  ? style.drop_down_icon_active
                                  : menu.name === "Resources" &&
                                    Resources.indexOf(urlName) > -1
                                  ? style.drop_down_icon_active
                                  : urlName === menu.link.split("/")[1]
                                  ? style.drop_down_icon_active
                                  : ""
                              }`}
                            />
                          )}
                        </>
                      )}
                      <div
                        className={
                          menu?.name === "Products" && listshow
                            ? `${style.menubar__dropdown__menu__aboutus} ${style.menubar__dropdown__menu}`
                            : listshow
                            ? style.menubar__dropdown__menu
                            : style.menubar__dropdown__menu__hide
                        }
                      >
                        {menu?.Submenu?.length > 0 && (
                          <ul>
                            {menu?.Submenu?.map((subMenu, index) => {
                              return (
                                <li key={index}>
                                  {/* <Link href={subMenu.link}> */}
                                  {/* <li> */}
                                  {subMenu?.image?.data !== null ? (
                                    <>
                                      <Link
                                        href={subMenu.link}
                                        passHref
                                        prefetch={false}
                                      >
                                        <a href={subMenu.link}>
                                          <div
                                            className={style.product__submenu}
                                            onClick={HideDropDown}
                                          >
                                            {" "}
                                            <Image
                                              priority
                                              src={
                                                subMenu?.image?.data?.attributes
                                                  ?.url
                                              }
                                              layout="intrinsic"
                                              height={39}
                                              width={119}
                                              alt={subMenu?.name}
                                            />
                                            <br />
                                            <span
                                              className={
                                                style.product__submenu__span
                                              }
                                            >
                                              {subMenu?.name || subMenu?.title}
                                            </span>
                                          </div>
                                        </a>
                                      </Link>
                                    </>
                                  ) : (
                                    <>
                                      <Link
                                        href={subMenu?.link}
                                        passHref
                                        prefetch={false}
                                      >
                                        <a href={subMenu?.link}>
                                          <div
                                            className={style.icondiv}
                                            onClick={HideDropDown}
                                          >
                                            {subMenu?.name || subMenu?.title}
                                            {subMenu?.subMenu?.length > 0 && (
                                              <div
                                                className={
                                                  style.drop_down_right_icon
                                                }
                                              />
                                            )}
                                          </div>
                                        </a>
                                      </Link>
                                      {subMenu?.subMenu?.length > 0 && (
                                        <div
                                          className={style.dropdown_submenu}
                                          onClick={HideDropDown}
                                        >
                                          <span className={style.subheading}>
                                            {subMenu?.name || subMenu?.title}
                                          </span>
                                          <ul>
                                            {subMenu?.subMenu?.map(
                                              (subMenu2, index) => {
                                                return (
                                                  <Link
                                                    href={subMenu2?.link}
                                                    key={index}
                                                    passHref
                                                    prefetch={false}
                                                  >
                                                    <a href={subMenu2?.link}>
                                                      <li>
                                                        {subMenu2?.name ||
                                                          subMenu2?.title}{" "}
                                                        <br />
                                                        <span>
                                                          {subMenu2.details}
                                                        </span>
                                                      </li>
                                                    </a>
                                                  </Link>
                                                );
                                              }
                                            )}
                                          </ul>
                                        </div>
                                      )}
                                    </>
                                  )}
                                </li>
                              );
                            })}
                          </ul>
                        )}
                      </div>
                    </li>
                    {/* </a> */}
                  </Link>
                );
              })}
            </ul>
          </div>
          <Navbar.Toggle
            aria-controls="offcanvasNavbar"
            className={style.navbar_toggle}
          />
          <Navbar.Offcanvas
            aria-labelledby="offcanvasNavbarLabel"
            placement="top"
            style={{ width: "100%", height: "100%" }}
          >
            <Offcanvas.Header closeButton className={style.offcanvas}>
              <Offcanvas.Title></Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              {props.headerData?.data?.attributes?.menu?.map((menu, index) => {
                return menu?.Submenu?.length > 0 ? (
                  <Nav key={index}>
                    <NavDropdown
                      title={
                        <div className={style.drop_title_div}>
                          <p
                            className={`${
                              menu.name === "Services" &&
                              services.indexOf(urlName) > -1
                                ? style.list_active
                                : menu.name === "Resources" &&
                                  Resources.indexOf(urlName) > -1
                                ? style.list_active
                                : urlName === menu.link.split("/")[1]
                                ? style.list_active
                                : ""
                            }`}
                          >
                            {" "}
                            {menu?.name}
                          </p>
                          {/* <div className={style.drop_down_icon} /> */}
                          <div
                            className={`${style.drop_down_icon} ${
                              menu.name === "Services" &&
                              services.indexOf(urlName) > -1
                                ? style.drop_down_icon_active
                                : menu.name === "Resources" &&
                                  Resources.indexOf(urlName) > -1
                                ? style.drop_down_icon_active
                                : urlName === menu.link.split("/")[1]
                                ? style.drop_down_icon_active
                                : ""
                            }`}
                          />
                        </div>
                      }
                      className={style.navlink}
                    >
                      {menu?.Submenu?.map((subMenu, index) => {
                        return subMenu?.subMenu?.length > 0 ? (
                          <NavDropdown
                            className="sub_menu"
                            key={index}
                            title={
                              <Link href={subMenu?.link} prefetch={false}>
                                <div className={style.drop_title_div}>
                                  <span className={style.drop_title_p}>
                                    {subMenu?.name || subMenu?.title}
                                  </span>
                                  <div className={style.drop_down_icon} />
                                </div>
                              </Link>
                            }
                          >
                            {subMenu?.subMenu?.map((subMenu2, index) => {
                              return (
                                <NavDropdown.Item
                                  href={subMenu2?.link}
                                  className={style.subnav}
                                  key={index}
                                >
                                  {subMenu2?.name || subMenu?.title}
                                </NavDropdown.Item>
                              );
                            })}
                          </NavDropdown>
                        ) : (
                          <NavDropdown.Item
                            href={subMenu?.link}
                            className={style.subnav2}
                            key={index}
                          >
                            {subMenu?.image?.data !== null ? (
                              <div>
                                {" "}
                                <Image
                                  priority
                                  src={subMenu?.image?.data?.attributes?.url}
                                  layout="intrinsic"
                                  height={34}
                                  width={102}
                                  alt={
                                    subMenu?.image?.data?.attributes
                                      ?.alternativeText
                                  }
                                />
                              </div>
                            ) : (
                              <NavDropdown.Item href={subMenu?.link}>
                                <span style={{ textDecoration: "none" }}>
                                  {subMenu?.name || subMenu?.title}
                                </span>
                              </NavDropdown.Item>
                            )}
                          </NavDropdown.Item>
                        );
                      })}
                    </NavDropdown>
                    {index <
                      props.headerData?.data?.attributes?.menu?.length - 1 && (
                      <hr />
                    )}
                  </Nav>
                ) : (
                  <Nav className={style.nav_career} key={index}>
                    <Link href={menu?.link} prefetch={false}>
                      <div
                        className={`${
                          menu.name === "Services" &&
                          services.indexOf(urlName) > -1
                            ? style.list_active
                            : urlName === menu.link.split("/")[1]
                            ? style.list_active
                            : ""
                        }`}
                      >
                        {menu?.name || menu?.title}
                      </div>
                    </Link>
                    {index <
                      props.headerData?.data?.attributes?.menu?.length - 1 && (
                      <hr />
                    )}
                  </Nav>
                );
              })}
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Container>
    </Navbar>
  );
}
export default Header;
