import { useCallback, useEffect, useState } from "react";
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
  const [searchInput, setSearchInput] = useState('');

  useEffect(() => {
    handleInputSearch(searchInput);
    handleSelectSortBy(sortBy);
  }, [orderBy, primaryGroup]);

  useEffect(() => {
    if (searchInput == '') {
      if (primaryGroup != '0' && primaryGroup) {
        handleSelectPrimaryGroup(primaryGroup);
      } else {
        handleSelectSortBy(sortBy);
      }
    }
  }, [searchInput]);

  const handleSelectPrimaryGroup = (event: string) => {
    let data = searchInput == '' ? dataExample : dataList; 
    setPrimaryGroup(event);
    if(event != '0') {
      setDataList(data.filter((item) => item.primaryGroup == event));
      return;
    }
    setDataList(dataExample);
  }
  const handleSelectSortBy = (event: string) => {
    let data = searchInput == '' && (!primaryGroup || primaryGroup == '0') ? dataExample : dataList; 
    setDataList([...data].sort((a, b) => {
      return orderBy == '1' ? 
              (a[event as keyof object] as string).localeCompare(b[event as keyof object], undefined,  {numeric: true, sensitivity: 'base'}) :
              (b[event as keyof object] as string).localeCompare(a[event as keyof object], undefined,  {numeric: true, sensitivity: 'base'})
    }));
    setSortBy(event);
  }
  const handleSelectOrderBy = (event: string) => {
    setOrderBy(event);
  }

  const handleInputSearch = (event: string) => {
    setSearchInput(event);
    setDataList(dataExample.filter((item) => {
      let matchEvent = false;
      Object.values(item).map((valueItem) => {
        if(valueItem.toLowerCase().match(event.toLowerCase())) {
          matchEvent = true;
        }
      })
      if(matchEvent) {
        return item;
      }
    }));
  }

  return (
    <Container>
      <Box direction="column" justify="center" align="center">
        <SearchBox onInput={handleInputSearch} />

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
            isRequired
          />
          <SelectBox 
            placeholder="Order By" 
            options={orderByExample} 
            onValueChange={handleSelectOrderBy}
            defaultValue={orderBy} 
            isRequired
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