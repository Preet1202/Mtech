import React, { useEffect, useState } from "react";
import Image from "next/image";
import Slider from "react-slick";
import { Col, Container, Row } from "react-bootstrap";
var $ = require("jquery");
if (typeof window !== "undefined") {
  window.$ = window.jQuery = require("jquery");
}
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import dynamic from "next/dynamic";
import style from "./testimonial.module.scss";

const Testimonial = ({ images, variant }) => {
  const OwlCarousel = dynamic(() => import("react-owl-carousel"), {
    ssr: false,
  });
  const [windowSize, setWindowSize] = useState({});

  useEffect(() => {
    if (typeof window !== "undefined") {
      function handleResize() {
        setWindowSize({
          width: window.innerWidth,
          height: window.innerHeight,
        });
        if (window.innerWidth > 992) {
          setSettings({
            ...settings,
            slidesToShow: 3,
            slidesToScroll: 3,
          });
        }
        if (window.innerWidth < 992) {
          setSettings({
            ...settings,
            slidesToShow: 2,
            slidesToScroll: 2,
          });
        }
        if (window.innerWidth < 768) {
          setSettings({
            ...settings,
            slidesToShow: 1,
            slidesToScroll: 1,
          });
        }

        // setSettings({
        //   ...settings,
        //   slidesToShow: window.innerWidth > 992 ? 3 : 2,
        //   slidesToScroll: window.innerWidth > 767 ? 3 : 2,
        // });
      }
      window.addEventListener("resize", handleResize);
      handleResize();
      return () => window.removeEventListener("resize", handleResize);
    }
  }, []);
  const [settings, setSettings] = useState({
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    arrows: false,
    autoplay: true,
    lazyLoad: "ondemand",
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: false,
          dots: false,
        },
      },
    ],
  });
  const Responsive = {
    0: {
      items: 1,
      dots: false,
    },
    768: {
      items: 2,
      dots: false,
    },
    1000: {
      items: 3,
      dots: true,
    },
  };
  return (
    <>
      {variant === "primary" && (
        <div>
          <Container
            fluid
            className={style.testimonial__container + " testimonial__wrapper"}
          >
            <div className={style.testimonial__title}>{images?.title}</div>

            <Container className="testimonial">
              <Row className={style.testimonial__row + " rowContainer"}>
                <Slider {...settings}>
                  {images?.vertical_carousel?.map((image, index) => {
                    return (
                      <Col className={style.client__wrapper} key={index}>
                        <Col className={style.client__box}>
                          <div className={style.client__image}>
                            <Image
                              // priority
                              // placeholder="blur"
                              // blurDataURL={
                              //   image?.client_image?.data?.attributes?.url
                              // }
                              src={image?.client_image?.data?.attributes?.url}
                              height={149}
                              width={149}
                              layout="fixed"
                              alt={image?.client_image_alt_text}
                            />
                          </div>
                          <div className={style.client__quote}>
                            {" "}
                            <Image
                              priority
                              src="https://cdn-gcp.new.marutitech.com/comma_new_3ac39a65c6.png"
                              alt="comma"
                              width={50}
                              height={45}
                            />
                          </div>
                          <div className={style.client__message}>
                            {image?.description}
                          </div>
                          <div className={style.client__footer}>
                            <p className={style.client__name}>{image?.name}</p>
                            <p className={style.client__designation}>
                              {image?.position}
                            </p>
                            {/* Image goes here */}
                            {image?.company_logo?.data?.attributes?.url && (
                              <div className={style.company_img}>
                                <Image
                                  // priority
                                  // placeholder="blur"
                                  // blurDataURL={
                                  //   image?.company_logo?.data?.attributes?.url
                                  // }
                                  src={
                                    image?.company_logo?.data?.attributes?.url
                                  }
                                  height={20}
                                  width={80}
                                  alt={
                                    image?.company_logo?.data?.attributes?.name
                                  }
                                />
                              </div>
                            )}
                          </div>
                        </Col>
                      </Col>
                    );
                  })}
                </Slider>
              </Row>
            </Container>
          </Container>
        </div>
      )}
      {variant === "owl" && (
        <div>
          <Container
            fluid
            className={style.testimonial__container + " testimonial__wrapper"}
          >
            <div className={style.testimonial__title}>{images?.title}</div>

            <Container className="testimonial">
              <Row className={style.testimonial__row + " rowContainer"}>
                <OwlCarousel
                  // className='owl-theme'
                  // loop={true}
                  // items={3}
                  // mouseDrag={true}
                  // margin={20}
                  // nav={false}
                  // autoPlay={true}
                  // autoplayTimeout={2000}
                  // autoplaySpeed={2000}
                  // autoplayHoverPause={false}
                  className="owl-theme"
                  loop
                  items={3}
                  margin={10}
                  nav={false}
                  autoplay={true}
                  // autoPlay={true}
                  autoplayTimeout={2000}
                  autoplaySpeed={1500}
                  autoplayHoverPause={true}
                  mouseDrag={false}
                  responsive={Responsive}
                >
                  {images?.vertical_carousel?.map((image, index) => {
                    return (
                      <Col className={style.client__wrapper} key={index}>
                        <Col className={style.client__box}>
                          <div className={style.client__image}>
                            <Image
                              // priority
                              // placeholder="blur"
                              // blurDataURL={
                              //   image?.client_image?.data?.attributes?.url
                              // }
                              src={image?.client_image?.data?.attributes?.url}
                              height={149}
                              width={149}
                              layout="fixed"
                              alt={image?.client_image_alt_text}
                            />
                          </div>
                          <div className={style.client__quote}>
                            {" "}
                            <Image
                              priority
                              src="https://cdn-gcp.new.marutitech.com/comma_new_3ac39a65c6.png"
                              alt="comma"
                              width={50}
                              height={45}
                            />
                          </div>
                          <div className={style.client__message}>
                            {image?.description}
                          </div>
                          <div className={style.client__footer}>
                            <p className={style.client__name}>{image?.name}</p>
                            <p className={style.client__designation}>
                              {image?.position}
                            </p>
                            {/* Image goes here */}
                            {image?.company_logo?.data?.attributes?.url && (
                              <div className={style.company_img}>
                                <Image
                                  // priority
                                  // placeholder="blur"
                                  // blurDataURL={
                                  //   image?.company_logo?.data?.attributes?.url
                                  // }
                                  src={
                                    image?.company_logo?.data?.attributes?.url
                                  }
                                  height={20}
                                  width={80}
                                  alt={
                                    image?.company_logo?.data?.attributes?.name
                                  }
                                />
                              </div>
                            )}
                          </div>
                        </Col>
                      </Col>
                    );
                  })}
                </OwlCarousel>
              </Row>
            </Container>
          </Container>
        </div>
      )}
    </>
  );
};

