import { createBoard } from '@wixc3/react-board';
import { BirdSvg } from '../../../../bird-svg/bird-svg';

export default createBoard({
    name: 'Bird_svg',
    Board: () => <BirdSvg />,
    isSnippet: true,
});
