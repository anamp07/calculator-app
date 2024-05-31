export const operations = (numbers, setNumbers) => {
    const {number1, number2} = numbers

    const handleChange = (e) => {
        setNumbers({
            ...numbers,
            [e.target.name]: parseFloat(e.target.value),
        })
    }

    const addition = () => number1 + number2
    const substraction = () => number1 - number2
    const multiplication = () => number1 * number2
    const division = () => number1 / number2

    return {handleChange, addition, substraction, multiplication, division, number1, number2}
}