import { Outlet } from "react-router-dom";
import Navbar from "../common-module/module/navbar";
const RootLayout = () => {
  return (
    <main>
      <Navbar />
      <Outlet />;
    </main>
  );
};

export default RootLayout;
