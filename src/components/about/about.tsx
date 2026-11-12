import classNames from 'classnames';
import styles from './about.module.scss';
import Ritesh from '../../assets/Ritesh.png';
import Swapnil from '../../assets/Swapnil_1.png';
import Bharat from '../../assets/Bharat.png';
import Ankita from '../../assets/Ankita_1.png';
import Rane from '../../assets/Rane_2.png';
import Rahul from '../../assets/rahul.png';
import JP from '../../assets/JP.png';
import PlaceHolderPerson from '../../assets/PlaceholderPerson.jpg';

export interface AboutProps {
    className?: string;
}

interface Person {
    name: string;
    designation: string;
    image: string;
}

// Each inner array is one row. Add or remove people freely.
const teamRows: Person[][] = [
    [
        { name: 'Ritesh Shah', designation: 'Director', image: Ritesh },
        { name: 'Rahul Jha', designation: 'Director', image: Rahul },
    ],
    [
        { name: 'Swapnil Jani', designation: 'CMO', image: Swapnil },
        { name: 'Ankita Maral', designation: 'COO', image: Ankita },
        { name: 'Abhishek Rane', designation: 'CTO', image: Rane },
        { name: 'Jay Prakash', designation: 'CFO', image: JP },
        { name: 'Bharat Shah', designation: 'CPO', image: Bharat },
    ],
];

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
                {teamRows.map((row, i) => (
                    <div className={styles.layoutProfiles} key={i}>
                        {row.map((p) => (
                            <div className={styles.personContainer} key={p.name}>
                                <img
                                    src={p.image}
                                    alt={p.name}
                                    className={styles.Personimage}
                                    onError={(e) => {
                                        e.currentTarget.src = PlaceHolderPerson;
                                    }}
                                />
                                <div className={styles.personText}>{p.name}</div>
                                <div className={styles.personDesignation}>{p.designation}</div>
                            </div>
                        ))}
                    </div>
                ))}
            </div>
        </div>
    );
};
