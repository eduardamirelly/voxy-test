import { SearchBox } from "../../components/SearchBox";
import { SelectBox } from "../../components/SelectBox";
import { TableData } from "../../components/TableData";
import { Box } from "../../templates/Box";
import { Container } from "../../templates/Container/styles";
import { columnsExample, dataExample, groups, orderByExample, sortByExample } from "../../utils/data";

export function Home() {
  return (
    <Container>
      <Box direction="column" justify="center" align="center">
        <SearchBox />

        <Box direction="row" wrap="wrap" justify="flexEnd" css={{ gap: '.75rem', marginBottom: '1rem', alignSelf: 'end' }}>
          <SelectBox placeholder="Primary Group" options={groups} />
          <SelectBox placeholder="Sort By" options={sortByExample} />
          <SelectBox placeholder="Order By" options={orderByExample} />
        </Box>

        <TableData 
          headColumns={columnsExample}
          rowsData={dataExample}
        />
      </Box>
    </Container>
  )
}