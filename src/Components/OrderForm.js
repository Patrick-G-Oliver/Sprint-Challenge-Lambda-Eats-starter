import React, { useState, useEffect } from "react";
import * as yup from "yup";
import axios from "axios";



const OrderForm = () => {
    
    const [formState, setFormState] = useState({
        name: "",
        size: "",
        pepperoni: false,
        olives: false,
        jalapeños: false,
        anchovies: false, 
        marinara: false,
        pesto: false
    });

    const [errorState, setErrorState] = useState({
        name: "",
        size: ""
    })

    return (
        <div>
            <h2>Please place your order.</h2>
            <form>
                <label htmlFor="name">
                Name 
                <input
                    type="text"
                    name="name"
                    id="name"

                />
                </label>
            </form>
        </div>
    )
}

export default OrderForm;