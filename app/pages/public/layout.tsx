import { Outlet } from "react-router";
import Header from "~/components/layout/header";
import HeroSection from "~/components/pages/home/hero-section";
import Dashboard from "~/components/pages/home/Dashboard";
// import TrustedBy from "~/components/pages/home/TrustedBy";

export default function BaseLayout() {
  return (
    <>
      <Header/>
      <HeroSection/>
      <Dashboard/>
      {/* <TrustedBy/> */}
      <Outlet/>
    </>
  );
}
