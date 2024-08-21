import { createBoard } from '@wixc3/react-board';
import App from '../../../App';

export default createBoard({
    name: 'App',
    Board: () => <App />,
    isSnippet: true,
    environmentProps: {
        canvasHeight: 1811, // Synchronize canvas height with window height
        canvasWidth: 2128, // Synchronize canvas width with window width
        windowWidth: 1024,
        windowHeight: 768,
    },
});
