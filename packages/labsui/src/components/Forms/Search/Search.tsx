import React from 'react';
import { Input, InputProps } from '../../Forms/Input/Input';
import { Icon } from '../../Typography/Icon/Icon';
import { Loader } from '../../Feedback/Loader/Loader';
import { classNames } from '../../../utils';

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
                        <Loader size="xs" color="grayDark" />
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





