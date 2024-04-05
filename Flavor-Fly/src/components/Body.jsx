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