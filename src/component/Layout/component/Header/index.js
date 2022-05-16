import classNames from 'classnames/bind';
import styles from './header.module.scss';
import imgs from '~/accsets/imgs';
import { Wraper as PopperWraper } from '~/component/Popper';
import Button from '~/component/Button';
import AccountItems from '~/component/AccountItems';
import SearchHistory from '~/component/SearchHistory';
import MenuItem from './MenuItem';
import { MENU_ITEM_IN, MENU_ITEM_OUT } from './menuItems';

import Tippy from '@tippyjs/react/headless';
import 'tippy.js/dist/tippy.css';
import TippyTooltips from '@tippyjs/react';

import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import { faMessage, faPaperPlane } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faArrowUpFromBracket,
    faCircleXmark,
    faEllipsisVertical,
    faMagnifyingGlass,
    faSpinner,
} from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);

function Header() {
    const [searchResult, setSearchResult] = useState([]);

    useEffect(() => {
        setTimeout(() => {
            setSearchResult([]);
        }, 0);
    }, []);

    const handleChange = (menuItem) => {
        switch (menuItem.title) {
            case 'languages':
                // change language
                break;

            default:
                break;
        }
    };

    const currentUser = true;

    return (
        <header className={cx('wraper')}>
            <div className={cx('container')}>
                <Link to="/">
                    <img className={cx('logo')} src={imgs.logo} alt="tiktok"></img>
                </Link>

                {/* Search result */}

                <Tippy
                    interactive
                    visible={searchResult.length > 0}
                    // visible
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
                            </div>
                        </PopperWraper>
                    )}
                >
                    <div className={cx('search')}>
                        <input
                            className={cx('input')}
                            placeholder="Search accounts and videos"
                            spellCheck={false}
                        ></input>
                        <button className={cx('clear', 'primary-color')}>
                            <FontAwesomeIcon icon={faCircleXmark} />
                        </button>
                        <FontAwesomeIcon className={cx('loading', 'primary-color')} icon={faSpinner} />

                        <button className={cx('btn-search', 'primary-color')}>
                            <FontAwesomeIcon icon={faMagnifyingGlass} />
                        </button>
                    </div>
                </Tippy>

                {/* Header actions */}

                {currentUser ? (
                    <div className={cx('contain-actions')}>
                        <ul className={cx('actions')}>
                            <TippyTooltips trigger="click" interactive content="Upload video">
                                <li className={cx('primary-color', 'upload-icon')}>
                                    <FontAwesomeIcon icon={faArrowUpFromBracket} />
                                </li>
                            </TippyTooltips>

                            <TippyTooltips content="Message">
                                <li className={cx('primary-color', 'message-icon')}>
                                    <FontAwesomeIcon icon={faPaperPlane} />
                                </li>
                            </TippyTooltips>

                            <TippyTooltips content="Inbox">
                                <li className={cx('primary-color', 'inbox-icon')}>
                                    <FontAwesomeIcon icon={faMessage} />
                                </li>
                            </TippyTooltips>

                            <li className={cx('user')}>
                                <MenuItem items={MENU_ITEM_IN}>
                                    <div className={cx('user-avt')}>
                                        <img className={cx('img-avt')} src={imgs.avatar} alt="user avatar" />
                                    </div>
                                </MenuItem>
                            </li>
                        </ul>
                    </div>
                ) : (
                    <div className={cx('contain-actions')}>
                        <Link className={cx('upload')} to="/login">
                            Upload
                        </Link>
                        <Button primary>Log in</Button>

                        {/* Menu */}

                        <MenuItem items={MENU_ITEM_OUT} onChange={handleChange}>
                            <button className={cx('three-dot')}>
                                <FontAwesomeIcon icon={faEllipsisVertical} />
                            </button>
                        </MenuItem>
                    </div>
                )}
            </div>
        </header>
    );
}

export default Header;
