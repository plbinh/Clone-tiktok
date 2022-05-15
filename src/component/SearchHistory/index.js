import classNames from 'classnames/bind';
import styles from './SearchHistory.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);

function SearchHistory() {
    return (
        <div className={cx('search-history')}>
            <FontAwesomeIcon className={cx('icon')} icon={faSearch} />
            <p className={cx('title')}> Le Bong </p>
        </div>
    );
}

export default SearchHistory;