export default Testimonial;
{
  /* <Col className={style.box}>
                      <div className={style.customer__message}>
                        <div>
                          {" "}
                          <img src="https://cdn-gcp.new.marutitech.com/comma_new_3ac39a65c6.png" />
                        </div>
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum has been the
                        industry's standard dummy.
                      </div>
                      <div className={style.customer__name}>Lorem Ipsum</div>{" "}
                    </Col>
                    <Col className={style.boximage}>
                      <img src="https://cdn-gcp.marutitech.com/wp-media/2019/11/1eb546d2-user-blank.png" />
                    </Col> */
}

// import React, { useEffect, useState } from "react";
// import Image from "next/image";
// import Slider from "react-slick";
// import { Col, Container, Row } from "react-bootstrap";
// var $ = require("jquery");
// if (typeof window !== "undefined") {
//   window.$ = window.jQuery = require("jquery");
// }
// import "owl.carousel/dist/assets/owl.carousel.css";
// import "owl.carousel/dist/assets/owl.theme.default.css";
// import dynamic from "next/dynamic";
// import style from "./testimonial.module.scss";

// const Testimonial = ({ images, variant }) => {
//   const OwlCarousel = dynamic(() => import("react-owl-carousel"), {
//     ssr: false,
//   });
//   const [windowSize, setWindowSize] = useState({});

