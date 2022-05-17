import { languages } from '~/component/Languages';
import { faCircleQuestion, faKeyboard, faUser } from '@fortawesome/free-regular-svg-icons';
import { faDollarSign, faGear, faLanguage, faArrowRightFromBracket } from '@fortawesome/free-solid-svg-icons';

export const MENU_ITEM_OUT = [
    {
        icon: faLanguage,
        title: 'English',
        children: {
            title: 'Languages',
            data: languages,
        },
    },
    {
        icon: faCircleQuestion,
        title: 'Feedback and help',
        to: '/feedback&help',
    },
    {
        icon: faKeyboard,
        title: 'Keyboard shortcuts',
        to: '/keyboard-shortcuts',
    },
];

export const MENU_ITEM_IN = [
    {
        icon: faUser,
        title: 'View profile',
        to: '/profile',
    },
    {
        icon: faDollarSign,
        title: 'Get coins',
        to: '/get-coins',
    },
    {
        icon: faGear,
        title: 'Settings',
        to: '/settings',
    },
    ...MENU_ITEM_OUT,
    {
        icon: faArrowRightFromBracket,
        title: 'log out',
        separate: true,
    },
];
