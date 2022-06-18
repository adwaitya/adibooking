import './home.css'
import Featured from "../../components/featured/featured";
import Header from "../../components/header/header";
import Navbar from "../../components/navbar";
import PropertyList from '../../components/propertyList/propertyList';
import FeaturedProperties from '../../components/featuredProperties/FeaturedProperties';
import MailList from '../../components/mailList/MailList';
import Footer from '../../components/footer/Footer';

const Home = () => {
  return (
    <div>
      <Navbar />
      <Header type=""/>
      <div className="homeContainer">
      <h1 className="homeTitle">Explore India</h1>
        <Featured/>
        <h1 className="homeTitle">Browse by property type</h1>
        <PropertyList/>
        <h1 className="homeTitle">Homes guests love</h1>
        <FeaturedProperties/>
        <MailList/>
        <Footer/>
      </div>
    </div>
  );
};

export default Home;
