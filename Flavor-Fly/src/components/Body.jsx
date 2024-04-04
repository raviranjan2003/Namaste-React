import RestaurantCard from './RestaurantCard';
import { RestaurantList } from '../assets/restaurantList';

const Body = () => {
    return (
        <>
            <div className="body">
                <div className="res-container" >
                    {
                        RestaurantList.map(restaurant => 
                            <RestaurantCard 
                                key = {restaurant.info.id}
                                name = {restaurant.info.name}
                                type = {restaurant.info.cuisines[0]}
                                rating = {restaurant.info.avgRating}
                                imgId = {restaurant.info.cloudinaryImageId}
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