import classNames from 'classnames/bind';
import styles from './header.module.scss';
import imgs from '~/accsets/imgs';
import Button from '~/component/Button';
import MenuItem from './MenuItem';
import { MENU_ITEM_IN, MENU_ITEM_OUT } from './menuItems';
import Search from '~/component/Layout/component/Search';

import 'tippy.js/dist/tippy.css';
import TippyTooltips from '@tippyjs/react';

import { Link } from 'react-router-dom';

import { faMessage, faPaperPlane } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUpFromBracket, faEllipsisVertical } from '@fortawesome/free-solid-svg-icons';
import Image from '~/component/Image';

const cx = classNames.bind(styles);

function Header() {
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
                <Search />

                {/* Header actions */}

                {currentUser ? (
                    <div className={cx('contain-actions')}>
                        <ul className={cx('actions')}>
                            <TippyTooltips content="Upload video">
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
                                    <div className={cx('notify')}>12</div>
                                </li>
                            </TippyTooltips>

                            <li className={cx('user')}>
                                <MenuItem items={MENU_ITEM_IN}>
                                    <div className={cx('user-avt')}>
                                        <Image className={cx('img-avt')} src={imgs.avatar} alt="user avatar" />
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
