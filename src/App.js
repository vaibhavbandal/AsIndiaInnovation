import React, { Suspense, useEffect, useState } from "react";

import DoctorList from "./DoctorList";

export default function App() {
  return (
    <>
      <div className="container-fluid bg-primary text-white text-center px-2 py-3">
        <h5 className="">ASINDIA INNOVATION ASSIGNMENT</h5>
      </div>
      <div>
        <DoctorList />
      </div>
    </>
  );
}
