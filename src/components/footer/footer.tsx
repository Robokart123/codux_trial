import classNames from 'classnames';
import styles from './footer.module.scss';
import GithubSvg from '../../assets/github.svg?react';
import FacebookSvg from '../../assets/facebook.svg?react';
import TwitterxSvg from '../../assets/twitterx.svg?react';

export default interface FooterProps {
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
                        9503134540
                        <br />
                        bharatedu.tech
                    </div>
                </div>
                <div className={styles.socials}>
                    <a href="http://bharatedu.tech" className={styles.logo_link}>
                        <FacebookSvg className={styles.logo_link} />
                    </a>
                    <a href="http://bharatedu.tech" className={styles.logo_link}>
                        <TwitterxSvg className={styles.logo_link} />
                    </a>
                    <a href="http://bharatedu.tech" className={styles.logo_link}>
                        <GithubSvg className={styles.logo_link} />
                    </a>
                </div>
            </div>
        </div>
    );
};
