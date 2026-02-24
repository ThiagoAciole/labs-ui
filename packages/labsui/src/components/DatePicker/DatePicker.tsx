import './DatePicker.css';
import React, { useState, useRef, useEffect } from 'react';
import { classNames } from '../../utils/classNames';
import { Icon } from '../Icon/Icon';
import { Button } from '../Button/Button';

export interface DatePickerProps {
    value?: Date;
    onChange?: (date: Date | undefined) => void;
    label?: string;
    placeholder?: string;
    disabled?: boolean;
    full?: boolean;
    size?: 'sm' | 'md' | 'lg';
}

const MONTHS = [
    'Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho',
    'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'
];

const WEEKDAYS = ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb'];

export const DatePicker: React.FC<DatePickerProps> = ({
    value,
    onChange,
    label,
    placeholder = 'Selecione uma data',
    disabled = false,
    full = false,
    size = 'md'
}) => {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedDate, setSelectedDate] = useState<Date | undefined>(value);
    const [currentMonth, setCurrentMonth] = useState(new Date());
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (value !== undefined) setSelectedDate(value);
    }, [value]);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
                setIsOpen(false);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    const daysInMonth = (year: number, month: number) => new Date(year, month + 1, 0).getDate();
    const firstDayOfMonth = (year: number, month: number) => new Date(year, month, 1).getDay();

    const handlePrevMonth = (e: React.MouseEvent) => {
        e.stopPropagation();
        setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() - 1, 1));
    };

    const handleNextMonth = (e: React.MouseEvent) => {
        e.stopPropagation();
        setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1, 1));
    };

    const handleDateSelect = (day: number) => {
        const newDate = new Date(currentMonth.getFullYear(), currentMonth.getMonth(), day);
        setSelectedDate(newDate);
        if (onChange) onChange(newDate);
        setIsOpen(false);
    };

    const handleReset = () => {
        setSelectedDate(undefined);
        if (onChange) onChange(undefined);
        setIsOpen(false);
    };

    const renderDays = () => {
        const year = currentMonth.getFullYear();
        const month = currentMonth.getMonth();
        const daysCount = daysInMonth(year, month);
        const startingDay = firstDayOfMonth(year, month);
        const prevMonthDays = daysInMonth(year, month - 1);

        const days = [];

        // Dias do mês anterior (para preencher a grid)
        for (let i = startingDay - 1; i >= 0; i--) {
            days.push(
                <div key={`prev-${i}`} className="labs-calendar__day labs-calendar__day--outside">
                    {prevMonthDays - i}
                </div>
            );
        }

        // Dias do mês atual
        for (let i = 1; i <= daysCount; i++) {
            const isToday = new Date().toDateString() === new Date(year, month, i).toDateString();
            const isSelected = selectedDate?.toDateString() === new Date(year, month, i).toDateString();

            days.push(
                <div
                    key={i}
                    className={classNames(
                        'labs-calendar__day',
                        isToday && 'labs-calendar__day--today',
                        isSelected && 'labs-calendar__day--selected'
                    )}
                    onClick={(e) => {
                        e.stopPropagation();
                        handleDateSelect(i);
                    }}
                >
                    {i}
                </div>
            );
        }

        // Dias do próximo mês (para completar 42 células se necessário, ou 7 colunas)
        const totalCells = Math.ceil((days.length) / 7) * 7;
        const nextDaysCount = totalCells - days.length;
        for (let i = 1; i <= nextDaysCount; i++) {
            days.push(
                <div key={`next-${i}`} className="labs-calendar__day labs-calendar__day--outside">
                    {i}
                </div>
            );
        }

        return days;
    };

    const formatDate = (date: Date) => {
        return date.toLocaleDateString('pt-BR');
    };

    return (
        <div
            ref={containerRef}
            className={classNames('labs-datepicker-container', full && 'labs-select-wrapper--full')}
        >
            {label && <label className="labs-select-label">{label}</label>}

            <div
                className={classNames(
                    'labs-datepicker-trigger',
                    `labs-datepicker-trigger--${size}`,
                    isOpen && 'labs-datepicker-trigger--active',
                    disabled && 'labs-datepicker-trigger--disabled'
                )}
                onClick={() => !disabled && setIsOpen(!isOpen)}
            >
                <span className={classNames(
                    selectedDate ? 'labs-datepicker-trigger__value' : 'labs-datepicker-trigger__placeholder'
                )}>
                    {selectedDate ? formatDate(selectedDate) : placeholder}
                </span>
                <span className="labs-datepicker-trigger__icon">
                    <Icon name="calendar" size={16} />
                </span>
            </div>

            {isOpen && (
                <div className="labs-calendar">
                    <div className="labs-calendar__header">
                        <button className="labs-calendar__nav-btn" onClick={handlePrevMonth}>
                            <Icon name="chevron-left" size={18} />
                        </button>

                        <div className="labs-calendar__current-title">
                            {MONTHS[currentMonth.getMonth()]} {currentMonth.getFullYear()}
                        </div>

                        <button className="labs-calendar__nav-btn" onClick={handleNextMonth}>
                            <Icon name="chevron-right" size={18} />
                        </button>
                    </div>

                    <div className="labs-calendar__grid">
                        {WEEKDAYS.map(day => (
                            <div key={day} className="labs-calendar__weekday">{day}</div>
                        ))}
                        {renderDays()}
                    </div>

                    <div className="labs-calendar__footer">
                        <Button variant="ghost" size="sm" onClick={handleReset}>Limpar</Button>
                        <Button size="sm" onClick={() => setIsOpen(false)}>Concluído</Button>
                    </div>
                </div>
            )}
        </div>
    );
};

DatePicker.displayName = 'DatePicker';
