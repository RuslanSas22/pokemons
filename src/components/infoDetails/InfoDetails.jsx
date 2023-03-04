import React from "react";
import "./infoDetails.css";

function InfoDetails({ data }) {
  return (
    <>
      {!data ? (
        ""
      ) : (
        <>
          <div className="info-details-container">
            <img
              src={data.sprites.other.dream_world.front_default}
              alt="pika-info"
            />
            <h1>{data.name}</h1>
            <table>
              <tbody>
                <tr>
                  <td>Type</td>
                  <td>{data.types[0].type.name}</td>
                </tr>
                {data.stats.map((item) => {
                  return (
                    <tr>
                      <td>{item.stat.name}</td>
                      <td>{item.base_stat} </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </>
      )}
    </>
  );
}

export default InfoDetails;
