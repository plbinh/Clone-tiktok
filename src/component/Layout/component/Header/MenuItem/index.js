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

function MenuItem({ items = [], children, onChange = defaultFn }) {
    const [history, setHistory] = useState([{ data: items }]);

    const current = history[history.length - 1];

    return (
        <Tippy
            // visible
            delay={[200, 500]}
            offset={[-80, 12]}
            interactive
            onHide={() => setHistory((prev) => prev.slice(0, 1))}
            render={(attrs) => (
                <PopperWraper>
                    <div className={cx('options')}>
                        {history.length > 1 && (
                            <MenuHeader
                                title="Languages"
                                onBack={() => {
                                    setHistory((prev) => prev.slice(0, prev.length - 1));
                                }}
                            />
                        )}
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
            )}
        >
            <span>{children}</span>
        </Tippy>
    );
}

export default MenuItem;
