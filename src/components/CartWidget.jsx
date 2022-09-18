import React from "react";
import Badge from "@mui/material/Badge"; 
import LocalMallIcon from '@mui/icons-material/LocalMall';
import { useContext } from "react";
import { CartContext, useCart } from "../context/CartContext";

export default function CartWidget({ }) {

    const{cartQuantity, cart} = useCart()

return (
        <div>
            <Badge color='secondary' fontSize='large'>
                <span>{cartQuantity() || ''}</span>
                <span>🛒</span>
            </Badge>
        </div>
    );
}
