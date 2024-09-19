import classNames from 'classnames';
import styles from './about.module.scss';

export interface AboutProps {
    className?: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */

export const About = ({ className }: AboutProps) => {
    return (
        <div className={classNames(styles.root, className)}>
            <div className={styles.text}>
                <div className={styles.title}>About Us</div>
                <div className={styles.paragraph}>
                    BTCPL provides subscription-based software and content access for schools,
                    direct sales of hardware and kits, consulting and training services for
                    educational institutions, and licensing educational content and software to
                    third parties.{' '}
                </div>
            </div>
        </div>
    );
};
