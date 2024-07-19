import { createBoard } from '@wixc3/react-board';
import { RecordButton } from '../../../components/record-button/record-button';

export default createBoard({
    name: 'RecordButton',
    Board: () => <RecordButton />,
    isSnippet: true,
});
