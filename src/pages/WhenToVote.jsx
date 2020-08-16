import React from "react";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import earlyVoting from "../data/votingType.js";

const WhenToVote = () => {
  return (
    <div className="container">
      <br />
      <br />
      <br />
      <h2>VotingEarly</h2>
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
                PostalVote
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
              Early voting (by post) is made available at all State elections.
              Application forms for a postal vote can be completed
              electronically on the Commission's website or printed forms can be
              obtained from various locations including Post Offices. If posted
              on or before polling day, completed postal packages can be
              accepted via mail until 9:00am on the Thursday following polling
              day.
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
                PollingBooth
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
              At the 2017 State general election early voting (in person) was
              made available at 42 sites throughout WA; 9 interstate including
              Christmas Island; and at 15 offices overseas. At most locations it
              was available for a three week period ending at 6:00pm on the
              Friday before polling day.
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
                iVote{" "}
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
              Electors eligible to use iVote are those who may require
              assistance because they have insufficient literacy skills or have
              sight impairment or are otherwise incapacitated. Technologically
              assisted voting using the iVote application was offered for the
              first time at the 2017 State general election. The iVote system is
              a form of voting using a telephone or the internet at a location
              of your choice. iVote was available to people enrolled to vote in
              WA who could not vote without assistance because they: have
              insufficient literacy skills; are blind or sight impaired; or are
              otherwise incapacitated. An Auslan video is available on the WA
              Deaf Society YouTube channel. Read the Auditor's letter of audit
            </div>
          </div>
        </div>
        <div class="card">
          <div class="card-header" id="headingfive">
            <h2 class="mb-0">
              <button
                class="btn btn-link collapsed"
                type="button"
                data-toggle="collapse"
                data-target="#collapsefive"
                aria-expanded="false"
                aria-controls="collapsefive"
              >
                WAElectoralCommissionMobileVoting
              </button>
            </h2>
          </div>
          <div
            id="collapsefive"
            class="collapse"
            aria-labelledby="headingfive"
            data-parent="#accordionExample"
          >
            <div class="card-body">
              "During an election, the Commission visits hospitals and selected
              institutions such as nursing homes, aged care facilities and
              retirement homes to provide electors the opportunity to vote
              without having to leave their premises.\nIn addition, mobile
              polling teams visit a selection of Indigenous communities, mine
              sites and other places in the more remote parts of Western
              Australia in order to offer voting services.\nMobile polling is
              only available to residents or patients at these facilities. Staff
              and visitors can vote early at an early voting centre, or at a
              polling place on polling day.\nDuring the State election, the
              Commission visits hospitals and selected institutions such as
              nursing homes, aged care facilities and retirement homes to
              provide electors the opportunity to vote without having to leave
              the premises.\n\nMobile polling is only available for residents
              and patients. Staff and visitors can vote early at an early voting
              centre or at a polling place on polling day.\n\nThe date and time
              that mobile polling will take place is advertised at the venue in
              advance of polling.",
            </div>
          </div>
        </div>
        <div class="card">
          <div class="card-header" id="headingsix">
            <h2 class="mb-0">
              <button
                class="btn btn-link collapsed"
                type="button"
                data-toggle="collapse"
                data-target="#collapsesix"
                aria-expanded="false"
                aria-controls="collapsesix"
              >
                DriveIn
              </button>
            </h2>
          </div>
          <div
            id="collapsesix"
            class="collapse"
            aria-labelledby="headingsix"
            data-parent="#accordionExample"
          >
            <div class="card-body">
              "Drive-in polling places are available at selected locations in
              the metropolitan area on polling day for electors with limited
              mobility. This service enables all visiting electors to vote
              without having to leave a vehicle.\n\nSignage at the location will
              help direct you to this service. Polling officials will then
              assist electors by bringing their ballot papers to the
              car.\n\nDISTRICT & REGION\tCODE\tLOCATION\nDrive-in polling places
              at the 2017 State general election were\nJoondalup,
              NM\tJOO\tBeldon Primary School\nMount Lawley, EM\tMTL\tCoolbinia
              Primary School\nRockingham, SM\tROC\tRockingham Autumn
              Centre\nThornlie, EM\tTHN\tAddie Mills Centre\nWillagee,
              SM\tWIL\tSouthern Districts Senior Centre\nAt all other polling
              places, polling officials are able to take ballot papers out to an
              elector who has difficulty leaving their car, if requested.",
            </div>
          </div>
        </div>
        <div class="card">
          <div class="card-header" id="headingseven">
            <h2 class="mb-0">
              <button
                class="btn btn-link collapsed"
                type="button"
                data-toggle="collapse"
                data-target="#collapseseven"
                aria-expanded="false"
                aria-controls="collapseseven"
              >
                AudioLoop
              </button>
            </h2>
          </div>
          <div
            id="collapseseven"
            class="collapse"
            aria-labelledby="headingseven"
            data-parent="#accordionExample"
          >
            <div class="card-body">
              "Hearing and listening aids can be ineffective in environments
              with a lot of talking or background noise, such as a polling
              place. Audio loops are used to overcome this issue by enhancing
              the sound of a person’s voice, such as a polling official. Audio
              loops were first trialled at the 2013 State election at selected
              polling places for use by electors using a hearing or listening
              aid.\n\nPolling places with audio loops are advertised with the
              symbol of access for hearing loss. Electors with a hearing or
              listening aid can switch to ‘T’ to use the system.",
            </div>
          </div>
        </div>
        <div class="card">
          <div class="card-header" id="headingEight">
            <h2 class="mb-0">
              <button
                class="btn btn-link collapsed"
                type="button"
                data-toggle="collapse"
                data-target="#collapseEight"
                aria-expanded="false"
                aria-controls="collapseEight"
              >
                VoteEarlyEveryGeneralElection
              </button>
            </h2>
          </div>
          <div
            id="collapseEight"
            class="collapse"
            aria-labelledby="headingEight"
            data-parent="#accordionExample"
          >
            <div class="card-body">
              "An elector can apply to be registered as a general early voter if
              the elector:\nlives more than 20 kilometres by the nearest
              practicable route from the nearest polling place;\nis a patient in
              a hospital or similar institution;\ndue to serious personal
              illness is physically unable to travel to a polling place;\nis
              caring for a person who is seriously ill or infirm;\nis aged 70
              years or over;\nis registered as an overseas elector\nis
              registered as a silent elector or\nis an elector who because of
              religious beliefs, or membership of a religious order is precluded
              from attending a polling place for all or most of the hours of
              polling.\nTo register as a general early voter you need to meet
              the eligibility requirement and complete the required general
              early voter form. This form can be submitted at any time.",
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhenToVote;
