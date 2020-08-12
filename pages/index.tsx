import Head from 'next/head';
import Banner from '../components/Banner/Banner';
import Profits from '../components/Profits';
import DirectionsContainer from '../components/Direction/DirectionsContainer';
import RequestForm from '../components/RequestForm';
import QA from '../components/QA/QA';
import AcceptingOrder from '../components/Requirements/AcceptingOrder';
import Requirements from '../components/Requirements/Requirements';
import EducationInfo from '../components/Requirements/EducationInfo';

export default function Home() {
  return (
    <>
      <Head>
        <title>One LAB</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <style jsx global>{``}</style>
      <Head>
        <title>ONE Lab</title>
      </Head>
      <Banner />
      <Profits />
      <DirectionsContainer />
      <AcceptingOrder />
      <Requirements />
      <EducationInfo />
      <QA />
      <RequestForm />
      {/*FIXME: Fix font-size inside directions*/}
    </>
  );
}
