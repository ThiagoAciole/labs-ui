import React, { useState, createContext, useContext } from 'react';
import { Select, Switch, Input, Divider, IconButton, Icon, Panel, Badge, Flex } from '@aciolelabs/labs-ui';
import './style.css';

export type PropControl =
    | { type: 'select', options: { value: string, label: React.ReactNode, searchValue?: string }[], searchable?: boolean }
    | { type: 'boolean' }
    | { type: 'text' }
    | { type: 'number' };

interface PlaygroundContextValue {
    props: Record<string, any>;
    setProp: (name: string, value: any) => void;
    resetProps: () => void;
    controls: Record<string, PropControl>;
    componentName: string;
    generateCode: () => string;
    bgType: 'grid' | 'grip' | 'solid';
    setBgType: (type: 'grid' | 'grip' | 'solid') => void;
}

const PlaygroundContext = createContext<PlaygroundContextValue | null>(null);

function usePlaygroundContext() {
    const context = useContext(PlaygroundContext);
    if (!context) throw new Error('Playground components must be used within Playground.Root');
    return context;
}

/* --- Root Component --- */
interface RootProps {
    componentName: string;
    defaultProps: Record<string, any>;
    controls: Record<string, PropControl>;
    children: React.ReactNode;
}

function Root({ componentName, defaultProps, controls, children }: RootProps) {
    const [props, setProps] = useState(defaultProps);
    const [bgType, setBgType] = useState<'grid' | 'grip' | 'solid'>('grip');

    const setProp = (name: string, value: any) => {
        setProps(prev => ({ ...prev, [name]: value }));
    };
    const resetProps = () => setProps({ ...defaultProps });

    const generateCode = () => {
        const propStrings = Object.entries(props)
            .filter(([key, value]) => {
                if (key === 'children') return false;
                if (value === defaultProps[key]) return false;
                if (typeof value === 'boolean' && !value) return false;
                return true;
            })
            .map(([key, value]) => {
                if (typeof value === 'boolean') return key;
                return typeof value === 'string' ? `${key}="${value}"` : `${key}={${JSON.stringify(value)}}`;
            });

        const propsStr = propStrings.length > 0 ? ` ${propStrings.join(' ')}` : '';
        const hasChildrenControl = Boolean(controls.children);

        if (!hasChildrenControl) {
            return `<${componentName}${propsStr} />`;
        }

        const content = props.children || 'Labs Content';

        return `<${componentName}${propsStr}>
  ${content}
</${componentName}>`;
    };

    return (
        <PlaygroundContext.Provider value={{ props, setProp, resetProps, controls, componentName, generateCode, bgType, setBgType }}>
            {children}
        </PlaygroundContext.Provider>
    );
}

/* --- Preview Component --- */
interface PreviewProps {
    render: (props: any) => React.ReactNode;
}

function Preview({ render }: PreviewProps) {
    const { props, bgType, setBgType } = usePlaygroundContext();

    return (
        <div className={`playground-preview-box playground-preview-box--${bgType}`}>
            <div className="preview-topbar">
                <Badge color="neutral" size="sm" appearance="soft">Live Preview</Badge>
                <Flex gap="1" className="preview-toolbar-group">
                    <IconButton
                        icon="grid"
                        size="sm"
                        appearance={bgType === 'grid' ? 'solid' : 'ghost'}
                        onClick={() => setBgType('grid')}
                        aria-label="Fundo em grade"
                    />
                    <IconButton
                        icon="grip"
                        size="sm"
                        appearance={bgType === 'grip' ? 'solid' : 'ghost'}
                        onClick={() => setBgType('grip')}
                        aria-label="Fundo em pontos"
                    />
                </Flex>
            </div>
            <div className="preview-canvas">
                {render(props)}
            </div>
        </div>
    );
}

/* --- Controls Component --- */

function Controls() {
    const { props, setProp, resetProps, controls, generateCode } = usePlaygroundContext();
    const [copied, setCopied] = useState(false);

    const handleCopy = () => {
        navigator.clipboard.writeText(generateCode());
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <div className="playground-controls-panel">
            <Panel.Header title="Properties" icon={<Icon name="settings" size={14} />}>
                <div style={{ marginLeft: 'auto' }}>
                    <IconButton
                        icon="refresh"
                        size="sm"
                        appearance="ghost"
                        onClick={resetProps}
                        aria-label="Limpar propriedades"
                    />
                </div>
            </Panel.Header>

            <Panel.Content>
                <Panel.Section>
                    <div className="controls-list">
                        {Object.entries(controls).map(([name, config]) => {
                            if (name === 'children') return null;

                            if (config.type === 'select') {
                                return (
                                    <Select
                                        key={name}
                                        label={name}
                                        value={props[name]}
                                        onChange={(val) => setProp(name, val)}
                                        options={config.options as any}
                                        searchable={config.searchable}
                                    />
                                );
                            }

                            if (config.type === 'boolean') {
                                return (
                                    <div key={name} className="bool-item">
                                        <Switch
                                            label={name}
                                            checked={props[name]}
                                            onChange={(e) => setProp(name, e.target.checked)}
                                        />
                                    </div>
                                );
                            }

                            if (config.type === 'text') {
                                return (
                                    <Input
                                        key={name}
                                        label={name}
                                        value={props[name]}
                                        onChange={(e) => setProp(name, e.target.value)}
                                    />
                                );
                            }

                            return null;
                        })}
                        {controls.children && (
                            <Input
                                label="Conteúdo"
                                value={props.children}
                                onChange={(e) => setProp('children', e.target.value)}
                            />
                        )}
                    </div>
                </Panel.Section>

                <Divider />

                <Panel.Section title="Source" icon={<Icon name="code" size={14} />}>
                    <div style={{ position: 'relative' }}>
                        <div style={{ position: 'absolute', top: '-34px', right: 0 }}>
                            <IconButton
                                icon={copied ? 'check' : 'copy'}
                                size="sm"
                                appearance="ghost"
                                onClick={handleCopy}
                                className={copied ? 'copy-success' : ''}
                                aria-label="Copy source"
                            />
                        </div>
                        <div className="code-view">
                            <pre><code>{generateCode()}</code></pre>
                        </div>
                    </div>
                </Panel.Section>
            </Panel.Content>
        </div>
    );
}

const Playground = {
    Root,
    Preview,
    Controls
};

export default Playground;
export { Root, Preview, Controls };





