import { styled } from "../../styles/stitches.config";

import * as Select from '@radix-ui/react-select';

export const SelectTrigger = styled(Select.Trigger, {
  minWidth: '150px',
  backgroundColor: '$brownDark600',
  border: 'transparent',
  borderRadius: '10px',
  paddingInline: '1rem',
  paddingBlock: '0.4rem',

  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  gap: '0.5rem',

  color: '$white',
  fontFamily: '$primary',
  fontWeight: '500',

  outline: 'none',
  width: '100%',
  cursor: 'pointer',

  '&:hover': {
    backgroundColor: '$brownDark700',
  },

  '@xs': {
    width: 'auto',
  },
});

export const SelectContent = styled(Select.Content, {
  backgroundColor: '$brownDark600',

  fontFamily: '$primary',
  fontWeight: '400',
  fontSize: '$13',
  color: '$white',
  borderRadius: '10px',
});

export const SelectItem = styled(Select.Item, {
  paddingBlock: '0.2rem',
  paddingInline: '1rem',
  borderRadius: '10px',
  outline: 'none',

  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',

  '&:hover': {
    backgroundColor: '$brownDark800',
  },
});