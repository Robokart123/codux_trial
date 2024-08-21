import { createBoard } from '@wixc3/react-board';
import GoogleSheetComponent from '../../../components/google-sheet-component/google-sheet-component';

export default createBoard({
    name: 'GoogleSheetComponent',
    Board: () => (
        <GoogleSheetComponent
            sheetId={'1h-ri5h2Xc4CUC6kfjNrQtF7nE1QS-jAKfHXROxkQNnI'}
            range={'Sheet1!A6:E32'}
            apiKey={'AIzaSyATGzA0dYpdq-jd0aGLW2HS7m7ngb2R0f4'}
            xAxis={0}
            yAxis={2}
        />
    ),
    isSnippet: true,
    environmentProps: {
        canvasWidth: 2620,
        windowWidth: 610,
        windowHeight: 844,
    },
});
