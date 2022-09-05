import React, { useEffect, useState } from 'react';
import classNames from 'classnames/bind';
import styles from './Header.module.scss';
import images from '~/assets/images';
import Tippy from '@tippyjs/react/headless';
import Tooltip from '@tippyjs/react';

import { Wrapper as PopperWrapper } from '~/components/Popper';
import Button from '~/components/Button';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faArrowRightToBracket,
    faBitcoinSign,
    faCircleQuestion,
    faCircleXmark,
    faEarthAsia,
    faEllipsisVertical,
    faGear,
    faKeyboard,
    faMagnifyingGlass,
    faPlus,
    faSpinner,
} from '@fortawesome/free-solid-svg-icons';
import AccountItem from '~/components/AccountItem';
import Menu from '~/components/Popper/Menu';
import {
    faMessage,
    faPaperPlane,
    faUser,
} from '@fortawesome/free-regular-svg-icons';
import 'tippy.js/dist/tippy.css';

const cx = classNames.bind(styles);
const MENU_ITEMS = [
    {
        icon: <FontAwesomeIcon icon={faEarthAsia} />,
        title: 'English',
        children: {
            title: 'Language',
            data: [
                {
                    type: 'language',
                    code: 'en',
                    title: 'English',
                },
                {
                    type: 'language',
                    code: 'vi',
                    title: 'Tiếng Việt',
                },
            ],
        },
    },
    {
        icon: <FontAwesomeIcon icon={faCircleQuestion} />,
        title: 'Feedback and help',
        to: '/feedback',
    },
    {
        icon: <FontAwesomeIcon icon={faKeyboard} />,
        title: 'Keyboard shortcuts',
    },
];

const currentUser = true;

export default function Header() {
    const [searchResult, setSearchResult] = useState([]);
    useEffect(() => {
        setTimeout(() => {
            setSearchResult([]);
        }, 0);
    }, []);

    //handle logic
    const handleMenuChange = (menuItem) => {
        console.log(menuItem);
    };

    const userMenu = [
        {
            icon: <FontAwesomeIcon icon={faUser} />,
            title: 'View Profile',
            to: '/@user',
        },
        {
            icon: <FontAwesomeIcon icon={faBitcoinSign} />,
            title: 'Get Coins',
            to: '/coin',
        },
        {
            icon: <FontAwesomeIcon icon={faGear} />,
            title: 'Setting',
            to: '/setting',
        },

        ...MENU_ITEMS,
        {
            icon: <FontAwesomeIcon icon={faArrowRightToBracket} />,
            title: 'Log out',
            to: '/logout',
            separate: true,
        },
    ];

    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                <div className={cx('logo')}>
                    <img src={images.logo} alt="Tiktok" />
                </div>
                <Tippy
                    interactive
                    visible={searchResult.length}
                    render={(attrs) => (
                        <div
                            className={cx('search-result')}
                            tabIndex="-1"
                            {...attrs}
                        >
                            <PopperWrapper>
                                <h4 className={cx('search-title')}>Accounts</h4>
                                <AccountItem />
                            </PopperWrapper>
                        </div>
                    )}
                >
                    <div className={cx('search')}>
                        <input
                            type="text"
                            placeholder="Search accounts and videos"
                            spellCheck={false}
                        />
                        <button className={cx('clear')}>
                            <FontAwesomeIcon icon={faCircleXmark} />
                        </button>
                        <FontAwesomeIcon
                            className={cx('loading')}
                            icon={faSpinner}
                        />

                        <button className={cx('search-btn')}>
                            <FontAwesomeIcon icon={faMagnifyingGlass} />
                        </button>
                    </div>
                </Tippy>
                <div className={cx('actions')}>
                    {currentUser ? (
                        <>
                            <Button
                                className={cx('upload-btn')}
                                unRounded
                                leftIcon={<FontAwesomeIcon icon={faPlus} />}
                            >
                                Upload
                            </Button>
                            <Tooltip
                                delay={150}
                                content="Messages"
                                placement="bottom"
                            >
                                <button className={cx('action-btn')}>
                                    <FontAwesomeIcon icon={faPaperPlane} />
                                </button>
                            </Tooltip>

                            <Tooltip
                                delay={150}
                                content="Inbox"
                                placement="bottom"
                            >
                                <button className={cx('action-btn')}>
                                    <FontAwesomeIcon icon={faMessage} />
                                </button>
                            </Tooltip>
                        </>
                    ) : (
                        <>
                            <Button
                                unRounded
                                leftIcon={<FontAwesomeIcon icon={faPlus} />}
                            >
                                Upload
                            </Button>
                            <Button primary>Log in</Button>
                        </>
                    )}

                    <Menu
                        items={currentUser ? userMenu : MENU_ITEMS}
                        onChange={handleMenuChange}
                    >
                        {currentUser ? (
                            <img
                                src={
                                    'https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-giso/c45577bf9f57312899f9efdedc3016be~c5_100x100.jpeg?x-expires=1662566400&x-signature=CF3dyLFCYhxhOz%2FAjR5Bp2R3AHU%3D      '
                                }
                                className={cx('user-avatar')}
                                alt="Nguyen Van A"
                            />
                        ) : (
                            <button className={cx('more-btn')}>
                                <FontAwesomeIcon icon={faEllipsisVertical} />
                            </button>
                        )}
                    </Menu>
                </div>
            </div>
        </header>
    );
}
