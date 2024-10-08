import classNames from 'classnames';
import styles from './header.module.scss';
import LogoSvg from '../../assets/Bharat_logo.svg?react'; // Correct usage
import { Link, NavLink } from 'react-router-dom';
import { useEffect } from 'react';

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

        const handleScroll = () => {
            if (rootElement) {
                if (window.scrollY > lastScrollY) {
                    rootElement.classList.add(styles.hidden); // Hide the header when scrolling down
                } else {
                    rootElement.classList.remove(styles.hidden); // Show the header when scrolling up
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
                <div className={styles.logoContainer}>
                    <a
                        href="https://bharatedu.tech"
                        className={classNames(styles.logoLink, styles.logo)}
                    >
                        <LogoSvg className={styles.logo} />
                    </a>
                </div>
                <div className={styles.Info}>
                    <div>
                        <Link to="/home">Home</Link>
                    </div>
                    <div>
                        <Link to="/about">About</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};
