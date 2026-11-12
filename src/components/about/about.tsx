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
@@ -28,39 +22,6 @@ export const About = ({ className }: AboutProps) => {
                    third parties.{' '}
                </div>
            </div>
            <div className={styles.layoutVertical}>
                <div className={styles.secondary_title}>Our Team</div>
                <div className={styles.secondary_paragraph}></div>
                <div className={styles.layoutProfiles}>
                    <div className={styles.personContainer}>
                        <img src={Ritesh} alt={PlaceHolderPerson} className={styles.Personimage} />
                        <div className={styles.personText}>Ritesh Shah</div>
                        <div className={styles.personDesignation}>Director</div>
                    </div>
                </div>
                <div className={styles.layoutProfiles}>
                    <div className={styles.personContainer}>
                        <img src={Swapnil} alt={PlaceHolderPerson} className={styles.Personimage} />
                        <div className={styles.personText}>Chaitali Shah</div>
                        <div className={styles.personDesignation}>Director</div>
                    </div>
                    <div className={styles.personContainer}>
                        <img src={Bharat} alt={PlaceHolderPerson} className={styles.Personimage} />
                        <div className={styles.personText}>Rahul Jha</div>
                        <div className={styles.personDesignation}>Director</div>
                    </div>
                </div>
            </div>
        </div>
    );
};
