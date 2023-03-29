import AlertSection from "@/components/AlertSection";
import CancelSection from "@/components/CancelSection";
import Depoiments from "@/components/Depoiments";
import Description from "@/components/DescriptionSection";
import Footer from "@/components/Footer";
import FormSection from "@/components/FormSection";
import GraphSection from "@/components/GraphSection";
import GrowWithKing from "@/components/GrowWithKing";
import Header from "@/components/Header";
import HeadLine from "@/components/HeadLine";
import HowItWorksSection from "@/components/HowItWorksSection";
import WhatsApp from "@/components/WhatsApp";

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
    </>
  );
}
