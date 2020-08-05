import Banner from "../components/Banner";
import Profits from "../components/Profits";
import DirectionsContainer from "../components/DirectionsContainer";
import RequestForm from "../components/RequestForm";
import QAForm from "../components/QAForm";

export default function Home() {
  return (
    <>
      <style jsx global>{``}</style>
      <Banner />
      <Profits />
      <DirectionsContainer />
      <QAForm />
      <RequestForm />
      {/* FIXME: Fix Profits and DirectionsContainer overflow by x*/}
      {/*TODO: link buttons, description page, form*/}
      {/*FIXME: Fix font-size inside directions*/}
    </>
  );
}
