import React, { createContext, useContext, useState } from 'react';
import './Sidebar.css';
import { classNames } from '../../../utils/classNames';
import { Icon } from '../../Typography/Icon/Icon';
import { Flex } from '../../Layout/Flex/Flex';

interface SidebarContextValue {
    collapsed: boolean;
    toggleCollapsed: () => void;
}

const SidebarContext = createContext<SidebarContextValue>({
    collapsed: false,
    toggleCollapsed: () => { }
});

export function useSidebarContext() {
    return useContext(SidebarContext);
}

export interface SidebarProps extends React.HTMLAttributes<HTMLElement> {
    collapsed?: boolean;
    defaultCollapsed?: boolean;
    onToggle?: (collapsed: boolean) => void;
    children?: React.ReactNode;
}

export const Sidebar = ({
    collapsed: controlledCollapsed,
    defaultCollapsed = false,
    onToggle,
    className,
    children,
    ...props
}: SidebarProps) => {
    const [internalCollapsed, setInternalCollapsed] = useState(defaultCollapsed);
    const isControlled = controlledCollapsed !== undefined;
    const collapsed = isControlled ? controlledCollapsed : internalCollapsed;

    const toggleCollapsed = () => {
        const newValue = !collapsed;
        if (!isControlled) {
            setInternalCollapsed(newValue);
        }
        onToggle?.(newValue);
    };

    return (
        <SidebarContext.Provider value={{ collapsed, toggleCollapsed }}>
            <aside
                className={classNames(
                    'labs-sidebar',
                    collapsed && 'labs-sidebar--collapsed',
                    className
                )}
                {...props}
            >
                {children}
            </aside>
        </SidebarContext.Provider>
    );
};

/* --- SidebarHeader --- */
export interface SidebarHeaderProps extends React.HTMLAttributes<HTMLDivElement> {
    icon?: React.ReactNode;
    logo?: React.ReactNode;
    children?: React.ReactNode;
}
const SidebarHeader = ({ icon, logo, children, className, onClick, ...props }: SidebarHeaderProps) => {
    const { toggleCollapsed } = useSidebarContext();

    const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
        toggleCollapsed();
        if (onClick) onClick(e);
    };

    return (
        <Flex align="center" gap="3" className={classNames('labs-sidebar__header', className)} onClick={handleClick} {...props}>
            <Flex align="center" justify="center" className="labs-sidebar__header-icon">{icon ?? <Icon name="menu" size={20} />}</Flex>
            {logo && <Flex align="center" justify="center" className="labs-sidebar__header-logo">{logo}</Flex>}
            {children && <Flex align="center" justify="center" className="labs-sidebar__header-logo">{children}</Flex>}
        </Flex>
    );
};

/* --- SidebarNav --- */
export interface SidebarNavProps extends React.HTMLAttributes<HTMLElement> {
    children?: React.ReactNode;
}
const SidebarNav = ({ className, children, ...props }: SidebarNavProps) => {
    return (
        <Flex as="nav" direction="column" gap="2" className={classNames('labs-sidebar__nav', className)} {...props}>
            {children}
        </Flex>
    );
};

/* --- SidebarItem --- */
export interface SidebarItemProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
    icon?: React.ReactNode;
    active?: boolean;
    as?: React.ElementType;
    to?: string;
}
const SidebarItem = ({ icon, active, as: Component = 'a', className, children, href, to, ...props }: SidebarItemProps) => {
    const currentPath = typeof window !== 'undefined' ? window.location.pathname : '';
    const route = to ?? href;
    const normalizePath = (path: string) => {
        const pathname = path.split('?')[0].split('#')[0];
        return pathname.endsWith('/') && pathname !== '/' ? pathname.slice(0, -1) : pathname;
    };
    const isCurrentRoute = route && currentPath ? normalizePath(currentPath) === normalizePath(route) : false;
    const isActive = active ?? isCurrentRoute;

    return (
        <Flex
            as={Component}
            align="center"
            justify="flex-start"
            gap="4"
            className={classNames(
                'labs-sidebar__item',
                isActive && 'labs-sidebar__item--active',
                className
            )}
            href={route}
            aria-current={isActive ? 'page' : undefined}
            {...(props as any)}
        >
            {icon && <Flex align="center" justify="center" className="labs-sidebar__item-icon">{icon}</Flex>}
            <span className="labs-sidebar__item-label">{children}</span>
        </Flex>
    );
};

/* --- SidebarFooter --- */
export interface SidebarFooterProps extends React.HTMLAttributes<HTMLDivElement> {
    children?: React.ReactNode;
}
const SidebarFooter = ({ className, children, ...props }: SidebarFooterProps) => {
    return (
        <Flex direction="column" gap="6" className={classNames('labs-sidebar__footer', className)} {...props}>
            {children}
        </Flex>
    );
};

/* --- SidebarUser --- */
export interface SidebarUserProps extends React.HTMLAttributes<HTMLDivElement> {
    avatar?: React.ReactNode;
    name?: string;
    description?: string;
    action?: React.ReactNode;
}
const SidebarUser = ({ avatar, name, description, action, className, ...props }: SidebarUserProps) => {
    return (
        <Flex align="center" justify="space-between" gap="3" className={classNames('labs-sidebar__user', className)} {...props}>
            {avatar && <Flex align="center" justify="center" className="labs-sidebar__user-avatar">{avatar}</Flex>}
            <Flex direction="column" className="labs-sidebar__user-details">
                {name && <span className="labs-sidebar__user-name">{name}</span>}
                {description && <span className="labs-sidebar__user-description">{description}</span>}
            </Flex>
            {action && (
                <div className="labs-sidebar__user-action">
                    {action}
                </div>
            )}
        </Flex>
    );
};

/* --- SidebarGroup --- */
export interface SidebarGroupProps extends React.HTMLAttributes<HTMLDivElement> {
    title: string;
    icon?: React.ReactNode;
    active?: boolean;
    defaultExpanded?: boolean;
    children?: React.ReactNode;
}
const SidebarGroup = ({ title, icon, active, defaultExpanded = true, className, children, ...props }: SidebarGroupProps) => {
    const { collapsed } = useSidebarContext();
    const [internalExpanded, setInternalExpanded] = useState(defaultExpanded);

    // O grupo só pode estar expandido de fato se a Sidebar não estiver colapsada
    const expanded = collapsed ? false : internalExpanded;

    const toggleExpand = () => {
        if (!collapsed) {
            setInternalExpanded(!internalExpanded);
        }
    };

    return (
        <div className={classNames('labs-sidebar__group', expanded && 'labs-sidebar__group--expanded', className)} {...props}>
            <button
                className={classNames(
                    'labs-sidebar__group-header',
                    active && 'labs-sidebar__group-header--active'
                )}
                onClick={toggleExpand}
            >
                {icon && <div className="labs-sidebar__item-icon">{icon}</div>}
                <span className="labs-sidebar__group-title">{title}</span>
                <div className="labs-sidebar__group-chevron">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d={expanded ? 'm18 15-6-6-6 6' : 'm6 9 6 6 6-6'} /></svg>
                </div>
            </button>
            <div className="labs-sidebar__group-content">
                {children}
            </div>
        </div>
    );
};

import { ThemeToggle } from '../../Navigation/TopBar/ThemeToggle';

// ... (fim do arquivo)
Sidebar.Header = SidebarHeader;
Sidebar.Nav = SidebarNav;
Sidebar.Item = SidebarItem;
Sidebar.Group = SidebarGroup;
Sidebar.Footer = SidebarFooter;
Sidebar.User = SidebarUser;
Sidebar.ThemeToggle = ThemeToggle;





