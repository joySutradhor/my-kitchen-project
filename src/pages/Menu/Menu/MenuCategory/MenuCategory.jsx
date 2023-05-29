import { Link } from "react-router-dom";
import MenuItem from '../../../Shared/MenuItem/MenuItem';
import MenuCover from '../../../Shared/MenuCover/MenuCover';

const MenuCategory = ({ items, title, details, img }) => {
    return (
        <div>
            {title && <MenuCover MenuCoverImg={img} title={title} details={details}></MenuCover>}

            <div className='md:grid grid-cols-2 gap-5 mx-10 py-5 items-center'>
                {
                    items.map((item, index) => <MenuItem
                        key={index}
                        item={item}
                    ></MenuItem>)
                }
                <Link to="/order"> <button className="btn btn-outline btn-accent">Order Now</button></Link>
            </div>
        </div>
    );
};

export default MenuCategory;