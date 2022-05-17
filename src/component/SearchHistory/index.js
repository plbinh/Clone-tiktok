import classNames from 'classnames/bind';
import styles from './SearchHistory.module.scss';
import imgs from '~/accsets/imgs';

const cx = classNames.bind(styles);

function SearchHistory() {
    return (
        <div className={cx('search-history')}>
            <img className={cx('icon')} src={imgs.search} alt="search" />
            <p className={cx('title')}> Le Bong </p>
        </div>
    );
}

export default SearchHistory;
