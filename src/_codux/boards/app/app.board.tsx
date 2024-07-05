import { createBoard } from '@wixc3/react-board';
import App from '../../../App';

export default createBoard({
    name: 'App',
    Board: () => <App />,
    isSnippet: true,
    environmentProps: {
        canvasHeight: 746, // Synchronize canvas height with window height
        canvasWidth: 1501, // Synchronize canvas width with window width
        windowWidth: window.innerWidth,
        windowHeight: window.innerHeight,
    },
});
