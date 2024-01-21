import React from "react";
import PatientRecords from "@/component/Doctor/PatientsRecords";
import SecurePage from "@/component/Doctor/SecurePage";

const PateintRecords = () => {
  return (
    <SecurePage>
      <PatientRecords />
    </SecurePage>
  );
};

export default PateintRecords;
