import { useEffect, useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { GrClose } from "react-icons/gr";
import logo  from "../assets/logo.svg"

function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false)
    const [icon, setIcon] = useState()
    const [windowWidth, setWindowWidth] = useState(window.innerWidth)

    const handleResize = () => {
        setWindowWidth(window.innerWidth)
    }
    useEffect(() => {
        window.addEventListener('resize', handleResize)
    }, [])
    useEffect(() => {
        if(menuOpen) {
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
            path: ''
        },
        {
            title: 'Motivation',
            path: ''
        },
        {
            title: 'Relation homme-femme',
            path: ''
        }
    ]
  return (
    <nav className="bg-white flex justify-around items-center md:h-[84px] h-[60px] sticky top-0">
        <div className="logo z-20"><img src={logo} alt="logo du site" className="h-14 w-14" /></div>
        <div className={`${menuOpen && windowWidth < 768 ? 'visible': !menuOpen && windowWidth < 768 ? 'invisible' : ''}`}>
            <ul className="flex md:flex-row flex-col md:gap-7 bg-white  md:h-auto md:w-auto md:static absolute top-14 right-0 bottom-0 left-0  ">
                {themes.map((theme, index) => (
                    <li key={index} className="p-2 md:p-0"> {theme.title} </li>
                ))}
            </ul>
        </div>
        <span className="z-20 inline-block absolute top-5 right-3 md:hidden" onClick={handleOpen}> {icon} </span>
    </nav>
  )
}

export default Navbar