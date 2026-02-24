import React from 'react';
import { useTheme } from '../../Foundation/ThemeProvider/ThemeProvider';
import { IconButton } from '../../Forms/IconButton/IconButton';

export interface ThemeToggleProps {
    appearance?: 'ghost' | 'soft' | 'outline' | 'solid';
    size?: 'sm' | 'md' | 'lg';
    className?: string;
}

export const ThemeToggle: React.FC<ThemeToggleProps> = ({ appearance = 'soft', size = 'sm', className }) => {
    const { theme, toggleTheme } = useTheme();
    return (
        <IconButton
            appearance={appearance}
            color={theme === 'dark' ? 'attention' : 'primary'}
            size={size}
            icon={theme === 'dark' ? 'theme-dark' : 'theme-light'}
            onClick={toggleTheme}
            className={className}
            aria-label="Toggle theme"
        />
    );
};

