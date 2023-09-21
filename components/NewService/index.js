import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import style from "./newservice.module.scss";
import Link from "next/link";

const NewService = (props) => {
  return (
    <Container fluid className={style.main_container}>
      <Container className={style.newservice__container}>
        <h2>{props?.serviceListData?.title}</h2>
        <h6
          dangerouslySetInnerHTML={{
            __html: props?.serviceListData?.description,
          }}
        ></h6>
        <Row className={style.newservice__row}>
          {props?.serviceListData?.servicelist_box.map((data) => {
            return (
              <React.Fragment key={data.id}>
                <Link href={data?.link} passHref prefetch={false}>
                  <Col
                    className={style.newservice__bar}
                    md={12}
                    sm={12}
                    xs={12}
                  >
                    <h2>{data?.title}</h2>

                    <div>
                      <SvgComponent />
                    </div>
                  </Col>
                </Link>
              </React.Fragment>
            )
          })}
        </Row>
      </Container>
    </Container>
  );
};

export default NewService;

const SvgComponent = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={32}
    height={32}
    fill="none"
    {...props}
  >
    <mask
      id="a"
      width={32}
      height={32}
      x={0}
      y={0}
      maskUnits="userSpaceOnUse"
      style={{
        maskType: "alpha",
      }}
    >
      <path fill="#D9D9D9" d="M.5.25H32v31.5H.5z" />
    </mask>
    <g mask="url(#a)">
      <path
        fill="#1C1B1F"
        d="m11.033 29.125-2.33-2.33L19.498 16 8.703 5.205l2.33-2.33L24.158 16 11.033 29.125Z"
      />
    </g>
  </svg>
);
