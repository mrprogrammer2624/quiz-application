import { Footer, } from "@/components";
import { Outlet } from "react-router-dom";

export const HomeLayout = () => {
  return (
    <>
      <Outlet />
      <Footer />
    </>
  );
};
