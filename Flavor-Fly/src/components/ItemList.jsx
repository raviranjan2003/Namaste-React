import { CLOUDINARY_URL } from "../utils/constants";

const ItemList = ({ items }) => {
    return (
        <div style={{ padding: "1rem" }}>
            {items.map((item) => (
                <div
                    key={item.id}
                    style={{
                        display: "flex",
                        justifyContent: "space-between",
                        padding: "1rem",
                        marginBottom: "1rem",
                        borderBottom: "1px solid #ddd",
                        backgroundColor: "#fff",
                        borderRadius: "8px",
                        boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
                    }}
                >
                    <div style={{ flex: "1", paddingRight: "1rem", textAlign: "left" }}>
                        <div style={{ marginBottom: "0.5rem" }}>
                            <span style={{ fontSize: "18px", fontWeight: "600" }}>
                                {item?.card?.info?.name}
                            </span>
                            <span
                                style={{
                                    fontSize: "16px",
                                    fontWeight: "500",
                                    color: "#4caf50",
                                    marginLeft: "0.5rem",
                                }}
                            >
                                ₹{" "}
                                {item?.card?.info?.price
                                    ? item?.card?.info?.price / 100
                                    : item?.card?.info?.defaultPrice / 100}
                            </span>
                        </div>
                        <p
                            style={{
                                fontSize: "14px",
                                color: "#555",
                                lineHeight: "1.5",
                                marginBottom: "0.5rem",
                            }}
                        >
                            {item?.card?.info?.description}
                        </p>
                    </div>
                    <div style={{ flex: "0 0 150px", textAlign: "center" }}>
                        <img
                            src={CLOUDINARY_URL + item?.card?.info?.imageId}
                            alt={item?.card?.info?.name}
                            style={{
                                width: "100%",
                                height: "auto",
                                maxHeight: "200px",
                                objectFit: "cover",
                                borderRadius: "8px",
                            }}
                        />
                        <button
                            style={{
                                marginTop: "0.5rem",
                                padding: "0.5rem 1rem",
                                backgroundColor: "#4caf50",
                                color: "#fff",
                                border: "none",
                                borderRadius: "5px",
                                cursor: "pointer",
                                fontSize: "14px",
                                transition: "background-color 0.3s ease",
                            }}
                            onClick={() => alert(`Added ${item?.card?.info?.name} to cart!`)}
                        >
                            Add+
                        </button>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default ItemList;
