import Popups from "./components/Popups";
import { useState, useEffect } from 'react'
import {Button} from 'react-bootstrap'

function App() {
    const [buttonPopup, setButtonPopup] = useState(false)
        const [timedPopup, setTimedPopup] = useState(false)

  useEffect(() => {
    setTimeout(() => { 
      setTimedPopup(true)
      }, 3000 );
  },[]);

  return (
    <div className='container'>
        <main>
          <h1 className='Heading1'>React popups</h1>
<br/><br/>
          <Button onClick={() => setButtonPopup(true)}>Open popup</Button>
 
          </main>
          <Popups trigger={buttonPopup} setTrigger = {setButtonPopup}>
            <h3>My PopUp</h3>
            this is my pop up
            </Popups>

            <Popups trigger={timedPopup} setTrigger = {setTimedPopup}>
            <h3>My Timed PopUp</h3>
            this is my Timed pop up
            </Popups>
    </div>
  );
}

export default App;
