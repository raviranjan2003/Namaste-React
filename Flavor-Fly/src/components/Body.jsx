import { useState } from 'react';
import RestaurantCard from './RestaurantCard';
import { RestaurantList } from '../assets/restaurantList';

const Body = () => {
    const [resData, setResData] = useState(RestaurantList);

    const handleClick = () => {
        console.log("Button clicked");
        setResData(resData.filter(res => res.info.avgRating > 4.2));
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