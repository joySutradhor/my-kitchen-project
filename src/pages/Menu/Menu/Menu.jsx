import Title from "../../../Components/Title/Title";
import MenuCoverImg from "../../../assets/menu/banner3.jpg" ;
import dessertImg from "../../../assets/menu/dessert-bg.jpeg" ;
import pizzaImg from "../../../assets/menu/pizza-bg.jpg" ;
import saladImg from "../../../assets/menu/salad-bg.jpg";
import soupImg from "../../../assets/menu/soup-bg.jpg";

import UseMenu from "../../../Hooks/UseMenu";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import MenuCategory from "./MenuCategory/MenuCategory";

const Menu = () => {
    const [menu] = UseMenu() ;
    const offered =menu.filter(item => item.category === "offered")
    const dessert =menu.filter(item => item.category === "dessert")
    const pizza =menu.filter(item => item.category === "pizza")
    const salad =menu.filter(item => item.category === "salad")
    const soup =menu.filter(item => item.category === "soup")
    return (
       <>
        <div>
            <Title headTitle="My kitchen | Menu"></Title>
            <MenuCategory items = {offered} img = {MenuCoverImg} title={"Our Menu"} details={"Would you like to try a dish?"}></MenuCategory>
            <SectionTitle subHeading={"Don't miss"} heading={"Todays Offer"}></SectionTitle>
            <MenuCategory items = {dessert} img = {dessertImg} title={"Dessarts"} details={"Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."}></MenuCategory>
            {/* pizza items and cover img  */}
            <MenuCategory items = {pizza} img = {pizzaImg} title={"Pizza"} details={"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cum, aperiam?"}></MenuCategory> 
            {/* salad items  */}
            <MenuCategory items = {salad} img = {saladImg} title={"Salad"} details={"Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."}></MenuCategory>
            {/* soup */}
            <MenuCategory items = {soup} img = {soupImg} title={"Soup"} details={"Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."}></MenuCategory>
        </div>
       
       </>
    );
};

export default Menu;