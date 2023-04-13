import AlertSection from "@/components/Home/AlertSection";
import BannerImage from "@/components/Home/BannerImage";
import CancelSection from "@/components/Home/CancelSection";
import Depoiments from "@/components/Home/Depoiments";
import Description from "@/components/Home/DescriptionSection";
import Footer from "@/components/Home/Footer";
import FormSection from "@/components/Home/FormSection";
import GraphSection from "@/components/Home/GraphSection";
import GrowWithKing from "@/components/Home/GrowWithKing";
import HeadLine from "@/components/Home/HeadLine";
import Header from "@/components/Home/Header";
import HowItWorksSection from "@/components/Home/HowItWorksSection";
import PrivacyPolicy from "@/components/Home/PrivacyPolicy";
import WhatsApp from "@/components/Home/WhatsApp";

export default function Home() {
  return (
    <>
      <Header></Header>
      <HeadLine></HeadLine>
      <FormSection></FormSection>
      <GraphSection></GraphSection>
      <Description></Description>
      <HowItWorksSection></HowItWorksSection>
      <GrowWithKing></GrowWithKing>
      <Depoiments></Depoiments>
      <AlertSection></AlertSection>
      <CancelSection></CancelSection>
      <Footer></Footer>
      <WhatsApp></WhatsApp>
      <BannerImage></BannerImage>
      <PrivacyPolicy></PrivacyPolicy>
    </>
  );
}
