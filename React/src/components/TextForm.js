import React, {useState} from 'react'


export default function TextForm(props) {

    const [text,setText]=useState('');

    const handleOnChange = (event)=>{
        setText(event.target.value);
    }

    const handleOnClick = ()=>{
        setText(text.toUpperCase());
    }

    const handleOnClick1= ()=>{
        setText(text.toLowerCase());
    }
    const handleOnClick2= ()=>{
        setText("");
    }
    const copyText=()=>{
        var text = document.getElementById('txarea');
        text.select();
        navigator.clipboard.writeText(text.value);
    }
    const removeSpace=()=>{
        let newText=text.split(/[  ]+/);
        setText(newText.join(' '));
    }
    const cutText=()=>{
        var text = document.getElementById('txarea');
        text.select();
        navigator.clipboard.writeText(text.value);
        setText("");
    }

  return (
    <div>
            
            <div>
            
                <label htmlFor="txarea" className={`Stop text-${props.mode === 'light'?'dark':'light'} mx-2`}><h2>String Operations</h2></label> &emsp;

                <button type='button' name='btc' id='btcpy' className="btn btn-secondary mx-1 my-3" onClick={copyText}>cpy</button>

                <button type='button' name='btct' id='btct' className='btn btn-secondary mx-1 my-3' onClick={cutText}>cut</button><br />

            <textarea name="txarea" id="txarea" cols="60" rows="3" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode === 'dark'?'grey':'white',width: '100%',border:'2px solid blue',color: props.mode === 'light'?'black':'white'}} ></textarea><br />

            <div>
                <pre style={{color: props.mode === 'light'?'black':'white'}}> {text.split(' ').length-1} words and {text.length} characters {0.008 * (text.split(' ').length-1)} words per minutes</pre>
            </div>

            <button type="submit" name='btx' id='btupp' className="btn btn-primary mx-1 " onClick={handleOnClick}>Upper Case</button>

            <button type="submit" name='btx' id='btlwo' className="btn btn-primary mx-1" onClick={handleOnClick1}>Lower Case</button>

            <button type="submit" name='btx' id='btr' className="btn btn-primary mx-1" onClick={removeSpace}>Remove Spaces</button>

            <button type="reset" name='btx' id='btc' className="btn btn-danger mx-1" onClick={handleOnClick2}>Clear</button>
            
            </div>
            
    </div>
  )
}
