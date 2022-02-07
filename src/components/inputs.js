import React, {useState} from 'react' 
import Title from './title'

const Inputs = () => {

    const [numOne, setNumOne] = useState('')
    const [numTwo, setNumTwo] = useState('')
    const [operation, setOperation] = useState('+')
    const [answer, setAnswer] = useState('')
    const [error, setError] = useState('')
        
    const isValidCalculation = () =>
        !Number.isNaN(Number(numOne)) &&
        !Number.isNaN(Number(numTwo)) &&
        numOne !== "" &&
        numTwo !== "";

    const calculate = () => {
        if (!isValidCalculation()) {
            setAnswer('');
            return setError('Please provide a valid number for both operands');
        }
        setError('');
        setAnswer('');

    
        switch (operation) {
           case '+':
               return setAnswer((Number(numOne)) + (Number(numTwo)));
           case '-':
               return setAnswer((Number(numOne)) - (Number(numTwo)));
           case '*':
               return setAnswer((Number(numOne)) * (Number(numTwo)));
           case '/':
               return setAnswer((Number(numOne)) / (Number(numTwo)));
            default:  
               return setError('Please provide a valid number for both operands');
       }          
    };

    return(
        <div className= "inputs">
        <Title />

            <div className="Inputs">
                <input name="number" value={numOne} onChange={(event) => setNumOne(event.target.value)} />

                <select value={operation} onChange={(event) => setOperation(event.target.value)}>
                    <option value="+"> + </option>
                    <option value="-"> - </option>
                    <option value="*"> * </option>
                    <option value="/"> / </option>
                </select>

                <input name="number" value={numTwo} onChange={(event) => setNumTwo(event.target.value)} />

                <button type="button" onClick={calculate}> =</button>

                <input name="answer" value={answer} />
</div>
        <div className="Error">{error}</div>

</div> 
           );
};

export default Inputs