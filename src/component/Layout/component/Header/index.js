import classNames from 'classnames/bind';
import styles from './header.module.scss';
import imgs from '~/accsets/imgs';
import { Wraper as PopperWraper } from '~/component/Popper';
import Button from '~/component/Button';
import AccountItems from '~/component/AccountItems';
import SearchHistory from '~/component/SearchHistory';
import MenuItem from './MenuItem';
import { languages } from '~/component/Languages';

import Tippy from '@tippyjs/react/headless';
import 'tippy.js/dist/tippy.css';

import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import { faCircleQuestion, faKeyboard, faMessage, faPaperPlane, faUser } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faArrowRightFromBracket,
    faArrowUpFromBracket,
    faCircleXmark,
    faDollarSign,
    faEllipsisVertical,
    faGear,
    faLanguage,
    faMagnifyingGlass,
    faSpinner,
} from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);

const MENU_ITEM = [
    {
        icon: faLanguage,
        title: 'English',
        children: {
            title: 'Languages',
            data: languages,
        },
    },
    {
        icon: faCircleQuestion,
        title: 'Feedback and help',
    },
    {
        icon: faKeyboard,
        title: 'Keyboard shortcuts',
    },
];

console.log(MENU_ITEM[0].children.data);
console.log(languages);

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

                <div className={cx('contain-actions')}>
                    {/* Header actions */}

                    <ul className={cx('actions')}>
                        {/* <Tippy content="Upload video"> */}
                        <li className={cx('primary-color', 'upload')}>
                            <FontAwesomeIcon icon={faArrowUpFromBracket} />
                        </li>
                        {/* </Tippy> */}

                        {/* <Tippy content="Message"> */}
                        <li className={cx('primary-color', 'message')}>
                            <FontAwesomeIcon icon={faPaperPlane} />
                        </li>
                        {/* </Tippy> */}

                        {/* <Tippy content="Inbox"> */}
                        <li className={cx('primary-color', 'inbox')}>
                            <FontAwesomeIcon icon={faMessage} />
                        </li>
                        {/* </Tippy> */}
                        <li className={cx('user')}>
                            <Tippy
                                placement="bottom-end"
                                interactive
                                render={(attrs) => (
                                    <PopperWraper>
                                        <div className={cx('setting')}>
                                            <div className={cx('section')}>
                                                <FontAwesomeIcon className={cx('icon')} icon={faUser} />
                                                <h4 className={cx('title')}>View profile</h4>
                                            </div>
                                            <div className={cx('section')}>
                                                <FontAwesomeIcon className={cx('icon')} icon={faDollarSign} />
                                                <h4 className={cx('title')}>Get coins</h4>
                                            </div>
                                            <div className={cx('section')}>
                                                <FontAwesomeIcon className={cx('icon')} icon={faGear} />
                                                <h4 className={cx('title')}>Settings</h4>
                                            </div>
                                            <div className={cx('section')}>
                                                <FontAwesomeIcon className={cx('icon')} icon={faLanguage} />
                                                <h4 className={cx('title')}>English</h4>
                                            </div>
                                            <div className={cx('section')}>
                                                <FontAwesomeIcon className={cx('icon')} icon={faCircleQuestion} />
                                                <h4 className={cx('title')}>Feedback and help</h4>
                                            </div>
                                            <div className={cx('section')}>
                                                <FontAwesomeIcon className={cx('icon')} icon={faKeyboard} />
                                                <h4 className={cx('title')}>Keyboard shortcuts</h4>
                                            </div>
                                            <div className={cx('section', 'log-out')}>
                                                <FontAwesomeIcon
                                                    className={cx('icon')}
                                                    icon={faArrowRightFromBracket}
                                                />
                                                <h4 className={cx('title')}>Log out</h4>
                                            </div>
                                        </div>
                                    </PopperWraper>
                                )}
                            >
                                <div className={cx('user-avt')}>
                                    <img className={cx('img-avt')} src={imgs.avatar} alt="user avatar" />
                                </div>
                            </Tippy>
                        </li>
                    </ul>

                    <Link className={cx('upload')} to="/login">
                        Upload
                    </Link>
                    <Button primary>Log in</Button>

                    {/* Menu */}

                    <MenuItem items={MENU_ITEM} onChange={handleChange}>
                        <button className={cx('three-dot')}>
                            <FontAwesomeIcon icon={faEllipsisVertical} />
                        </button>
                    </MenuItem>
                </div>
            </div>
        </header>
    );
}

export default Header;
