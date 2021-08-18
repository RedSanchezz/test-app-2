import './App.css';
import React, {useState} from 'react';

function App() {
    const [buttonContent, setButtonContent] = useState(1);
    const [isShowButtons, setShowButtons] = useState(false);

    return (
    <div>
        <button onClick={()=>setShowButtons(!isShowButtons)}>{buttonContent}</button>
        {isShowButtons &&
        <div className='buttons-block'>
            <button onClick={()=> {
                setButtonContent(1)
                setShowButtons(false);
            }}>1</button>
            <button onClick={()=> {
                setButtonContent(2)
                setShowButtons(false);
            }}>2</button>

            <button onClick={()=>{
                setButtonContent(3);
                setShowButtons(false);
            }}>3</button>
        </div>}
    </div>
  );
}

export default App;
