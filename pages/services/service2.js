import React from "react";

function service2() {
  return (
    <>
      <h1 className="border-bottom  display-2 text-center animate__slideInUp animate__animated">
        Service 1
      </h1>
      <div className="service row m-4">
        <img
          src="/images/card.jpg"
          alt=""
          className="image-fluid col-lg-4 col-md-6 col-sm-10 animate__slideInUp animate__animated "
        />
        <div className="serviceText col-lg-7 col-md-6 col-sm-10">
          <div className="display-4 text-center animate__slideInDown animate__animated m-3">
            Service title
          </div>
          <ul className="service-list animate__slideInRight animate__animated">
            <li className=" service-list-item">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure
              aperiam sit recusandae debitis, amet facilis rerum provident
              laborum neque perspiciatis, ducimus quis doloribus praesentium,
              obcaecati tenetur exercitationem accusantium iste autem?
            </li>
            <br />
            <li className=" service-list-item">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure
              aperiam sit recusandae debitis, amet facilis rerum provident
              laborum neque perspiciatis, ducimus quis doloribus praesentium,
              obcaecati tenetur exercitationem accusantium iste autem?
            </li>
            <br />
            <li className=" service-list-item">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure
              aperiam sit recusandae debitis, amet facilis rerum provident
              laborum neque perspiciatis, ducimus quis doloribus praesentium,
              obcaecati tenetur exercitationem accusantium iste autem?
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default service2;
