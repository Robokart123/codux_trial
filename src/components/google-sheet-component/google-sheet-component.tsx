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
}

const GoogleSheetComponent: React.FC<GoogleSheetComponentProps> = ({ sheetId, range, apiKey }) => {
    const [data, setData] = useState<any[]>([]);

    useEffect(() => {
        const getData = async () => {
            const sheetData = await fetchGoogleSheetData(sheetId, range, apiKey);
            if (sheetData) {
                const formattedData = sheetData.slice(1).map((row: any[]) => ({
                    name: row[0],
                    value: parseFloat(row[3]),
                }));
                setData(formattedData);
            }
        };

        getData();
    }, [sheetId, range, apiKey]);

    return (
        <ResponsiveContainer width="99%" height={600} className={styles['chart-container']}>
            <BarChart
                width={600}
                height={600}
                data={data}
                margin={{ top: 0, right: 0, left: 0, bottom: 0 }}
            >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" interval={0} angle={45} textAnchor="start" height={100} className={styles['recharts-cartesian-axis-tick']} />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="value" fill="#4cb948" />
            </BarChart>
        </ResponsiveContainer>
    );
};

export default GoogleSheetComponent;
