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
    },
    {
        icon: faKeyboard,
        title: 'Keyboard shortcuts',
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
    },
    {
        icon: faGear,
        title: 'Settings',
    },
    ...MENU_ITEM_OUT,
    {
        icon: faArrowRightFromBracket,
        title: 'log out',
        separate: true,
    },
];
