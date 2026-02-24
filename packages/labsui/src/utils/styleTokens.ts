export type TokenColor =
    | 'gray' | 'grayLight' | 'grayDark'
    | 'blue' | 'blueLight' | 'blueDark'
    | 'red' | 'redLight' | 'redDark'
    | 'green' | 'greenLight' | 'greenDark'
    | 'yellow' | 'yellowLight' | 'yellowDark'
    | 'violet' | 'violetLight' | 'violetDark'
    | 'default' | 'primary' | 'secondary' | 'muted' | 'accent'
    | 'success' | 'warning' | 'danger' | 'info';

export type TokenSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl';
export type TokenWeight = 'regular' | 'medium' | 'bold';

export function colorVar(color?: string): string | undefined {
    if (!color) {
        return undefined;
    }
    const aliases: Record<string, string> = {
        default: 'gray',
        primary: 'violet',
        secondary: 'grayLight',
        muted: 'grayDark',
        accent: 'violet',
        success: 'green',
        warning: 'yellow',
        danger: 'red',
        info: 'blue'
    };
    const normalized = aliases[color] ?? color;
    return `var(--color--${normalized})`;
}

export function fontSizeVar(size?: TokenSize): string | undefined {
    return size ? `var(--font--size--${size})` : undefined;
}

export function fontWeightVar(weight?: TokenWeight): string | undefined {
    return weight ? `var(--font--weight--${weight})` : undefined;
}



