import classNames from 'classnames';
import styles from './bird-svg.module.scss';
import { ReactComponent as BirdSvgSvg } from '../bird_svg.svg';

export interface BirdSvgProps {
    className?: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */
export const BirdSvg = ({ className }: BirdSvgProps) => {
    return (
        <div className={classNames(styles.root, className)}>
            <BirdSvgSvg height="100 " width="100 " />
        </div>
    );
};
