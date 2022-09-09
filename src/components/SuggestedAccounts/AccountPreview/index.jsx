import Button from '~/components/Button';
import Image from '~/components/Image';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';
import styles from './AccountPreview.module.scss';

const cx = classNames.bind(styles);

function AccountPreview() {
    return (
        <div className={cx('wrapper')}>
            <header className={cx('header-preview')}>
                <Image
                    src="https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-giso/89310ed5c4f60651f1d78dd66e432abf~c5_100x100.jpeg?x-expires=1662912000&x-signature=EbdmKTh4ELNa2fTl6h06m0nO5aI%3D"
                    alt=""
                    className={cx('avatar-preview')}
                />
                <Button primary className={cx('follow-btn')}>
                    Follow
                </Button>
            </header>
            <div className={cx('content-preview')}>
                <p className={cx('nickname')}>
                    <strong>nguyenmyanna</strong>
                    <FontAwesomeIcon
                        className={cx('check')}
                        icon={faCheckCircle}
                    />
                </p>
                <p className={cx('name')}>Nguyen Van A</p>{' '}
            </div>
            <div className={cx('analytic')}>
                <p>
                    <strong className={cx('value')}>7.1M</strong>
                    <span className={cx('label')}>Follower</span>
                </p>
                <p>
                    <strong className={cx('value')}>38.1M</strong>
                    <span className={cx('label')}>Likes</span>
                </p>
            </div>
        </div>
    );
}

export default AccountPreview;
