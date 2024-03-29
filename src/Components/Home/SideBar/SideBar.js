import React from 'react';
import Logo from '../../../assets/Home/logo.png';
import {Link, NavLink} from "react-router-dom";
import Pizza from '../../../assets/icons/pizza.svg';
import Sets from '../../../assets/icons/sets.svg';
import Wok from '../../../assets/icons/wok.svg';
import Rolls from '../../../assets/icons/rolls.svg';
import Sushi from '../../../assets/icons/sushi.svg';
import Salad from '../../../assets/icons/salad.svg';
import Soup from '../../../assets/icons/soup.svg';
import CornDog from '../../../assets/icons/corndog.svg';
import Drinks from '../../../assets/icons/drinks.svg';
import Sale from '../../../assets/icons/sale.svg';
import Soon from "./Soon";

const SideBar = () => {
    return (
        <aside className='home__sidebar'>
            <div className='home__sidebar-top'>
                <Link to='/'>
                    <img className='home__sidebar-logo' src={Logo} alt="Romsem Logo"/>
                </Link>
                <h1 className='home__sidebar-title '>Romsem</h1>
            </div>
            <ul className='home__sidebar-list'>
                <li className='home__sidebar-list-item'>
                    <img src={Pizza} alt="Pizza"/>
                    <NavLink className='home__sidebar-link' to='/pizza'>Пицца</NavLink>
                </li>
                <li className='home__sidebar-list-item'>
                    <img src={Sets} alt="Sets"/>
                    <NavLink className='home__sidebar-link' to='/sets'>Сеты</NavLink>
                </li>
                <li className='home__sidebar-list-item'>
                    <img src={Wok} alt="Wok"/>
                    <NavLink className='home__sidebar-link' to='wok'>WOK</NavLink>
                </li>
                <li className='home__sidebar-list-item'>
                    <img src={Rolls} alt="Rolls"/>
                    <NavLink className='home__sidebar-link' to='/rolls'>Роллы</NavLink>
                </li>
                <li className='home__sidebar-list-item'>
                    <img src={Sushi} alt="Sushi"/>
                    <NavLink className='home__sidebar-link' to='/sushi'>Суши</NavLink>
                </li>
                <li className='home__sidebar-list-item'>
                    <img src={Salad} alt="Salad"/>
                    <NavLink className='home__sidebar-link' to='/salad'>Салаты</NavLink>
                </li>
                <li className='home__sidebar-list-item'>
                    <img src={Soup} alt="Soup"/>
                    <NavLink className='home__sidebar-link' to='soup'>Супы</NavLink>
                </li>
                <li className='home__sidebar-list-item'>
                    <img src={CornDog} alt="CornDog"/>
                    <NavLink className='home__sidebar-link' to='corndog'>Корн доги</NavLink>
                </li>
                <li className='home__sidebar-list-item'>
                    <img src={Drinks} alt="Drinks"/>
                    <NavLink className='home__sidebar-link' to='drinks'>Напитки</NavLink>
                </li>
                <li className='home__sidebar-list-item'>
                    <img src={Sale} alt="Sale"/>
                    <NavLink className='home__sidebar-link' to='sale'>Акции </NavLink>
                    <Soon/>
                </li>
            </ul>
        </aside>
    );
};

export default SideBar;