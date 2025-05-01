import AICoach from "@/components/Home/AICoach/AiCoach";
import HeroBanner from "@/components/Home/hero-banner/HeroBanner";
import Navbar from "@/components/shared/navbar/navbar";

export default function Home() {
  return (
      <div className="space-y-[74px]">
         <Navbar/>
         <div>
            <HeroBanner/>
            <AICoach/>
         </div>
      </div>
  );
}
