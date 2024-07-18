import { createBoard } from '@wixc3/react-board';
import GoogleSheetComponent from '../../../components/google-sheet-component/google-sheet-component';

export default createBoard({
    name: 'GoogleSheetComponent',
    Board: () => <GoogleSheetComponent sheetId={''} range={''} apiKey={''} />,
    isSnippet: true,
    environmentProps: {
        canvasWidth: 2620,
    },
});
