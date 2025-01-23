import React, { useEffect, useState } from 'react';
import Shimer from './Shimer';
import { useParams } from 'react-router-dom';
import { MENU_API } from '../utils/constants';

const RestaurantMenu = () => {
    const { resId } = useParams();
    const [resInfo, setResInfo] = useState(null);

    useEffect(() => {
        // console.log("RestroMenu components");
        fetchMenu();
    },[])

    const fetchMenu = async () => {
        const data = await fetch(MENU_API+resId);

        const json = await data.json();
        // console.log(json);

        setResInfo(json.data);
        // console.log(resInfo?.cards[2]?.card?.card?.info);
    }
    const resDetails = resInfo?.cards[2]?.card?.card?.info;
    const { name, cuisines, costForTwoMessage } = resDetails || {};

    const resMenu = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;
    const { itemCards } = resMenu || {}

    if(resInfo === null) return <Shimer/>
    
    return  (
        <div className="res-menu">
            <h1>{name}</h1>
            <p>{cuisines?.join(", ") || "No Cuisines Available"} - {costForTwoMessage}</p>
            <ul>
                {itemCards.map((item, i) => <li key={i}>{item.card.info.name} - {" Rs "}
                    {item.card.info.price/100 || item.card.info.defaultPrice/100}</li>)}
            </ul>
        </div>
    )
}

export default RestaurantMenu;