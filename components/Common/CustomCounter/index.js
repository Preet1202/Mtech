import React from "react";
import CountUp from "react-countup";
import VisibilitySensor from "react-visibility-sensor";

function CustomCounter({ fullNumber, reloadOnScroll = true }) {
  if (!fullNumber) return <></>;
  let stripedNumber = "";
  let stripedPrefix = "";
  let stripedSuffix = "";
  const showDecimal = fullNumber.includes(".") ? true : false;
  if (fullNumber.includes("/")) {
    stripedNumber = fullNumber.substring(0, fullNumber.indexOf("/"));
    stripedSuffix = "/" + fullNumber.split("/").pop();
  } else if (fullNumber.includes(":")) {
    stripedNumber = fullNumber.substring(0, fullNumber.indexOf(":"));
    stripedSuffix = ":" + fullNumber.split(":").pop();
  } else {
    stripedNumber = fullNumber.replace(/\D/g, "");
    stripedPrefix = fullNumber.substring(0, fullNumber.indexOf(stripedNumber));
    stripedSuffix = fullNumber.split(stripedNumber).pop();
  }
  return (
    <CountUp
      start={0}
      end={stripedNumber}
      duration={2.75}
      separator=" "
      redraw={false}
      suffix={stripedSuffix}
      prefix={stripedPrefix}
      decimals={showDecimal}
    >
      {reloadOnScroll &&
        (({ countUpRef, start }) => (
          <VisibilitySensor onChange={start}>
            <span ref={countUpRef} />
          </VisibilitySensor>
        ))}
    </CountUp>
  );
}
export default CustomCounter;
