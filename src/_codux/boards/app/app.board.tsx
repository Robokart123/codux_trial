import { createBoard } from '@wixc3/react-board';
import App from '../../../App';

export default createBoard({
    name: 'App',
    Board: () => <App />,
    isSnippet: true,
    environmentProps: {
        canvasHeight: 718,
        canvasWidth: 1884,
        windowWidth: 1024,
        windowHeight: 768,
    },
});
