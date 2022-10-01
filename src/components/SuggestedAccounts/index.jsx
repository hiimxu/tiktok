import classNames from 'classnames/bind';
import LoadingAccount from '../Loading/LoadingAccount';
import AccountItem from './AccountItem';
import styles from './SuggestedAccounts.module.scss';

const cx = classNames.bind(styles);

function SuggestedAccounts({ label, data = [], onClick }) {
    return (
        <div className={cx('wrapper')}>
            <p className={cx('label')}>{label}</p>
            {data.length > 0 ? (
                data.map((account) => (
                    <AccountItem data={account} key={account.id} />
                ))
            ) : (
                <LoadingAccount />
            )}

            <p className={cx('more-btn')} onClick={onClick}>
                See all
            </p>
        </div>
    );
}

export default SuggestedAccounts;
