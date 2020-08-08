import Banner from "../components/Banner/Banner";
import Profits from "../components/Profits";
import DirectionsContainer from "../components/Direction/DirectionsContainer";
import RequestForm from "../components/RequestForm";
import QA from "../components/QA/QA";
import AcceptingOrder from "../components/Requirements/AcceptingOrder";
import Requirements from "../components/Requirements/Requirements";

export default function Home() {
  return (
    <>
      <style jsx global>{``}</style>
      <Banner />
      <Profits />
      <DirectionsContainer />
      <AcceptingOrder />
      <Requirements />
      <QA />
      <RequestForm />
      {/* FIXME: Fix Profits and DirectionsContainer overflow by x*/}
      {/*TODO: link buttons, description page, form*/}
      {/*FIXME: Fix font-size inside directions*/}
    </>
  );
}
