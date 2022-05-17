import images from '~/accsets/imgs';
import { useState } from 'react';
import classNames from 'classnames';
import styles from './image.module.scss';

function Image({ src, alt, className, fallback: customFallback = images.defaultAvt, ...props }) {
    const [fallback, setFallback] = useState('');

    return (
        <img
            src={fallback || src}
            className={classNames(styles.wraper, className)}
            alt={alt}
            {...props}
            onError={() => setFallback(customFallback)}
        />
    );
}

export default Image;
