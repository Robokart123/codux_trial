import { createBoard } from '@wixc3/react-board';
import App from '../../../App';

export default createBoard({
    name: 'App',
    Board: () => <App />,
    isSnippet: true,
    environmentProps: {
        canvasHeight: 779, // Synchronize canvas height with window height
        canvasWidth: 1021, // Synchronize canvas width with window width
        windowWidth: window.innerWidth,
        windowHeight: window.innerHeight,
    },
});
