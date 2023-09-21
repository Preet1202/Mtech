import React from "react";
import Image from "next/image";
import { Container } from "react-bootstrap";
import style from "./devprocess.module.scss";
import { addMultiClasses } from "../../common/common";

const DevProcess = (props) => {
  const ForTitleBottomPadding = props?.data?.description
    ? ""
    : style.for_tech_stack_title_padding;
  return (
    <Container
      fluid={+true}
      className={
        props.color === "violet" ? style.dev__violet : style.dev__white
      }
    >
      <Container>
        <h2
          className={addMultiClasses([style.title, ForTitleBottomPadding])}
          style={{
            maxWidth: `${props?.maxWidth}`,
            color: props?.color && "#FFFFFF",
          }}
        >
          {props?.data?.title}
        </h2>
        {props?.data?.description && (
          <div
            className={style.description}
            dangerouslySetInnerHTML={{ __html: props?.data?.description }}
            style={{ color: props?.color && "#FFFFFF" }}
          ></div>
        )}

        <div
          className={style.imagediv}
          style={{
            height: props?.height && props?.height,
            // paddingBottom: props?.paddingBottom,
          }}
        >
          <Image
            priority
            layout="intrinsic"
            // height={704}
            // width={966}
            height={props?.data?.image?.data?.attributes?.height}
            width={props?.data?.image?.data?.attributes?.width}
            src={props?.data?.image?.data?.attributes?.url}
            alt={props?.data?.image?.data?.attributes?.alternativeText}
            objectFit="contain"
          />
        </div>
      </Container>
    </Container>
  );
};

export default DevProcess;
