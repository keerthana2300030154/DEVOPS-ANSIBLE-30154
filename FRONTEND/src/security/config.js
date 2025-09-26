import axios from "axios";

// ===== Base URLs =====
export const BASE_PATIENT_URL = `${import.meta.env.VITE_API_URL}/patient`;
export const BASE_ADMIN_URL = `${import.meta.env.VITE_API_URL}/admin`;
export const BASE_DOCTOR_URL = `${import.meta.env.VITE_API_URL}/api/doctor/auth`;

// ===== Headers =====
export const HEADERS = {
  JSON: { "Content-Type": "application/json" },
};

// ===== API Endpoints =====
export const PATIENT_API = {
  SIGNUP: "/signup",          // POST   /patient/signup
  LOGIN: "/login",            // POST   /patient/login
  GET_ALL: "/all",            // GET    /patient/all
  GET_BY_ID: (id) => `/${id}`, // GET    /patient/{id}
  UPDATE: (id) => `/update/${id}`, // PUT    /patient/update/{id}
  DELETE: (id) => `/delete/${id}`, // DELETE /patient/delete/{id}
};

export const ADMIN_API = {
  SIGNUP: "/signup",          // POST   /admin/signup
  LOGIN: "/login",            // POST   /admin/login
  GET_ALL: "/all",            // GET    /admin/all
  GET_BY_ID: (id) => `/${id}`, // GET    /admin/{id}
  UPDATE: (id) => `/${id}`,   // PUT    /admin/{id}
  DELETE: (id) => `/delete/${id}`, // DELETE /admin/delete/{id}
  APPROVE_DOCTOR: "/approve", // POST   /admin/approve?doctorId=&patientId=
};

export const DOCTOR_API = {
  SIGNUP: "/signup",          // POST   /api/doctor/auth/signup
  LOGIN: "/login",            // POST   /api/doctor/auth/login
  GET_ALL: "/all",            // GET    /api/doctor/auth/all
  GET_BY_ID: (id) => `/${id}`, // GET    /api/doctor/auth/{id}
  UPDATE: (id) => `/${id}`,   // PUT    /api/doctor/auth/{id}
  DELETE: (id) => `/${id}`,   // DELETE /api/doctor/auth/{id}
};

// ===== Axios Instances =====
export const patientAxios = axios.create({
  baseURL: BASE_PATIENT_URL,
  headers: HEADERS.JSON,
});

export const adminAxios = axios.create({
  baseURL: BASE_ADMIN_URL,
  headers: HEADERS.JSON,
});

export const doctorAxios = axios.create({
  baseURL: BASE_DOCTOR_URL,
  headers: HEADERS.JSON,
});
