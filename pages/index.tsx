import Layout from "./components/layout";
import Header from "./components/header";
import Footer from "./components/footer";

export default function Home() {
  return (
    <Layout>
      <Header />
	<p>This is homepage</p>
      <Footer />
    </Layout>
  );
}
