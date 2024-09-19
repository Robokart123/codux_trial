import React, { useRef, useEffect, useState } from 'react';
import classNames from 'classnames';
import { Products } from '../products/products';
import styles from './home-page.module.scss';
import DemoVideo from '../../assets/Demo_Video.webm';
import LogoSvg from '../../assets/Bharat_logo.svg?react';
import GapSvg from '../../assets/GapBetweenEducation.svg?react';
import SolutionSvg from '../../assets/Solutions.svg?react';
import BuisnessModel from '../../assets/BuisnessModel.svg?react';
import Milestones from '../../assets/Milestones.svg?react';
import PlaceHolderPerson from '../../assets/PlaceholderPerson.jpg';
import Shreya from '../../assets/Rane.png';
import Jyoti from '../../assets/Rane.png';
import ArNcert from '../../assets/ArNcert.png';
import ArNcertWorking from '../../assets/ArNcertWorking.png';
import VrStandalone from '../../assets/VrStandalone.png';
import InteractiveCharts from '../../assets/InteractiveCharts.png';
import TalkingPen from '../../assets/TalkingPen.png';
import ArCards from '../../assets/ArCards.png';

import aboutStyles from '../about/about.module.scss';

export default interface HomePageProps {
    className?: string;
}

const clamp = (num: number, min: number, max: number) => Math.min(Math.max(num, min), max);

