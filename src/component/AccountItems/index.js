import classNames from 'classnames/bind';
import styles from './accountItems.module.scss';
import imgs from '~/accsets/imgs';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleCheck } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);

function AccountItems() {
    return (
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
    );
}

export default AccountItems;
