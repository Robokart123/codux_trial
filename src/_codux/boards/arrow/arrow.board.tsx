import { createBoard } from '@wixc3/react-board';
import { Arrow } from '../../../components/arrow/arrow';

export default createBoard({
    name: 'Arrow',
    Board: () => <Arrow />,
    isSnippet: true,
});
