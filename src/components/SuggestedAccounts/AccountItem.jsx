import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Tippy from '@tippyjs/react/headless';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';

import { Wrapper } from '../Popper';
import AccountPreview from './AccountPreview';
import styles from './SuggestedAccounts.module.scss';

const cx = classNames.bind(styles);

function AccountItem() {
    const Preview = (props) => (
        <div className={cx('preview')} tabIndex="-1" {...props}>
            <Wrapper>
                <AccountPreview />
            </Wrapper>
        </div>
    );
    return (
        <div>
            <Tippy
                interactive
                delay={[800, 0]}
                placement="bottom-start"
                render={Preview}
            >
                <Link to="/" className={cx('account-item')}>
                    <img
                        className={cx('avatar')}
                        src="https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-giso/89310ed5c4f60651f1d78dd66e432abf~c5_100x100.jpeg?x-expires=1662912000&x-signature=EbdmKTh4ELNa2fTl6h06m0nO5aI%3D"
                        alt=""
                    />
                    <div className={cx('item-info')}>
                        <p className={cx('nickname')}>
                            <strong>nguyenmyanna</strong>
                            <FontAwesomeIcon
                                className={cx('check')}
                                icon={faCheckCircle}
                            />
                        </p>
                        <p className={cx('name')}>Nguyen Van A</p>
                    </div>
                </Link>
            </Tippy>
        </div>
    );
}

export default AccountItem;
