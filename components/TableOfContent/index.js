import { useRouter } from "next/router";
import React, { useState } from "react";
import Link from "next/link";
import style from "./TableOfContent.module.scss";

const TableOfContent = ({
  variant,
  blogDataContent,
  onIndexClick,
  isTocVisible = false,
  setTocVisible,
  // setActiveDiv,
  // activeDiv,
  activeDivOnScroll,
}) => {
  const [dropdown, setdropdown] = useState(false);
  const clickHandle = (id, index) => {
    // setActiveDiv(id);
    setdropdown(!dropdown);
    onIndexClick(index);
    setTocVisible(false);
  };

  // useEffect(() => {
  //   setActiveDiv(null);
  // }, [activeDivOnScroll]);

  const router = useRouter();
  const id = router.query.resource_id;
  const returnHash = (data) => {
    let word = data.split(" ");
    return word.slice(0, word.length - 1).join("_");
  };

  return (
    <>
      {variant === "primary" && (
        <div className={style.container}>
          <div className={style.container_div}>
            {blogDataContent.map(
              (data, index) =>
                data.title && (
                  <div
                    className={
                      activeDivOnScroll === data.id
                        ? `${style.scroll_item} ${style.active}`
                        : style.scroll_item
                    }
                    onClick={() => clickHandle(data.id, index)}
                    key={data.id}
                  >
                    <Link
                      href={{
                        pathname: `/${id}`,
                        hash: returnHash(data.title),
                      }}
                      replace
                    >
                      <div className={style.title}>{data.title}</div>
                    </Link>
                  </div>
                )
            )}
          </div>
        </div>
      )}
      {isTocVisible && (
        <div className={style.dropdown_menu}>
          {blogDataContent.map(
            (data, index) =>
              data.title && (
                <div
                  className={
                    // activeDivOnScroll === data.id
                    //   ? `${style.dropdown_menu_div} ${style.mobile_active}`
                    //   :
                    style.dropdown_menu_div
                  }
                  onClick={() => {
                    clickHandle(data.id, index);
                  }}
                  key={data.id}
                >
                  <div className={style.dropdown_data}>{data.title}</div>
                </div>
              )
          )}
        </div>
      )}
    </>
  );
};

export default TableOfContent;
