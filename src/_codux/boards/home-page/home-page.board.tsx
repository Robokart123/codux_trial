import { createBoard } from '@wixc3/react-board';
import { HomePage } from '../../../components/home-page/home-page';

export default createBoard({
    name: 'HomePage',
    Board: () => <HomePage />,
    isSnippet: true,
    environmentProps: {
        canvasWidth: 1215,
        canvasHeight: 845,
    },
});
