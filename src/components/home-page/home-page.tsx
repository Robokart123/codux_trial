import React, { useRef, useEffect, useState } from 'react';
import classNames from 'classnames';
import styles from './home-page.module.scss';
import InfinityLogoSvg from '../../assets/infinity_logo.svg';
import GoogleSheetComponent from '../google-sheet-component/google-sheet-component';

export interface HomePageProps {
    className?: string;
}

export const HomePage: React.FC<HomePageProps> = ({ className }) => {
    const [sheetRange, setSheetRange] = useState('Sheet1!A1:E30'); // Default range
    const [apiKey, setApiKey] = useState('AIzaSyATGzA0dYpdq-jd0aGLW2HS7m7ngb2R0f4'); // Replace with your Google Sheets API key
    const [sheetId, setSheetId] = useState('1NkaTJM7MW7kdmYsVVOzBva2sAonEs9IgpqB-H-TIRtQ');
    const [xAxis, setXAxis] = useState("0");
    const [yAxis, setYAxis] = useState("3"); // Default yAxis value

    const handleSheetRangeChange = (range: string, yAxisValue: string) => {
        setSheetRange(range);
        setYAxis(yAxisValue); // Update yAxis when sheet range changes
    };

    const handleApiKeyChange = (key: string) => {
        setApiKey(key);
    };

    const handleSheetIdChange = (id: string) => {
        setSheetId(id);
    };

    const handleXaxisChange = (id: string) => {
        setXAxis(id);
    };

    const handleYaxisChange = (id: string) => {
        setYAxis(id);
    };

    return (
        <div className={classNames(styles.root, className)}>
            <div className={styles.overlay}>
                <div className={styles.logo}>
                    <img src={InfinityLogoSvg} alt="Infinity Logo" />
                </div>
                <div className={styles.paragraph}>
                    <div className={styles.text}>
                        {'Quote  :-'}
                        <br />
                        <br />
                        &quot;Financial education is the foundation for building wealth and
                        security. Investing wisely transforms your knowledge into a tool for
                        achieving your dreams and securing your future.&quot;{' '}
                    </div>
                </div>
            </div>
            <div className={styles.chart}>
                <GoogleSheetComponent sheetId={sheetId} range={sheetRange} apiKey={apiKey} xAxis={xAxis as unknown as number} yAxis={yAxis as unknown as number} />
            </div>
            <div className={styles.buttons}>
                <button onClick={() => handleYaxisChange("2")}>
                    Quantity
                </button>
                <button onClick={() => handleYaxisChange("3")}>
                    Single Unity Pricing
                </button>
                <button onClick={() => handleYaxisChange("4")}>
                    Total Pricing
                </button>
            </div>
        </div>
    );
};

export default HomePage;
