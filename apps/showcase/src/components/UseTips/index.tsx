import React from 'react';
import { Heading, List } from '@labsui/core';

export interface UseTipsProps {
    tips: string[];
}

export const UseTips: React.FC<UseTipsProps> = ({ tips }) => {
    return (
        <div style={{ marginTop: '4rem' }}>
            <Heading size="m">Dicas de Uso</Heading>
            <div style={{ marginTop: '1.5rem' }}>
                <List variant="checklist">
                    {tips.map((tip, index) => (
                        <List.Item key={index}>
                            {tip}
                        </List.Item>
                    ))}
                </List>
            </div>
        </div>
    );
};

export default UseTips;
