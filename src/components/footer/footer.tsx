import classNames from 'classnames';
import styles from './footer.module.scss';
import { ReactComponent as TwitterxSvg } from '../../assets/twitterx.svg';
import { ReactComponent as FacebookSvg } from '../../assets/facebook.svg';
import { ReactComponent as GithubSvg } from '../../assets/github.svg';

export interface FooterProps {
    className?: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */
export const Footer = ({ className }: FooterProps) => {
    return (
        <div className={classNames(styles.root, className)}>
            <div className={styles.footer}>
                <div>
                    <div className={styles.main}>About Us</div>
                    <div className={styles.info}>
                        <br />
                        +91 000000
                        <br />
                        robokart.com
                    </div>
                </div>
                <div className={styles.socials}>
                    <a href="http://robokart.com" className={classNames(styles.logoLink, styles.logo)}>
                        <GithubSvg className={styles.logo} />
                    </a>

                    <a href="http://robokart.com" className={classNames(styles.logoLink, styles.logo)}>
                        <FacebookSvg className={styles.logo} />
                    </a>

                    <a href="http://robokart.com" className={classNames(styles.logoLink, styles.logo)}>
                        <TwitterxSvg className={styles.logo} />
                    </a>
                </div>
            </div>
        </div>
    );
};
