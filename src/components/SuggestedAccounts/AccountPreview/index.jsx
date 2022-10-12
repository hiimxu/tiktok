import Button from '~/components/Button';
import Image from '~/components/Image';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';
import styles from './AccountPreview.module.scss';

const cx = classNames.bind(styles);

function AccountPreview({ data }) {
    return (
        <div className={cx('wrapper')}>
            <header className={cx('header-preview')}>
                <Image
                    src={data.avatar}
                    alt={data.nickname}
                    className={cx('avatar-preview')}
                />
                <Button primary className={cx('follow-btn')}>
                    Follow
                </Button>
            </header>
            <div className={cx('content-preview')}>
                <p className={cx('nickname')}>
                    <strong>{data.nickname}</strong>
                    {data.tick && (
                        <FontAwesomeIcon
                            className={cx('check')}
                            icon={faCheckCircle}
                        />
                    )}
                </p>
                <p className={cx('name')}>
                    {data.first_name + ' ' + data.last_name}
                </p>{' '}
            </div>
            <div className={cx('analytic')}>
                <p>
                    <strong className={cx('value')}>
                        {data.followers_count}
                    </strong>
                    <span className={cx('label')}>Follower</span>
                </p>
                <p>
                    <strong className={cx('value')}>{data.likes_count}</strong>
                    <span className={cx('label')}>Likes</span>
                </p>
            </div>
        </div>
    );
}

export default AccountPreview;
