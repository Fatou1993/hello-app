import React from "react";

const UserInfos = props => {
  return (
    <div className="card">
      <h2 className="username">{props.username}</h2>
      <p>
        <strong>IP Address : </strong> {props.query}
      </p>
      <p>
        <strong>City: </strong> {props.city}
      </p>
      <p>
        <strong>Region: </strong> {props.region}
      </p>
      <p>
        <strong>Country : </strong> {props.country}
      </p>
      <p>
        <strong>Zip Code : </strong> {props.zip}
      </p>
      <p>
        <strong>Longitude : </strong> {props.lon}
      </p>
      <p>
        <strong>Latitude : </strong> {props.lat}
      </p>
      <p>
        <strong>TimeZone : </strong> {props.timezone}
      </p>
    </div>
  );
};

export default UserInfos;
