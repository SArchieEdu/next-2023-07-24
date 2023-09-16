"use client";

import { selectCartDishIds } from "@/store/features/cart/selectors";
import { useSelector } from "react-redux";

export const Cart = ({dishes}) => {
    const dishInCart = useSelector(selectCartDishIds);
    console.log(dishInCart)
    console.log(dishes)
    return <div></div>;
}