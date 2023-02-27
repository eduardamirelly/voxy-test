import { TableBody, TableContainer, TableHead, TableTd, TableTh, TableTr } from "./styles";

interface TableDataProps {
  headColumns: string[];
  rowsData: object[];
}

export function TableData({ headColumns, rowsData }: TableDataProps) {
  return (
    <TableContainer>
      <TableHead>
        <TableTr>
          {headColumns.map((col, index) => (
            <TableTh key={index}>
              {col}
            </TableTh>
          ))}
        </TableTr>
      </TableHead>

      <TableBody>
        {rowsData.map((row, index) => (
          <TableTr key={index} hasBorderBottom={index == rowsData.length - 1 ? 'without' : 'contain'}>
            {Object.keys(row).map((key, index) => (
              <TableTd key={index}>
                {row[key as keyof object]}
              </TableTd>
            ))}
          </TableTr>
        ))}
      </TableBody>
    </TableContainer>
  )
}