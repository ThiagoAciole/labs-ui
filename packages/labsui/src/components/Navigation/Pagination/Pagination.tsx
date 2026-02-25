import './Pagination.css';
import React, { useMemo } from 'react';
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
    
    const pages = useMemo(() => {
        const items: (number | string)[] = [];
        const startPage = Math.max(1, currentPage - 1);
        const endPage = Math.min(totalPages, currentPage + 1);

        if (startPage > 1) {
            items.push(1);
            if (startPage > 2) items.push('dots-1');
        }

        for (let i = startPage; i <= endPage; i++) {
            items.push(i);
        }

        if (endPage < totalPages) {
            if (endPage < totalPages - 1) items.push('dots-2');
            items.push(totalPages);
        }
        return items;
    }, [currentPage, totalPages]);

    return (
        <nav className={classNames('pagination', className)} aria-label="Paginação">
            {showControls && (
                <button
                    type="button"
                    className={classNames('pagination__item', currentPage === 1 && 'pagination__item--disabled')}
                    onClick={() => onPageChange(currentPage - 1)}
                    disabled={currentPage === 1}
                    aria-label="Página anterior"
                >
                    <Icon name="chevron-left" size={16} />
                </button>
            )}

            {pages.map((p, idx) => {
                if (typeof p === 'string') {
                    return (
                        <span key={`dots-${idx}`} className="pagination__dots">
                            &hellip;
                        </span>
                    );
                }

                const isActive = currentPage === p;

                return (
                    <button
                        key={p}
                        type="button"
                        className={classNames(
                            'pagination__item',
                            isActive && 'pagination__item--active'
                        )}
                        onClick={() => !isActive && onPageChange(p)}
                        aria-current={isActive ? 'page' : undefined}
                    >
                        {p}
                    </button>
                );
            })}

            {showControls && (
                <button
                    type="button"
                    className={classNames('pagination__item', currentPage === totalPages && 'pagination__item--disabled')}
                    onClick={() => onPageChange(currentPage + 1)}
                    disabled={currentPage === totalPages}
                    aria-label="Próxima página"
                >
                    <Icon name="chevron-right" size={16} />
                </button>
            )}
        </nav>
    );
};

Pagination.displayName = 'Pagination';