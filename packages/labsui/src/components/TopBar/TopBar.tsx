import React from 'react';
import { ThemeToggle } from './ThemeToggle';
import './TopBar.css';

export interface TopBarNavItem {
    label: string;
    active?: boolean;
    onClick?: () => void;
    href?: string;
    to?: string;
}

export interface TopBarProps {
    /** Logo do cabeçalho (pode ser texto ou componente de imagem) */
    logo?: React.ReactNode;
    /** Itens de navegação central/direita */
    navItems?: TopBarNavItem[];
    /** Posição da navegação */
    navPosition?: 'center' | 'right';
    /** Conteúdo extra no lado direito (ex: botões de redes sociais) */
    extraContent?: React.ReactNode;
    /** Componente de toggle de tema ou um booleano para usar o padrão */
    themeToggle?: React.ReactNode | boolean;
    /** Se deve ser fixo no topo */
    sticky?: boolean;
    /** Classe CSS adicional */
    className?: string;
}

export const TopBar: React.FC<TopBarProps> = ({
    logo,
    navItems = [],
    navPosition = 'center',
    extraContent,
    themeToggle,
    sticky = false,
    className = '',
}) => {
    const isNavRight = navPosition === 'right';
    const currentPath = typeof window !== 'undefined' ? window.location.pathname : '';

    const normalizePath = (path: string) => {
        const pathname = path.split('?')[0].split('#')[0];
        return pathname.endsWith('/') && pathname !== '/' ? pathname.slice(0, -1) : pathname;
    };

    const isCurrentRoute = (path?: string) => {
        if (!path || !currentPath) return false;
        return normalizePath(currentPath) === normalizePath(path);
    };

    const renderThemeToggle = () => {
        if (themeToggle === true) {
            return <ThemeToggle variant="secondary" />;
        }
        return themeToggle;
    };

    const renderNav = () => (
        <nav className="labs-topbar__nav">
            {navItems.map((item, idx) => {
                const route = item.to ?? item.href;
                const isActive = item.active ?? isCurrentRoute(route);

                if (route) {
                    return (
                        <a
                            key={`${item.label}-${idx}`}
                            className={`labs-topbar__nav-item ${isActive ? 'labs-topbar__nav-item--active' : ''}`}
                            onClick={item.onClick}
                            href={route}
                            aria-current={isActive ? 'page' : undefined}
                        >
                            {item.label}
                        </a>
                    );
                }

                return (
                    <button
                        key={`${item.label}-${idx}`}
                        className={`labs-topbar__nav-item ${isActive ? 'labs-topbar__nav-item--active' : ''}`}
                        onClick={item.onClick}
                        type="button"
                    >
                        {item.label}
                    </button>
                );
            })}
        </nav>
    );

    return (
        <header
            className={`labs-topbar ${sticky ? 'labs-topbar--sticky' : ''} ${isNavRight ? 'labs-topbar--nav-right' : ''} ${className}`}
        >
            <div className="labs-topbar__left">
                {logo && (
                    <div className="labs-topbar__logo">
                        {logo}
                    </div>
                )}
            </div>

            {navPosition === 'center' && navItems.length > 0 && (
                <div className="labs-topbar__center">
                    {renderNav()}
                </div>
            )}

            <div className="labs-topbar__right">
                {navPosition === 'right' && navItems.length > 0 && renderNav()}

                {extraContent && (
                    <div className="labs-topbar__actions">
                        {extraContent}
                    </div>
                )}

                {themeToggle && (
                    <div className="labs-topbar__theme">
                        {renderThemeToggle()}
                    </div>
                )}
            </div>
        </header>
    );
};

export default TopBar;
