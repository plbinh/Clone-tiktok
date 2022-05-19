import classNames from 'classnames/bind';
import styles from './accountItems.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleCheck } from '@fortawesome/free-solid-svg-icons';
import Image from '~/component/Image';
import { Link } from 'react-router-dom';

const cx = classNames.bind(styles);

function AccountItems({ data, onClick }) {
    return (
        <Link to={`/@${data.nickname}`}>
            <div className={cx('user')} onClick={onClick}>
                <Image className={cx('user-img')} src={data.avatar} alt={data.full_name} />
                <div className={cx('user-info')}>
                    <h4>
                        {data.nickname} <span>{data.tick && <FontAwesomeIcon icon={faCircleCheck} />}</span>
                    </h4>
                    <p>{data.full_name}</p>
                </div>
            </div>
        </Link>
    );
}

export default AccountItems;
