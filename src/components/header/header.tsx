import classNames from 'classnames';
import styles from './header.module.scss';
import LogoSvg from '../../assets/robokart_logo.svg?react'; // Correct usage

export default interface HeaderProps {
    className?: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */
export const Header = ({ className }: HeaderProps) => {
    return (
        <div className={classNames(styles.root, className)}>
            <div className={styles.logoContainer}>
                <a href="http://robokart.com" className={classNames(styles.logoLink, styles.logo)}>
                    <LogoSvg className={styles.logo} />
                </a>
            </div>
            <div className={styles.Info}>
                <div>Home</div>
                <div>About</div>
            </div>
        </div>
    );
};
