"use client";
import React from "react";
import { Circles } from "react-loader-spinner";

export default function loading() {
  return (
    <div className="flex justify-center">
      <Circles
        height="80"
        width="80"
        color="rgb(75 85 99)"
        ariaLabel="circles-loading"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
      />
    </div>
  );
}
