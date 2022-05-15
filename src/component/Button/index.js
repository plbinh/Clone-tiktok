import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import styles from './button.module.scss';

const cx = classNames.bind(styles);

function Button({
    children,
    to,
    href,
    onClick,
    primary = false,
    outline = false,
    small = false,
    large = false,
    round = false,
    passProps,
}) {
    let Comp = 'button';

    const props = {
        onClick,
        ...passProps,
    };

    if (to) {
        props.to = to;
        Comp = Link;
    } else if (href) {
        props.href = href;
        Comp = 'a';
    }

    const classes = cx('wraper', { primary, outline, small, large, round });

    return (
        <Comp className={classes} {...props}>
            <span>{children}</span>
        </Comp>
    );
}

export default Button;
