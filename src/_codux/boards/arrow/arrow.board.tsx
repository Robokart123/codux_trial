import { createBoard } from '@wixc3/react-board';
import { Arrow } from '../../../components/arrow/arrow';

export default createBoard({
    name: 'Arrow Left',
    Board: () => <Arrow direction="left" />,
    isSnippet: true,
});

export const ArrowRightBoard = createBoard({
    name: 'Arrow Right',
    Board: () => <Arrow direction="right" />,
    isSnippet: true,
});