//   useEffect(() => {
//     if (typeof window !== "undefined") {
//       function handleResize() {
//         setWindowSize({
//           width: window.innerWidth,
//           height: window.innerHeight,
//         });
//         if (window.innerWidth > 992) {
//           setSettings({
//             ...settings,
//             slidesToShow: 3,
//             slidesToScroll: 3,
//           });
//         }
//         if (window.innerWidth < 992) {
//           setSettings({
//             ...settings,
//             slidesToShow: 2,
//             slidesToScroll: 2,
//           });
//         }
//         if (window.innerWidth < 768) {
//           setSettings({
//             ...settings,
//             slidesToShow: 1,
//             slidesToScroll: 1,
//           });
//         }

//         // setSettings({
//         //   ...settings,
//         //   slidesToShow: window.innerWidth > 992 ? 3 : 2,
//         //   slidesToScroll: window.innerWidth > 767 ? 3 : 2,
//         // });
//       }
//       window.addEventListener("resize", handleResize);
//       handleResize();
//       return () => window.removeEventListener("resize", handleResize);
//     }
//   }, []);
//   const [settings, setSettings] = useState({
//     dots: true,
//     infinite: true,
//     speed: 500,
//     slidesToShow: 3,
//     slidesToScroll: 3,
//     arrows: false,
//     autoplay: true,
//     lazyLoad: "ondemand",
//     responsive: [
//       {
//         breakpoint: 768,
//         settings: {
//           arrows: false,
//           dots: false,
//         },
//       },
//     ],
//   });
//   const Responsive = {
//     0: {
//       items: 1,
//       dots: false,
//     },
//     768: {
//       items: 2,
//       dots: false,
//     },
//     1000: {
//       items: 3,
//       dots: true,
//     },
//   };
//   return (
//     <>
//       {variant === "primary" && (
//         <div>
//           <Container
//             fluid
//             className={style.testimonial__container + " testimonial__wrapper"}
//           >
//             <div className={style.testimonial__title}>{images?.title}</div>

//             <Container className='testimonial'>
//               <Row className={style.testimonial__row + " rowContainer"}>
//                 <Slider {...settings}>
//                   {images?.vertical_carousel?.map((image, index) => {
//                     return (
//                       <Col className={style.client__wrapper} key={index}>
//                         <Col className={style.client__box}>
//                           <div className={style.client__image}>
//                             <Image
//                               // priority
//                               // placeholder="blur"
//                               // blurDataURL={
//                               //   image?.client_image?.data?.attributes?.url
//                               // }
//                               src={image?.client_image?.data?.attributes?.url}
//                               height={149}
//                               width={149}
//                               layout='fixed'
//                               alt={image?.client_image_alt_text}
//                             />
//                           </div>
//                           <div className={style.client__quote}>
//                             {" "}
//                             <Image
//                               priority
//                               src='https://cdn-gcp.new.marutitech.com/comma_new_3ac39a65c6.png'
//                               alt='comma'
//                               width={50}
//                               height={45}
//                             />
//                           </div>
//                           <div className={style.client__message}>
//                             {image?.description}
//                           </div>
//                           <div className={style.client__footer}>
//                             <p className={style.client__name}>{image?.name}</p>
//                             <p className={style.client__designation}>
//                               {image?.position}
//                             </p>
//                             {/* Image goes here */}
//                             {image?.company_logo?.data?.attributes?.url && (
//                               <div className={style.company_img}>
//                                 <Image
//                                   // priority
//                                   // placeholder="blur"
//                                   // blurDataURL={
//                                   //   image?.company_logo?.data?.attributes?.url
//                                   // }
//                                   src={
//                                     image?.company_logo?.data?.attributes?.url
//                                   }
//                                   height={20}
//                                   width={80}
//                                   alt={
//                                     image?.company_logo?.data?.attributes?.name
//                                   }
//                                 />
//                               </div>
//                             )}
//                           </div>
//                         </Col>
//                       </Col>
//                     );
//                   })}
//                 </Slider>
//               </Row>
//             </Container>
//           </Container>
//         </div>
//       )}
//       {variant === "owl" && (
//         <div>
//           <Container
//             fluid
//             className={style.testimonial__container + " testimonial__wrapper"}
//           >
//             <div className={style.testimonial__title}>{images?.title}</div>

