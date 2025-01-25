import Shimer from './Shimer';
import { useParams } from 'react-router-dom';
import useRestaurantMenu from '../utils/useRestaurantMenu';
import RestaurantCategory from './RestaurantCategory';
import { useState } from 'react';

const RestaurantMenu = () => {
    const { resId } = useParams();
    const [showIndex, setShowIndex] = useState(-1);
    // const [resInfo, setResInfo] = useState(null);
    const toggleAccordion = (ind) => {
        if(ind === showIndex)
            setShowIndex(-1);
        else
            setShowIndex(ind);
    }
    
    //Using custom hooks
    const resInfo = useRestaurantMenu(resId);

    if(resInfo === null) return <Shimer/>

    const resDetails = resInfo?.cards[2]?.card?.card?.info;
    const { name, cuisines, costForTwoMessage } = resDetails || {};

    const resMenu = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;
    const { itemCards } = resMenu || {}

    const resCategory = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards;
    const filteredResCategory = resCategory.filter((c) => c?.card?.card?.["@type"] === 
        "type.googleapis.com/swiggy.presentation.food.v2.NestedItemCategory")
    
    return  (
        <div className="res-menu">
            <h1>{name}</h1>
            <p>{cuisines?.join(", ") || "No Cuisines Available"} - {costForTwoMessage}</p>
            {/* <ul>
                {itemCards?.map((item, i) => <li key={i}>{item.card.info.name} - {" Rs "}
                    {item.card.info.price/100 || item.card.info.defaultPrice/100}</li>)}
            </ul> */}
            {/*Restaurant Category Accordions */}
            {/*Now RestaurantCategory is controlled component, it does not have
                it's own state to toggle it's collapsable feature
            */}
            {filteredResCategory.map((category, ind) => (
                <RestaurantCategory 
                    key={ind}
                    data={category?.card?.card}
                    showItems={ind === showIndex}
                    updateIndexFxn = {()=>toggleAccordion(ind)}
                />
            ))}
        </div>
    )
}

export default RestaurantMenu;