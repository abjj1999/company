import React, { useState } from "react";
import {
  LinkedinFilled,
  FacebookFilled,
  TwitterSquareFilled,
  YoutubeFilled,
} from "@ant-design/icons";
import { toast } from "react-toastify";
function contact() {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [comment, setComment] = useState("");
  const [option, setOption] = useState("");

  const handelSubmit = async (e) => {
    e.preventDefault();
    let data = { name, phone, comment, email, option };
    setEmail("");
    setPhone("");
    setComment("");
    setName("");
    await fetch(`${[process.env.NEXT_PUBLIC_ROUTE]}`, {
      method: "POST",
      headers: {
        Accept: "application/json, text/plain, */*",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => {
        console.log("Response received");
        if (res.status === 200) {
          console.log("Response succeeded!");
        }
      })
      .catch((err) => {
        toast.error(error.response.data);
      });
  };
  return (
    <>
      <div className="display-3 text-center">Contact Us</div>
      <form
        onSubmit={handelSubmit}
        className="animate__zoomIn animate__animated row d-flex justify-content-center m-2"
      >
        <div className="col-lg-8 col-md-8 col-sm-9 border-bottom ">
          <select
            name="service"
            id="form-control"
            className="form-control mb-3"
            value={option}
            onChange={(e) => setOption(e.target.value)}
          >
            <option value="">--Please Select What you looking for</option>
            <option value="acquistion-info">Acquistion Information</option>
            <option value="acquistion-info">Acquistion Information</option>
            <option value="acquistion-info">Acquistion Information</option>
          </select>
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">
              Email address
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              required
            />
          </div>
          <div className="row">
            <div className="mb-3 col-6">
              <label htmlFor="exampleInputName1" className="form-label">
                Name
              </label>
              <input
                value={name}
                onChange={(e) => setName(e.target.value)}
                type="text"
                className="form-control"
                id="exampleInputName1"
                required
              />
            </div>
            <div className="mb-3 col-6">
              <label htmlFor="exampleInputPhone1" className="form-label">
                Phone
              </label>
              <input
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                type="text"
                className="form-control"
                id="exampleInputPhone1"
                required
              />
            </div>
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputComment1" className="form-label">
              Comment
            </label>
            <textarea
              value={comment}
              onChange={(e) => setComment(e.target.value)}
              id=""
              cols="30"
              rows="5"
              className="form-control"
            ></textarea>
          </div>

          <button type="submit" className="mb-3 btn btn-primary">
            Submit
          </button>
        </div>
      </form>

      <div className="animate__zoomIn animate__animated address-container">
        <div className="display-4 text-center mb-3">Address</div>

        <div className="row d-flex justify-content-center">
          <div className="col-lg-8 col-md-8 col-sm-10 row  ">
            <div className="col-lg-6 col-md-6 col-sm-12 text-muted">
              <p className="text-center">123 range house</p>
              <p className="text-center">123 range house</p>
              <p className="text-center">123 range house</p>
              <p className="text-center">123 range house</p>
              <div className="social-links d-flex justify-content-center">
                <LinkedinFilled
                  style={{ fontSize: "2rem", color: "#08c" }}
                  theme="outlined"
                  className="p-3"
                />
                <FacebookFilled
                  style={{ fontSize: "2rem", color: "#08c" }}
                  theme="outlined"
                  className="p-3"
                />
                <TwitterSquareFilled
                  style={{ fontSize: "2rem", color: "#08c" }}
                  theme="outlined"
                  className="p-3"
                />
                <YoutubeFilled
                  style={{ fontSize: "2rem", color: "#08c" }}
                  theme="outlined"
                  className="p-3"
                />
              </div>
            </div>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13887.96843707749!2d-95.7415424!3d29.516589200000002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x86411de55a2a69f7%3A0xaa8809c27f8c5fae!2sDomino&#39;s%20Pizza!5e0!3m2!1sen!2sus!4v1652679415968!5m2!1sen!2sus"
              width="600"
              height="350"
              allowFullScreen="false"
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
              className="col-lg-6 col-md-6 col-sm-12"
            ></iframe>
          </div>
        </div>
      </div>
    </>
  );
}

export default contact;
