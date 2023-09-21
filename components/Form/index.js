import React, { useEffect } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import Buttons from "../Button";
import style from "./form.module.scss";
import { addMultiClasses } from "../../common/common";
import { useState } from "react";
import Head from "next/head";
import { useRouter } from "next/router";
import axiosInstance from "../../config/axiosConfig";
import Awards from "../Awards";
import axios from "axios";
import {
  isProduction,
  ipFindApiKey,
  googleClientId,
} from "../../config/variableConfig";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

// eslint-disable-next-line react/display-name
const Form = React.forwardRef((props, ref) => {
  const [fname, setFName] = useState("");
  const [lname, setLName] = useState("");
  const [email, setEmail] = useState("");
  const [contact, setContact] = useState("");
  const [captcha, setCaptcha] = useState("");
  const [aboutus, setAboutus] = useState("");
  const [message, setMessage] = useState("");
  const [company, setCompany] = useState("");
  const [whatcanwehelp, setWhatCanWeHelp] = useState("");
  const [designation, setDesignation] = useState("");
  const [fNameError, fNamesetError] = useState("");
  const [lNameError, lNamesetError] = useState("");
  const [EmailError, EmailsetError] = useState("");
  const [ValidateEmail, EmailsetValidate] = useState("");
  const [contactNumberError, setContactNumberError] = useState("");
  const [isContactNumberValid, setIsContactNumberValid] = useState(false);
  const [AboutusError, AboutussetValidate] = useState("");
  const [CompanyError, setCompanyError] = useState(false);
  const [FormSubmit, setFormSumbit] = useState(false);
  const [isLoading, setisLoading] = useState(false);
  const [adminTemplateId] = useState(props.admin_template_id);
  const [userTemplateId] = useState(props.user_template_id);
  const [getipAddress, setGetIPAddress] = useState("");
  const [secondarySource, setSecondarySource] = useState("");

  // Check if router is available and update secondary source for forms based on form url
  const { asPath, isReady } = useRouter();
  useEffect(() => {
    if (isReady) {
      asPath.includes("/free-consultation-page/")
        ? setSecondarySource("Free Consultation")
        : asPath.includes("/contact-us/")
        ? setSecondarySource("Contact Us")
        : ["ebooks", "case-study", "white-paper"].includes(asPath.split("/")[1])
        ? setSecondarySource("Content")
        : setSecondarySource("Content");
    }
  }, [asPath, isReady]);

  // get url params
  useEffect(() => {
    var regex = /[?&]([^=#]+)=([^&#]*)/g;
    if (typeof window !== "undefined") {
      var url = window.location.href;
      var params = {};
      var match;
      while ((match = regex.exec(url))) {
        params[match[1]] = match[2];
      }
      if (params && params?.utm_campaign && params?.utm_campaign !== null) {
        localStorage.setItem("utm_campaign", params?.utm_campaign);
      }
      if (params && params?.utm_medium && params?.utm_medium !== null) {
        localStorage.setItem("utm_medium", params?.utm_medium);
      }
      if (params && params?.utm_source && params?.utm_source !== null) {
        localStorage.setItem("utm_source", params?.utm_source);
      }
    }
  }, []);

  useEffect(() => {
    const getIP = async () => {
      try {
        const data = await axios.get("https://api.ipify.org/");
        let res = data?.data;
        setGetIPAddress(res);
      } catch (error) {
        console.log(error);
      }
    };
    getIP();
  }, []);

  const getAddressFromIP = async (ip) => {
    try {
      const data = await axios.get(
        `https://api.ipfind.com?ip=${ip}&auth=${ipFindApiKey}`
      );
      if (data.status === 200) {
        return data;
      }
    } catch (error) {
      console.log(error);
    }
  };

  //Added this function for GA-4, not is use at the moment, this will be required once upgrade GA to 4 from 3
  // const getHubspotUserProfile = async (email) => {
  //   try {
  //     const userData = {
  //       from_live: isProduction ? "true" : "false",
  //       email: email,
  //     };
  //     const userProfile = await axiosInstance
  //       .post("/api/get-hubspot-user", userData)
  //       .then(function (response) {
  //         // console.log("response", response);
  //         return response;
  //       });
  //     if (userProfile) {
  //       const userHubspotUrl = userProfile?.userUrl;
  //       if (typeof window !== "undefined") {
  //         window.dataLayer = window.dataLayer || [];
  //         window.dataLayer.push({ hubspot_user: userHubspotUrl });
  //         window.dataLayer.push({ client_test: "some_user_custom_data" });
  //         window.dataLayer.push({
  //           event: "clienttest",
  //           called_from_site: "true",
  //         });
  //         localStorage.setItem("userHubspotUrl", userHubspotUrl);
  //         localStorage.setItem("submittedForm", secondarySource);
  //         console.log("window.dataLayer", window.dataLayer);
  //       }
  //     }
  //     return userProfile;
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  function fNamehandleChange(e) {
    let item = e.target.value.replace(/[^a-z0-9 ]+/gim, "");
    if (item.length === 0) {
      fNamesetError(true);
    } else {
      fNamesetError(false);
    }
    setFName(item);
  }

  function fNameBlur(e) {
    let item = e.target.value.trim();
    fNamesetError(item ? false : true);
    setFName(item);
  }

  function lNamehandleChange(e) {
    let item = e.target.value.replace(/[^a-z0-9 ]+/gim, "");
    if (item.length === 0) {
      lNamesetError(true);
    } else {
      lNamesetError(false);
    }
    setLName(item);
  }

  function lNameBlur(e) {
    let item = e.target.value.trim();
    lNamesetError(item ? false : true);
    setLName(item);
  }

  function emailhandleChange(e) {
    let item = e.target.value;
    if (item.length === 0) {
      EmailsetError(true);
    } else {
      EmailsetError(false);
    }
    setEmail(item);
  }

  function validateEmail(e) {
    let item = e.target.value.trim();

    // var expr =
    // /^([\w-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/;
    var expr = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (!expr.test(item)) {
      EmailsetValidate(true);
    } else {
      EmailsetValidate(false);
      setEmail(item);
    }
  }

  function emailBlur(e) {
    let item = e.target.value.trim();
    EmailsetError(item ? false : true);
    setEmail(item);
  }

  function ContacthandleChange(phone) {
    if (phone.length < 1) {
      setContactNumberError("(This field is required.)");
      setIsContactNumberValid(false);
    } else if (phone.length < 8 || phone.length > 15) {
      setContactNumberError("(Phone number is not valid.)");
      setIsContactNumberValid(false);
    } else {
      setIsContactNumberValid(true);
      setContactNumberError("");
    }
  }

  function AboutushandleChange(e) {
    let item = e.target.value.replace(
      /[^a-zA-Z0-9\t\n ./<>?;:"'`!@#$%^&*()\[\]{}_+=|\\-]+/gim,
      ""
    );
    if (item.length === 0) {
      AboutussetValidate(true);
    } else {
      AboutussetValidate(false);
    }
    setAboutus(item);
  }

  function AboutushandleBlur(e) {
    let item = e.target.value.trim();
    AboutussetValidate(item ? false : true);
    setAboutus(item);
  }

  function CompanyhandleChange(e) {
    let item = e.target.value.replace(
      /[^a-zA-Z0-9\t\n ./,!@#&*()_|\\-]+/gim,
      ""
    );
    if (item.length === 0) {
      setCompanyError(true);
    } else {
      setCompanyError(false);
    }
    setCompany(item);
  }

  function companyHandleBlur(e) {
    let item = e.target.value.trim();
    setCompanyError(item ? false : true);
    setCompany(item);
  }

  function designationHandleBlur(e) {
    let item = e.target.value.trim();
    setDesignation(item);
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    let AddressFromIP = "";

    if (fname === "") {
      fNamesetError(true);
    }
    if (lname === "") {
      lNamesetError(true);
    }
    if (email === "") {
      EmailsetError(true);
    }
    if (contact === "") {
      setContactNumberError("(This field is required.)");
      setIsContactNumberValid(false);
    }
    if (aboutus === "") {
      AboutussetValidate(true);
    }
    if (props.variant === "primary" && company === "") {
      setCompanyError(true);
    }
    if (
      ValidateEmail === false &&
      fNameError === false &&
      lNameError === false &&
      EmailError === false &&
      isContactNumberValid === true &&
      AboutusError === false &&
      CompanyError === false
    ) {
      setisLoading(true);
      if (isLoading) {
        e.preventDefault();
      }
      AddressFromIP = await getAddressFromIP(getipAddress);

      // {---localstorage data---}
      const clarity = localStorage.getItem("clarity");
      const utm_medium = localStorage.getItem("utm_medium");
      const utm_source = localStorage.getItem("utm_source");
      const utm_campaign = localStorage.getItem("utm_campaign");
      const referrer = localStorage.getItem("referrer");

      const form_data = {
        first_name: fname,
        last_name: lname,
        email: email,
        phone_number: contact,
        hear_about_us: aboutus,
        company: company,
        designation: designation,
        message: message,
        primary_source: "Maruti Techlabs",
        secondary_source: secondarySource,
        url: window.location.href,
        client_id: `https://analytics.google.com/analytics/web/#/report/visitors-user-activity/${googleClientId}/_r.userId=${ga
          .getAll()[0]
          .get(
            "clientId"
          )}&_r.userListReportStates=&_r.userListReportId=visitors-legacy-user-id/`,
        ga_4_userid: ga.getAll()[0].get("clientId") || "",
        main_qustion: whatcanwehelp,
        clarity: clarity,
        utm_medium: utm_medium,
        utm_source: utm_source,
        utm_campaign: utm_campaign,
        referrer: referrer,
        ip_address: getipAddress,
        from_live: isProduction ? "true" : "false",
        city: AddressFromIP?.data?.city || "",
        country: AddressFromIP?.data?.country || "",
      };

      // {---send data to API when user submit form---}
      const mailSend = await axiosInstance
        .post("/api/get-in-touch", form_data)
        .then(function (response) {
          return response;
          // console.log(response, form_data);
        });

      // Get hubspot user url and save in localStorage
      //Added this function for GA-4, not is use at the moment, this will be required once upgrade GA to 4 from 3
      // if (mailSend) {
      //   const fetchHubspotUser = await getHubspotUserProfile(email);
      //   console.log("fetchHubspotUser", fetchHubspotUser);
      // }

      if (typeof window !== "undefined" && mailSend) {
        window.Calendly.initPopupWidget({
          url: `https://calendly.com/vyasdhanraj/30min?name=${fname}%20${lname}&email=${email}`,
          parentElement: document.getElementsByClassName(
            "calendly-popup-widget"
          ),
          event: "calendly.event_scheduled",
        });

        window.addEventListener("message", function (e) {
          if (
            isCalendlyEvent(e) &&
            e.data.event === "calendly.event_scheduled"
          ) {
            window.location.href = "/thank-you/";
          } else if ("calendly.profile_page_viewed") {
            const findClose = document.querySelector(".calendly-popup-close");

            const findOvelay = document.querySelector(
              ".calendly-close-overlay"
            );

            function handleClosing(event) {
              event.preventDefault();
              findClose.removeEventListener("click", handleClosing);
              findOvelay.removeEventListener("click", handleClosing);
              window.location.href = "/thank-you/";
            }

            if (findClose) {
              findClose.addEventListener("click", handleClosing);
              findOvelay.addEventListener("click", handleClosing);
            }
          }
        });
        setisLoading(false);
        setFormSumbit(true);
      }
    }
  };

  const handleSubmitResourceForm = async (e) => {
    e.preventDefault();
    let AddressFromIP = "";
    if (fname === "") {
      fNamesetError(true);
    }
    if (lname === "") {
      lNamesetError(true);
    }
    if (email === "") {
      EmailsetError(true);
    }
    if (contact === "") {
      setContactNumberError("(This field is required.)");
      setIsContactNumberValid(false);
    }
    if (aboutus === "") {
      AboutussetValidate(true);
    }
    if (company === "") {
      setCompanyError(true);
    }
    if (
      ValidateEmail === false &&
      fNameError === false &&
      lNameError === false &&
      EmailError === false &&
      CompanyError === false
    ) {
      setisLoading(true);
      if (isLoading) {
        e.preventDefault();
      }
      // {---localstorage data---}
      const clarity = localStorage.getItem("clarity");
      const utm_medium = localStorage.getItem("utm_medium");
      const utm_source = localStorage.getItem("utm_source");
      const utm_campaign = localStorage.getItem("utm_campaign");
      const referrer = localStorage.getItem("referrer");

      AddressFromIP = await getAddressFromIP(getipAddress);

      const form_data = {
        first_name: fname,
        last_name: lname,
        email: email,
        phone_number: contact,
        hear_about_us: aboutus,
        company: company,
        designation: designation,
        message: message,
        primary_source: "Maruti Techlabs",
        secondary_source: secondarySource,
        url: window.location.href,
        // client_id: ,
        ga_4_userid: ga.getAll()[0].get("clientId") || "",
        main_qustion: whatcanwehelp,
        clarity: clarity,
        utm_medium: utm_medium,
        utm_source: utm_source,
        utm_campaign: utm_campaign,
        referrer: referrer,
        admin_template_id: adminTemplateId,
        user_template_id: userTemplateId,
        ip_address: getipAddress,
        from_live: isProduction ? "true" : "false",
        city: AddressFromIP?.data?.city || "",
        country: AddressFromIP?.data?.country || "",
      };

      // {---send data to API when user submit form---}
      const mailSend = await axiosInstance
        .post("/api/send-resource-email", form_data)
        .then(function (response) {
          setisLoading(false);
          setFormSumbit(true);
          return response;
        });

      // Get hubspot user url and save in localStorage
      if (mailSend) {
        //Added this function for GA-4, not is use at the moment, this will be required once upgrade GA to 4 from 3
        // const fetchHubspotUser = await getHubspotUserProfile(email);
        // console.log("fetchHubspotUser", fetchHubspotUser);
        window.location.href = "/thank-you/";
      }
    }
  };

  // all service pages form submit
  const handleServicePageSubmit = async (e) => {
    e.preventDefault();
    let AddressFromIP = "";
    if (fname === "") {
      fNamesetError(true);
    }
    if (lname === "") {
      lNamesetError(true);
    }
    if (email === "") {
      EmailsetError(true);
    }
    if (contact === "") {
      setContactNumberError("(This field is required.)");
      setIsContactNumberValid(false);
    }
    if (aboutus === "") {
      AboutussetValidate(true);
    }
    if (
      ValidateEmail === false &&
      fNameError === false &&
      lNameError === false &&
      isContactNumberValid === true &&
      AboutusError === false &&
      EmailError === false
    ) {
      setisLoading(true);
      if (isLoading) {
        e.preventDefault();
      }
      // {---localstorage data---}
      const clarity = localStorage?.getItem("clarity");
      const utm_medium = localStorage?.getItem("utm_medium");
      const utm_source = localStorage?.getItem("utm_source");
      const utm_campaign = localStorage?.getItem("utm_campaign");
      const referrer = localStorage?.getItem("referrer");

      AddressFromIP = await getAddressFromIP(getipAddress);

      const form_data = {
        first_name: fname,
        last_name: lname,
        email: email,
        phone_number: contact,
        hear_about_us: aboutus,
        company: company,
        designation: designation,
        message: message,
        primary_source: "Maruti Techlabs",
        secondary_source: secondarySource,
        url: window.location.href,
        client_id: "",
        ga_4_userid: ga.getAll()[0].get("clientId") || "",
        main_qustion: whatcanwehelp,
        clarity: clarity,
        utm_medium: utm_medium,
        utm_source: utm_source,
        utm_campaign: utm_campaign,
        referrer: referrer,
        admin_template_id: adminTemplateId,
        user_template_id: userTemplateId,
        ip_address: getipAddress,
        from_live: isProduction ? "true" : "false",
        city: AddressFromIP?.data?.city || "",
        country: AddressFromIP?.data?.country || "",
      };

      // {---send data to API when user submit form---}
      const mailSend = await axiosInstance
        .post("/api/send-servicepage-email", form_data)
        .then(function (response) {
          console.log({ responsedata: response });
          setisLoading(false);
          setFormSumbit(true);
          return response;
        });

      // Get hubspot user url and save in localStorage
      if (mailSend) {
        //Added this function for GA-4, not is use at the moment, this will be required once upgrade GA to 4 from 3
        // const fetchHubspotUser = await getHubspotUserProfile(email);
        // console.log("fetchHubspotUser", fetchHubspotUser);
        window.location.href = "/thank-you/";
      }
    }
  };

  function isCalendlyEvent(e) {
    return e.data.event && e.data.event.indexOf("calendly") === 0;
  }
  const ForfreeConsultation =
    props.ForfreeConsultation == true ? style.textbox_free_consulatation : "";
  return (
    <>
      <Head>
        <link
          href="https://assets.calendly.com/assets/external/widget.css"
          rel="stylesheet"
        ></link>
        <script src="https://assets.calendly.com/assets/external/widget.js" defer></script>
      </Head>
      {props.variant === "primary" && (
        <Container className={style.container}>
          <div className={style.container_div}>
            <div className={style.form__title_primary}>
              {props?.formData?.title}
            </div>
          </div>
          <Container className={style.form_rectangle}>
            <div className={style.form_input}>
              <form onSubmit={handleSubmit}>
                <label className={style.label_input_first}>
                  First Name
                  <span className={style.fix_star}>* </span>
                  {fNameError ? (
                    <span className={style.error}>
                      (This field is required.)
                    </span>
                  ) : (
                    ""
                  )}
                </label>
                <input
                  className={addMultiClasses([
                    style.text_box,
                    ForfreeConsultation,
                  ])}
                  type="text"
                  value={fname}
                  name="fName"
                  maxLength="50"
                  onBlur={fNameBlur}
                  onChange={fNamehandleChange}
                />
                <label className={style.label_input}>
                  Last Name<span className={style.fix_star}>* </span>
                  {lNameError ? (
                    <span className={style.error}>
                      (This field is required.)
                    </span>
                  ) : (
                    ""
                  )}
                </label>
                <br></br>
                <input
                  className={addMultiClasses([
                    style.text_box,
                    ForfreeConsultation,
                  ])}
                  type="text"
                  value={lname}
                  name="lName"
                  maxLength="50"
                  onBlur={lNameBlur}
                  onChange={lNamehandleChange}
                />
                <label className={style.label_input}>
                  Email<span className={style.fix_star}>* </span>{" "}
                  {EmailError ? (
                    <span className={style.error}>
                      (This field is required.)
                    </span>
                  ) : ValidateEmail ? (
                    <span className={style.error}>
                      (The e-mail address entered is invalid.)
                    </span>
                  ) : (
                    ""
                  )}
                </label>
                <br></br>
                <input
                  className={addMultiClasses([
                    style.text_box,
                    ForfreeConsultation,
                  ])}
                  type="text"
                  value={email}
                  name="email"
                  maxLength="80"
                  onBlur={emailBlur}
                  onChange={(e) => {
                    emailhandleChange(e);
                    validateEmail(e);
                  }}
                />
                <label className={style.label_input}>
                  Contact No<span className={style.fix_star}>* </span>
                  <span className={style.error}>{contactNumberError}</span>
                </label>
                <br></br>
                <PhoneInput
                  inputClass={style.ph_number_countries_input_free_con_page}
                  buttonClass={style.ph_number_countries_button_free_con_page}
                  dropdownClass={
                    style.ph_number_countries_dropdown_free_con_page
                  }
                  preferredCountries={[
                    "us",
                    "gb",
                    "sg",
                    "de",
                    "sa",
                    "in",
                    "nl",
                    "au",
                    "be",
                    "my",
                  ]}
                  country={"us"}
                  value={contact}
                  onChange={(phone) => {
                    ContacthandleChange(phone);
                    setContact(phone);
                  }}
                />
                <label className={style.label_input}>
                  How Did You Hear About Us?
                  <span className={style.fix_star}>* </span>
                  {AboutusError ? (
                    <span className={style.error}>
                      (This field is required.)
                    </span>
                  ) : (
                    ""
                  )}
                </label>
                <br></br>
                <input
                  className={addMultiClasses([
                    style.text_box,
                    ForfreeConsultation,
                  ])}
                  type="text"
                  value={aboutus}
                  name="hear_about_us"
                  maxLength="500"
                  onBlur={AboutushandleBlur}
                  onChange={AboutushandleChange}
                />
                <label className={style.label_input_inp}>
                  Company
                  <span className={style.fix_star}>* </span>
                  {CompanyError ? (
                    <span className={style.error}>
                      (This field is required.)
                    </span>
                  ) : (
                    ""
                  )}
                </label>
                <br></br>
                <input
                  className={addMultiClasses([
                    style.text_box,
                    ForfreeConsultation,
                  ])}
                  type="text"
                  value={company}
                  name="company-name"
                  maxLength="50"
                  onBlur={companyHandleBlur}
                  onChange={(e) => {
                    CompanyhandleChange(e);
                  }}
                />
                <label className={style.label_input_inp}>Designation</label>
                <br></br>
                <input
                  className={addMultiClasses([
                    style.text_box,
                    ForfreeConsultation,
                  ])}
                  type="text"
                  value={designation}
                  name="designation"
                  maxLength="50"
                  onBlur={designationHandleBlur}
                  onChange={(e) => {
                    setDesignation(() =>
                      e.target.value.replace(
                        /[^a-zA-Z0-9\t\n ./,@()_|\\-]+/gim,
                        ""
                      )
                    );
                  }}
                />
                <label className={style.label_input_inp}>
                  What Can We Help You With?
                </label>
                <br></br>
                <textarea
                  id="consultation-main-question"
                  className={style.text_box_textarea}
                  type="text"
                  value={message}
                  name="message"
                  maxLength="2500"
                  onBlur={(e) => {
                    setMessage(() => e.target.value.trim());
                  }}
                  onChange={(e) => {
                    setMessage(() => e.target.value);
                  }}
                ></textarea>
                <div className={style.button_div_primary}>
                  {isLoading ? (
                    <>
                      <div className={style.loader}></div>
                    </>
                  ) : FormSubmit ? (
                    <Buttons
                      variant="secondary_animated"
                      name="✓"
                      // url={"#"}
                    />
                  ) : (
                    <Buttons
                      variant="secondary_animated"
                      name="Submit"
                      // url={"#"}
                    />
                  )}
                  {/* </Link> */}
                </div>
                <div className="calendly-popup-widget"></div>
              </form>
            </div>
          </Container>
        </Container>
      )}
      {props.variant === "resources__primary" && (
        <Container className={style.resources_container}>
          <div className={style.form__title}>
            Fill the form to see the full document
          </div>
          <Container className={style.resources_form_rectangle}>
            <div className={style.form_input}>
              <form onSubmit={handleSubmitResourceForm}>
                <label className={style.label_input_first}>
                  First Name
                  <span className={style.fix_star}>* </span>
                  {fNameError ? (
                    <span className={style.error}>
                      (This field is required.)
                    </span>
                  ) : (
                    ""
                  )}
                </label>
                <input
                  className={addMultiClasses([
                    style.text_box,
                    ForfreeConsultation,
                  ])}
                  type="text"
                  value={fname}
                  name="fName"
                  maxLength="50"
                  onBlur={fNameBlur}
                  onChange={fNamehandleChange}
                />
                <label className={style.label_input}>
                  Last Name<span className={style.fix_star}>* </span>
                  {lNameError ? (
                    <span className={style.error}>
                      (This field is required.)
                    </span>
                  ) : (
                    ""
                  )}
                </label>
                <br></br>
                <input
                  className={addMultiClasses([
                    style.text_box,
                    ForfreeConsultation,
                  ])}
                  type="text"
                  value={lname}
                  name="lName"
                  maxLength="50"
                  onBlur={lNameBlur}
                  onChange={lNamehandleChange}
                />
                <label className={style.label_input}>
                  Email<span className={style.fix_star}>* </span>
                  {EmailError ? (
                    <span className={style.error}>
                      (This field is required.)
                    </span>
                  ) : ValidateEmail ? (
                    <span className={style.error}>
                      (The e-mail address entered is invalid.)
                    </span>
                  ) : (
                    ""
                  )}
                </label>
                <br></br>
                <input
                  className={addMultiClasses([
                    style.text_box,
                    ForfreeConsultation,
                  ])}
                  type="text"
                  value={email}
                  name="email"
                  maxLength="80"
                  onBlur={emailBlur}
                  onChange={(e) => {
                    emailhandleChange(e);
                    validateEmail(e);
                  }}
                />
                <label className={style.label_input}>Designation</label>
                <br></br>
                <input
                  className={addMultiClasses([
                    style.text_box,
                    ForfreeConsultation,
                  ])}
                  type="text"
                  value={designation}
                  name="designation"
                  maxLength="50"
                  onBlur={designationHandleBlur}
                  onChange={(e) => {
                    setDesignation(() =>
                      e.target.value.replace(
                        /[^a-zA-Z0-9\t\n ./,@()_|\\-]+/gim,
                        ""
                      )
                    );
                  }}
                />
                <label className={style.label_input}>
                  Company
                  <span className={style.fix_star}>* </span>
                  {CompanyError ? (
                    <span className={style.error}>
                      (This field is required.)
                    </span>
                  ) : (
                    ""
                  )}
                </label>
                <br></br>
                <input
                  className={addMultiClasses([
                    style.text_box,
                    ForfreeConsultation,
                  ])}
                  type="text"
                  value={company}
                  name="company-name"
                  maxLength="50"
                  onBlur={companyHandleBlur}
                  onChange={(e) => {
                    CompanyhandleChange(e);
                  }}
                />
                <div className={style.button_div}>
                  {isLoading ? (
                    <>
                      <div className={style.loader}></div>
                    </>
                  ) : FormSubmit ? (
                    <Buttons variant="secondary_animated" name="✓" />
                  ) : (
                    <Buttons variant="secondary_animated" name="Submit" />
                  )}
                  {/* </Link> */}
                </div>
              </form>
            </div>
          </Container>
        </Container>
      )}
      {props.variant === "secondary" && (
        <Container
          className={addMultiClasses([
            style.container,
            style.container__secondary,
          ])}
        >
          <div className={style.form__title__secondary}>
            You are here. But where do you want to be? Tell us how we can help
            you.
          </div>
          <Container
            className={addMultiClasses([
              // style.form_rectangle,
              style.form_rectangle__secondary,
            ])}
          >
            <div
              className={addMultiClasses([
                style.form_input,
                style.form_input__secondary,
              ])}
            >
              <div className={style.formHeading}>
                <div>Contact Us</div>
              </div>
              <form onSubmit={handleSubmit}>
                <label className={style.label_input_first__secondary}>
                  First Name
                  <span className={style.fix_star}>* </span>
                  {fNameError ? (
                    <span className={style.error}>
                      (This field is required.)
                    </span>
                  ) : (
                    ""
                  )}
                </label>
                <input
                  className={addMultiClasses([
                    style.text_box,
                    style.text_box__secondary,
                  ])}
                  type="text"
                  value={fname}
                  name="fName"
                  maxLength="50"
                  onBlur={fNameBlur}
                  onChange={fNamehandleChange}
                />
                <label className={style.label_input__secondary}>
                  Last Name<span className={style.fix_star}>* </span>
                  {lNameError ? (
                    <span className={style.error}>
                      (This field is required.)
                    </span>
                  ) : (
                    ""
                  )}
                </label>
                <br></br>
                <input
                  className={addMultiClasses([
                    style.text_box,
                    style.text_box__secondary,
                  ])}
                  type="text"
                  value={lname}
                  name="lName"
                  maxLength="50"
                  onBlur={lNameBlur}
                  onChange={lNamehandleChange}
                />
                <label className={style.label_input__secondary}>
                  Email Address<span className={style.fix_star}>* </span>
                  {EmailError ? (
                    <span className={style.error}>
                      (This field is required.)
                    </span>
                  ) : ValidateEmail ? (
                    <span className={style.error}>
                      (The e-mail address entered is invalid.)
                    </span>
                  ) : (
                    ""
                  )}
                </label>
                <br></br>
                <input
                  className={addMultiClasses([
                    style.text_box,
                    style.text_box__secondary,
                  ])}
                  type="text"
                  value={email}
                  name="email"
                  maxLength="80"
                  onBlur={emailBlur}
                  onChange={(e) => {
                    emailhandleChange(e);
                    validateEmail(e);
                  }}
                />
                <label className={style.label_input__secondary}>
                  Phone Number<span className={style.fix_star}>* </span>
                  <span className={style.error}>{contactNumberError}</span>
                </label>
                <br></br>
                <PhoneInput
                  inputClass={style.ph_number_countries_input}
                  buttonClass={style.ph_number_countries_button}
                  dropdownClass={style.ph_number_countries_dropdown}
                  preferredCountries={[
                    "us",
                    "gb",
                    "sg",
                    "de",
                    "sa",
                    "in",
                    "nl",
                    "au",
                    "be",
                    "my",
                  ]}
                  country={"us"}
                  value={contact}
                  onChange={(phone) => {
                    ContacthandleChange(phone);
                    setContact(phone);
                  }}
                />
                <label className={style.label_input__secondary}>
                  How Did You Hear About Us?
                  <span className={style.fix_star}>* </span>
                  {AboutusError ? (
                    <span className={style.error}>
                      (This field is required.)
                    </span>
                  ) : (
                    ""
                  )}
                  <br></br>
                </label>
                <input
                  className={addMultiClasses([
                    style.text_box,
                    style.text_box__secondary,
                  ])}
                  type="text"
                  value={aboutus}
                  name="hear-about-us"
                  maxLength="500"
                  onBlur={AboutushandleBlur}
                  onChange={AboutushandleChange}
                />
                <label className={style.label_input__secondary}>Message</label>
                <br></br>
                <textarea
                  id="consultation-main-question"
                  className={addMultiClasses([
                    style.text_box_textarea,
                    style.text_box_textarea__secondary,
                  ])}
                  type="text"
                  name="message"
                  value={message}
                  maxLength="2500"
                  onBlur={(e) => {
                    setMessage(() => e.target.value.trim());
                  }}
                  onChange={(e) => {
                    setMessage(() => e.target.value);
                  }}
                ></textarea>
                <div
                  className={addMultiClasses([
                    style.button_div,
                    style.button_div__secondary,
                  ])}
                >
                  {isLoading ? (
                    <>
                      <div className={style.loader}></div>
                    </>
                  ) : FormSubmit ? (
                    <Buttons variant="secondary_animated" name="✓" />
                  ) : (
                    <Buttons variant="secondary_animated" name="Submit" />
                  )}
                </div>
                <div className="calendly-popup-widget"></div>
              </form>
            </div>
          </Container>
        </Container>
      )}
      {props.variant === "servicepage_form" && (
        <Container fluid={+true} ref={ref} className={style.scrolling}>
          <Row style={{ margin: "0px" }} fluid={+true}>
            <Col md={6} className={style.serviceform__left}>
              <div className={style.serviceform__left__div}>
                <h2>{props?.formdata?.leftside_award?.title}</h2>
                {props?.formdata?.leftside_award?.description && (
                  <h6>{props?.formdata?.leftside_award?.description}</h6>
                )}

                <Awards
                  awardData={props?.formdata?.leftside_award}
                  title={false}
                  desc={false}
                  type="awards"
                  align="horizontal"
                  ForPaddingTop={true}
                  ForImg={true}
                />
              </div>
            </Col>
            <Col md={6} className={style.serviceform__right}>
              {" "}
              <form onSubmit={handleServicePageSubmit}>
                <label className={style.label_input_first__secondary}>
                  First Name
                  <span className={style.fix_star}>* </span>
                  {fNameError ? (
                    <span className={style.error}>
                      (This field is required.)
                    </span>
                  ) : (
                    ""
                  )}
                </label>
                <input
                  className={style.text_box}
                  type="text"
                  value={fname}
                  name="fName"
                  maxLength="50"
                  onBlur={fNameBlur}
                  onChange={fNamehandleChange}
                />
                <label className={style.label_input__secondary}>
                  Last Name<span className={style.fix_star}>* </span>
                  {lNameError ? (
                    <span className={style.error}>
                      (This field is required.)
                    </span>
                  ) : (
                    ""
                  )}
                </label>
                <br></br>
                <input
                  className={style.text_box}
                  type="text"
                  value={lname}
                  name="lName"
                  maxLength="50"
                  onBlur={lNameBlur}
                  onChange={lNamehandleChange}
                />
                <label className={style.label_input__secondary}>
                  Email Address<span className={style.fix_star}>* </span>
                  {EmailError ? (
                    <span className={style.error}>
                      (This field is required.)
                    </span>
                  ) : ValidateEmail ? (
                    <span className={style.error}>
                      (The e-mail address entered is invalid.)
                    </span>
                  ) : (
                    ""
                  )}
                </label>
                <br></br>
                <input
                  className={style.text_box}
                  type="text"
                  value={email}
                  name="email"
                  maxLength="80"
                  onBlur={emailBlur}
                  onChange={(e) => {
                    emailhandleChange(e);
                    validateEmail(e);
                  }}
                />
                <label className={style.label_input__secondary}>
                  Phone Number<span className={style.fix_star}>* </span>
                  <span className={style.error}>{contactNumberError}</span>
                </label>
                <br></br>
                <PhoneInput
                  inputClass={style.ph_number_countries_input_services_page}
                  buttonClass={style.ph_number_countries_button_services_page}
                  dropdownClass={
                    style.ph_number_countries_dropdown_services_page
                  }
                  preferredCountries={[
                    "us",
                    "gb",
                    "sg",
                    "de",
                    "sa",
                    "in",
                    "nl",
                    "au",
                    "be",
                    "my",
                  ]}
                  country={"us"}
                  value={contact}
                  onChange={(phone) => {
                    ContacthandleChange(phone);
                    setContact(phone);
                  }}
                />
                <label className={style.label_input__secondary}>
                  How Did You Hear About Us?
                  <span className={style.fix_star}>* </span>
                  {AboutusError ? (
                    <span className={style.error}>
                      (This field is required.)
                    </span>
                  ) : (
                    ""
                  )}
                  <br></br>
                </label>
                <input
                  className={style.text_box}
                  type="text"
                  value={aboutus}
                  name="hear-about-us"
                  maxLength="500"
                  onBlur={AboutushandleBlur}
                  onChange={AboutushandleChange}
                />
                <label className={style.label_input__secondary}>Message</label>
                <br></br>
                <textarea
                  id="consultation-main-question"
                  className={addMultiClasses([
                    style.text_box_textarea__service,
                    style.textarea__servicepage,
                  ])}
                  type="text"
                  name="message"
                  value={message}
                  maxLength="2500"
                  onBlur={(e) => {
                    setMessage(() => e.target.value.trim());
                  }}
                  onChange={(e) => {
                    setMessage(() => e.target.value);
                  }}
                ></textarea>
                {isLoading ? (
                  <>
                    <div className={style.service_formloader}></div>
                  </>
                ) : FormSubmit ? (
                  <Button className={style.service__form__btn} type="submit">
                    {"✓"}
                  </Button>
                ) : (
                  <Button className={style.service__form__btn} type="submit">
                    {props?.formdata?.button?.title}
                  </Button>
                )}
              </form>{" "}
            </Col>
          </Row>
        </Container>
      )}
    </>
  );
});

export default Form;
