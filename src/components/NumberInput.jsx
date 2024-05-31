import React, { useState } from 'react'
import PropTypes from "prop-types";
import Result from './Result'
import { operations } from '../helpers/operations'


const NumberInput = ({name}) => {
    const [numbers, setNumbers] = useState({
        number1: 0,
        number2: 0
    })

    const {
        handleChange,
        addition,
        substraction,
        multiplication,
        division,
        number1,
        number2
    } = operations(numbers, setNumbers)
    
  return (
    <>
        
        <label className="mx-2">
            First number <input name="number1" value={number1} type="number" onChange={handleChange} class="form-control" />
        </label>
        <label className="mx-2">
            Second number <input name="number2" value={number2} type="number" onChange={handleChange} class="form-control" />
        </label>

        <div className="mt-3">
            <h2>Results:</h2>
            <Result operacion="Addition" calculo={addition()} />
            <Result operacion="Substraction" calculo={substraction()} />
            <Result operacion="Multiplication" calculo={multiplication()} />
            <Result operacion="Division" calculo={division()} />
        </div>
    </>
  )
}

NumberInput.propTypes = {
    name: PropTypes.string,
  };

export default NumberInput