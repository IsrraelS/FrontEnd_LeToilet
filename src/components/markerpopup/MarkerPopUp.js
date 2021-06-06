import React from "react";
import { Popup } from "react-leaflet";

export const MarkerPopUp = (props) => {
  const { name } = props.data;
  return (
    <Popup>
      <div>{name}</div>
    </Popup>
  );
};

