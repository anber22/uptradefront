import { useAsyncFn } from "react-use";
import { useRef, useState } from "react";

export default function Subscribe() {
  const ref = useRef();
  const [isSuccess, setIsSuccess] = useState(false);
  const [message, setMessage] = useState("");
  const [, subscribe] = useAsyncFn(async () => {
    if (
      !ref.current.value ||
      !ref.current.value.match(
        /^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/g
      )
    ) {
      setMessage(
        !ref.current.value
          ? "Please enter a valid email"
          : !ref.current.value.match(
              /^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/g
            )
          ? "Invalid email address, only letters, numbers, periods (‘.’), and underscores (‘_’) are allowed in your user name and domain."
          : ""
      );
      return;
    }

    const formData = new FormData();
    formData.append("email", ref.current.value);
    await fetch(
      "https://api-single.uptradeit.com/api/message_books/subscribed",
      {
        method: "POST",
        body: formData,
        headers: {
          ["Access-Control-Allow-Credentials"]: true,
        },
      }
    ).then((response) => setIsSuccess(true));
  }, []);

  return (
    <div className="">
      <div className="footer-subscribe-title">Subscribe To Our Newsletter</div>
      <div className="subscribe-form">
        <div className="subscribe-form-input">
          <input placeholder="Email" type="email" name="email" ref={ref} />
          <button className="btn btn-primary" type="submit" onClick={subscribe}>
            Subscribe
          </button>
        </div>
        <div style={{ color: "red" }}>{message}</div>
      </div>
      {isSuccess ? (
        <div className="subscribe-success">Succeed to subscribe</div>
      ) : null}
    </div>
  );
}
