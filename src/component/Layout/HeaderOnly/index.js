import Header from '~/component/Layout/component/Header';
import styles from './headerOnly.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

function HeaderOnly({ children }) {
    return (
        <div className={cx('wraper')}>
            <Header />
            <div className={cx('container')}>
                <div className={cx('content')}>{children}</div>
            </div>
        </div>
    );
}

export default HeaderOnly;
