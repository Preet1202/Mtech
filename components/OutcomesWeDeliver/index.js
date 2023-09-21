import React from "react";
import style from "./OutcomesWeDeliver.module.scss";
import { addMultiClasses } from "../../common/common";
import { Container } from "react-bootstrap";
import Image from "next/image";
import Slider from "react-slick";

import SlickCSS from "../SlickEssentials/slick-css";

const OutcomesWeDeliver = (props) => {
  const outcomesdata = props?.outcomesdata;
  const variant = props?.variant;
  if (!outcomesdata) return <></>;

  const settings = {
    dots: true,
    infinite: true,
    speed: 800,
    slidesToShow: 3,
    slidesToScroll: 3,
    arrows: false,
    autoplay: true,
    lazyLoad: "ondemand",
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <>
      {variant === "white" && (
        <Container fluid className={style.outcomes__maincontainer}>
          <Container>
            <h2 className={style.outcomes__title}>{outcomesdata?.title}</h2>

            <div className={style.outcomes__row}>
              <SlickCSS></SlickCSS>
              <Slider {...settings}>
                {outcomesdata?.outcomes_we_deliver_box?.map((data) => {
                  return (
                    <div key={data?.id}>
                      <div className={addMultiClasses([style.outcomes__box])}>
                        <Image
                          priority
                          src={data?.image?.data?.attributes?.url}
                          layout="intrinsic"
                          height={60}
                          width={60}
                          objectFit="contain"
                        />
                        <div
                          className={style.outcomes__box__desc}
                          dangerouslySetInnerHTML={{
                            __html: data?.description,
                          }}
                        ></div>
                      </div>
                    </div>
                  );
                })}
              </Slider>
            </div>
          </Container>
        </Container>
      )}

      {variant === "black" && (
        <Container fluid className={style.outcomes__maincontainer_black}>
          <Container>
            <h2 className={style.outcomes__title__black}>
              {outcomesdata?.title}
            </h2>

            <div className={style.outcomes__row__black}>
              <SlickCSS></SlickCSS>
              <Slider {...settings}>
                {outcomesdata?.outcomes_we_deliver_box?.map((data) => {
                  return (
                    <div key={data?.id}>
                      <div className={addMultiClasses([style.outcomes__box])}>
                        <Image
                          priority
                          src={data?.image?.data?.attributes?.url}
                          layout="intrinsic"
                          height={60}
                          width={60}
                          objectFit="contain"
                        />
                        <div
                          className={style.outcomes__box__desc}
                          dangerouslySetInnerHTML={{
                            __html: data?.description,
                          }}
                        ></div>
                      </div>
                    </div>
                  );
                })}
              </Slider>
            </div>
          </Container>
        </Container>
      )}
    </>
  );
};

export default OutcomesWeDeliver;