//             <Container className='testimonial'>
//               <Row className={style.testimonial__row + " rowContainer"}>
//                 <OwlCarousel
//                   // className='owl-theme'
//                   // loop={true}
//                   // items={3}
//                   // mouseDrag={true}
//                   // margin={20}
//                   // nav={false}
//                   // autoPlay={true}
//                   // autoplayTimeout={2000}
//                   // autoplaySpeed={2000}
//                   // autoplayHoverPause={false}
//                   className='owl-theme'
//                   loop
//                   items={3}
//                   margin={10}
//                   nav={false}
//                   autoplay={true}
//                   // autoPlay={true}
//                   autoplayTimeout={2000}
//                   autoplaySpeed={1500}
//                   autoplayHoverPause={true}
//                   mouseDrag={false}
//                   responsive={Responsive}
//                 >
//                   {images?.vertical_carousel?.map((image, index) => {
//                     return (
//                       <Col className={style.client__wrapper} key={index}>
//                         <Col className={style.client__box}>
//                           <div className={style.client__image}>
//                             <Image
//                               // priority
//                               // placeholder="blur"
//                               // blurDataURL={
//                               //   image?.client_image?.data?.attributes?.url
//                               // }
//                               src={image?.client_image?.data?.attributes?.url}
//                               height={149}
//                               width={149}
//                               layout='fixed'
//                               alt={image?.client_image_alt_text}
//                             />
//                           </div>
//                           <div className={style.client__quote}>
//                             {" "}
//                             <Image
//                               priority
//                               src='https://cdn-gcp.new.marutitech.com/comma_new_3ac39a65c6.png'
//                               alt='comma'
//                               width={50}
//                               height={45}
//                             />
//                           </div>
//                           <div className={style.client__message}>
//                             {image?.description}
//                           </div>
//                           <div className={style.client__footer}>
//                             <p className={style.client__name}>{image?.name}</p>
//                             <p className={style.client__designation}>
//                               {image?.position}
//                             </p>
//                             {/* Image goes here */}
//                             {image?.company_logo?.data?.attributes?.url && (
//                               <div className={style.company_img}>
//                                 <Image
//                                   // priority
//                                   // placeholder="blur"
//                                   // blurDataURL={
//                                   //   image?.company_logo?.data?.attributes?.url
//                                   // }
//                                   src={
//                                     image?.company_logo?.data?.attributes?.url
//                                   }
//                                   height={20}
//                                   width={80}
//                                   alt={
//                                     image?.company_logo?.data?.attributes?.name
//                                   }
//                                 />
//                               </div>
//                             )}
//                           </div>
//                         </Col>
//                       </Col>
//                     );
//                   })}
//                 </OwlCarousel>
//               </Row>
//             </Container>
//           </Container>
//         </div>
//       )}
//     </>
//   );
// };

// export default Testimonial;
// {
//   /* <Col className={style.box}>
//                       <div className={style.customer__message}>
//                         <div>
//                           {" "}
//                           <img src="https://cdn-gcp.new.marutitech.com/comma_new_3ac39a65c6.png" />
//                         </div>
//                         Lorem Ipsum is simply dummy text of the printing and
//                         typesetting industry. Lorem Ipsum has been the
//                         industry's standard dummy.
//                       </div>
//                       <div className={style.customer__name}>Lorem Ipsum</div>{" "}
//                     </Col>
//                     <Col className={style.boximage}>
//                       <img src="https://cdn-gcp.marutitech.com/wp-media/2019/11/1eb546d2-user-blank.png" />
//                     </Col> */
// }
