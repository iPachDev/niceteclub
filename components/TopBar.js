import React from 'react';
import {Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, Button, Badge} from "@nextui-org/react";

export default function TopBar() {
  return (
    
        <Navbar isBordered >
            <NavbarBrand>
                <img src='/img/nicte-logo.png' alt='Nicté Club' className='h-10'/>
            </NavbarBrand>
            <NavbarContent className="hidden sm:flex gap-4" justify="center">
                {/* <NavbarItem>
                    <Link color="foreground" href="#">Inicio</Link>
                </NavbarItem> */}
                <NavbarItem isActive>
                    <Link href="#" aria-current="page">Oaxaca</Link>
                </NavbarItem>
                <NavbarItem>
                    <Link color="foreground" href="#">Michoacán</Link>
                </NavbarItem>
                <NavbarItem>
                    <Link color="foreground" href="#">Taxco</Link>
                </NavbarItem>
            </NavbarContent>
            <NavbarContent justify="end">
                {/* <NavbarItem className="hidden lg:flex">
                    <Link href="#">Login</Link>
                </NavbarItem> */}
                <NavbarItem>
                    <Badge content="Próximamente" color="danger" size="sm">
                        <Button color="primary" href="#" variant="flat" isDisabled>Registrarme</Button>
                    </Badge>
                </NavbarItem>
            </NavbarContent>
        </Navbar>

  )
}
