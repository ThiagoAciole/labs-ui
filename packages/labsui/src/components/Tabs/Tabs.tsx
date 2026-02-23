import './Tabs.css';
import React, { useState } from 'react';
import { classNames } from '../../utils/classNames';

export interface TabItem {
    value: string;
    label: React.ReactNode;
    content: React.ReactNode;
    disabled?: boolean;
}

export interface TabsProps {
    tabs: TabItem[];
    defaultValue?: string;
    value?: string;
    onChange?: (value: string) => void;
    className?: string;
}

export function Tabs({ tabs, defaultValue, value: controlledValue, onChange, className }: TabsProps) {
    const [internalValue, setInternalValue] = useState(defaultValue ?? tabs[0]?.value ?? '');
    const active = controlledValue ?? internalValue;

    const handleSelect = (val: string) => {
        if (!controlledValue) setInternalValue(val);
        onChange?.(val);
    };

    const activeTab = tabs.find((t) => t.value === active);

    return (
        <div className={classNames('labs-tabs', className)}>
            <div className="labs-tabs-list" role="tablist">
                {tabs.map((tab) => (
                    <button
                        key={tab.value}
                        role="tab"
                        type="button"
                        disabled={tab.disabled}
                        aria-selected={active === tab.value}
                        aria-controls={`labs-tab-panel-${tab.value}`}
                        id={`labs-tab-trigger-${tab.value}`}
                        className={classNames('labs-tabs-trigger', active === tab.value && 'labs-tabs-trigger--active')}
                        onClick={() => !tab.disabled && handleSelect(tab.value)}
                    >
                        {tab.label}
                    </button>
                ))}
            </div>
            <div
                role="tabpanel"
                id={`labs-tab-panel-${active}`}
                aria-labelledby={`labs-tab-trigger-${active}`}
                className="labs-tabs-panel"
                tabIndex={0}
            >
                {activeTab?.content}
            </div>
        </div>
    );
}
