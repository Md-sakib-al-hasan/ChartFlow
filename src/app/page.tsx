import AICoach from "@/components/Home/AICoach/AiCoach";
import { FAQAThink } from "@/components/Home/faqthnik/FaqThink";
import HeroBanner from "@/components/Home/hero-banner/HeroBanner";
import NewsletterSubscription from "@/components/Home/newsleter/NewsLetter";
import CoursesSection from "@/components/Home/ourCourse/OurCours";
import Footer from "@/components/shared/footer/Footer";
import Navbar from "@/components/shared/navbar/navbar";

export default function Home() {
  return (
      <div className="space-y-[74px]">
         <Navbar/>
         <div>
            <HeroBanner/>
            <AICoach/>
            <CoursesSection/>
            <FAQAThink/>
            <NewsletterSubscription/>
         </div>
         <Footer/>
      </div>
  );
}
