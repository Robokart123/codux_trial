import { createBoard } from '@wixc3/react-board';
import { Products } from '../../../components/products/products';

export default createBoard({
    name: 'Products',
    Board: () => <Products />,
    isSnippet: true,
});
