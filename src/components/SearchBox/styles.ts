import { styled, theme } from "../../styles/stitches.config";

export const SearchContainer = styled('div', {
  width: '710px',
  height: '58px',
  backgroundColor: '$white',
  boxShadow: `0px 4px 4px ${theme.colors.brownDark600}`,

  borderRadius: '10px',
  paddingInline: '1.5rem',
  paddingBlock: '1rem',

  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
});

export const SearchInput = styled('input', {
  backgroundColor: '$white',
  border: 'none',
  width: '100%',
  fontFamily: '$primary',
  color: '$brownDark700',

  '&::placeholder': {
    color: '$brownDark700',
    fontFamily: '$primary',
  }
});

export const SearchIcon = styled('button', {
  color: '$brownDark700',
  background: 'transparent',
  border: 'none',
  cursor: 'pointer',

  '&:hover': {
    color: '$brownDark800',
  }
});