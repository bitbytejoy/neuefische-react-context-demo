import React from "react";
import CardsPreview from "./CardsPreview";

export default function SideBar () {
  return (
    <div style={{position: "fixed", right: 0, top: 0, width: "50vw", height: "100vh"}}>
      <CardsPreview/>
    </div>
  )
}