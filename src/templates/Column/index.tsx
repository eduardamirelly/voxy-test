import { styled } from "../../styles/stitches.config";

export const Column = styled('div', {
  display: 'flex',
  flexDirection: 'column',

  variants: {
    justify: {
      center: {
        justifyContent: 'center',
      },
    },
    align: {
      center: {
        alignItems: 'center',
      },
    },
  },
})