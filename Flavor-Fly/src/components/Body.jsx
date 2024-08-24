import { useEffect, useState } from 'react';
import RestaurantCard from './RestaurantCard';
import { RestaurantList } from '../assets/restaurantList';
import axios from 'axios';

const Body = () => {
    const URL = "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.96340&lng=77.58550&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING";
    const [resData, setResData] = useState(RestaurantList);

    const handleClick = () => {
        console.log("Button clicked");
        setResData(resData.filter(res => res.info.avgRating > 4.2));
    }

    useEffect(() => {
        // console.log("UseEffect Hit==>");
        fetchData();
    }, [])
    
    const fetchData = async () => {
        // const data = await axios.get(URL);
        // console.log(data);
        const data = await fetch(URL);
        
        const json = await data.json();

        console.log(json);

        
    }

    return (
        <>
            <div className='filter'>
                <button className='filter-btn'
                    onClick={handleClick}
                >
                    Sort Restaurant
                </button>
            </div>
            <div className="body">
                <div className="res-container" >
                    {
                        resData.map(restaurant => 
                            <RestaurantCard 
                                key = {restaurant.info.id}
                                resData = {restaurant.info}
                            />
                        )
                    }
                    {/* <RestaurantCard
                        name = "Meghna food" 
                        type = "Noodles"
                        rating = "4.5"
                    /> */}
                </div>
            </div>
        </>
    )
}
export default Body;