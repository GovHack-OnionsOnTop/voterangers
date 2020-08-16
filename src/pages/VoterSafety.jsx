import React from "react";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";

const VoterSafety = () => {
  return (
    <div className="container">
      <br />
      <br />
      <br />
      <h3>Guiding Principles to Keep in Mind</h3>
      <div class="accordion" id="accordionExample">
        <div class="card">
          <div class="card-header" id="headingOne">
            <h2 class="mb-0">
              <button
                class="btn btn-link"
                type="button"
                data-toggle="collapse"
                data-target="#collapseOne"
                aria-expanded="true"
                aria-controls="collapseOne"
              >
                How to take off the mask safely
              </button>
            </h2>
          </div>

          <div
            id="collapseOne"
            class="collapse show"
            aria-labelledby="headingOne"
            data-parent="#accordionExample"
          >
            <div class="card-body">
              <li> Take off your mask carefully, When you’re home. </li>
              <li>
                {" "}
                Untie the strings behind your head or stretch the ear loops.
              </li>
              <li> Handle only by the ear loops or ties.</li>
              <li> Fold outside corners together.</li>
              <li>
                {" "}
                Place mask in the washing machine (learn more about how to wash
                masks).
              </li>
              <li>
                {" "}
                Be careful not to touch your eyes, nose, and mouth when removing
                and wash hands immediately after removing.
              </li>
            </div>
          </div>
        </div>
        <div class="card">
          <div class="card-header" id="headingTwo">
            <h2 class="mb-0">
              <button
                class="btn btn-link collapsed"
                type="button"
                data-toggle="collapse"
                data-target="#collapseTwo"
                aria-expanded="false"
                aria-controls="collapseTwo"
              >
                During the election day
              </button>
            </h2>
          </div>
          <div
            id="collapseTwo"
            class="collapse"
            aria-labelledby="headingTwo"
            data-parent="#accordionExample"
          >
            <div class="card-body">
              <li>Hand sanitizer.</li>
              <li> Additional cleaning of polling booth areas.</li>
              <li>
                {" "}
                Follow social distancing guidelines including maintaining
                distances of 1.5 metres where possible and avoiding handshakes.
              </li>
              <li> Bringing one's own pen.</li>
              <li>
                {" "}
                Bringing Voter Information Card with you to help mark you off
                the roll more quickly.
              </li>
              <li>
                If you are feeling unwell, conside telephone voting or early
                voting.
              </li>
            </div>
          </div>
        </div>
        <div class="card">
          <div class="card-header" id="headingfour">
            <h2 class="mb-0">
              <button
                class="btn btn-link collapsed"
                type="button"
                data-toggle="collapse"
                data-target="#collapsefour"
                aria-expanded="false"
                aria-controls="collapsefour"
              >
                Other general recommendations:
              </button>
            </h2>
          </div>
          <div
            id="collapsefour"
            class="collapse"
            aria-labelledby="headingfour"
            data-parent="#accordionExample"
          >
            <div class="card-body">
              <li>
                {" "}
                Wash your hands often with soap and water for 20 seconds.{" "}
              </li>
              <li>
                Use alcohol-based hand sanitisers when you can’t use soap and
                water.
              </li>
              <li>Avoid touching your eyes, nose and mouth.</li>
              <li>
                Regularly clean and disinfect surfaces that are touched by more
                than one person – e.g. phones, door handles, benches, equipment.
              </li>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VoterSafety;
