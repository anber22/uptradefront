import { useRef, useState } from "react";
import { useAsyncFn } from "react-use";
import { NextSeo } from "next-seo";
import { getNavBar } from "../utils/getNavBar";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";

export default function Contact({
  navbar,
  appleList,
  sellNavbar,
  sellAppleList,
}) {
  const fullNameRef = useRef();
  const emailRef = useRef();
  const messageRef = useRef();
  const [errorMessages, setErrorMessages] = useState({
    fullName: "",
    email: "",
    message: "",
  });
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const [, creatEmail] = useAsyncFn(async () => {
    if (
      !emailRef.current.value ||
      !fullNameRef.current.value ||
      !messageRef.current.value
    ) {
      setErrorMessages({
        fullName: !fullNameRef.current.value ? "Please input" : "",
        email: !emailRef.current.value
          ? "Please enter a valid email"
          : !emailRef.current.value.match(
              /^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/g
            )
          ? "Invalid email address, only letters, numbers, periods (‘.’), and underscores (‘_’) are allowed in your user name and domain."
          : "",
        message: !messageRef.current.value ? "Please input" : "",
      });
      return;
    }

    if (
      !emailRef.current.value.match(
        /^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/g
      )
    ) {
      setErrorMessages((prev) => ({
        ...prev,
        email:
          "Invalid email address, only letters, numbers, periods (‘.’), and underscores (‘_’) are allowed in your user name and domain.",
      }));
      return;
    }

    const content = `<html>
    <body>
        <p>
            <div>
                <label>From</label>
                ${emailRef.current.value}
            </div>
            <div>
                <label>Full Name</label>
                ${fullNameRef.current.value}
            </div>
            <div>
                <label>Message</label>
                ${messageRef.current.value}
            </div>
        </p>
    </body>
    </html>`;

    await fetch(
      "https://api-gateway.uptradeit.com/api/message_books/createemail",
      {
        method: "POST",
        headers: {
          ["Content-Type"]: "application/json",
        },
        body: JSON.stringify({
          toEmail: emailRef.current.value,
          content,
          nickName: "",
          subject: "Customer Message",
        }),
      }
    ).then(() => setSubmitSuccess(true));
  }, []);

  return (
    <>
      <Header navbar={navbar} sellNavbar={sellNavbar} />
      <main className="contact-page">
        <NextSeo
          title="Contact us | UpTrade"
          description="Experience the UpTrade Difference. Buy the Best Certified Used Phones for Less. High Quality Refurbished Phones. Money Back Guarantee. Sell Your Used Phone For More. Fast and Easy. Free Shipping. | Contact"
          canonical={`${process.env.BASEURL}/contact`}
          openGraph={{
            title: "Contact us | UpTrade",
            type: "Website",
            images: [
              {
                url: `${process.env.BASEURL}/og_logo.png`,
                width: 200,
                height: 200,
              },
            ],
            url: `${process.env.BASEURL}/contact`,
            description:
              "Experience the UpTrade Difference. Buy the Best Certified Used Phones for Less. High Quality Refurbished Phones. Money Back Guarantee. Sell Your Used Phone For More. Fast and Easy. Free Shipping. | Contact",
            site_name: "UpTrade",
          }}
        />
        <div className="title-container">
          <h1>Contact us?</h1>
        </div>
        <div className="content-container">
          <div className="contact-card">
            <h2>Send us message</h2>
            <div className="card-content">
              <div>
                <div className="name-fields">
                  <div className="card-content-field">
                    <label>Full Name:</label>
                    <input
                      type="text"
                      ref={fullNameRef}
                      onChange={() => {
                        setSubmitSuccess(false);
                        setErrorMessages((prev) => ({
                          ...prev,
                          fullName: "",
                        }));
                      }}
                    />
                    <div className="error-message">
                      {errorMessages.fullName}
                    </div>
                  </div>
                  <div className="card-content-field">
                    <label>Email:</label>
                    <input
                      type="email"
                      ref={emailRef}
                      onChange={() => {
                        setSubmitSuccess(false);
                        setErrorMessages((prev) => ({
                          ...prev,
                          email: "",
                        }));
                      }}
                    />
                    <div className="error-message">{errorMessages.email}</div>
                  </div>
                </div>
                <div className="card-content-field">
                  <label>Message:</label>
                  <input
                    type="text"
                    className="multiline-input"
                    onChange={() => {
                      setSubmitSuccess(false);
                      setErrorMessages((prev) => ({
                        ...prev,
                        message: "",
                      }));
                    }}
                    ref={messageRef}
                  />
                  <div className="error-message">{errorMessages.message}</div>
                </div>

                <div className="button-container">
                  <button onClick={creatEmail}>Submit</button>
                  <div className="contact-success-message">
                    {submitSuccess ? "Message sent!" : ""}
                  </div>
                </div>
              </div>
              <div className="card-description"></div>
            </div>
          </div>
        </div>
      </main>
      <Footer
        appleList={appleList}
        sellAppleList={sellAppleList}
        buyNavbar={navbar}
        sellNavbar={sellNavbar}
      />
    </>
  );
}

export async function getStaticProps() {
  const navBarData = await getNavBar();

  return {
    props: {
      ...navBarData,
    },
  };
}
