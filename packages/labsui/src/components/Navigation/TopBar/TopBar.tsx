import React from 'react';
import { Flex } from '../../Layout/Flex/Flex';
import './TopBar.css';
import { useTheme } from '../../Foundation/ThemeProvider/ThemeProvider';
import { IconButton } from '../../Forms/IconButton/IconButton';

export interface TopBarNavItem {
    label?: string;
    active?: boolean;
    onClick?: () => void;
    href?: string;
    to?: string;
}

export interface TopBarProps {
    logo?: React.ReactNode;
    navItems?: TopBarNavItem[];
    navPosition?: 'center' | 'right';
    extraContent?: React.ReactNode;
    themeToggle?: React.ReactNode | boolean;
    sticky?: boolean;
    className?: string;
    children?: React.ReactNode;
    contentInside?: boolean;
}

export const TopBar: React.FC<TopBarProps> = ({
    logo,
    navItems,
    navPosition = 'center',
    extraContent,
    themeToggle,
    sticky = false,
    className = '',
    children,
    contentInside = false,
}) => {
    const safeNavItems = navItems ?? [];
    const hasNavItems = safeNavItems.length > 0;
    const hasChildren = !!children;
    const isNavRight = navPosition === 'right';
    const { theme, toggleTheme } = useTheme();
    const currentPath =
        typeof window !== 'undefined' ? window.location.pathname : '';

    const normalizePath = (path: string) => {
        const pathname = path.split('?')[0].split('#')[0];
        return pathname.endsWith('/') && pathname !== '/'
            ? pathname.slice(0, -1)
            : pathname;
    };

    const isCurrentRoute = (path?: string) => {
        if (!path || !currentPath) return false;
        return normalizePath(currentPath) === normalizePath(path);
    };

    const renderNav = () => {
        if (!hasNavItems) return null;

        return (
            <Flex as="nav" align="center" gap="6" className="topbar__nav">
                {safeNavItems.map((item, idx) => {
                    const route = item.to ?? item.href;
                    const isActive = item.active ?? isCurrentRoute(route);
                    const label = item.label ?? '';

                    if (route) {
                        return (
                            <a
                                key={`${label || 'link'}-${idx}`}
                                className={`topbar__nav-item ${isActive ? 'topbar__nav-item--active' : ''}`}
                                onClick={item.onClick}
                                href={route}
                                aria-current={isActive ? 'page' : undefined}
                            >
                                {label}
                            </a>
                        );
                    }

                    return (
                        <button
                            key={`${label || 'button'}-${idx}`}
                            className={`topbar__nav-item ${isActive ? 'topbar__nav-item--active' : ''}`}
                            onClick={item.onClick}
                            type="button"
                        >
                            {label}
                        </button>
                    );
                })}
            </Flex>
        );
    };

    const hasCenterContent = navPosition === 'center' && hasNavItems;
    const hasLeftContent = !!logo;

    return (
        <Flex
            as="header"
            align="center"
            justify="space-between"
            className={[
                'topbar',
                sticky ? 'topbar--sticky' : '',
                isNavRight ? 'topbar--nav-right' : '',
                contentInside ? 'topbar--with-children' : '',
                className,
            ]
                .filter(Boolean)
                .join(' ')}
        >
            <Flex align="center" gap="4" className="topbar__left">
                {hasLeftContent && (
                    <Flex as="div" align="center" gap="2" className="topbar__logo">
                        {logo}
                    </Flex>
                )}
            </Flex>

            {hasCenterContent && (
                <Flex align="center" justify="center" className="topbar__center">
                    {renderNav()}
                </Flex>
            )}

            {contentInside && hasChildren && (
                <Flex align="center" gap="3" className="topbar__content">
                    {children}
                </Flex>
            )}

            <Flex align="center" gap="4" className="topbar__right">
                {isNavRight && hasNavItems && renderNav()}

                {extraContent && (
                    <Flex align="center" gap="2" className="topbar__actions">
                        {extraContent}
                    </Flex>
                )}

                {themeToggle && (
                    <div className="topbar__theme">
                        <IconButton
                            variant="soft"
                            color={'primary'}
                            size="md"
                            icon={theme === 'dark' ? 'theme-dark' : 'theme-light'}
                            onClick={toggleTheme}
                            aria-label="Toggle theme"
                        />
                    </div>
                )}
            </Flex>

            {!contentInside && hasChildren && (
                <div className="topbar__children">
                    {children}
                </div>
            )}
        </Flex>
    );
};

export default TopBar;