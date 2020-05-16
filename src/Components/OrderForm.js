import React, { useState, useEffect } from "react";
import * as yup from "yup";
import axios from "axios";
import styled from "styled-components";

const SpacedInputLabels = styled.label`
  display: inline-block;
  padding: 20px 20px;
  font-size: 1.25rem;
`;

const formSchema = yup.object().shape({
    name: yup
        .string()
        .min(2, ">= 2 characters required")
        .required("A name is required"),
    size: yup
        .string()
        .required("A size is required."),
    pepperoni: yup
        .boolean()
        .oneOf([true]),
        olives: yup 
        .boolean()
        .oneOf([true]),
    jalapeños: yup 
        .boolean()
        .oneOf([true]),
    anchovies: yup 
        .boolean()
        .oneOf([true]),
    marinara: yup 
        .boolean()
        .oneOf([true]),
    pesto: yup 
        .boolean()
        .oneOf([true]),
    instructions: yup
        .string()
})

const OrderForm = () => {
    
    const [formState, setFormState] = useState({
        name: "",
        size: "",
        pepperoni: false,
        olives: false,
        jalapeños: false,
        anchovies: false, 
        marinara: false,
        pesto: false,
        instructions: ""
    });

    const [errorState, setErrorState] = useState({
        name: "",
        size: "",
    })

    const clearOrderForm = () => {
        setFormState({ name: "",
            size: "",
            pepperoni: false,
            olives: false,
            jalapeños: false,
            anchovies: false, 
            marinara: false,
            esto: false,
            instructions: "" 
        });
    };

    const validate = e => {
        let value =
          e.target.type === "checkbox" ? e.target.checked : e.target.value;
        yup
          .reach(formSchema, e.target.name)
          .validate(value)
          .then(valid => {
            setErrorState({
              ...errorState,
              [e.target.name]: ""
            });
          })
          .catch(err => {
            setErrorState({
              ...errorState,
              [e.target.name]: err.errors[0]
            });
          });
      };

      const inputChange = e => {
          e.persist();
          validate(e);
          let value = 
            e.target.type === "checkbox" ? e.target.checked : e.target.value;
          setFormState({ ...formState, [e.target.name]: value });
      };

      const formSubmit = e => {
        e.preventDefault();
        console.log("form submitted!");
        axios
          .post("https://reqres.in/api/users", formState)
          .then(response => console.log(response))
          .catch(err => console.log(err));
        clearOrderForm();
      };

    return (
        <div>
            <h2>Please place your order.</h2>
            <form onSubmit={formSubmit}>
                <SpacedInputLabels htmlFor="name">
                Name 
                <input
                    type="text"
                    name="name"
                    id="name"
                    value={formState.name}
                    onChange={inputChange}
                />
                {errorState.name.length > 0 ? (
                        <p className="error">{errorState.name}</p>
                ) : null}
                </SpacedInputLabels>

                <SpacedInputLabels htmlFor="size">
                Which size pizza would you like?
                <select
                    name="size"
                    id="name"
                    value={formState.size}
                    onChange={inputChange}
                >
                    <option value="small">Small</option>
                    <option value="medium">Medium</option>
                    <option value="large">Large</option>
                </select>
                </SpacedInputLabels>

                <div>
                    <h3>Sauces:</h3>
                    <SpacedInputLabels htmlFor="marinara">
                        <input  
                            type="checkbox"
                            name="marinara"
                            id="marinara"
                            value={formState.marinara}
                            onChange={inputChange}
                        />
                    Marinara
                    </SpacedInputLabels>

                    <SpacedInputLabels htmlFor="pesto">
                        <input  
                            type="checkbox"
                            name="pesto"
                            id="pesto"
                            value={formState.pesto}
                            onChange={inputChange}
                        />
                    Pesto
                    </SpacedInputLabels>
                </div>

                <div>
                    <h3>Toppings:</h3>
                    <SpacedInputLabels htmlFor="pepperoni">
                        <input  
                            type="checkbox"
                            name="pepperoni"
                            id="pepperoni"
                            value={formState.pepperoni}
                            onChange={inputChange}
                        />
                    Pepperoni
                    </SpacedInputLabels>

                    <SpacedInputLabels htmlFor="olives">
                        <input  
                            type="checkbox"
                            name="olives"
                            id="olives"
                            value={formState.olives}
                            onChange={inputChange}
                        />
                    Olives
                    </SpacedInputLabels>

                    <SpacedInputLabels htmlFor="jalapeños">
                        <input  
                            type="checkbox"
                            name="jalapeños"
                            id="jalapeños"
                            value={formState.jalapeños}
                            onChange={inputChange}
                        />
                    Jalapeños
                    </SpacedInputLabels>

                    <SpacedInputLabels htmlFor="anchovies">
                        <input  
                            type="checkbox"
                            name="anchovies"
                            id="amchovies"
                            value={formState.anchovies}
                            onChange={inputChange}
                        />
                    Anchovies
                    </SpacedInputLabels>
                </div>

                <SpacedInputLabels htmlFor="instructions">
                Any special instructions?
                    <input
                        type="textarea"
                        name="instructions"
                        id="instructions"
                        value={formState.instructions}
                        onChange={inputChange}
                    />
                </SpacedInputLabels>

                <button>Place Order</button>
            </form>
        </div>
    );
};

export default OrderForm;