export const HomePage = ({ className }: HomePageProps) => {
    const videoRef = useRef<HTMLVideoElement>(null);
    const animationRef = useRef<number | null>(null);
    const [currentImageIndex, setCurrentImageIndex] = useState<number>(0);
    const productsData = [
        {
            title: 'VR Content',
            description: '250 immersive 3D experience video Based on NCERT syllabus',
            imageSrc: [VrStandalone], // Array of image URLs
            videoSrc: 'https://drive.google.com/file/d/1Ia-eCU-Hox7rJc9rb3y05yLhhPrpT4dJ/preview', // Example video URL
        },
        {
            title: 'AR Flashcards',
            description:
                '26 Alphabet Cards, 48 Varnamala Cards, 31 Number Cards,13 Shapes and Color Cards.',
            imageSrc: [ArCards], // Array of image URLs
            videoSrc: 'https://drive.google.com/file/d/1vD9ZDozyyVTnHc0DzfDCQ_HmMy_JRJCK/preview', // Example video URL
        },
        {
            title: 'Talking pen charts',
            description:
                ' Interactive charts include 10 different charts each packed with rich information covering diverse subjects',
            imageSrc: [TalkingPen], // Array of image URLs
            videoSrc: 'https://drive.google.com/file/d/1prbEZqo2IGdSttR94KoXQMYOcLZ6yK3f/preview', // Example video URL
        },
        {
            title: 'AR interactive charts',
            description:
                'AR Interactive Charts mobile phone app whcih allows users to scan the Interactive charts',
            imageSrc: [InteractiveCharts], // Array of image URLs
            videoSrc: 'https://drive.google.com/file/d/1QSF2EVKchJD4g17tYCiApPatic_w20Hg/preview', // Example video URL
        },
        {
            title: 'ArNcert',
            description: 'An AR mobile phone application based on NCERT Syllabus.',
            imageSrc: [ArNcertWorking, ArNcert], // Array of image URLs
            videoSrc: 'https://drive.google.com/file/d/1FmxGkH-o6pND_b9fYscckGitzCCu6D6A/preview', // Example video URL
        },

        // Add more products here
    ];

    const testimonialsData = [
        {
            name: 'Shreya Usankar',
            designation: 'HEAD - R&D DEPT',
            feedback:
                'At Robokart.com, we are proud to partner with Bharat Technology Education Consulting Private Limited (BTECPL) in providing innovative educational solutions to schools. Their expertise in curriculum development and software integration seamlessly complements our high-quality robotics and STEM equipment.',
            imageSrc: PlaceHolderPerson,
        },
        {
            name: 'Jyoti Sharma',
            designation: 'Head Education Vertical',
            feedback:
                'Bharat Technology Education Consulting Private Limited has been a valuable partner in our mission to equip Indias youth with the skills of the future. BTCPL solutions have enabled us to create world-class learning environments that inspire and empower students. ',
            imageSrc: PlaceHolderPerson,
        },
        // Add more testimonials here
    ];

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
            <div className={styles.layoutVertical}>
                <div className={styles.tertiary_title}>Our Content</div>
                <div className={styles.gradient_TopToBot}></div>
                <video
                    ref={videoRef}
                    className={styles.video}
                    src={DemoVideo}
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
                            <div>
                                There is a noticeable lack of skill-based education in schools,
                                leading to a gap between academic knowledge and practical skills
                                needed in the real world.
                            </div>
                        </li>
                        <li>
                            <div>
                                We  offer students the opportunity to learn modern life skills by
                                providing them with instruments and training on contemporary
                                equipment.
                            </div>
                        </li>
                        <li>
                            <div>
                                The majority of India&apos;s population lives in rural areas. We
                                provide our technological solutions to these schools to support the
                                sustainable development of the country.
                            </div>
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
                            <div className={styles.tertiary_paragraph}>
                                We offer innovative kits specifically designed to make learning
                                technology easy. Additionally, we provide AR and VR solutions to
                                simplify the learning of science.
                            </div>
                        </li>
                        <li>
                            <div className={styles.tertiary_paragraph}>
                                Kits and content are designed alongside the NCERT curriculum to
                                facilitate experiential and practical-based learning.
                            </div>
                        </li>
                        <li>
                            <div className={styles.tertiary_paragraph}>
                                We have an in-house team for kit development and content creation,
                                ensuring that our curriculum and kits are always up to date.
                            </div>
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
                            <div className={styles.tertiary_paragraph}>
                                BTCPL generates revenue through subscription-based software and
                                content access for schools, direct sales of hardware and kits,
                                consulting and training services for educational institutions, and
                                licensing educational content and software to third parties.
                            </div>
                        </li>
                        <li>
                            <div className={styles.tertiary_paragraph}>
                                BTCPL&apos;s pricing strategy is customer-centric, balancing
                                affordability with profitability. We will employ a tiered pricing
                                structure based on the scale of the solution, customer segment, and
                                value delivered. 
                            </div>
                        </li>
                        <li>
                            <div className={styles.tertiary_paragraph}>
                                Additionally, we will explore value-based pricing models to capture
                                the full value proposition.
                            </div>
                        </li>
                    </ul>
                </div>
                <div className={styles.image}>
                    <BuisnessModel className={styles.image} />
                </div>
            </div>
            <div className={styles.layoutHorizontal}>
                <div className={styles.secondary_paragraph}>
                    <div className={styles.secondary_title}> Milestones</div>
                    <div className={styles.tertiary_title}>Turnover of 9,95,76,149</div>
                    <ul className={styles.bullet_points}>
                        <li>
                            <div className={styles.quaternary_title}>
                                Atal Tinkering Lab Projcect
                            </div>
                            <br />
                            {
                                <div className={styles.tertiary_paragraph}>
                                    Implemented in 60 CBSE schools this project equpped student with
                                    robotics and coding tools.&apos;
                                </div>
                            }
                        </li>
                        <li>
                            <div className={styles.quaternary_title}>Gujcost Department Supply</div>
                            <br />
                            {
                                <div className={styles.tertiary_paragraph}>
                                    Equipment and devices were supplied to 134 colleges across
                                    Gujarat, fostering advanced learning.
                                </div>
                            }
                        </li>
                        <li>
                            <div className={styles.quaternary_title}>
                                VJNT Department Robotics &amp; Coding
                            </div>
                            <br />
                            {
                                <div className={styles.tertiary_paragraph}>
                                    100 Schools benefited from robotics and coding kits and training
                                    enhancing STEM education.
                                </div>
                            }
                        </li>
                    </ul>
                </div>
                <div className={styles.image}>
                    <Milestones className={styles.image} />
                </div>
            </div>
            <div className={styles.section}>
                <div className={aboutStyles.secondary_title}>Our Products</div>
                <Products products={productsData} />
            </div>
        </div>
    );
};
