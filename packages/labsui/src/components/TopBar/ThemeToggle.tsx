import React from 'react';
import { useTheme } from '../ThemeProvider/ThemeProvider';
import { IconButton } from '../IconButton/IconButton';
import { Icon } from '../Icon/Icon';

export interface ThemeToggleProps {
    variant?: 'ghost' | 'secondary' | 'outline' | 'primary';
    size?: 'sm' | 'md' | 'lg';
    className?: string;
}

export const ThemeToggle: React.FC<ThemeToggleProps> = ({
    variant = 'secondary',
    size = 'sm',
    className
}) => {
    const { theme, toggleTheme } = useTheme();

    return (
        <IconButton
            variant={variant}
            size={size}
            icon={<Icon name={theme === 'dark' ? 'theme-dark' : 'theme-light'} size={20} />}
            onClick={toggleTheme}
            className={className}
            aria-label="Toggle theme"
        />
    );
};
