import { SearchBox } from "../../components/SearchBox";
import { SelectBox } from "../../components/SelectBox";
import { TableData } from "../../components/TableData";
import { Box } from "../../templates/Box";
import { Container } from "../../templates/Container/styles";

export function Home() {
  return (
    <Container>
      <Box direction="column" justify="center" align="center">
        <SearchBox />

        <Box direction="row" wrap="wrap" justify="flexEnd" css={{ gap: '.75rem', marginBottom: '1rem', alignSelf: 'end' }}>
          <SelectBox placeholder="Primary Group" options={[
            {
              text: 'All options',
              value: '1'
            },
            {
              text: 'Option 1',
              value: '2'
            }
          ]} />
          <SelectBox placeholder="Sort By" options={[
            {
              text: 'All options',
              value: '1'
            },
            {
              text: 'Option 1',
              value: '2'
            }
          ]} />
          <SelectBox placeholder="Order By" options={[
            {
              text: 'All options',
              value: '1'
            },
            {
              text: 'Option 1',
              value: '2'
            }
          ]} />
        </Box>

        <TableData />
      </Box>
    </Container>
  )
}