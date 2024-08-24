import React, { useContext } from 'react';
import { VisibilityContext } from 'react-horizontal-scrolling-menu';
import styles from './arrow.module.scss'; // Create your own styling for arrows

interface ArrowProps {
    direction: 'left' | 'right';
}

export const Arrow: React.FC<ArrowProps> = ({ direction }) => {
    const { scrollPrev, scrollNext } = useContext(VisibilityContext);

    return (
        <button
            className={`${styles.arrow} ${direction === 'left' ? styles.left : styles.right}`}
            onClick={direction === 'left' ? () => scrollPrev() : () => scrollNext()}
        >
            {direction === 'left' ? '◀' : '▶'}
        </button>
    );
};
