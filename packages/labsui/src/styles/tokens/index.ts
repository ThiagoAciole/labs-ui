export const designTokens = {
  colors: {
    light: {
      bg: {
        default: 'var(--bg)',
        inverse: 'var(--bg-inverse)',
        primary: 'var(--bg-primary)',
        primaryLight: 'var(--bg-primary-light)',
        success: 'var(--bg-success)',
        successLight: 'var(--bg-success-light)',
        error: 'var(--bg-error)',
        errorLight: 'var(--bg-error-light)',
        attention: 'var(--bg-attention)',
        attentionLight: 'var(--bg-attention-light)',
      },
      surface: {
        default: 'var(--surface)',
        alt: 'var(--surface-alt)',
        inverse: 'var(--surface-inverse)',
      },
      text: {
        primary: 'var(--text-primary)',
        gray: 'var(--text-gray)',
        success: 'var(--text-success)',
        error: 'var(--text-error)',
        attention: 'var(--text-attention)',
        inverse: 'var(--text-inverse)',
        disabled: 'var(--text-disabled)',
      },
      border: {
        primary: 'var(--border-primary)',
        gray: 'var(--border-gray)',
        error: 'var(--border-error)',
        success: 'var(--border-success)',
        attention: 'var(--border-attention)',
      }
    }
  },
  border: {
    width: {
      hairline: 'var(--border-width-hairline)',
      thin: 'var(--border-width-thin)',
      md: 'var(--border-width-md)',
    },
    radius: {
      sm: 'var(--border-radius-sm)',
      md: 'var(--border-radius-md)',
      lg: 'var(--border-radius-lg)',
    }
  }
};
