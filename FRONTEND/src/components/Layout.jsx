import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
import Header from "./Header";

export default function Layout() {
  return (
    <div className="d-flex vh-100 bg-light">
      <Sidebar />
      <div className="flex-grow-1 d-flex flex-column">
        <Header />
        <main className="flex-grow-1 overflow-auto p-4">
          <Outlet /> {/* This renders nested routes! */}
        </main>
      </div>
    </div>
  );
}
