import { useEffect, useState } from 'react';
import RestaurantCard from './RestaurantCard';
import { RestaurantList } from '../assets/restaurantList';
import axios from 'axios';
import Shimer from './Shimer';

const Body = () => {
    const URL = "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.96340&lng=77.58550&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING";
    const [resData, setResData] = useState([]);

    const [filteredRes, setFilteredRes] = useState([]);

    const [searchText, setSearchText] = useState("");

    const handleClick = () => {
        console.log("Button clicked");
        setResData(resData.filter(res => res.info.avgRating > 4.3));
    }

    const handleSearch = (e) => {
        e.preventDefault();
        const filtered = resData.filter(res => res.info.name.toLowerCase().includes(searchText.toLowerCase()));

        setFilteredRes(filtered);
    }

    useEffect(() => {
        // console.log("UseEffect Hit==>");
        fetchData();
    }, [])
    
    const fetchData = async () => {
        const data = await fetch(URL);

        const json = await data.json();
        // Optional Chaining
        setResData(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);

        setFilteredRes(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    }
    //Adding loader
    // if(resData.length === 0) {
    //     return <Shimer />
    // }
    return resData.length === 0 ? <Shimer /> : (
        <>
            <div className="search-bar">
                <input type="text" 
                    placeholder="Search..." 
                    value={searchText} 
                    onChange={(e) => {
                        setSearchText(e.target.value);
                    }}
                />
                <button type="submit" onClick={handleSearch}>Search</button>
            </div>
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
                        filteredRes.map(restaurant => 
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