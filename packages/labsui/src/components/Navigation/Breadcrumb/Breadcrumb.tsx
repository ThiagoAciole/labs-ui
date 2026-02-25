import React from 'react';
import './Breadcrumb.css';
import { Icon } from '../../Typography/Icon/Icon';
import { classNames } from '../../../utils/classNames';
import { Link } from '../../Typography/Link/Link';

export interface BreadcrumbItem {
    label: string;
    href?: string;
    to?: string;
    icon?: React.ReactNode;
}

interface BreadcrumbProps {
    items: BreadcrumbItem[];
    separator?: React.ReactNode;
    className?: string;
    style?: React.CSSProperties;
}

export const Breadcrumb: React.FC<BreadcrumbProps> = ({
    items,
    separator = <Icon name="chevron-right" size={14} />,
    className,
    style
}) => {
    return (
        <nav className={classNames('breadcrumb', className)} style={style} aria-label="Breadcrumb">
            <ol className="breadcrumb__list">
                {items.map((item, index) => {
                    const isLast = index === items.length - 1;

                    return (
                        <li key={index} className="breadcrumb__item">
                            {(item.to || item.href) && !isLast ? (
                                <Link href={item.to ?? item.href} className="breadcrumb__link">
                                    {item.icon && <span className="breadcrumb__icon">{item.icon}</span>}
                                    {item.label}
                                </Link>
                            ) : (
                                <span className={classNames('breadcrumb__text', { 'breadcrumb__text--current': isLast })} aria-current={isLast ? 'page' : undefined}>
                                    {item.icon && <span className="breadcrumb__icon">{item.icon}</span>}
                                    {item.label}
                                </span>
                            )}

                            {!isLast && <span className="breadcrumb__separator">{separator}</span>}
                        </li>
                    );
                })}
            </ol>
        </nav>
    );
};





