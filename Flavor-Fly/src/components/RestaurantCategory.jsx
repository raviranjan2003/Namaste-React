import { useState } from "react";
import ItemList from "./ItemList";

const RestaurantCategory = ({ data }) => {
    // console.log(data)
    const [showItems, setShowItems] = useState(false);

    const handleClick = () => {
        setShowItems(!showItems);
    }
  return (
    <div>
        {/* Accordion Header */}
        <div style={{
            width: "50%",
            marginLeft: "auto",
            marginRight: "auto",
            marginTop: "0.8rem",
            backgroundColor: "#c8d0d7",
            boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
            padding: "1rem",
            borderRadius: "8px",
        }}>
            <div style={{
                display: "flex",
                justifyContent: "space-between",
                fontWeight: "bold",
                cursor: "pointer"
            }}
            onClick={handleClick}
            >
                <span>{data.title} ({data?.categories[0]?.itemCards?.length})</span>
                <span style={{ 
                    fontWeight: "bold",
                    fontSize: "20px",
                }}
                >{showItems ? "-" : "+"}</span>
            </div>
            {/* Accordion Body */}
            {showItems && <ItemList items={data?.categories[0]?.itemCards}/>}
        </div>

    </div>
  )
}

export default RestaurantCategory;