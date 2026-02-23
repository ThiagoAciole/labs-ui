import React, { useState } from 'react';
import { Icon, IconButton, Container } from '@labsui/core';

interface ShowcasePageProps {
    title: string;
    description: string;
    children: React.ReactNode;
    controls?: React.ReactNode;
    code?: string;
    noGrid?: boolean;
}

export default function ShowcasePage({ title, description, children, controls, code, noGrid }: ShowcasePageProps) {
    const [copied, setCopied] = useState(false);

    const handleCopy = () => {
        if (code) {
            navigator.clipboard.writeText(code);
            setCopied(true);
            setTimeout(() => setCopied(false), 2000);
        }
    };

    return (
        <div className={`showcase-page ${!controls ? 'showcase-page--full-width' : ''}`}>
            <Container size="full" className="page-preview-area">
                <header className="page-header">
                    <h1>{title}</h1>
                    <p>{description}</p>
                </header>

                <section className="preview-section">
                    <div className="control-label" style={{ marginBottom: '1rem' }}>Preview</div>
                    <div className={`preview-box ${noGrid ? 'preview-box--no-grid' : ''}`}>
                        {children}
                    </div>
                </section>

                {code && (
                    <section className="code-section" style={{ marginTop: '1rem' }}>
                        <div className="control-label" style={{ marginBottom: '1rem' }}>Código</div>
                        <div className="code-snippet">
                            <pre><code>{code}</code></pre>
                            <IconButton
                                icon={<Icon name={copied ? "check" : "copy"} size={16} />}
                                variant="ghost"
                                size="sm"
                                className="copy-code"
                                onClick={handleCopy}
                                aria-label="Copy code"
                            />
                        </div>
                    </section>
                )}
            </Container>

            {controls && (
                <aside className="showcase-controls">
                    <div className="control-label">Propriedades</div>
                    {controls}
                </aside>
            )}
        </div>
    );
}
