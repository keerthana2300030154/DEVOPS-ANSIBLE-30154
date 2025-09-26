import React, { createContext, useState } from "react";
export const PatientContext = createContext();

export const PatientProvider = ({ children }) => {
  const [patient, setPatient] = useState({ name: "Patient Name", email: "test@email.com" });
  return (
    <PatientContext.Provider value={{ patient, setPatient }}>
      {children}
    </PatientContext.Provider>
  );
};
