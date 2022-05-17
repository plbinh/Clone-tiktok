import classNames from 'classnames/bind';
import styles from './search.module.scss';
import { Wraper as PopperWraper } from '~/component/Popper';
import AccountItems from '~/component/AccountItems';
import SearchHistory from '~/component/SearchHistory';
import Tippy from '@tippyjs/react/headless';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark, faSpinner } from '@fortawesome/free-solid-svg-icons';
import { useEffect, useState, useRef } from 'react';
import { SearchIcon } from '~/component/Icon';

const cx = classNames.bind(styles);

function Search() {
    const [searchResult, setSearchResult] = useState([]);
    const [searchValue, setSearchValue] = useState('');
    const [showSearchResult, setShowSearchResult] = useState(true);
    const inputRef = useRef();

    useEffect(() => {
        setTimeout(() => {
            setSearchResult([1, 2, 3]);
        }, 0);
    }, []);

    const handleSearchValue = () => {
        setSearchValue('');
        setSearchResult([]);
        inputRef.current.focus();
    };

    const handleShowResult = () => {
        setShowSearchResult(true);
    };

    return (
        <Tippy
            interactive
            visible={showSearchResult && searchResult.length > 0}
            // visible
            onClickOutside={() => setShowSearchResult(false)}
            render={(attrs) => (
                <PopperWraper>
                    <div className={cx('search-result')} tabIndex="-1" {...attrs}>
                        <SearchHistory />
                        <SearchHistory />
                        <SearchHistory />
                        <SearchHistory />

                        <p className={cx('accounts')}>Accounts</p>

                        <AccountItems />
                        <AccountItems />
                        <AccountItems />
                        <AccountItems />
                        <AccountItems />
                        <AccountItems />
                    </div>
                </PopperWraper>
            )}
        >
            <div className={cx('search')}>
                <input
                    value={searchValue}
                    ref={inputRef}
                    className={cx('input')}
                    placeholder="Search accounts and videos"
                    spellCheck={false}
                    onFocus={handleShowResult}
                    onChange={(e) => setSearchValue(e.target.value)}
                ></input>
                <button className={cx('clear', 'primary-color')} onClick={handleSearchValue}>
                    {!!searchValue && <FontAwesomeIcon icon={faCircleXmark} />}
                </button>
                {/* <FontAwesomeIcon className={cx('loading', 'primary-color')} icon={faSpinner} /> */}

                <button className={cx('btn-search')}>
                    <SearchIcon className={cx('search-icon')} />
                </button>
            </div>
        </Tippy>
    );
}

export default Search;
