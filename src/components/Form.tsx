import React, {useState} from 'react'
import ListItems from './ListItems';
const currency = [
    'USD', 'VND'    
];

function Form ()  {
    return (
    <>
        <form action="" className="form">
            <label htmlFor="value" className='formText'>Enter the value:</label><br />
            <div className="dong2">
                <input name= "value" type="number" min={0} />               
                <select id="check1">
                    <option value="USD">USD</option>
                    <option value="VND">VND</option>
                </select>
                <span>to</span>
                <select id="check2">
                    <option value="VND">VND</option>
                    <option value="USD">USD</option>
                </select>
            </div>
                <button type='button'onClick={changeCurrency}>Change currency</button>
                <button type='submit'>Submit</button>
        </form>    
    </>
    );  
}



function changeCurrency(){
    const check2 = document.getElementById('check2');
    const check1 = document.getElementById('check1');
    var t = check1.value;
    check1.value = check2.value;
    check2.value = t;
};
export default Form;