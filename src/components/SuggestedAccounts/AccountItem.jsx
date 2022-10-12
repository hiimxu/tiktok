import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Tippy from '@tippyjs/react/headless';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import Image from '../Image';

import { Wrapper } from '../Popper';
import AccountPreview from './AccountPreview';
import styles from './SuggestedAccounts.module.scss';

const cx = classNames.bind(styles);

function AccountItem({ data }) {
    const Preview = (props) => (
        <div className={cx('preview')} tabIndex="-1" {...props}>
            <Wrapper>
                <AccountPreview data={data} />
            </Wrapper>
        </div>
    );
    return (
        data && (
            <div>
                <Tippy
                    interactive
                    delay={[800, 0]}
                    placement="bottom-start"
                    render={Preview}
                >
                    <Link to="/" className={cx('account-item')}>
                        <Image
                            className={cx('avatar')}
                            src={data.avatar}
                            alt={data.nickname}
                        />
                        <div className={cx('item-info')}>
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
                            </p>
                        </div>
                    </Link>
                </Tippy>
            </div>
        )
    );
}

export default AccountItem;
