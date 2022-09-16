import React from "react";
import Badge from "@mui/material/Badge"; //Importo el componente Badge, ver docu en librería.
import { useContext } from "react";
import { CartContext } from "../context/CartContext";

export default function CartWidget({ counter }) {

    const { contador } = useContext(CartContext);

return (
        <div>
            <Badge badgeContent={contador} color="primary">
                <span>🛒</span>
            </Badge>
        </div>
    );
}
