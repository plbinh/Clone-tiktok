import Tippy from '@tippyjs/react/headless';
import { useEffect, useState, useRef } from 'react';

import classNames from 'classnames/bind';
import styles from './search.module.scss';

import { Wraper as PopperWraper } from '~/component/Popper';
import AccountItems from '~/component/AccountItems';
import SearchHistory from '~/component/SearchHistory';
import { SearchIcon, ClearIcon, Loading } from '~/component/Icon';
import { useDebounce } from '~/hooks';
import * as searchService from '~/apiService/searchService';

const cx = classNames.bind(styles);

function Search() {
    const [searchResult, setSearchResult] = useState([]);
    const [searchValue, setSearchValue] = useState('');
    const [showSearchResult, setShowSearchResult] = useState(true);
    const [loading, setLoading] = useState(false);
    const inputRef = useRef();

    const debounced = useDebounce(searchValue, 600);

    useEffect(() => {
        if (!debounced) {
            setSearchResult([]);
            return;
        }
        setLoading(true);

        // request
        //     .get('users/search', {
        //         params: {
        //             q: debounced,
        //             type: 'less',
        //         },
        //     })
        //     .then((data) => {
        //         setSearchResult(data.data.data);
        //         setLoading(false);
        //     })
        //     .catch(() => setLoading(false));
        const fetchApi = async () => {
            try {
                const response = await searchService.search(debounced);
                setSearchResult(response);
                setLoading(false);
            } catch (error) {
                setLoading(false);
            }
        };

        fetchApi();
    }, [debounced]);

    const handleSearchValue = () => {
        setSearchValue('');
        setSearchResult([]);
        inputRef.current.focus();
    };

    const handleShowResult = () => {
        setShowSearchResult(true);
    };

    const handleClickAccount = (data) => {
        setSearchResult([]);
        setSearchValue('');
    };

    const handleHistorySearch = () => {};

    return (
        <Tippy
            interactive
            visible={showSearchResult && searchResult.length > 0}
            // visible
            onClickOutside={() => setShowSearchResult(false)}
            render={(attrs) => (
                <PopperWraper>
                    <div className={cx('search-result')} tabIndex="-1" {...attrs}>
                        {searchResult.map((data) => (
                            <SearchHistory key={data.id} data={data} />
                        ))}

                        <p className={cx('accounts')}>Accounts</p>
                        {searchResult.map((data) => (
                            <AccountItems key={data.id} data={data} onClick={() => handleClickAccount(data)} />
                        ))}
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
                <button className={cx('clear')} onClick={handleSearchValue}>
                    {!!searchValue && !loading && <ClearIcon />}
                </button>
                {loading && <Loading className={cx('loading')} />}

                <button className={cx('btn-search')} onClick={handleHistorySearch}>
                    <SearchIcon className={cx('search-icon')} />
                </button>
            </div>
        </Tippy>
    );
}

export default Search;
