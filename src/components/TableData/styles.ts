import { styled, theme } from "../../styles/stitches.config";

export const TableContainer = styled('div', {
  width: '100%',
  border: `1px solid ${theme.colors.brownDark700}`,
  borderRadius: '10px',
  overflowX: 'auto',
});

export const TableHead = styled('div', {});

export const TableBody = styled('div', {});

export const TableTr = styled('div', {
  display: 'grid',
  gridTemplateColumns: 'repeat(6, 1fr)',
  paddingInline: '1.5rem',
  paddingBlock: '0.75rem',
  width: 'max-content',
  minWidth: '100%',

  variants: {
    hasBorderBottom: {
      without: {
        border: 'none',
      },
      contain: {
        borderBottom: `1px solid ${theme.colors.brownDark700}`,
      }
    }
  },
  defaultVariants: {
    hasBorderBottom: 'contain',
  }
});

export const TableTh = styled('div', {
  minWidth: '128px',
  fontWeight: '600',
  fontSize: '$13',
  color: '$brownDark800',
  textAlign: 'start',
});

export const TableTd = styled('div', {
  fontSize: '$12',
  color: '$brownDark700',
  minWidth: '128px',
});