import React, {useEffect, useState} from 'react';
import './NavigationBar.css';
import Logo from '../../assets/man.png';
import MenuIcon from '../../assets/menu.png';
const NavigationBar = () => {

    const routes = [
        {
            path: '#home',
            title: 'Home'
        },
        {
            path: '#about-me',
            title: 'About Me'
        },
        {
            path: '#education',
            title: 'Education & Skills'
        },
        {
            path: '#projects',
            title: 'Projects'
        },
        {
            path: '#interests',
            title: 'Interests'
        },
        {
            path: '#contact',
            title: 'Contact Me'
        }
    ];

    const [isOpen, setIsOpen] = useState(false);
    const [activeRoute, setActiveRoute] = useState('home');
    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    useEffect(() => {
        const hash = window.location.hash.slice(1);
        setActiveRoute(hash);
        window.addEventListener('hashchange', () => {
            const hash = window.location.hash.slice(1);
            setActiveRoute(hash);
        });
    }, []);

    const renderRoutes = () => {
        return routes.map(route => {
            const active = route.path.includes(activeRoute);
            return (
                <li className={active ? 'active' : ''} key={route.path}>
                    <a href={route.path}>{route.title}</a>
                </li>
            )
        })
    };

    return (
        <nav>
            <div className="navbar">
                <div className="navbar-brand">
                    <a href={'#home'}>
                        <img src={Logo} alt={'Logo'} width={60}/>
                    </a>
                </div>
                <ul className={`navbar-links`}>
                    {renderRoutes()}
                </ul>
                <div className="navbar-toggle" onClick={toggleMenu}>
                    <img alt={'menu'} src={MenuIcon} width={40}/>
                </div>
                <div className={'mobile-nav'}>
                    {isOpen && (
                        <ul className={`navbar-links-mobile`}>
                            {renderRoutes()}
                        </ul>
                    )}
                </div>
            </div>
        </nav>
    );
};

export default NavigationBar;
