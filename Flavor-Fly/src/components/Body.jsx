import RestaurantCard from './RestaurantCard';
const Body = () => {
    return (
        <>
            <div className="body">
                <div className="search">Search</div>
                <div className="res-container" >
                    <RestaurantCard
                        name = "Meghna food" 
                        type = "Noodles"
                        rating = "4.5"
                    />
                    <RestaurantCard 
                        name = "KFC"
                        type = "Chicken"
                        rating = "4.6"
                    />
                    <RestaurantCard 
                        name = "MacD"
                        type = "Burger"
                        rating = "4.4"
                    />
                    <RestaurantCard 
                        name = "Dominos"
                        type = "Pizza"
                        rating = "4.6"
                    />
                </div>
            </div>
        </>
    )
}
export default Body;