import React, { useEffect, useState } from 'react';
import fetchGoogleSheetData from './fetchGoogleSheetData';
import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
    ResponsiveContainer,
} from 'recharts';
import styles from './google-sheet-component.module.scss';

interface GoogleSheetComponentProps {
    sheetId: string;
    range: string;
    apiKey: string;
    xAxis: number; // Example of using number type for xAxis
    yAxis: number; // Example of using number type for yAxis
}

const GoogleSheetComponent: React.FC<GoogleSheetComponentProps> = ({
    sheetId,
    range,
    apiKey,
    xAxis,
    yAxis,
}) => {
    const [data, setData] = useState<any[]>([]);

    useEffect(() => {
        let isMounted = true; // Add a flag to track component mounting status

        const getData = async () => {
            const sheetData = await fetchGoogleSheetData(sheetId, range, apiKey);
            if (sheetData) {
                const formattedData = sheetData.slice(1).map((row: any[]) => ({
                    name: row[xAxis] as string, // Assuming xAxis is the numeric index for the name
                    value: parseFloat(row[yAxis]) as number, // Assuming yAxis is the numeric index for the value
                }));
                if (isMounted) {
                    // Check if the component is still mounted before updating the state
                    setData(formattedData);
                }
            }
        };

        getData();

        return () => {
            isMounted = false; // Set the flag to false when the component unmounts
        };
    }, [sheetId, range, apiKey, xAxis, yAxis]);

    return (
        <ResponsiveContainer width="100%" height="100%" className={styles['chart-container']}>
            <BarChart data={data} margin={{ top: 0, right: 0, left: 0, bottom: 0 }}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis
                    dataKey="name"
                    interval={0}
                    angle={90}
                    textAnchor="start"
                    height={150}
                    domain={[0, 100]}
                    allowDataOverflow
                    className={styles['recharts-cartesian-x-axis-tick']}
                />
                <YAxis className={styles['recharts-cartesian-y-axis-tick']} />
                <Tooltip />
                <Legend />
                <Bar dataKey="value" fill="#4cb948" barSize={10} />
            </BarChart>
        </ResponsiveContainer>
    );
};

export default GoogleSheetComponent;
