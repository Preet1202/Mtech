import React from "react";
import style from "./rating.module.scss";

const Rating = ({ value, text, color }) => {
  return (
    <>
      {/* <div className="rating">
        <span>
          <i
            style={{ color }}
            className={
              value >= 1
                ? "fas fa-star"
                : value >= 0.5
                ? "fas fa-star-half-alt"
                : "far fa-star"
            }
          ></i>
        </span>
        <span>
          <i
            style={{ color }}
            className={
              value >= 2
                ? "fas fa-star"
                : value >= 1.5
                ? "fas fa-star-half-alt"
                : "far fa-star"
            }
          ></i>
        </span>{" "}
        <span>
          <i
            style={{ color }}
            className={
              value >= 3
                ? "fas fa-star"
                : value >= 2.5
                ? "fas fa-star-half-alt"
                : "far fa-star"
            }
          ></i>
        </span>{" "}
        <span>
          <i
            style={{ color }}
            className={
              value >= 4
                ? "fas fa-star"
                : value >= 3.5
                ? "fas fa-star-half-alt"
                : "far fa-star"
            }
          ></i>
        </span>{" "}
        <span>
          <i
            style={{ color }}
            className={
              value >= 5
                ? "fas fa-star"
                : value >= 4.5
                ? "fas fa-star-half-alt"
                : "far fa-star"
            }
          ></i>
        </span>
        <span>{text && text}</span>
      </div> */}

      <div>
        <span className="star">
          {value >= 1 ? (
            <span className={style.full}> &#9733;</span>
          ) : value >= 0.5 ? (
            <svg height="24" viewBox="0 0 24 24" width="24">
              <defs>
                <linearGradient id="grad2">
                  <stop offset="0%" stopColor="yellow" />
                  <stop offset="60%" stopColor="yellow" />
                  <stop offset="60%" stopColor="white" />
                  <stop offset="100%" stopColor="white" />
                </linearGradient>
              </defs>
              <path d="M0 0h24v24H0z" fill="none" />
              <path
                fill="url(#grad2)"
                stroke="yellow"
                strokeWidth="1.5"
                d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"
              />
              <path d="M0 0h24v24H0z" fill="none" />
            </svg>
          ) : (
            <span className={style.notfilled}> &#9733;</span>
          )}
        </span>
        <span className="star">
          {value >= 2 ? (
            <span className={style.full}> &#9733;</span>
          ) : value >= 1.5 ? (
            <svg height="18" viewBox="0 0 29 29 " width="18">
              <defs>
                <linearGradient id="grad2">
                  <stop offset="0%" stopColor="#FEBE10" />
                  <stop offset="50%" stopColor="#FEBE10" />
                  <stop offset="50%" stopColor="#fff" />
                  <stop offset="100%" stopColor="#fff" />
                </linearGradient>
              </defs>
              <path d="M0 0h24v24H0z" fill="none" />
              <path
                fill="url(#grad2)"
                stroke="#FEBE10"
                strokeWidth="2"
                d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"
              />
              <path d="M0 0h24v24H0z" fill="none" />
            </svg>
          ) : (
            <span className={style.notfilled}> &#9733;</span>
          )}
        </span>
        <span className="star">
          {value >= 3 ? (
            <span className={style.full}> &#9733;</span>
          ) : value >= 2.5 ? (
            <svg height="24" viewBox="0 0 24 24" width="24">
              <defs>
                <linearGradient id="grad2">
                  <stop offset="0%" stopColor="yellow" />
                  <stop offset="60%" stopColor="yellow" />
                  <stop offset="60%" stopColor="white" />
                  <stop offset="100%" stopColor="white" />
                </linearGradient>
              </defs>
              <path d="M0 0h24v24H0z" fill="none" />
              <path
                fill="url(#grad2)"
                stroke="yellow"
                strokeWidth="1.5"
                d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"
              />
              <path d="M0 0h24v24H0z" fill="none" />
            </svg>
          ) : (
            <span className={style.notfilled}> &#9733;</span>
          )}
        </span>
        <span className="star">
          {value >= 4 ? (
            <span className={style.full}> &#9733;</span>
          ) : value >= 3.5 ? (
            <svg height="18" viewBox="0 0 29 29 " width="18">
              <defs>
                <linearGradient id="grad2">
                  <stop offset="0%" stopColor="#FEBE10" />
                  <stop offset="50%" stopColor="#FEBE10" />
                  <stop offset="50%" stopColor="#fff" />
                  <stop offset="100%" stopColor="#fff" />
                </linearGradient>
              </defs>
              <path d="M0 0h24v24H0z" fill="none" />
              <path
                fill="url(#grad2)"
                stroke="#FEBE10"
                strokeWidth="2"
                d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"
              />
              <path d="M0 0h24v24H0z" fill="none" />
            </svg>
          ) : (
            <span className={style.notfilled}> &#9733;</span>
          )}
        </span>
        <span className="star">
          {value >= 5 ? (
            <span className={style.full}> &#9733;</span>
          ) : value >= 4.5 ? (
            <svg height="18" viewBox="0 0 29 29 " width="18">
              <defs>
                <linearGradient id="grad2">
                  <stop offset="0%" stopColor="#FEBE10" />
                  <stop offset="50%" stopColor="#FEBE10" />
                  <stop offset="50%" stopColor="#fff" />
                  <stop offset="100%" stopColor="#fff" />
                </linearGradient>
              </defs>
              <path d="M0 0h24v24H0z" fill="none" />
              <path
                fill="url(#grad2)"
                stroke="#FEBE10"
                strokeWidth="2"
                d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"
              />
              <path d="M0 0h24v24H0z" fill="none" />
            </svg>
          ) : (
            <span className={style.notfilled}> &#9733;</span>
          )}
        </span>
      </div>
    </>
  );
};
Rating.defaultProps = {
  color: "#FEBE10",
};

export default Rating;
