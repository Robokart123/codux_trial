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
        </div>
    );
};
