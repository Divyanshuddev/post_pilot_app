import Brand from "../components/Brand/Brand";
import BrandCard from "../components/BrandCards/BrandCard";
import Dtc from "../components/DTC/Dtc";
import Footer from "../components/Footer/Footer";
import HeroSection from "../components/HeroSection/HeroSection";
import Navbar from "../components/Navbar/Navbar";
import PostCards from "../components/PostCards/PostCards";
import Profit from "../components/Profit/Profit";
import Result from "../components/Result/Result";
import RiskFree from "../components/RiskFree/RiskFree";
import Trends from "../components/Trends/Trends";
import Work from "../components/Work/Work";

const Home = () => {
  return (
    <>
      <Navbar />
      <HeroSection />
      <Brand />
      <Work />
      <PostCards />
      <BrandCard />
      <Result />
      <Dtc />
      <Profit />
      <RiskFree />
      <Trends />
      <Footer />
    </>
  );
};

export default Home;
