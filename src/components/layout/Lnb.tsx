'use client'

import Link from "next/link";
import css from "./Lnb.module.scss";
import { useState, useEffect, useRef } from "react";

export default function Lnb() {
    const asideRef = useRef<any>();
    const [isOpenNav, setIsOpenNav] = useState(false);
    useEffect(() => {
        if (asideRef.current) {
            if (isOpenNav) {
                document.body.style.overflowY = 'hidden'
            } else {
                document.body.style.overflowY = 'auto'
            }
        }
    }, [isOpenNav])
    return (
        <aside className={`${css.aside} ${isOpenNav ? css.open : css.close}`} ref={asideRef}>
            <button className={css.toggle} onClick={() => { setIsOpenNav(!isOpenNav) }}>
                <span tabIndex={-1}></span>
                <span tabIndex={-1}></span>
                <span tabIndex={-1}></span>
            </button>
            <nav className={`${css.nav} ${isOpenNav ? css.open : ''}`}>
                <h2 className={css.tit}><Link href={'/'} onClick={() => { setIsOpenNav(false) }}>NEXT-UI</Link></h2>
                <h3 className={css.sub}>COMPONENTS</h3>
                <ul className={css.list}>
                    <li><Link href={'/button'} onClick={() => { setIsOpenNav(false) }}>Button</Link></li>
                    <li><Link href={'/textInput'} onClick={() => { setIsOpenNav(false) }}>textInput</Link></li>
                </ul>
            </nav>
        </aside>
    );
}
