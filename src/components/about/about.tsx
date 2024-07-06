import classNames from 'classnames';
import styles from './about.module.scss';
import { Header } from '../header/header';

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
            <Header />
            <div className={styles.text}>
                <div className={styles.title}>About Us</div>
                <div className={styles.paragraph}>
                    Welcome to our Company, where innovation meets excellence in every project we
                    undertake. Established in 20XX, we have been at the forefront of delivering
                    high-quality solutions .{' '}
                </div>
            </div>
            <img
                src="https://images.unsplash.com/photo-1622542796254-5b9c46ab0d2f?q=80&w=3456&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3Dwixplosives.github.io/codux-assets-storage/add-panel/image-placeholder.jpg"
                alt=""
                className={styles.image}
            />
        </div>
    );
};
