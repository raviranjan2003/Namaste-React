const RestaurantCard = (props) => {
    const { name, type, rating } = props;
    return (
        <>
            <div className="res-card" style={{ backgroundColor : "#f0f0f0"}}>
                <img 
                className="res-logo"
                alt="res-logo" 
                src="https://images.immediate.co.uk/production/volatile/sites/30/2013/05/spaghetti-carbonara-382837d.jpg?resize=768,574" />
                <h3>{name}</h3>
                <h4>{type}</h4>
                <h4>{rating} stars</h4>
            </div>
        </>
    )
}
export default RestaurantCard;