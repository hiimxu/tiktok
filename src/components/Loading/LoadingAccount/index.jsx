import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';

import styles from './LoadingAccount.module.scss';

//MUI
import Skeleton from '@mui/material/Skeleton';

const cx = classNames.bind(styles);

function LoadingAccount() {
    return (
        <div>
            <Link to="/" className={cx('account-item')}>
                <Skeleton
                    animation="wave"
                    variant="circular"
                    width={40}
                    height={40}
                />

                <div className={cx('item-info')}>
                    <Skeleton
                        animation="wave"
                        height={20}
                        width="50%"
                        style={{ marginBottom: 3 }}
                    />
                    <Skeleton
                        animation="wave"
                        height={20}
                        width="30%"
                        style={{ marginBottom: 3 }}
                    />
                </div>
            </Link>
        </div>
    );
}

export default LoadingAccount;
