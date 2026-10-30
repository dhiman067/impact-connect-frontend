import Banner from "@/components/Banner";
import PlatformFeatures from "@/components/PlatformFeatures";
import UpcomingEvents from "@/components/UpcomingEvents";
import VisualsStorySection from "@/components/VisualsStorySection";
import NewsLetterForm from "@/components/NewsLetterForm";

export default function Home() {
  return (
  <div>
    <Banner></Banner>
    <PlatformFeatures></PlatformFeatures>
    <UpcomingEvents></UpcomingEvents>
    <VisualsStorySection></VisualsStorySection>
    <NewsLetterForm></NewsLetterForm>
    

  </div>
  );
}
