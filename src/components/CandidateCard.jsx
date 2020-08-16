import React from "react";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";

const CandidateCard = (prop) => {
  return (
    <div class="col-md-4">
      <div class="card mb-4 box-shadow " style={{ height: "500px" }}>
        <img
          style={{ width: "12em" }}
          class="card-img-top"
          src={prop.candidate.ProfilePhotoLink}
          alt="Card image cap"
        />
        <div class="card-body overflow-auto">
          <h5 className="card-title">{`${prop.candidate.Surname} ${prop.candidate.ChristianName}`}</h5>

          <h6 class="card-subtitle mb-2 text-muted">{prop.candidate.Party}</h6>
          <p className="card-text ">{prop.candidate.Biography}</p>
          <a href={prop.candidate.CandidateWebpage} className="btn btn-primary">
            More Info
          </a>
        </div>
      </div>
    </div>
  );
};

export default CandidateCard;
