import Banner from "../components/Banner";
import Profits from "../components/Profits";
import DirectionsContainer from "../components/DirectionsContainer";

export default function Home() {
  return (
    <>
      <style jsx global>{`
      `}</style>
      <Banner />
      <Profits />
      <DirectionsContainer />
      {/*<Profits />
      <ProductPage />*/}
    </>
  );
}
