import React from "react";
import { Container } from "react-bootstrap";
import style from "./resourceDescription.module.scss";
import { addMultiClasses } from "../../common/common";

function ResourceDescription({ data }) {
  const RenderHTML = (props) => (
    <p
      className={props.classNames}
      dangerouslySetInnerHTML={{ __html: props.HTML }}
    ></p>
  );
  return (
    <Container className={style.resource_desc_container}>
      <div className={style.reviewTitle}>{data?.title}</div>
      <div className={style.text_block}>
        {data?.description?.map((data) => {
          return (
            <RenderHTML
              classNames={addMultiClasses(style.text_block_para)}
              HTML={data}
            />
          );
        })}
        <p className={style.text_block_para}>{data?.overview_points?.title}</p>
        {data?.overview_points?.point_list?.map((data, index) => {
          return (
            <ul key={index} className={style.text_block_ul}>
              <li className={style.text_block_li}>{data}</li>
            </ul>
          );
        })}
      </div>
    </Container>
  );
}

export default ResourceDescription;
