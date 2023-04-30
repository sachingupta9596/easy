import React from "react";
import "./Table.css";
// import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import CloseIcon from "@mui/icons-material/Close";

// import { UserContext } from "../App";

export default function Table({ campaignList, handleDelete, handleSort }) {
  console.log(campaignList);
  return (
    <div className="tableContainer">
      <table style={{ "overflow-x": "auto" }}>
        <thead>
          <tr>
            <th>SN.</th>
            <th onClick={handleSort}>Name</th>
            <th>Contact</th>
            <th>Delete</th>
          </tr>
        </thead>

        {campaignList.length !== 0 ? (
          <tbody>
            {campaignList.map((data, index) => (
              <tr key={data.Id}>
                <td>
                  <span>{index + 1}</span>
                </td>

                <td>
                  <div id="name">
                    <span>{data.fname + " " + data.lname}</span>
                  </div>
                </td>

                <td>
                  <span>{Number(data.number)}</span>
                </td>

                <td>
                  <div>
                    <span
                      style={{ cursor: "pointer" }}
                      onClick={() => handleDelete(data.Id)}
                    >
                      <CloseIcon style={{ color: "red" }} />
                    </span>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        ) : null}
      </table>
    </div>
  );
}
