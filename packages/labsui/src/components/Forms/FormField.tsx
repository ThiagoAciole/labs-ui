import React from 'react';
import { classNames, LabelFormater } from '../../utils';
import { Text } from '../Typography/Text/Text';
import { Flex } from '../Layout/Flex/Flex';

export interface FormFieldProps {
    label?: string;
    error?: string;
    supportText?: string;
    children: React.ReactNode;
    full?: boolean;
    className?: string;
    id?: string;
    htmlFor?: string;
}

export const FormField: React.FC<FormFieldProps> = ({
    label,
    error,
    supportText,
    children,
    full = false,
    className,
    htmlFor
}) => {
    return (
        <Flex direction="column" gap="1" className={classNames('form-field-root', full && 'form-field--full', className)}>
            {label && (
                <Text size="sm" weight="medium" as="label" htmlFor={htmlFor} className="form-field-label">
                    {LabelFormater(label)}
                </Text>
            )}
            {children}
            {error && (
                <Text as="span" color="error" size="sm" className="form-field-message" role="alert">
                    {error}
                </Text>
            )}
            {!error && supportText && (
                <Text as="span" color="disabled" size="sm" className="form-field-message">
                    {supportText}
                </Text>
            )}
        </Flex>
    );
};
