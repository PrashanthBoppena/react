import React, { useState } from 'react'

function Calculator() {
    const [input, setInput] = useState("");
    const [result, setResult] = useState(0);
    const styles = {
        margin: "10px"
    }
    return (
        <div>
            <center>
                <input type="text" name="input" value={input} onChange={(e) => setInput(e.target.value)} />
                <br />
                <br />
                <button onClick={() => setResult(eval(input))}>Result</button>
                <h4>Result is : {result}</h4>
                <br />

                <button style={styles} onClick={() => setInput(input + "1")}>1</button>
                <button style={styles} onClick={() => setInput(input + "2")}>2</button>
                <button style={styles} onClick={() => setInput(input + "3")}>3</button>
                <button style={styles} onClick={() => setInput(input + "4")}>4</button>
                <button style={styles} onClick={() => setInput(input + "5")}>5</button>
                <br />
                <button style={styles} onClick={() => setInput(input + "6")}>6</button>
                <button style={styles} onClick={() => setInput(input + "7")}>7</button>
                <button style={styles} onClick={() => setInput(input + "8")}>8</button>
                <button style={styles} onClick={() => setInput(input + "9")}>9</button>
                <button style={styles} onClick={() => setInput(input + "0")}>0</button>
                <br />
                <button style={styles} onClick={() => setInput(input + "+")}>+</button>
                <button style={styles} onClick={() => setInput(input + "-")}>-</button>
                <button style={styles} onClick={() => setInput(input + "*")}>*</button>
                <button style={styles} onClick={() => setInput(input + "/")}>/</button>
                <button style={styles} onClick={() => setInput("")}>clr</button>
            </center>
        </div>
    )
}

export default Calculator
