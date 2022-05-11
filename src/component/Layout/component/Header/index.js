import styles from './header.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

function Header() {
    return (
        <header className={cx('wraper')}>
            <div className={cx('container')}></div>
        </header>
    );
}

export default Header;
