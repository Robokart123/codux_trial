// fetchGoogleSheetData.ts

import axios from 'axios';

const fetchGoogleSheetData = async (sheetId: string, range: string, apiKey: string) => {
    const url = `https://sheets.googleapis.com/v4/spreadsheets/${sheetId}/values/${range}?key=${apiKey}`;

    try {
        const response = await axios.get(url);
        return response.data.values; // Assuming values are returned as an array of arrays
    } catch (error) {
        console.error('Error fetching data from Google Sheets:');
        return null;
    }
};

export default fetchGoogleSheetData;
