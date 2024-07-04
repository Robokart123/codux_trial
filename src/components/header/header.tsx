import classNames from 'classnames';
import styles from './header.module.scss';
import LogoSvg from '../../assets/robokart_logo.svg';
import About_module from '../about/about.module.scss';

export interface HeaderProps {
    className?: string;
}

export const Header = ({ className }: HeaderProps) => {
    return (
        <div className={classNames(styles.root, className)}>
            <a href="/" className={About_module.title}>
                <div
                    className={styles.svgContainer}
                    onClick={(e) => {
                        e.preventDefault();
                        window.location.href = 'http://robokart.com';
                    }}
                >
                    <LogoSvg />
                </div>
            </a>
            <div className={styles.menu}>
                <a href="/" className={styles.link}>
                    Home
                </a>
                <a href="/about" className={styles.link}>
                    About
                </a>
            </div>
        </div>
    );
};
