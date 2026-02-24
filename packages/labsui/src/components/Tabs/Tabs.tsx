import './Tabs.css';
import React, { useState } from 'react';
import { classNames } from '../../utils/classNames';

export interface TabItem {
    value: string;
    label: React.ReactNode;
    content?: React.ReactNode;
    disabled?: boolean;
    href?: string;
    to?: string;
}

export interface TabsProps {
    tabs: TabItem[];
    defaultValue?: string;
    value?: string;
    onChange?: (value: string) => void;
    className?: string;
}

export function Tabs({ tabs, defaultValue, value: controlledValue, onChange, className }: TabsProps) {
    const currentPath = typeof window !== 'undefined' ? window.location.pathname : '';
    const normalizePath = (path: string) => {
        const pathname = path.split('?')[0].split('#')[0];
        return pathname.endsWith('/') && pathname !== '/' ? pathname.slice(0, -1) : pathname;
    };
    const routeMatchedTab = tabs.find((tab) => {
        const route = tab.to ?? tab.href;
        return route && currentPath ? normalizePath(route) === normalizePath(currentPath) : false;
    });
    const [internalValue, setInternalValue] = useState(defaultValue ?? routeMatchedTab?.value ?? tabs[0]?.value ?? '');
    const active = controlledValue ?? internalValue;

    const handleSelect = (val: string) => {
        if (!controlledValue) setInternalValue(val);
        onChange?.(val);
    };

    const activeTab = tabs.find((t) => t.value === active);

    return (
        <div className={classNames('labs-tabs', className)}>
            <div className="labs-tabs-list" role="tablist">
                {tabs.map((tab) => {
                    const route = tab.to ?? tab.href;
                    if (route) {
                        return (
                            <a
                                key={tab.value}
                                role="tab"
                                aria-selected={active === tab.value}
                                aria-controls={`labs-tab-panel-${tab.value}`}
                                id={`labs-tab-trigger-${tab.value}`}
                                className={classNames('labs-tabs-trigger', active === tab.value && 'labs-tabs-trigger--active')}
                                onClick={() => !tab.disabled && handleSelect(tab.value)}
                                href={route}
                                aria-current={active === tab.value ? 'page' : undefined}
                            >
                                {tab.label}
                            </a>
                        );
                    }

                    return (
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
                    );
                })}
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
