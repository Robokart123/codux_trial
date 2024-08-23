import { createBoard } from '@wixc3/react-board';
import { About } from '../../../components/about/about';

export default createBoard({
    name: 'About',
    Board: () => <About />,
    isSnippet: true,
    environmentProps: {
        windowWidth: 375,
        windowHeight: 667,
    },
});
