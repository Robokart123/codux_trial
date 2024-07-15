import { createBoard } from '@wixc3/react-board';
import { About } from '../../../components/about/about';

export default createBoard({
    name: 'About',
    Board: () => <About />,
    isSnippet: true,
    environmentProps: {
        canvasHeight: 1061,
        canvasWidth: 2167,
        windowWidth: 1920,
        windowHeight: 1080,
    },
});
