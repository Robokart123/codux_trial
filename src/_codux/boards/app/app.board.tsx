import { createBoard } from '@wixc3/react-board';
import App from '../../../App';

export default createBoard({
    name: 'App',
    Board: () => <App />,
    isSnippet: true,
    environmentProps: {
        canvasHeight: window.innerHeight, // Synchronize canvas height with window height
        canvasWidth: window.innerWidth,   // Synchronize canvas width with window width
        windowWidth: window.innerWidth,
        windowHeight: window.innerHeight,
    },
});
