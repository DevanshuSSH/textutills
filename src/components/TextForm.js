import React, { useState } from 'react'


export default function TextForm(props) {
    const handleUpClick = () => {
        // console.log("uppercase is clicked" + text);
        let newText = text.toUpperCase()
        setText(newText)
    }

    const handleLoClick = () => {
        let newText = text.toLowerCase()
        setText(newText)
    }
    const handleClear = () => {
        let newText = "";
        setText(newText)
    }
    const handleOnChange = (event) => {
        setText(event.target.value)
    }
    const handleCopy = () => {
        var text = document.getElementById("myBox")
        text.select()
        navigator.clipboard.writeText(text.value)
    }

    const [text, setText] = useState('enter text here');
    return (
        <>
            <div className='container'>
                <h1>{props.heading} </h1>
                <div class="mb-3">
                    <textarea class="form-control" value={text} id="myBox" on onChange={handleOnChange} rows="8"></textarea>
                </div>
                <button clsassName="btn btn-primary mx-1" onClick={handleUpClick} >convert to upper case</button>
                <button clsassName="btn btn-primary mx-1" onClick={handleLoClick} >convert to lower case</button>
                <button clsassName="btn btn-primary mx-1" onClick={handleClear} >Clear text</button>
                <button clsassName="btn btn-primary mx-1" onClick={handleCopy} >Copy text</button>
            </div>

            <div className="container my3">
                <h1>your text summery</h1>
                <p>{text.split(" ").length} words and {text.length} characters</p>
                <p>{0.008 * text.split(' ').length}minutes to read</p>
                <h2>preview</h2>
                <p>{text}</p>
            </div>
        </>
    )
}
