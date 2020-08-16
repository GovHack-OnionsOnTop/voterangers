import React from "react";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";

const ElectoralSummaryBlock = (prop) => {
  return (
    <div class="col-md-12">
      <h4>Electoral District Summary</h4>
      <div class="card mb-12 box-shadow">
        <table>
          <tbody>
            <tr>
              <td>Region Name</td>
              <td>{ prop.data.RegionName }</td>
            </tr>
            <tr>
              <td>District</td>
              <td>{ prop.data.DistrictCode } { prop.data.DistrictName }</td>
            </tr>
            <tr>
              <td>Average District Enrolment</td>
              <td>{ prop.data.AverageDistrictEnrolment }</td>
            </tr>
            <tr>
              <td>Deviation From ADE</td>
              <td>{ prop.data.DeviationFromADE }</td>
            </tr>
            <tr>
              <td>Electors In District</td>
              <td>{ prop.data.ElectorsInDistrict }</td>
            </tr>
            <tr>
              <td>Large District Allowance</td>
              <td>{ prop.data.LargeDistrictAllowance }</td>
            </tr>
            <tr>
              <td>Total</td>
              <td>{ prop.data.Total }</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ElectoralSummaryBlock;
