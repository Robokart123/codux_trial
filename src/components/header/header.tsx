import classNames from 'classnames';
import styles from './header.module.scss';
import { ReactComponent as LogoSvg } from '../../assets/robokart_logo.svg';

export interface HeaderProps {
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
        </div>
    );
};
