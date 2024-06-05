'use client'

import Link from "next/link";
import css from "./Lnb.module.scss";
import { useState, useEffect, useRef } from "react";
import { Badge } from "..";
import { DATA } from "@/data";

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
                <ul className={css.list}>
                    <li><Link href={'/button'} onClick={() => { setIsOpenNav(false) }}>Button</Link> <Badge>UPDATE</Badge></li>
                    <li><Link href={'/checkbox'} onClick={() => { setIsOpenNav(false) }}>Checkbox</Link> <Badge>UPDATE</Badge></li>
                    <li className={css.not}>Input</li>
                    <li className={css.not}>Switch</li>
                    <li className={css.not}>Box</li>
                    <li className={css.not}>Select</li>
                    <li className={css.not}>Card</li>
                    <li className={css.not}>Avatar</li>
                </ul>
            </nav>
            <div className={css.foot}>
                <div className={css.sub}>last update : {DATA.LAST_UPDATE_DATE}</div>
                <div className={css.sub}>lib version : {DATA.APP_VERSION}</div>
            </div>
        </aside>
    );
}
