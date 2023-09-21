import React, { useEffect, useState, useRef } from "react";
import {
  Button,
  Col,
  Container,
  Nav,
  Row,
  Tab,
  TabContainer,
  Tabs,
} from "react-bootstrap";
import Image from "next/image";
import dynamic from "next/dynamic";
import style from "./tabs.module.scss";
import {
  ThreeImageSlider,
  TestimonialSlider,
  TwoImageSlider,
} from "../../components/Slider";
import Banner from "../Banner";
// import WhiteWrapper from "../WhiteWrapper";
import Display from "../Display";
import BrandSection from "../BrandSection";
import Circular from "../CircularImage";
import { useRouter } from "next/dist/client/router";
import { FullScreen, useFullScreenHandle } from "react-full-screen";
import { addMultiClasses } from "../../common/common";
import Buttons from "../Button";

const DynamicWhiteWrapper = dynamic(() => import("../WhiteWrapper"));

function TabComponent({
  variant,
  mt,
  tabHorizontalData,
  displayData,
  ourStory,
  howWeWork,
  leadership,
  partner,
  clientSuccess,
  tabVerticalData,
  inNews,
  addressData,
  about_us_vertical_tab,
  title,
  description,
  reference,
  descTextWidth,
  richtext,
  descColor,
  titleColor,
  buttonData,
  fromCaseStudy,

  mb,
}) {
  const router = useRouter();
  const [urlName, setUrlName] = useState(router.asPath);
  const ref = useRef(null);

  const [activeKey, setActiveKey] = useState("");
  const handle = useFullScreenHandle();

  useEffect(() => {
    setUrlName(router.asPath.split("#")[1]);
  }, [router.asPath]);
  //useeffect applied because - in about us page we have the data from tabHorizontalData
  //and in services we have the data from tabVerticalData so when there is only one data available
  //getting undefined error - so we used useEffect to solve the issue
  useEffect(() => {
    if (tabVerticalData) setActiveKey(tabVerticalData[0]?.id);
  }, [tabVerticalData]);
  // useEffect(() => {
  //   if (tabHorizontalData) {

  //     setActiveKey(tabHorizontalData[0]?.id);
  //   }
  // }, [tabHorizontalData]);

  return (
    // <Container fluid style={{ marginBottom: mb }}>
    <Container fluid>
      {variant === "primary" ? (
        <Container
          className={addMultiClasses([
            style.primary_padding,
            fromCaseStudy ? style.for_casestudy : "",
          ])}
        >
          <div ref={ref}></div>
          {about_us_vertical_tab ? (
            <Display variant="text" title={title} description={description} />
          ) : (
            <Display
              variant="primary"
              data={displayData}
              descTextWidth={descTextWidth}
              richtext={richtext}
              descColor={descColor}
              titleColor={titleColor}
              fromCaseStudy={fromCaseStudy}
            />
          )}
          {buttonData && (
            <div className={style.mobile_button}>
              <Buttons
                variant={"secondary_animated"}
                name={buttonData?.title}
                url={buttonData?.url}
                id={buttonData?.button_id}
                url_type={buttonData?.url_type}
              />
            </div>
          )}
          <TabContainer
            id="left-tabs"
            defaultActiveKey={activeKey}
            activeKey={activeKey}
            onSelect={(e) => setActiveKey(e)}
          >
            <Row
              className={
                "justify-content-md-center px-0 py-0 " + style.content_row
              }
            >
              <Col lg={3} md={4} className={`d-none d-md-block px-0`}>
                {tabVerticalData?.map((data) => {
                  return (
                    <div
                      key={data?.id}
                      style={{ borderLeft: "1px solid #C3C3C3" }}
                    >
                      <Nav className="flex-column">
                        <Nav.Item>
                          <Nav.Link
                            eventKey={data?.id}
                            className={style.left__title}
                            onClick={() => {
                              setTimeout(() =>
                                ref?.current?.scrollIntoView({
                                  behaviour: "smooth",
                                })
                              );
                            }}
                          >
                            {data?.title}
                          </Nav.Link>
                        </Nav.Item>
                      </Nav>
                    </div>
                  );
                })}
              </Col>
              <Col lg={6} md={8} className={`d-none d-md-block`}>
                <Tab.Content>
                  {tabVerticalData?.map((data) => {
                    return (
                      <React.Fragment key={data?.id}>
                        <Tab.Pane
                          eventKey={data?.id}
                          className={style.right__box}
                        >
                          <div className={style.right__box__title}>
                            {data?.title}
                          </div>
                          <Image
                            priority
                            layout="intrinsic"
                            height={256}
                            width={658}
                            src={data?.image?.data?.attributes?.url}
                            alt={data?.image_alt_text}
                          />
                          <div
                            className={style.right__box__description}
                            style={{ color: descColor }}
                          >
                            {data?.description}
                          </div>
                        </Tab.Pane>
                      </React.Fragment>
                    );
                  })}
                </Tab.Content>
              </Col>
            </Row>
            <Row style={{ margin: "0px" }}>
              <Col
                md={8}
                className={`d-block d-md-none`}
                style={{ padding: "0px" }}
              >
                {tabVerticalData?.map((data) => {
                  return (
                    <React.Fragment key={data?.id}>
                      <div className={style.right__box__title}>
                        {data?.title}
                      </div>
                      <Image
                        priority
                        layout="intrinsic"
                        height={256}
                        width={658}
                        // src={URL + data.image.data.attributes.url}
                        src={data?.image?.data?.attributes?.url}
                        alt={data?.image_alt_text}
                      />
                      <div
                        className={style.right__box__description}
                        style={{ color: descColor }}
                      >
                        {data?.description}
                      </div>
                    </React.Fragment>
                  );
                })}
              </Col>
            </Row>
          </TabContainer>
        </Container>
      ) : variant === "address" ? (
        <>
          <div className={style.heading}>{addressData?.title}</div>
          <Tabs activeKey="India" className={style.tab__secondary}>
            <Tab
              eventKey="India"
              title={addressData?.country?.map((data) => {
                return (
                  <React.Fragment key={data?.id}>
                    <div key={data?.id}>{data?.name}</div>
                  </React.Fragment>
                );
              })}
            >
              <Container className={style.address__container}>
                <Row
                  style={{ margin: "0px" }}
                  className={style.address__container__box}
                >
                  <Col md={5} sm={5} className={style.address__wrapper}>
                    <div className={style.address__description}>
                      {addressData?.local_address?.map((data) => {
                        return (
                          <React.Fragment key={data?.id}>
                            <div
                              className={style.address__title}
                              key={data?.id}
                            >
                              {data?.city_name}
                            </div>
                            <div
                              className={style.address_text}
                              key={data?.id}
                              dangerouslySetInnerHTML={{
                                __html: data?.address,
                              }}
                            ></div>
                          </React.Fragment>
                        );
                      })}
                    </div>

                    <div className={style.contact__details}>
                      <div className={style.email__section}>
                        <div className={style.email__title}>e:</div>
                        <div className={style.email__subtitle}>
                          {addressData?.email?.map((data) => {
                            return (
                              <React.Fragment key={data?.id}>
                                <div key={data?.id}>{data?.email}</div>
                              </React.Fragment>
                            );
                          })}
                        </div>{" "}
                      </div>
                      <div className={style.telephone__section}>
                        <br />
                        <div className={style.email__title}>t:</div>
                        <div className={style.email__subtitle}>
                          {addressData?.ph_no?.map((data) => {
                            return (
                              <React.Fragment key={data?.id}>
                                <div
                                  key={data?.id}
                                  dangerouslySetInnerHTML={{
                                    __html: data?.ph_no,
                                  }}
                                ></div>
                              </React.Fragment>
                            );
                          })}
                        </div>
                      </div>
                    </div>
                  </Col>
                  <Col md={7} sm={12}>
                    <div className={style.map__container}>
                      <FullScreen handle={handle}>
                        <div
                          className={
                            handle.active
                              ? style.fullscreen
                              : style.google__maps
                          }
                        >
                          <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3672.2788075778276!2d72.51481001537648!3d23.01353308495756!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e9b2a532e64e7%3A0xaefc66ed1b074893!2sMaruti%20Techlabs%20Private%20Limited!5e0!3m2!1sen!2sin!4v1639390139893!5m2!1sen!2sin"
                            // scrolling="yes"
                            // marginheight="0"
                            // marginwidth="0"
                            loading="lazy"
                          ></iframe>

                          <Button
                            variant="light"
                            className={style.toggleScreen}
                            onClick={handle.enter}
                          >
                            {handle.active === true ? (
                              ""
                            ) : (
                              // <RiFullscreenFill
                              //   style={{ fontSize: "24px", color: "#5c5c5c" }}
                              // />
                              <div className={style.fullimgdiv}>
                                <Image
                                  priority
                                  src="data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20viewBox%3D%220%200%2018%2018%22%3E%3Cpath%20fill%3D%22%23666%22%20d%3D%22M0%200v6h2V2h4V0H0zm16%200h-4v2h4v4h2V0h-2zm0%2016h-4v2h6v-6h-2v4zM2%2012H0v6h6v-2H2v-4z%22/%3E%3C/svg%3E"
                                  alt="fullscreen"
                                  height="20px"
                                  width="20px"
                                  layout="fixed"
                                />
                              </div>
                            )}
                          </Button>

                          {handle.active && (
                            <Button
                              variant="light"
                              className={style.toggleScreen}
                              onClick={handle.exit}
                            >
                              {" "}
                              {/* <RiFullscreenExitLine
                                style={{ fontSize: "24px", color: "#5c5c5c" }}
                              /> */}
                              <div className={style.fullimgdiv}>
                                <Image
                                  priority
                                  src="data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20viewBox%3D%220%200%2018%2018%22%3E%3Cpath%20fill%3D%22%23666%22%20d%3D%22M4%204H0v2h6V0H4v4zm10%200V0h-2v6h6V4h-4zm-2%2014h2v-4h4v-2h-6v6zM0%2014h4v4h2v-6H0v2z%22/%3E%3C/svg%3E"
                                  height="20px"
                                  width="20px"
                                  layout="fixed"
                                  alt="fullscreenout"
                                />
                              </div>
                            </Button>
                          )}
                        </div>
                      </FullScreen>
                    </div>
                  </Col>
                </Row>
              </Container>
            </Tab>
          </Tabs>
        </>
      ) : (
        <>
          <div className={style.scrolling} ref={reference}></div>
          <Tabs
            activeKey={urlName || ourStory?.tabid}
            id="uncontrolled-tab-example"
            className={`mb-3 mx-auto ${style.aboutus_tab_component}`}
            onSelect={(e) => setUrlName(e)}
            unmountOnExit={true}
            mountOnEnter={true}
            transition={false}
          >
            {/* {out story tab} */}
            <Tab
              eventKey={ourStory?.tabid}
              title={ourStory?.name}
              className={style.tab__secondary__title}
            >
              <ThreeImageSlider imageData={ourStory?.three_image} />
              <Banner variant="banner__red" bannerData={ourStory?.banner} />
              <Banner
                variant="banner__white"
                bannerData={ourStory?.banner_other}
              />
              <DynamicWhiteWrapper
                variant="primary_other"
                WhiteWrapperData={ourStory?.white_wrapper}
                whiteboxVariant="primary_one"
                borderradius="4px"
              />
              <Display variant="primary" data={ourStory?.display} />
              <Banner
                variant="primary_with_button"
                mt="3rem"
                bannerData={ourStory?.banner_bottom}
              />
            </Tab>
            {/* how we work tab */}
            <Tab
              eventKey={howWeWork?.tabid}
              title={howWeWork?.name}
              className={style.tab__secondary__title}
            >
              {/* <div ref={about_us_ref}></div> */}

              <TabComponent
                variant="primary"
                tabVerticalData={howWeWork?.tab_vertical}
                about_us_vertical_tab="true"
                title={howWeWork?.title}
                description={howWeWork?.description}
                mb="60px"
              />
              <DynamicWhiteWrapper
                variant="primary_other"
                WhiteWrapperData={howWeWork?.white_wrapper}
                whiteboxVariant="primary_two"
                borderradius="4px"
              />
              <BrandSection
                variant="primary"
                brandData={howWeWork?.brand_section}
              />
              <Banner
                bannerData={howWeWork?.banner}
                variant="secondary_with_button"
              />
            </Tab>
            {/* Leadership team */}
            <Tab
              eventKey={leadership?.tabid}
              title={leadership?.title}
              className={style.tab__secondary__title}
            >
              <Circular data={leadership?.placeholder} />
              <Banner
                variant="primary_with_button"
                mt="3rem"
                bannerData={leadership?.banner}
              />
            </Tab>

            {/* Partners */}
            <Tab
              eventKey={partner?.tabid}
              title={partner?.name}
              className={style.tab__secondary__title}
            >
              <Display
                variant="backgroundText"
                title={partner?.display?.title}
                description={partner?.display?.description}
                descriptiontwo={partner?.display?.descriptiontwo}
              />
              <BrandSection
                variant="primary_other"
                brandData={partner?.brand_section}
                mt={"0px"}
              />
              <BrandSection
                variant="primary_other_white"
                brandData={partner?.brand_section_other}
              />

              <Banner
                variant="primary_with_button"
                mt="3rem"
                bannerData={partner?.banner}
                tabname={partner?.name} // prop added to display black inner line in button
              />
            </Tab>

            {/* Client Success */}
            <Tab
              eventKey={clientSuccess?.tabid}
              title={clientSuccess?.name}
              className={style.tab__secondary__title}
            >
              <Display
                variant="text"
                title={clientSuccess?.title}
                description={clientSuccess?.description}
              />
              <TestimonialSlider images={clientSuccess?.client_testimonial} />
              <TwoImageSlider
                images={clientSuccess?.case_studies}
                slidesToShow="2"
                variant="secondary"
              />
              <BrandSection
                variant="secondary"
                brandData={clientSuccess?.brand_section}
              />
              <Banner
                variant="primary_with_button"
                bannerData={clientSuccess?.banner}
                tabname={clientSuccess?.name} // prop added to display black inner line in button
              />
            </Tab>
            {/* In News tab */}
            <Tab
              eventKey={inNews?.tabid}
              title={inNews?.name}
              className={style.tab__secondary__title}
            >
              <Display
                variant="text"
                title={inNews?.title}
                description={inNews?.description}
              />
              <TwoImageSlider
                images={inNews?.case_studies}
                slidesToShow="2"
                variant="secondary"
                background="none"
              />
              <BrandSection
                variant="primary"
                brandData={inNews?.brand_section}
              />
              <Banner
                bannerData={inNews?.banner}
                variant="secondary_with_button"
              />
            </Tab>
          </Tabs>
        </>
      )}
    </Container>
  );
}

export default TabComponent;
