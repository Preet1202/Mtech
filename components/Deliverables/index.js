import React from "react";
import style from "./deliverables.module.scss";
import { addMultiClasses } from "../../common/common";
import { Container } from "react-bootstrap";

function Deliverables(props) {
  const deliverablesData = props?.deliverablesData;
  if (!deliverablesData) return <></>;

  const variantClass =
    deliverablesData.Variant == "Yellow"
      ? style.deliverables__variant_Yellow
      : deliverablesData.Variant == "Orange"
      ? style.deliverables__variant_Orange
      : style.deliverables__variant_Violet;
  return (
    <>
      <Container
        fluid
        className={addMultiClasses([
          style.deliverables__maincontainer,
          variantClass,
        ])}
      >
        <Container>
          <h2 className={style.deliverables__title}>
            {deliverablesData?.Title}
          </h2>
          <div className={style.deliverables__row}>
            {deliverablesData?.RoadBox?.map((data) => {
              const for_deliverables = data?.Title ? "" : style.forDeliverables;
              return (
                <React.Fragment key={data?.id}>
                  <div
                    className={addMultiClasses([
                      style.deliverables__box,
                      for_deliverables,
                    ])}
                  >
                    {data?.Title && (
                      <>
                        <h3>{data?.Title}</h3>
                        <div className={style.border__line}></div>
                      </>
                    )}
                    <div
                      className={style.deliverables__box__desc}
                      dangerouslySetInnerHTML={{ __html: data?.Description }}
                    ></div>
                  </div>
                </React.Fragment>
              );
            })}
          </div>
        </Container>
      </Container>
    </>
  );
}

export default Deliverables;
