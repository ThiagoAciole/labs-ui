import './Pagination.css';
import React from 'react';
import { classNames } from '../../../utils/classNames';
import { Icon } from '../../Typography/Icon/Icon';

export interface PaginationProps {
    currentPage: number;
    totalPages: number;
    onPageChange: (page: number) => void;
    showControls?: boolean;
    className?: string;
}

export const Pagination: React.FC<PaginationProps> = ({
    currentPage,
    totalPages,
    onPageChange,
    showControls = true,
    className
}) => {
    const pages = [];

    // Lógica simplificada de páginas (exibir vizinhos)
    const startPage = Math.max(1, currentPage - 1);
    const endPage = Math.min(totalPages, currentPage + 1);

    if (startPage > 1) {
        pages.push(1);
        if (startPage > 2) pages.push('dots-1');
    }

    for (let i = startPage; i <= endPage; i++) {
        pages.push(i);
    }

    if (endPage < totalPages) {
        if (endPage < totalPages - 1) pages.push('dots-2');
        pages.push(totalPages);
    }

    return (
        <nav className={classNames('labs-pagination', className)}>
            {showControls && (
                <button
                    className={classNames('labs-pagination__item', currentPage === 1 && 'labs-pagination__item--disabled')}
                    onClick={() => currentPage > 1 && onPageChange(currentPage - 1)}
                    disabled={currentPage === 1}
                >
                    <Icon name="chevron-left" size={16} />
                </button>
            )}

            {pages.map((p, idx) => {
                if (typeof p === 'string') {
                    return <span key={idx} className="labs-pagination__dots">...</span>;
                }
                return (
                    <button
                        key={idx}
                        className={classNames(
                            'labs-pagination__item',
                            currentPage === p && 'labs-pagination__item--active'
                        )}
                        onClick={() => onPageChange(p)}
                    >
                        {p}
                    </button>
                );
            })}

            {showControls && (
                <button
                    className={classNames('labs-pagination__item', currentPage === totalPages && 'labs-pagination__item--disabled')}
                    onClick={() => currentPage < totalPages && onPageChange(currentPage + 1)}
                    disabled={currentPage === totalPages}
                >
                    <Icon name="chevron-right" size={16} />
                </button>
            )}
        </nav>
    );
};

Pagination.displayName = 'Pagination';





