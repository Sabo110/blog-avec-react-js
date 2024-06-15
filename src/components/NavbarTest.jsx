import React from "react";
import { Navbar, NavbarBrand, NavbarContent, NavbarItem, NavbarMenuToggle, NavbarMenu, NavbarMenuItem, Link, Button } from "@nextui-org/react";
import { AcmeLogo } from "./AcmeLogo.jsx";
import logo from "../assets/logo2.svg"
import { NavLink } from "react-router-dom";

function NavbarTest() {
    const [isMenuOpen, setIsMenuOpen] = React.useState(false);
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
    const menuItems = [
        "Profile",
        "Dashboard",
        "Activity",
        "Analytics",
        "System",
        "Deployments",
        "My Settings",
        "Team Settings",
        "Help & Feedback",
        "Log Out",
    ];

    return (
        <Navbar onMenuOpenChange={setIsMenuOpen}>
            <NavbarContent>
                <NavbarMenuToggle
                    aria-label={isMenuOpen ? "Close menu" : "Open menu"}
                    className="sm:hidden"
                />
                <NavbarBrand>
                    <NavLink to="/"><img src={logo} alt="" className="w-24 h-24" /></NavLink>
                </NavbarBrand>
            </NavbarContent>

            <NavbarContent className="hidden sm:flex gap-4" justify="center">
                {themes.map((theme, index) => (
                    <NavbarItem key={index}>
                        <NavLink to={theme.path} className="hover:text-[#00bf63] md:text-xl "> {theme.title}</NavLink>
                    </NavbarItem>
                ))}
            </NavbarContent>

            <NavbarMenu>
                {themes.map((theme, index) => (
                    <NavbarMenuItem key={index}>
                        <NavLink to={theme.path} className="hover:text-[#00bf63]"> {theme.title} </NavLink>
                    </NavbarMenuItem>
                ))}
            </NavbarMenu>
        </Navbar>
    );
}

export default NavbarTest