import { useEffect, useState } from "react";
import { SearchBox } from "../../components/SearchBox";
import { SelectBox } from "../../components/SelectBox";
import { TableData } from "../../components/TableData";
import { Box } from "../../templates/Box";
import { Container } from "../../templates/Container/styles";
import { columnsExample, dataExample, groups, orderByExample, sortByExample } from "../../utils/data";

export function Home() {
  const [dataList, setDataList] = useState(dataExample);
  const [primaryGroup, setPrimaryGroup] = useState('');
  const [orderBy, setOrderBy] = useState('1');
  const [sortBy, setSortBy] = useState('email');

  useEffect(() => {
    handleSelectSortBy(sortBy);
  }, [orderBy, primaryGroup]);

  const handleSelectPrimaryGroup = (event: string) => {
    setDataList(dataExample.filter((item) => item.primaryGroup == event));
    setPrimaryGroup(event);
  }
  const handleSelectSortBy = (event: string) => {
    setDataList([...dataList].sort((a, b) => {
      return orderBy == '1' ? 
              (a[event as keyof object] as string).localeCompare(b[event as keyof object], undefined,  {numeric: true, sensitivity: 'base'}) :
              (b[event as keyof object] as string).localeCompare(a[event as keyof object], undefined,  {numeric: true, sensitivity: 'base'})
    }));
    setSortBy(event);
  }
  const handleSelectOrderBy = (event: string) => {
    setOrderBy(event);
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
            defaultValue={sortBy}
          />
          <SelectBox 
            placeholder="Order By" 
            options={orderByExample} 
            onValueChange={handleSelectOrderBy}
            defaultValue={orderBy} 
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