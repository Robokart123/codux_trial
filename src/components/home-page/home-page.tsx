import React, { useRef, useEffect, useState } from 'react';
import classNames from 'classnames';
import styles from './home-page.module.scss';
import LogoSvg from '../../assets/Bharat_logo.svg?react'; // Correct usage
import videoSrc from '../../assets/Demo_Video.mp4'; // Adjust the path as needed

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
            <div className={styles.overlay}>
                <div className={styles.logo}>
                    <a href="http://robokart.com">
                        <LogoSvg className={styles.logo} />
                    </a>
                </div>
                {/*<div className={styles.title}>Bharat Tec</div>*/}
                <div className={styles.paragraph}>
                    <div className={styles.text}>
                        {'Our Mission :-'}
                        <br />
                        Transforming kids from consumers to creators of technology
                    </div>
                </div>
                <div className={styles.gradient}></div>
                {/*
                <div className={styles.buttons}>
                    {[1, 5, 10, 15].map((percentage, index) => (
                        <button
                            key={index}
                            className={classNames(styles.button, {
                                [styles.disabled]: !enabledButtons.includes(percentage),
                            })}
                            onClick={() => handlePlayToPercentage(percentage, percentage)}
                            disabled={!enabledButtons.includes(percentage)}
                        >
                            Go to {percentage}%
                        </button>
                    ))}
                </div>
                */}
                <video ref={videoRef} className={styles.video} src={videoSrc} autoPlay muted loop />
            </div>
        </div>
    );
};
