import HomeButtonComp from "./_Components/DisplayComp/HomeButtonComp";
import HomeCardComp from "./_Components/DisplayComp/HomeCardComp";
import { HomeComp } from "./_Components/HomeComp";


export default function Home() {
  return (
    <>
      <div className="bg-gradient-to-r from-[#0f172a] to-[#334155]">
        <HomeComp />
        <HomeCardComp />
        <HomeButtonComp />
      </div>
    </>
  );
}
