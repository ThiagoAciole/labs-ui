import { Text, Heading, Card, CardBody, Code } from '@labsui/core';
import { COLOR_OPTIONS, SIZE_OPTIONS } from '../../config/categories/commonOptions';
import ShowcasePage from '../../components/ShowcasePage';
import Playground from '../../components/Playground';

export default function CodePage() {
    return (
        <Playground.Root
            componentName="Code"
            defaultProps={{
                size: 'md',
                weight: 'regular',
                color: 'neutral',
                children: 'npm install @aciolelabs/labs-ui'
            }}
            controls={{
                size: {
                    type: 'select',
                    options: SIZE_OPTIONS
                },
                weight: {
                    type: 'select',
                    options: [
                        { value: 'regular', label: 'Regular' },
                        { value: 'medium', label: 'Medium' },
                        { value: 'bold', label: 'Bold' },
                    ]
                },
                color: {
                    type: 'select',
                    options: COLOR_OPTIONS
                },
                children: { type: 'text' }
            }}
        >
            <ShowcasePage
                title="Code"
                description="O componente Code é utilizado para exibir código-fonte, garantindo legibilidade e controle de hierarquia."
                aside={<Playground.Controls />}
            >
                <Playground.Preview render={(props) => (
                    <div style={{ width: '100%', maxWidth: '600px' }}>
                        <Code {...props}>{props.children}</Code>
                    </div>
                )} />
            </ShowcasePage>
        </Playground.Root>
    );
}




