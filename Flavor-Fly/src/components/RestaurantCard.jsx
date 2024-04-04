const RestaurantCard = (props) => {
    const { name, type, rating, imgId } = props;
    console.log(imgId);
    return (
        <>
            <div className="res-container">
                <div className="res-card" style={{ backgroundColor : "#f0f0f0"}}>
                    <img 
                    className="res-logo"
                    alt="res-logo" 
                    // src="https://images.immediate.co.uk/production/volatile/sites/30/2013/05/spaghetti-carbonara-382837d.jpg?resize=768,574" 
                    src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/${imgId}`}
                    />
                    <h3>{name}</h3>
                    <h4>{type}</h4>
                    <h4>{rating} stars</h4>
                </div>
            </div>
        </>
    )
}
export default RestaurantCard;