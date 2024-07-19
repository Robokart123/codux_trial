// HomePage.tsx

import React, { useRef, useEffect, useState } from 'react';
import classNames from 'classnames';
import styles from './home-page.module.scss';
import InfinityLogoSvg from '../../assets/robokart_logo.svg';
import { RecordButton } from '../record-button/record-button'; // Adjust the path as needed

export interface HomePageProps {
    className?: string;
}

const clamp = (num: number, min: number, max: number) => Math.min(Math.max(num, min), max);

export const HomePage: React.FC<HomePageProps> = ({ className }) => {
    const videoRef = useRef<HTMLVideoElement>(null);
    const animationRef = useRef<number | null>(null);

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

    useEffect(() => {
        const handleScroll = () => {
            const rootElement = document.querySelector(`.${styles.root}`) as HTMLElement;
            const logoElement = document.querySelector(`.${styles.logo} img`) as HTMLElement;

            if (rootElement && logoElement) {
                const scrollTop = window.scrollY;
                const maxScroll = window.innerHeight;
                const scrollFactor = Math.min(scrollTop / maxScroll, 1);

                rootElement.style.transform = `translateY(${scrollTop * -0.5}px)`;
                logoElement.style.transform = `translateY(${scrollFactor * -50}px)`; // Adjust the value as needed
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div className={classNames(styles.root, className)}>
            <div className={styles.overlay}>
                <div className={styles.logo}>
                    <img src={InfinityLogoSvg} alt="Infinity Logo" />
                </div>
                <div className={styles.paragraph}>
                    <div className={styles.text}>
                        <br />
                        &quot;From Consumers to Creators.&quot;{' '}
                    </div>
                </div>
                <br />
                <div>
                    <RecordButton />
                </div>
            </div>
        </div>
    );
};
