// components/UtilityTable.jsx
import React from "react";
import "./Table.css";

const UtilityTable = ({ data }) => {
  return (
    <>
      {data.length == 0 ? (
        <h1>NO Data 😭</h1>
      ) : (
        <div className="utilityTableWrapper">
          <table className="utilityTable">
            <thead>
              <tr>
                <th>Time Stamp</th>
                <th>Machine ID</th>
                <th>OS</th>
                <th>Antivirus</th>
                <th>Disk Encryption</th>
                <th>OS Update</th>
                <th>Sleep Settings</th>
              </tr>
            </thead>
            <tbody>
              {data?.map((machine) => (
                <tr key={machine.machineId}>
                  <td className="utilityTableValues">{machine?.utilsTime}</td>

                  <td className="utilityTableValues">{machine?.machineId}</td>
                  <td className="utilityTableValues">{machine?.os}</td>
                  <td className="utilityTableValues">
                    {machine?.checkAntivirus ? "true" : "false"}
                  </td>
                  <td className="utilityTableValues">
                    {machine?.checkDiskEncryption ? "true" : "false"}
                  </td>
                  <td className="utilityTableValues">
                    {machine?.checkOSUpdate ? "true" : "false"}
                  </td>
                  <td className="utilityTableValues">
                    {machine?.checkSleepSettings}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </>
  );
};

export default UtilityTable;
