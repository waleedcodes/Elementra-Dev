import Footer from "./_Components/Footer";
import { HomeComp } from "./_Components/HomeComp";

export default function Home() {
  return (
    <>
      <div className="bg-gradient-to-r from-[#0f172a] to-[#334155]">
        <HomeComp />
        {/* <HomeCardComp />
        <HomeButtonComp /> */}
        <Footer />
      </div>
    </>
  );
}
