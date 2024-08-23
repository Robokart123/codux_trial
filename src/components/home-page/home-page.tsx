import React, { useRef, useEffect, useState } from 'react';
import classNames from 'classnames';
import styles from './home-page.module.scss';
import LogoSvg from '../../assets/Bharat_logo.svg?react';
import GapSvg from '../../assets/GapBetweenEducation.svg?react';
import SolutionSvg from '../../assets/Solutions.svg?react';
import BuisnessModel from '../../assets/BuisnessModel.svg?react';
import Ritesh from '../../assets/Ritesh.png';
import Swapnil from '../../assets/Swapnil.png';
import Bharat from '../../assets/Bharat.png';
import Ankita from '../../assets/Ankita.png';
import Rane from '../../assets/Rane.png';
import PlaceHolderPerson from '../../assets/PlaceholderPerson.jpg';
import videoSrc from '../../assets/Demo_Video.mp4';

export default interface HomePageProps {
    className?: string;
}

const clamp = (num: number, min: number, max: number) => Math.min(Math.max(num, min), max);

export const HomePage = ({ className }: HomePageProps) => {
    const videoRef = useRef<HTMLVideoElement>(null);
    const animationRef = useRef<number | null>(null);
    const [enabledButtons, setEnabledButtons] = useState<number[]>([1, 5]);

    useEffect(() => {
        const handleVisibilityChange = () => {
            if (document.visibilityState === 'visible' && videoRef.current) {
                videoRef.current.play().catch((error) => {
                    console.error('Error attempting to play video:', error);
                });
            }
        };

        document.addEventListener('visibilitychange', handleVisibilityChange);

        if (videoRef.current) {
            videoRef.current.play().catch((error) => {
                console.error('Error attempting to play video:', error);
            });
        }

        return () => {
            document.removeEventListener('visibilitychange', handleVisibilityChange);
            if (animationRef.current) {
                cancelAnimationFrame(animationRef.current);
            }
        };
    }, []);

    return (
        <div className={classNames(styles.root, className)}>
            <div className={styles.logo}>
                <LogoSvg className={styles.logo} />
            </div>
            <div className={styles.paragraph}>
                <div className={styles.text}>Innovate. Inspire. Ignite.</div>
            </div>
            <div>
                <div className={styles.gradient_TopToBot}></div>
                <video
                    ref={videoRef}
                    className={styles.video}
                    src={videoSrc}
                    autoPlay
                    muted
                    loop
                ></video>
                <div className={styles.gradient_BotToTop}></div>
            </div>
            <div className={styles.layoutVertical}>
                <div className={styles.secondary_title}>
                    Bridging the Gap Between Students &amp; Careers
                </div>
                <div className={styles.secondary_paragraph}>
                    <ul className={styles.bullet_points}>
                        <li>
                            There is a noticeable lack of skill-based education in schools, leading
                            to a gap between academic knowledge and practical skills needed in the
                            real world.
                        </li>
                        <li>
                            We  offer students the opportunity to learn modern life skills by
                            providing them with instruments and training on contemporary equipment.
                        </li>
                        <li>
                            The majority of India&apos;s population lives in rural areas. We provide
                            our technological solutions to these schools to support the sustainable
                            development of the country.
                        </li>
                    </ul>
                </div>
                <div className={styles.image}>
                    <GapSvg className={styles.image} />
                </div>
            </div>
            <div className={styles.layoutHorizontal}>
                <div className={styles.secondary_paragraph}>
                    <div className={styles.secondary_title}>Our Solution</div>
                    <ul className={styles.bullet_points}>
                        <li>
                            We offer innovative kits specifically designed to make learning
                            technology easy. Additionally, we provide AR and VR solutions to
                            simplify the learning of science.
                        </li>
                        <li>
                            Kits and content are designed alongside the NCERT curriculum to
                            facilitate experiential and practical-based learning.
                        </li>
                        <li>
                            We have an in-house team for kit development and content creation,
                            ensuring that our curriculum and kits are always up to date.
                        </li>
                    </ul>
                </div>
                <div className={styles.image}>
                    <SolutionSvg className={styles.image} />
                </div>
            </div>
            <div className={styles.layoutHorizontal}>
                <div className={styles.secondary_paragraph}>
                    <div className={styles.secondary_title}>Business Model </div>
                    <ul className={styles.bullet_points}>
                        <li>
                            {''}
                            BTCPL generates revenue through subscription-based software and content
                            access for schools, direct sales of hardware and kits, consulting and
                            training services for educational institutions, and licensing
                            educational content and software to third parties.{''}
                        </li>
                        <li>
                            BTCPL&apos;s pricing strategy is customer-centric, balancing
                            affordability with profitability. We will employ a tiered pricing
                            structure based on the scale of the solution, customer segment, and
                            value delivered. {' '}
                        </li>
                        <li>
                            Additionally, we will explore value-based pricing models to capture the
                            full value proposition.
                        </li>
                    </ul>
                </div>
                <div className={styles.image}>
                    <BuisnessModel className={styles.image} />
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
