import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Container } from "react-bootstrap";
import style from "./readreview.module.scss";
import Rating from "../Rating";

const ReadReview = ({ readreview, color }) => {
  return (
    <>
      <Container
        fluid
        className={
          color === "violettop"
            ? style.violet
            : color === "redtop"
            ? style.red
            : color === "violetbottom"
            ? style.violet__bottom
            : ""
        }
      >
        <Container className={style.review__box}>
          <h3 className={style.title}>{readreview?.title}</h3>

          {readreview?.ReviewStar?.map((data, index) => {
            return (
              <React.Fragment key={data?.id}>
                <div className={style.rating__container}>
                  <div className={style.review__col}>
                    <Image
                      src={data?.images?.data?.attributes.url}
                      layout="intrinsic"
                      height={data?.images?.data?.attributes?.height}
                      width={data?.images?.data?.attributes?.width}
                      priority
                    />
                  </div>

                  <Rating value={data?.stars} />
                </div>
              </React.Fragment>
            );
          })}
        </Container>
      </Container>
    </>
  );
};

export default ReadReview;
