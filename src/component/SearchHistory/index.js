import classNames from 'classnames/bind';
import styles from './SearchHistory.module.scss';
import { SearchIcon } from '~/component/Icon';

const cx = classNames.bind(styles);

function SearchHistory({ data }) {
    return (
        <div className={cx('search-history')}>
            <SearchIcon className={cx('icon')} />
            <p className={cx('title')}>{data.full_name}</p>
        </div>
    );
}

export default SearchHistory;
