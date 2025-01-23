import { useEffect, useState } from "react";
import { MENU_API } from "./constants";

const useRestaurantMenu = (resId) => {
    const [resInfo, setResInfo] = useState(null);
    // const resInfo = useState(5);
    // console.log(resInfo);
    useEffect(() => {
        fetchMenuData();
    },[])

    const fetchMenuData = async () => {
        const response = await fetch(MENU_API+resId);
        
        const json = await response.json();

        setResInfo(json.data);
    }

    return resInfo;
}

export default useRestaurantMenu;