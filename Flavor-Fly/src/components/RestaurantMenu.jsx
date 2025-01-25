import Shimer from './Shimer';
import { useParams } from 'react-router-dom';
import useRestaurantMenu from '../utils/useRestaurantMenu';
import RestaurantCategory from './RestaurantCategory';

const RestaurantMenu = () => {
    const { resId } = useParams();
    // const [resInfo, setResInfo] = useState(null);
    
    //Using custom hooks
    const resInfo = useRestaurantMenu(resId);

    if(resInfo === null) return <Shimer/>

    const resDetails = resInfo?.cards[2]?.card?.card?.info;
    const { name, cuisines, costForTwoMessage } = resDetails || {};

    const resMenu = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;
    const { itemCards } = resMenu || {}
    // console.log(resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards);
    // console.log(itemCards);
    // console.log(resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards);

    const resCategory = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards;
    const filteredResCategory = resCategory.filter((c) => c?.card?.card?.["@type"] === 
        "type.googleapis.com/swiggy.presentation.food.v2.NestedItemCategory")
    
    // console.log(filteredResCategory);
    
    return  (
        <div className="res-menu">
            <h1>{name}</h1>
            <p>{cuisines?.join(", ") || "No Cuisines Available"} - {costForTwoMessage}</p>
            {/* <ul>
                {itemCards?.map((item, i) => <li key={i}>{item.card.info.name} - {" Rs "}
                    {item.card.info.price/100 || item.card.info.defaultPrice/100}</li>)}
            </ul> */}
            {/*Restaurant Category Accordions */}
            {filteredResCategory.map((category, ind) => (
                <RestaurantCategory key={ind} data={category?.card?.card}/>
            ))}
        </div>
    )
}

export default RestaurantMenu;