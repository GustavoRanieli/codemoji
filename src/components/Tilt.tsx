import { Tilt } from "react-tilt";
import React, { ReactNode, useEffect, useState } from 'react'


interface MyChildren{
    children: ReactNode
}

const defaultOptions = {
	reverse:        false,  // reverse the tilt direction
	max:            35,     // max tilt rotation (degrees)
	perspective:    1000,   // Transform perspective, the lower the more extreme the tilt gets.
	scale:          1.1,    // 2 = 200%, 1.5 = 150%, etc..
	speed:          1000,   // Speed of the enter/exit transition
	transition:     true,   // Set a transition on enter/exit.
	axis:           null,   // What axis should be disabled. Can be X or Y.
	reset:          true,    // If the tilt effect has to be reset on exit.
	easing:         "cubic-bezier(.03,.98,.52,.99)",    // Easing on enter/exit.
}

const Window = ({children}:MyChildren) => {
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



 return(
    <div style={{position: 'absolute', top:'0vh', left:'0vw',zIndex:0}}>
		{windowWidth > 1000 ?
        <Tilt options={defaultOptions} style={{ height: '100vh', width: '100vw'}}>
            {children}
        </Tilt> : <></> 
		}
    </div>
 )
}

export default Window

