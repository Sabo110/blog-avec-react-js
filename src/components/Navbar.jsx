import { useEffect, useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { GrClose } from "react-icons/gr";
import logo from "../assets/logo2.svg"

import { NavLink } from "react-router-dom";

function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false)
    const [icon, setIcon] = useState()
    const [windowWidth, setWindowWidth] = useState(window.innerWidth)

    const handleResize = () => {
        setWindowWidth(window.innerWidth)
    }
    useEffect(() => {
        window.addEventListener('resize', handleResize)
        // Fonction de nettoyage pour supprimer l'événement
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, [])
    useEffect(() => {
        if (menuOpen) {
            setIcon(<GrClose />)
        } else {
            setIcon(<GiHamburgerMenu />)
        }
    }, [menuOpen])

    const handleOpen = () => {
        setMenuOpen(!menuOpen)
    }

    const themes = [
        {
            title: 'Sport',
            path: '/sport/'
        },
        {
            title: 'Motivation',
            path: '/motivation/'
        },
        {
            title: 'Relation homme-femme',
            path: '/relation-homme-femme/'
        }
    ]
    return (
        <nav className={`bg-white flex md:flex-row flex-col md:justify-around md:items-center md:h-[80px] h-[50px] sticky top-0 shadow-sm ${menuOpen && windowWidth < 768 ? 'h-screen' : ''}`}>
            <NavLink to="/" className=""><img src={logo} alt="logo du site" className="md:h-36 md:w-36 w-20 h-20 z-20" /></NavLink>
            <div className={`${menuOpen && windowWidth < 768 ? 'visible' : !menuOpen && windowWidth < 768 ? 'visible' : ''}`}>
                <ul className="flex flex-row md:gap-7 border border-black   md:h-auto md:w-auto md:static">
                    {themes.map((theme, index) => (
                        <li key={index} className="p-2 md:p-0"> <NavLink to={theme.path}>{theme.title}</NavLink> </li>
                    ))}
                </ul>
            </div>
            {/*<span className="z-20 inline-block absolute top-5 right-3 md:hidden" onClick={handleOpen}> {icon} </span>*/}
        </nav>
    )
}

export default Navbar