import './PageHeader.css';
import React from 'react';
import { IconButton } from '../../Forms/IconButton/IconButton';
import { Heading } from '../../Typography/Heading/Heading';
import { Text } from '../../Typography/Text/Text';
import { classNames } from '../../../utils/classNames';

export interface PageHeaderProps {
    title: string;
    description?: string;
    showBack?: boolean;
    onBack?: () => void;
    action?: React.ReactNode;
    className?: string;
}

export const PageHeader: React.FC<PageHeaderProps> = ({
    title,
    description,
    showBack = false,
    onBack,
    action,
    className
}) => {
    return (
        <div className={classNames('labs-page-header', className)}>
            <div className="labs-page-header__left">
                {showBack && (
                    <div className="labs-page-header__back">
                        <IconButton
                            appearance="ghost"
                            size="md"
                            icon="chevron-left"
                            onClick={onBack}
                            aria-label="Voltar"
                        />
                    </div>
                )}

                <div className="labs-page-header__content">
                    <Heading
                        size="lg"
                    >
                        {title}
                    </Heading>
                    {description && (
                        <Text
                            size="lg"
                        >
                            {description}
                        </Text>
                    )}
                </div>
            </div>

            {action && (
                <div className="labs-page-header__right">
                    {action}
                </div>
            )}
        </div>
    );
};

export default PageHeader;






