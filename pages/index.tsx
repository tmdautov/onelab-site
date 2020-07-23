import Layout from "./components/layout";
import Header from "./components/header";
import Footer from "./components/footer";
import { TestComponent } from "./components/TestComponent";

export default function Home() {
  return (
    <Layout>
      <Header />
	    <p>This is homepage</p>
      <Footer />
      <TestComponent />
    </Layout>
  );
}