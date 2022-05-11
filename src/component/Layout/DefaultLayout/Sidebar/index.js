import styles from './sidebar.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

function Sidebar() {
    return (
        <aside className={cx('wraper')}>
            <h2>Sidebar</h2>
        </aside>
    );
}

export default Sidebar;
