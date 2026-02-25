import { DatePicker, Heading, Text, Flex } from '@labsui/core';
import { SIZE_OPTIONS } from '../../config/categories/commonOptions';
import ShowcasePage from '../../components/ShowcasePage';
import Playground from '../../components/Playground';
import { useState } from 'react';

export default function DatePickerPage() {
    const [date, setDate] = useState<Date | undefined>(new Date());

    return (
        <Playground.Root
            componentName="DatePicker"
            defaultProps={{
                label: 'Agendamento',
                placeholder: 'Selecione uma data...',
                size: 'md',
                full: true,
                disabled: false
            }}
            controls={{
                label: { type: 'text' },
                placeholder: { type: 'text' },
                size: {
                    type: 'select',
                    options: SIZE_OPTIONS
                },
                full: { type: 'boolean' },
                disabled: { type: 'boolean' }
            }}
        >
            <ShowcasePage
                title="DatePicker"
                description="O DatePicker oferece uma interface de calendário intuitiva para seleção de datas, com suporte a tradução e reset."
                aside={<Playground.Controls />}
            >
                <Playground.Preview render={(props) => (
                    <div style={{ width: '100%', maxWidth: '350px' }}>
                        <DatePicker {...props} value={date} onChange={setDate} />
                    </div>
                )} />

                <div style={{ marginTop: '4rem' }}>
                    <Heading size="m">Variantes</Heading>
                    <Flex gap="6" style={{ marginTop: '1.5rem' }}>
                        <DatePicker label="Início" size="sm" />
                        <DatePicker label="Fim" size="sm" />
                    </Flex>
                </div>
            </ShowcasePage>
        </Playground.Root>
    );
}




