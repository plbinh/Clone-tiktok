import styles from './header.module.scss';
import classNames from 'classnames/bind';
import imgs from '~/accsets/imgs';
import Tippy from '@tippyjs/react/headless';
import 'tippy.js/dist/tippy.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faArrowRightFromBracket,
    faArrowUpFromBracket,
    faCircleCheck,
    faCircleXmark,
    faDollarSign,
    faGear,
    faLanguage,
    faMagnifyingGlass,
    faSearch,
    faSpinner,
} from '@fortawesome/free-solid-svg-icons';
import { faCircleQuestion, faKeyboard, faMessage, faPaperPlane, faUser } from '@fortawesome/free-regular-svg-icons';
import { useEffect, useState } from 'react';
import { Wraper as PopperWraper } from '~/component/Popper';

const cx = classNames.bind(styles);

function Header() {
    const [searchResult, setSearchResult] = useState([]);

    useEffect(() => {
        setTimeout(() => {
            setSearchResult([1, 2, 3]);
        }, 0);
    }, []);

    return (
        <header className={cx('wraper')}>
            <div className={cx('container')}>
                <img className={cx('logo')} src={imgs.logo} alt="tiktok"></img>

                <Tippy
                    interactive
                    visible={searchResult.length > 0}
                    render={(attrs) => (
                        <PopperWraper>
                            <div className={cx('search-result')} tabIndex="-1" {...attrs}>
                                <div className={cx('search-history')}>
                                    <FontAwesomeIcon className={cx('icon')} icon={faSearch} />
                                    <p className={cx('title')}> Le Bong </p>
                                </div>
                                <div className={cx('search-history')}>
                                    <FontAwesomeIcon className={cx('icon')} icon={faSearch} />
                                    <p className={cx('title')}> Le Bong </p>
                                </div>
                                <div className={cx('search-history')}>
                                    <FontAwesomeIcon className={cx('icon')} icon={faSearch} />
                                    <p className={cx('title')}> Le Bong </p>
                                </div>

                                <p className={cx('accounts')}>Accounts</p>

                                <div className={cx('user')}>
                                    <img className={cx('user-img')} src={imgs.avatar} alt="user-img" />
                                    <div className={cx('user-info')}>
                                        <h4>
                                            lebong.95{' '}
                                            <span>
                                                <FontAwesomeIcon icon={faCircleCheck} />
                                            </span>
                                        </h4>
                                        <p>Le Bong</p>
                                    </div>
                                </div>
                                <div className={cx('user')}>
                                    <img className={cx('user-img')} src={imgs.avatar} alt="user-img" />
                                    <div className={cx('user-info')}>
                                        <h4>
                                            lebong.95{' '}
                                            <span>
                                                <FontAwesomeIcon icon={faCircleCheck} />
                                            </span>
                                        </h4>
                                        <p>Le Bong</p>
                                    </div>
                                </div>
                                <div className={cx('user')}>
                                    <img className={cx('user-img')} src={imgs.avatar} alt="user-img" />
                                    <div className={cx('user-info')}>
                                        <h4>
                                            lebong.95{' '}
                                            <span>
                                                <FontAwesomeIcon icon={faCircleCheck} />
                                            </span>
                                        </h4>
                                        <p>Le Bong</p>
                                    </div>
                                </div>
                                <div className={cx('user')}>
                                    <img className={cx('user-img')} src={imgs.avatar} alt="user-img" />
                                    <div className={cx('user-info')}>
                                        <h4>
                                            lebong.95{' '}
                                            <span>
                                                <FontAwesomeIcon icon={faCircleCheck} />
                                            </span>
                                        </h4>
                                        <p>Le Bong</p>
                                    </div>
                                </div>
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
                                visible
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
                </div>
            </div>
        </header>
    );
}

export default Header;
