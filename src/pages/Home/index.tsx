import { useState } from "react";
import { SearchBox } from "../../components/SearchBox";
import { SelectBox } from "../../components/SelectBox";
import { TableData } from "../../components/TableData";
import { Box } from "../../templates/Box";
import { Container } from "../../templates/Container/styles";
import { columnsExample, dataExample, groups, orderByExample, sortByExample } from "../../utils/data";

export function Home() {
  const [dataList, setDataList] = useState(dataExample);

  const handleSelectPrimaryGroup = (event: string) => {
    setDataList(dataExample.filter((item) => item.primaryGroup == event));
  }
  const handleSelectSortBy = (event: string) => {
    setDataList([...dataList].sort((a, b) => {
      console.log((a[event as keyof object] as string).localeCompare(b[event as keyof object]));
      return (a[event as keyof object] as string).localeCompare(b[event as keyof object])
    }));
  }
  const handleSelectOrderBy = () => {
    
  }

  return (
    <Container>
      <Box direction="column" justify="center" align="center">
        <SearchBox />

        <Box direction="row" wrap="wrap" justify="flexEnd" css={{ gap: '.75rem', marginBottom: '1rem', alignSelf: 'end' }}>
          <SelectBox 
            placeholder="Primary Group" 
            options={groups} 
            onValueChange={handleSelectPrimaryGroup} 
          />
          <SelectBox 
            placeholder="Sort By" 
            options={sortByExample} 
            onValueChange={handleSelectSortBy} 
          />
          <SelectBox 
            placeholder="Order By" 
            options={orderByExample} 
            onValueChange={handleSelectOrderBy} 
          />
        </Box>

        <TableData 
          headColumns={columnsExample}
          rowsData={dataList}
        />
      </Box>
    </Container>
  )
}