import classNames from 'classnames/bind';
import styles from './menuItem.module.scss';
import { Wraper as PopperWraper } from '~/component/Popper';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import Tippy from '@tippyjs/react/headless';
import 'tippy.js/dist/tippy.css';
import MenuHeader from './MenuHeader';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const cx = classNames.bind(styles);

const defaultFn = () => {};

function MenuItem({ items = [], children, hideOnClick = false, onChange = defaultFn }) {
    const [history, setHistory] = useState([{ data: items }]);

    const current = history[history.length - 1];

    return (
        <Tippy
            // visible
            delay={[200, 500]}
            offset={[-80, 12]}
            hideOnClick={hideOnClick}
            interactive
            onHide={() => setHistory((prev) => prev.slice(0, 1))}
            render={(attrs) => (
                <div className={cx('options')}>
                    <PopperWraper className={cx('popper-wraper')}>
                        {history.length > 1 && (
                            <MenuHeader
                                className={cx('title-header')}
                                title="Languages"
                                onBack={() => {
                                    setHistory((prev) => prev.slice(0, prev.length - 1));
                                }}
                            />
                        )}
                        <div className={cx('menu-body')}>
                            {current.data.map((item, index) => {
                                const isParent = !!item.children;
                                const classes = cx('wraper', { separate: item.separate });
                                let TypeBtn = 'div';
                                if (item.to) {
                                    TypeBtn = Link;
                                }

                                return (
                                    <TypeBtn
                                        className={classes}
                                        key={index}
                                        to={item.to}
                                        onClick={() => {
                                            if (isParent) {
                                                setHistory((prev) => [...prev, item.children]);
                                            } else {
                                                onChange(item);
                                            }
                                        }}
                                    >
                                        {item.icon && <FontAwesomeIcon className={cx('icon')} icon={item.icon} />}
                                        <h4 className={cx('title')}>{item.title}</h4>
                                    </TypeBtn>
                                );
                            })}
                        </div>
                    </PopperWraper>
                </div>
            )}
        >
            <span>{children}</span>
        </Tippy>
    );
}

export default MenuItem;
