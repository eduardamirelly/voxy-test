import { styled, theme } from "../../styles/stitches.config";

export const TableContainer = styled('table', {
  width: '100%',
  border: `1px solid ${theme.colors.brownDark700}`,
  borderRadius: '10px',
  overflowX: 'auto',
  display: 'block',
});

export const TableHead = styled('thead', {});

export const TableBody = styled('tbody', {});

export const TableTr = styled('tr', {
  display: 'grid',
  gridTemplateColumns: 'repeat(6, 1fr)',
  paddingInline: '1.5rem',
  paddingBlock: '0.75rem',
  width: 'max-content',
  minWidth: '100%',
  gap: '1rem',

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

export const TableTh = styled('th', {
  minWidth: '128px',
  fontWeight: '600',
  fontSize: '$13',
  color: '$brownDark800',
  textAlign: 'start',
});

export const TableTd = styled('td', {
  fontSize: '$12',
  color: '$brownDark700',
  minWidth: '128px',
});