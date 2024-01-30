import React from 'react'
import style from '../../Styles/base/blocks/_nav.module.scss'
import { Link } from 'react-router-dom'
import logo from '../Images/Logo.png'


export default function NavBar() {
    return (
        <>
            <nav className={style.nav}>
                <div className={style.nav_left}>
                    <div className={style.logo}>
                        <img src={logo} alt="Logo" className={style.image} />
                    </div>
                    <p className={style.nav_text}>
                        3 yildan ortiq tajribaga ega grafik dizayner
                    </p>
                </div>
                <div className={style.nav_right}>
                    <ul className={style.nav_lists}>
                        <li className={style.nav_list}>
                            <Link to={'/'} className={style.nav_list_item__active}>
                                Men haqimda
                            </Link>
                        </li>
                        <li className={style.nav_list}>
                            <Link to={'/'} className={style.nav_list_item}>
                                Portfolio
                            </Link>
                        </li>
                        <li className={style.nav_list}>
                            <Link to={'/se className={style.nav_list_item}rvices'}>
                                Dizayn xizmatlari
                            </Link>
                        </li>
                        <li className={style.nav_list}>
                            <Link to={'/of className={style.nav_list_item}curse'}>
                                Оnlayn-kurslar
                            </Link>
                        </li>
                        <li className={style.nav_list}>
                            <Link to={'/co className={style.nav_list_item}ntacts'}>
                                Kontakt
                            </Link>
                        </li>
                        <button className={style.nav_list_btn}>
                            <Link to={'/'} className={style.nav_list_item}>
                                Kirish
                            </Link>
                        </button>
                    </ul>
                </div>
            </nav>
        </>
    )
}
