import Navbar from "../components/Navbar";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-100">
      <Navbar />
      <main> {/* Adjust if your Navbar height differs */}
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;
