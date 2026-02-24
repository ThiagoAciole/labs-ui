export type TokenColor = 'primary' | 'success' | 'error' | 'attention' | 'neutral';
export type TokenTextColor = TokenColor | 'default' | 'disabled';
export type TokenIconColor = TokenColor | 'default' | 'disabled';

export type TokenSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl';
export type TokenWeight = 'regular' | 'medium' | 'bold';

const TOKEN_COLORS: readonly TokenColor[] = ['primary', 'success', 'error', 'attention', 'neutral'];

function normalizeTokenColor(color?: TokenColor): TokenColor | undefined {
    if (!color) return undefined;
    return TOKEN_COLORS.includes(color) ? color : undefined;
}

export function colorVar(color?: TokenColor): string | undefined {
    const normalized = normalizeTokenColor(color);
    if (!normalized) return undefined;
    if (normalized === 'neutral') return 'var(--text-gray)';
    return `var(--bg-${normalized})`;
}

export function textColorVar(color?: TokenTextColor): string | undefined {
    if (!color) {
        return 'var(--text-primary)';
    }
    if (color === 'default') return 'var(--text-primary)';
    if (color === 'disabled') return 'var(--text-disabled)';
    if (color === 'primary') return 'var(--bg-primary)';

    const normalized = normalizeTokenColor(color as TokenColor);
    if (!normalized) return undefined;
    if (normalized === 'neutral') return 'var(--text-gray)';
    return `var(--text-${normalized})`;
}

export function iconColorVar(color?: TokenIconColor): string | undefined {
    if (!color) {
        return 'var(--icon-default, var(--text-primary))';
    }
    if (color === 'default') return 'var(--icon-default, var(--text-primary))';
    if (color === 'disabled') return 'var(--icon-disabled, var(--text-disabled))';
    if (color === 'primary') return 'var(--icon-primary, var(--bg-primary))';

    const normalized = normalizeTokenColor(color as TokenColor);
    if (!normalized) return undefined;
    if (normalized === 'neutral') return 'var(--icon-neutral, var(--text-gray))';
    return `var(--icon-${normalized}, var(--text-${normalized}))`;
}

export function fontSizeVar(size?: TokenSize): string | undefined {
    return size ? `var(--font--size--${size})` : undefined;
}

export function fontWeightVar(weight?: TokenWeight): string | undefined {
    return weight ? `var(--font--weight--${weight})` : undefined;
}



