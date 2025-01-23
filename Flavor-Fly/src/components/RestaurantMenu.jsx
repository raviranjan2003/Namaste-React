import Shimer from './Shimer';
import { useParams } from 'react-router-dom';
import useRestaurantMenu from '../utils/useRestaurantMenu';

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
    console.log(itemCards);
    
    return  (
        <div className="res-menu">
            <h1>{name}</h1>
            <p>{cuisines?.join(", ") || "No Cuisines Available"} - {costForTwoMessage}</p>
            <ul>
                {itemCards?.map((item, i) => <li key={i}>{item.card.info.name} - {" Rs "}
                    {item.card.info.price/100 || item.card.info.defaultPrice/100}</li>)}
            </ul>
        </div>
    )
}

export default RestaurantMenu;