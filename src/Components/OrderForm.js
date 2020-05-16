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

                <label htmlFor="size">
                Which size pizza would you like?
                <select
                    name="size"
                    id="name"

                >
                    <option value="small">Small</option>
                    <option value="medium">Medium</option>
                    <option value="large">Large</option>
                </select>
                </label>

                <div>
                    <h3>Sauces:</h3>
                    <label htmlFor="marinara">
                        <input  
                            type="checkbox"
                            name="marinara"
                            id="marinara"
                            

                    />
                    Marinara
                    </label>
                    <label htmlFor="pesto">
                        <input  
                            type="checkbox"
                            name="pesto"
                            id="pesto"
                            

                    />
                    Pesto
                    </label>
                </div>

                <div>
                    <h3>Toppings:</h3>
                    <label htmlFor="pepperoni">
                        <input  
                            type="checkbox"
                            name="pepperoni"
                            id="pepperoni"
                            

                    />
                    Pepperoni
                    </label>
                    <label htmlFor="olives">
                        <input  
                            type="checkbox"
                            name="olives"
                            id="olives"
                            

                    />
                    Olives
                    </label>
                    <label htmlFor="jalapeños">
                        <input  
                            type="checkbox"
                            name="jalapeños"
                            id="jalapeños"
                            

                    />
                    Jalapeños
                    </label>
                    <label htmlFor="anchovies">
                        <input  
                            type="checkbox"
                            name="anchovies"
                            id="amchovies"
                            

                    />
                    Anchovies
                    </label>
                </div>

                <label htmlFor="instructions">
                Any special instructions?
                    <input
                        type="textarea"
                        name="instructions"
                        id="instructions"

                    />
                </label>

                <button>Place Order</button>
            </form>
        </div>
    )
}

export default OrderForm;