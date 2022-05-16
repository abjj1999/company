import React from "react";

function WhoAre() {
  return (
    <>
      <div className="animate__animated animate__fadeInDown  display-4 text-center mb-4">
        WHO ARE WE
      </div>
      <div className="animate__animated animate__fadeInDown border-bottom row who-we-are-container d-flex justify-content-evenly align-items-center">
        <div className="who-we-are-text  col-5">
          <p className="card-text ">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga,
            laudantium commodi unde ex eos sit iure earum exercitationem. Quasi
            fugit a rerum ipsa dolore molestiae voluptates delectus facere
            accusamus inventore.
          </p>
        </div>

        <img className="col-2" src="/images/logo.png" alt="" />
      </div>
    </>
  );
}

export default WhoAre;
