import { useEffect } from 'react';
import classNames from 'classnames';
import styles from './header.module.scss';
import LogoSvg from '../../assets/robokart_logo.svg?react'; // Correct usage
import { Link, NavLink } from 'react-router-dom';

export interface HeaderProps {
    className?: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */
export const Header = ({ className }: HeaderProps) => {
    useEffect(() => {
        let lastScrollY = window.scrollY;
        const rootElement = document.querySelector(`.${styles.root}`) as HTMLElement;
        const logoElement = document.querySelector(`.${styles.logo}`) as HTMLElement;

        const handleScroll = () => {
            if (rootElement && logoElement) {
                if (window.scrollY > lastScrollY) {
                    rootElement.classList.add(styles.hidden);
                    logoElement.style.transform = 'translateY(-50px)'; // Adjust this value to match the header height
                } else {
                    rootElement.classList.remove(styles.hidden);
                    logoElement.style.transform = 'translateY(0)';
                }
                lastScrollY = window.scrollY;
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div className={classNames(styles.root, className)}>
            <div className={styles.header}>
                <div className={classNames(styles.logoContainer, styles.logo)}>
                    <a
                        href="http://robokart.com"
                        className={classNames(styles.logoLink, styles.logo)}
                    >
                        <LogoSvg className={styles.logo} />
                    </a>
                </div>
                <div className={styles.Info}>
                    {/*
                    <div>
                        <Link to="/example_home">Home</Link>
                    </div>
                    <div>
                        <Link to="/example_about">About</Link>
                    </div>
                    */}
                </div>
            </div>
        </div>
    );
};
