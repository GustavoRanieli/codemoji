import React, { useState, useEffect } from 'react';
import '../styles/css/App.css';

function App() {
  const [windowWidth, setWindow] = useState(window.innerWidth)

	useEffect(() => {

		const updateWindow = () => {
			setWindow(window.innerWidth)
		}

		window.addEventListener('resize', updateWindow)

		return () => {
			window.removeEventListener('resize', updateWindow);
		};
	}, [])

  return (
    <div className="App">
      <header className="App-header">
        <div className='div-Tittle'>
          <h1>CodeMoji</h1>
        </div>
        <div className='div-svgs'>
          <button className='button-search'>
            <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M11.4583 19.7917C16.0607 19.7917 19.7917 16.0607 19.7917 11.4583C19.7917 6.85596 16.0607 3.125 11.4583 3.125C6.85596 3.125 3.125 6.85596 3.125 11.4583C3.125 16.0607 6.85596 19.7917 11.4583 19.7917Z" stroke="#2F2F2F" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M21.8749 21.8754L17.3436 17.3442" stroke="#2F2F2F" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </button>
          { windowWidth > 1000 ?
            <button className='button-login'>FAZER LOGIN</button> :
            <button className='button-login'>
              <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12.5 13.125V11.875C12.5 11.212 12.2366 10.5761 11.7678 10.1072C11.2989 9.63839 10.663 9.375 10 9.375H5C4.33696 9.375 3.70107 9.63839 3.23223 10.1072C2.76339 10.5761 2.5 11.212 2.5 11.875V13.125" stroke="#2F2F2F" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M7.5 6.875C8.88071 6.875 10 5.75571 10 4.375C10 2.99429 8.88071 1.875 7.5 1.875C6.11929 1.875 5 2.99429 5 4.375C5 5.75571 6.11929 6.875 7.5 6.875Z" stroke="#2F2F2F" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </button>
          }
        </div>
      </header>
    </div>
  );
}

export default App;
