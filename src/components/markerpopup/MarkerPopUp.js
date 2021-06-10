import React from "react";
import { Popup } from "react-leaflet";

export const MarkerPopUp = (props) => {
  const { name } = props.data;
  const { pay } = props.data;
  const { accessibility } = props.data;
  return (
    <Popup>
      <div>{name}</div>
      <div>{pay}</div>
      <div>{accessibility}</div>
    </Popup>
  );
};

