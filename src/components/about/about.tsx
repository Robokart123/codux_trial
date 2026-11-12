import classNames from 'classnames';
import styles from './about.module.scss';
import Ritesh from '../../assets/Ritesh.png';
import Swapnil from '../../assets/Swapnil.png';
import Bharat from '../../assets/Bharat.png';
import Ankita from '../../assets/Ankita.png';
import Rane from '../../assets/Rane.png';
import PlaceHolderPerson from '../../assets/PlaceholderPerson.jpg';

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
            <div className={styles.layoutVertical}>
                <div className={styles.secondary_title}>Our Core Team</div>
                <div className={styles.secondary_paragraph}></div>
                <div className={styles.layoutProfiles}>
                    <div className={styles.personContainer}>
                        <img src={Ritesh} alt={PlaceHolderPerson} className={styles.Personimage} />
                        <div className={styles.personText}>Ritesh Shah</div>
                        <div className={styles.personDesignation}>Founder & CEO</div>
                    </div>
                </div>
                <div className={styles.layoutProfiles}>
                    <div className={styles.personContainer}>
                        <img src={Swapnil} alt={PlaceHolderPerson} className={styles.Personimage} />
                        <div className={styles.personText}>Swapnil Jani</div>
                        <div className={styles.personDesignation}>CMO</div>
                    </div>
                    <div className={styles.personContainer}>
                        <img src={Bharat} alt={PlaceHolderPerson} className={styles.Personimage} />
                        <div className={styles.personText}>Bharat Shah</div>
                        <div className={styles.personDesignation}>CPO</div>
                    </div>
                    <div className={styles.personContainer}>
                        <img src={Ankita} alt={PlaceHolderPerson} className={styles.Personimage} />
                        <div className={styles.personText}>Ankita Maral</div>
                        <div className={styles.personDesignation}>COO</div>
                    </div>
                    <div className={styles.personContainer}>
                        <img src={Rane} alt={PlaceHolderPerson} className={styles.Personimage} />
                        <div className={styles.personText}>Abhishek Rane</div>
                        <div className={styles.personDesignation}>CTO</div>
                    </div>
                </div>
            </div>
        </div>
    );
};
