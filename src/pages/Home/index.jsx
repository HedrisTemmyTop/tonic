import Hero from "../../components/Hero";
import Services from "../../components/Services";
import Agile from "../../components/Testimonial";
import Blog from "../../components/Blog";
import Customer from "../../components/Customer";
import Connect from "../../components/Connect";

const Home = () => {
  return (
    <div>
      <Hero />
      <Services />
      <Connect />
      <Agile />
      <Customer />
      <Blog />
    </div>
  );
};

export default Home;
