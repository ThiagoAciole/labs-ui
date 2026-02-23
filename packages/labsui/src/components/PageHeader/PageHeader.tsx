import './PageHeader.css';
import React from 'react';
import { IconButton } from '../IconButton/IconButton';
import { Icon } from '../Icon/Icon';
import { Heading } from '../Heading/Heading';
import { Text } from '../Text/Text';
import { classNames } from '../../utils/classNames';

export interface PageHeaderProps {
    /** Título principal do header */
    title: string;
    /** Descrição ou subtítulo opcional */
    description?: string;
    /** Se deve exibir o botão de voltar */
    showBack?: boolean;
    /** Callback para o clique no botão de voltar */
    onBack?: () => void;
    /** Componente ou conteúdo extra exibido no lado direito */
    action?: React.ReactNode;
    /** Classe CSS adicional */
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
                            variant="ghost"
                            size="md"
                            icon={<Icon name="chevron-left" size={24} />}
                            onClick={onBack}
                            aria-label="Voltar"
                        />
                    </div>
                )}

                <div className="labs-page-header__content">
                    <Heading
                        size={2}

                    >
                        {title}
                    </Heading>
                    {description && (
                        <Text
                            size="lg"
                            color="muted"
                            className="labs-page-header__description"
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
