import ContactForm from "./Home/ContactForm";
import Main from "./Home/Main";
import Pricing from "./Home/Pricing";
import Review from "./Home/Review";
import Topics from "./Home/Topics";
import Updates from "./Home/Updates";

export default function Home() {
  return (
    <>
      <Main />
      <Pricing />
      <Topics />
      <Review />
      <ContactForm />
      <Updates />
    </>
  );
}
