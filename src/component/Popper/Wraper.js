import classNames from 'classnames/bind';
import styles from './popper.module.scss';

const cx = classNames.bind(styles);

function Wraper({ children }) {
    return <div className={cx('wraper')}>{children}</div>;
}

export default Wraper;
