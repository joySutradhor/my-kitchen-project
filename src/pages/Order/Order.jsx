import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import order from "../../assets/shop/banner2.jpg"
import MenuCover from "../Shared/MenuCover/MenuCover";
import { useState } from "react";
import UseMenu from '../../Hooks/UseMenu';
import FoodCard from '../../Components/FoodCard/FoodCard';
import OrderTabs from './OrderTabs/OrderTabs';

const Order = () => {
    const [tabIndex, setTabIndex] = useState(0);
    const [menu] = UseMenu();
    const drinks = menu.filter(item => item.category === "drinks")
    const dessert = menu.filter(item => item.category === "dessert")
    const pizza = menu.filter(item => item.category === "pizza")
    const salad = menu.filter(item => item.category === "salad")
    const soup = menu.filter(item => item.category === "soup")
    return (
        <div>
            <MenuCover MenuCoverImg={order} title={"order Now"} details={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates, quod!"}></MenuCover>
            <div className='flex justify-center items-center'>
                <Tabs selectedIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
                    <div className='text-center'>
                    <TabList>
                        <Tab>SALAD</Tab>
                        <Tab>PIZZA</Tab>
                        <Tab>SOUPS</Tab>
                        <Tab>DESSERTS</Tab>
                        <Tab>DRINKS</Tab>
                    </TabList>
                    </div>
                    <TabPanel>
                        <OrderTabs
                            items={salad}
                        ></OrderTabs>
                    </TabPanel>
                    <TabPanel>
                        <OrderTabs
                            items={pizza}
                        ></OrderTabs>
                    </TabPanel>
                    <TabPanel>
                        <OrderTabs
                            items={soup}
                        ></OrderTabs>
                    </TabPanel>
                    <TabPanel>
                        <OrderTabs
                            items={dessert}
                        ></OrderTabs>
                    </TabPanel>
                    <TabPanel>
                        <OrderTabs
                            items={drinks}
                        ></OrderTabs>
                    </TabPanel>
                </Tabs>
            </div>
        </div>

    );
};

export default Order;