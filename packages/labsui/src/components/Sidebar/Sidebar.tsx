import React, { createContext, useContext, useState } from 'react';
import './Sidebar.css';
import { classNames } from '../../utils/classNames';

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
        <div className={classNames('labs-sidebar__header', className)} onClick={handleClick} {...props}>
            {icon && <div className="labs-sidebar__header-icon">{icon}</div>}
            {logo && <div className="labs-sidebar__header-logo">{logo}</div>}
        </div>
    );
};

/* --- SidebarNav --- */
export interface SidebarNavProps extends React.HTMLAttributes<HTMLElement> {
    children?: React.ReactNode;
}
const SidebarNav = ({ className, children, ...props }: SidebarNavProps) => {
    return (
        <nav className={classNames('labs-sidebar__nav', className)} {...props}>
            {children}
        </nav>
    );
};

/* --- SidebarItem --- */
export interface SidebarItemProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
    icon?: React.ReactNode;
    active?: boolean;
    as?: React.ElementType;
}
const SidebarItem = ({ icon, active, as: Component = 'a', className, children, ...props }: SidebarItemProps) => {
    // Convert boolean 'active' to string for generic component rendering like react-router
    return (
        <Component
            className={classNames(
                'labs-sidebar__item',
                active && 'labs-sidebar__item--active',
                className
            )}
            {...props}
        >
            {icon && <div className="labs-sidebar__item-icon">{icon}</div>}
            <span className="labs-sidebar__item-label">{children}</span>
        </Component>
    );
};

/* --- SidebarFooter --- */
export interface SidebarFooterProps extends React.HTMLAttributes<HTMLDivElement> {
    children?: React.ReactNode;
}
const SidebarFooter = ({ className, children, ...props }: SidebarFooterProps) => {
    return (
        <div className={classNames('labs-sidebar__footer', className)} {...props}>
            {children}
        </div>
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
        <div className={classNames('labs-sidebar__user', className)} {...props}>
            {avatar && <div className="labs-sidebar__user-avatar">{avatar}</div>}
            <div className="labs-sidebar__user-details">
                {name && <span className="labs-sidebar__user-name">{name}</span>}
                {description && <span className="labs-sidebar__user-description">{description}</span>}
            </div>
            {action && (
                <div className="labs-sidebar__user-action">
                    {action}
                </div>
            )}
        </div>
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

import { ThemeToggle } from '../TopBar/ThemeToggle';

// ... (fim do arquivo)
Sidebar.Header = SidebarHeader;
Sidebar.Nav = SidebarNav;
Sidebar.Item = SidebarItem;
Sidebar.Group = SidebarGroup;
Sidebar.Footer = SidebarFooter;
Sidebar.User = SidebarUser;
Sidebar.ThemeToggle = ThemeToggle;
