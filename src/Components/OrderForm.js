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

}

export default OrderForm;