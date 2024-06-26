import { createBoard } from '@wixc3/react-board';

import { Example } from '../../../components/example/example';
import { ReactComponent as BirdSvgSvg } from '../../../../bird_svg.svg';
import Example_module from '../../../components/example/example.module.scss';
import Example_board_module from './example.board.module.scss';
import Classnames from 'classnames';

export default createBoard({
    name: 'Example',
    Board: () => (
        <Example header={'Title'}>
            <div />
            <h1>
                <p>This is a paragraph</p>
                <span>text</span>
            </h1>
            <div>
                <span>{null}</span>
            </div>
            <BirdSvgSvg height="200 " width="200 " />
            <div>
                <button onClick={undefined}>Button</button>
            </div>
        </Example>
    ),
    isSnippet: true,
    environmentProps: {
        windowWidth: 375,
        windowHeight: 667,
        canvasWidth: 558,
        canvasHeight: 709,
        canvasPadding: {
            left: 0,
        },
    },
});
