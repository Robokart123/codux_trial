import { createBoard } from '@wixc3/react-board';
import App from '../../../App';

export default createBoard({
    name: 'App 1',
    Board: () => <App />,
    isSnippet: true,
});
