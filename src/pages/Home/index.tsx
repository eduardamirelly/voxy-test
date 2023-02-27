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

        <TableData 
          headColumns={[
            'Column 1',
            'Column 2',
            'Column 3',
            'Column 4',
            'Column 5',
            'Column 6',
          ]}
          rowsData={[
            {
              email: 'example@email.com',
              firstName: 'first name',
              lastName: 'last name',
              primaryGroup: 'important people',
              phoneNumber: '84996310801',
              hoursStudied: '100h',
            },
            {
              email: 'example@email.com',
              firstName: 'first name',
              lastName: 'last name',
              primaryGroup: 'important people',
              phoneNumber: '84996310801',
              hoursStudied: '100h',
            },
            {
              email: 'example@email.com',
              firstName: 'first name',
              lastName: 'last name',
              primaryGroup: 'important people',
              phoneNumber: '84996310801',
              hoursStudied: '100h',
            },
            {
              email: 'example@email.com',
              firstName: 'first name',
              lastName: 'last name',
              primaryGroup: 'important people',
              phoneNumber: '84996310801',
              hoursStudied: '100h',
            },
          ]}
        />
      </Box>
    </Container>
  )
}