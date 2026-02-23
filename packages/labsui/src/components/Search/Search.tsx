import React from 'react';
import { Input, InputProps } from '../Input/Input';
import { Icon } from '../Icon/Icon';
import { Loader } from '../Loader/Loader';
import { classNames } from '../../utils/classNames';

export interface SearchProps extends Omit<InputProps, 'prefix'> {
    onSearch?: (value: string) => void;
    loading?: boolean;
}

export const Search = React.forwardRef<HTMLInputElement, SearchProps>(
    ({ onSearch, loading, onChange, className, ...props }, ref) => {
        const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
            if (onChange) onChange(e);
            if (onSearch) onSearch(e.target.value);
        };

        return (
            <Input
                ref={ref}
                type="search"
                prefix={
                    loading ? (
                        <Loader size="xs" variant="muted" />
                    ) : (
                        <Icon name="search" size={18} />
                    )
                }
                className={classNames('labs-search', className)}
                onChange={handleChange}
                {...props}
            />
        );
    }
);

Search.displayName = 'Search';
