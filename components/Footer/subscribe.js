import { useAsyncFn } from "react-use";
import { useRef, useState } from "react";

export default function Subscribe() {
  const ref = useRef();
  const [message, setMessage] = useState("");
  const [, subscribe] = useAsyncFn(async () => {
    if (!ref.current.value) {
      setMessage(
        !ref.current.value
          ? "Please enter a valid email"
          : !emailRef.current.value.match(
              /^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/g
            )
          ? "Invalid email address, only letters, numbers, periods (‘.’), and underscores (‘_’) are allowed in your user name and domain."
          : ""
      );
    }

    const formData = new FormData();
    formData.append("email", ref.current.value);
    await fetch(
      "https://api-gateway.uptradeit.com/api/message_books/subscribed",
      {
        method: "POST",
        body: formData,
        headers: {
          ["Access-Control-Allow-Credentials"]: true,
        },
      }
    ).then((response) => setMessage("Succeed to subscribe"));
  }, []);
  return (
    <>
      <div className="footer-subscribe-title">Subscribe To Our Newsletter</div>
      <div className="subscribe-form">
        <input placeholder="Email" type="email" name="email" ref={ref} />
        <button className="btn btn-primary" onClick={subscribe}>
          Subscribe
        </button>
      </div>
      {message ? <div className="subscribe-success">{message}</div> : null}
    </>
  );
}
