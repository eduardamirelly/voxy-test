import { styled } from "../../styles/stitches.config";

export const Box = styled('div', {
  display: 'flex',

  variants: {
    direction: {
      row: {
        flexDirection: 'row',
      },
      column: {
        flexDirection: 'column',
      },
    },
    justify: {
      center: {
        justifyContent: 'center',
      },
      flexEnd: {
        justifyContent: 'flex-end',
      },
    },
    align: {
      center: {
        alignItems: 'center',
      },
    },
    wrap: {
      wrap: {
        flexWrap: 'wrap',
      }
    }
  },
})