import styles from '../styles/Layout.module.css'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { UserCircleIcon } from '@heroicons/react/24/outline'
import { useState } from 'react'


// Import para el useHover de https://usehooks.com/
import { useHover } from "@uidotdev/usehooks";



export default function Layout({children, title, description}) {
    
    // Creamos las variables para el useHover
    // ref para hacer referencia a la etiqueta a la cual se le aplicara el efecto
    // hovering es cuando esta encima qué debe hacer y qué no. En este caso cuando este encima "block" y cuando no "invisible"
    const [ref, hovering] = useHover()
    const expanded = hovering ? 'block' : 'invisible'
    const [estado, setEstado] = useState('hidden');

    // Extraemos el pathname para saber en que ventana estamos.
    const { pathname } = useRouter();
    return(

    <div>
        <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        </Head>
        
        <>
        <nav class="bg-gray-800">
            <div class="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
                <div class="relative flex h-16 items-center justify-between">
                <div class="absolute inset-y-0 left-0 flex items-center sm:hidden">
                    
                    {/* BOTÓN SUBMENÚ RESPONSIVE */}
                    <button type="button" class="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white" 
                    aria-controls="mobile-menu" aria-expanded="false" onClick={ () => {estado === 'hidden' ? setEstado('block') : setEstado('hidden')}}>
                    <span class="sr-only">Open main menu</span>
                    <svg class="block h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                    </svg>
                    <svg class="hidden h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                    </button>
                </div>
                <div class="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                    <Link class="flex flex-shrink-0 items-center" href="/">
                        <img class="block h-8 w-auto " src="/icon/MaraComp Logo.png"></img>
                    </Link>
                    <div class="hidden sm:ml-6 sm:block">
                    <div class="flex space-x-4">
                        
                        <Link href="/" className={`${pathname === "/" ? styles.current : styles.inactive} `}>Inicio</Link>
                        <Link href="/suplidores" className={`  ${pathname === "/suplidores" ? styles.current : styles.inactive} `}>Suplidores</Link>
                        <Link href="/inventario" className={`  ${pathname === "/inventario" ? styles.current : styles.inactive}`}>Inventario</Link>
                    </div>
                    </div>
                </div>
                <div class="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0 " >
                    <button type="button" class="rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                    <span class="sr-only">View notifications</span>
                    <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0" />
                    </svg>
                    </button>

                   
                    <div class="relative ml-3" ref={ref} >
                    <div>
                        <button type="button" class="flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800" id="user-menu-button" aria-expanded="false" aria-haspopup="true">
                        <span class="sr-only">Open user menu</span>
                        <UserCircleIcon className="h-6 w-6 text-gray-400 hover:text-white" />
                        </button>
                    </div>
                    <div className={`absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none
                    ${expanded} duration-[85ms]`} 
                    role="menu" aria-orientation="vertical" aria-labelledby="user-menu-button" tabindex="-1" id='submenu-logout'>
                        <Link href="#" class="block px-4 py-2 text-sm text-gray-700"  role="menuitem" tabindex="-1" id="user-menu-item-0">Your Profile</Link>
                        <Link href="#" class="block px-4 py-2 text-sm text-gray-700" role="menuitem" tabindex="-1" id="user-menu-item-1">Settings</Link>
                        <Link href="#" class="block px-4 py-2 text-sm text-gray-700" role="menuitem" tabindex="-1" id="user-menu-item-2">Sign out</Link>
                    </div>
                    </div>
                </div>
                </div>
            </div>

            
            <div className={`${estado}`} id="mobile-menu">
                <div class="space-y-1 px-2 pb-3 pt-2">
                <Link href="/" className={`${pathname === "/" ? styles.currentMobile : styles.inactiveMobile}`} >Inicio</Link>
                <Link href="/suplidores" className={`${pathname === "/suplidores" ? styles.currentMobile : styles.inactiveMobile}`}>Suplidores</Link>
                <Link href="/inventario" className={`${pathname === "/inventario" ? styles.currentMobile : styles.inactiveMobile}`}>Inventario</Link>
                </div>
            </div>
            </nav>

            <main>{children}</main>

        </>
        
    </div>
)
    
}

Layout.defaultProps = {
    title: 'MaraComp',
    description: 'Venta de componentes al mejor precio.'
}

const navigation = [
    { name: 'Dashboard', href: '#', current: true },
    { name: 'Team', href: '#', current: false },
    { name: 'Projects', href: '#', current: false },
    { name: 'Calendar', href: '#', current: false },
  ]

