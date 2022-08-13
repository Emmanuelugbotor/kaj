import Footer from "../components/Footer";
import Header from "../components/Header";
import SocialsM from "../components/social";

export default function MainLayout({ children }) {
  return (
    <div>
      <div className="gtd">
        <div id="google_translate_element"></div>
      </div>
      <SocialsM />
      <Header />
      {children}
      <Footer />
    </div>
  );
}
