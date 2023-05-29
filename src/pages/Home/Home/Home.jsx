import Title from "../../../Components/Title/Title";
import Banner from "../Banner/Banner";
import Cetegory from "../Cetegory/Cetegory";
import Featured from "../Featured/Featured";
import PopularMenu from "../PopularMenu/PopularMenu";
import Testimonial from "../Testimonial/Testimonial";

const Home = () => {
    return (
        <div>
            <Title headTitle = "My Kitchen | Home"></Title>
            <Banner></Banner>
            <Cetegory></Cetegory>
            <PopularMenu></PopularMenu>
            <Featured></Featured>
            <Testimonial></Testimonial>
        </div>
    );
};

export default Home;