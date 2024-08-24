import { createBoard } from '@wixc3/react-board';
import App from '../../../App';

export default createBoard({
    name: 'App',
    Board: () => <App />,
    isSnippet: true,
    environmentProps: {
        canvasHeight: 871, // Synchronize canvas height with window height
        canvasWidth: 2377, // Synchronize canvas width with window width
        windowWidth: 1920,
        windowHeight: 1080,
    },
});
