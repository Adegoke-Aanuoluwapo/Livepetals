import React from "react";
import "../index.css";

const Questions = () => {
  return (
    <section id="faqs-2" className="pb-60 pt-50 faqs-section division">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-10 col-xl-8">
            <div className="section-title title-01 mb-80">
              <h2 className="h2-md"> Got Questions? See Answers</h2>
              <p className="p-xl">
                We do everything possible to provide answers to frequently asked
                questions and every other questions you may have from time to
                time
              </p>
            </div>
          </div>
        </div>
        {/* FAQS SECTION */}
        <div className="faqs-2-questions">
          <div className="row row-cols-1 row-cols-lg-2">
            <div className="col">
              <div className="questions-holder pr-5">
                {/* QUESTION 1 */}
                <div
                  className="question wow fadeInUp"
                  style={{ visibility: "visible", animationName: "fadeInUp" }}
                >
                  <h5 className="h5-md">
                    How can i get started as a Livepetal Affiliate?
                  </h5>
                  <p className="p-lg">
                    Simply locate and click on the signup button and provide the
                    required information to signup. The process takes less than
                    5 minutes.
                  </p>
                </div>
                <div
                  className="question wow fadeInUp"
                  style={{ visibility: "visible", animationName: "fadeInUp" }}
                >
                  <h5 className="h5-md">
                    What are the requirements for joining Livepetal Affiliate?
                  </h5>
                  <p className="p-lg">
                    No basic requirement and no skills required. You only need
                    to be willing and ready to learn new digital skills that you
                    can apply to selling online.
                  </p>
                </div>
                <div
                  className="question wow fadeInUp"
                  style={{ visibility: "visible", animationName: "fadeInUp" }}
                >
                  <h5 className="h5-md">Who can join Livepetal Affiliate?</h5>
                  <ul className="simple-list">
                    <li className="list-item">
                      <p className="p-lg">
                        Anyone up to the age of 12 and above can become a
                        Livepetal Affiliate.
                      </p>
                    </li>
                    <li className="list-item">
                      <p className="p-lg">
                        There is no country restriction. Anyone from any country
                        around the globe can be a Livepetal Affiliate.
                      </p>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="questions-holder pl-15">
                <div
                  className="question wow fadeInUp"
                  style={{ visibility: "visible", animationName: "fadeInUp" }}
                >
                  <h5 className="h5-md">
                    How can i get started as a Livepetal Affiliate?
                  </h5>
                  <p className="p-lg">
                    Simply locate and click on the signup button and provide the
                    required information to signup. The process takes less than
                    5 minutes.
                  </p>
                </div>
                <div
                  className="question wow fadeInUp"
                  style={{ visibility: "visible", animationName: "fadeInUp" }}
                >
                  <h5 className="h5-md">
                    How can i get started as a Livepetal Affiliate?
                  </h5>
                  <p className="p-lg">
                    Simply locate and click on the signup button and provide the
                    required information to signup. The process takes less than
                    5 minutes.
                  </p>
                </div>
                <div
                  className="question wow fadeInUp"
                  style={{ visibility: "visible", animationName: "fadeInUp" }}
                >
                  <h5 className="h5-md">
                    How can i get started as a Livepetal Affiliate?
                  </h5>
                  <p className="p-lg">
                    Simply locate and click on the signup button and provide the
                    required information to signup. The process takes less than
                    5 minutes.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Questions;
