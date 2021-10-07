import React from 'react'
import {ReactComponent as Sun} from '../images/icon-sun.svg';
import {ReactComponent as Moon} from '../images/icon-moon.svg';

export default function Header({lightMode, setLightMode}) {

     const setMode = () => {
        setLightMode(!lightMode)
        let dataTheme = document.documentElement.getAttribute('data-theme');
        if(dataTheme === null) {
            document.documentElement.setAttribute("data-theme", "dark")
        } else if (dataTheme === 'dark') {
            document.documentElement.setAttribute("data-theme", "light")
        } else if (dataTheme === 'light') {
            document.documentElement.setAttribute("data-theme", "dark")
        }
     }

    return (
        <header className="header container">
            <h1 className="header__logo">devfinder</h1>
            <div className="header__toggle" onClick={() => setMode()}>
                <p>{lightMode ? 'dark' : 'light'}</p>
                {lightMode ? <Moon /> : <Sun />}
            </div>
        </header>
    )
}
