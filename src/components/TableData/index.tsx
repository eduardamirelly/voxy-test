import { TableBody, TableContainer, TableHead, TableTd, TableTh, TableTr } from "./styles";

export function TableData() {
  return (
    <TableContainer>
      <TableHead>
        <TableTr>
          <TableTh>
            Column Title
          </TableTh>
          <TableTh>
            Column Title
          </TableTh>
          <TableTh>
            Column Title
          </TableTh>
          <TableTh>
            Column Title
          </TableTh>
          <TableTh>
            Column Title
          </TableTh>
          <TableTh>
            Column Title
          </TableTh>
        </TableTr>
      </TableHead>

      <TableBody>
        <TableTr>
          <TableTd>
            Column texto
          </TableTd>
          <TableTd>
            Column texto
          </TableTd>
          <TableTd>
            Column texto
          </TableTd>
          <TableTd>
            Column texto
          </TableTd>
          <TableTd>
            Column texto
          </TableTd>
          <TableTd>
            Column texto
          </TableTd>
        </TableTr>
        <TableTr hasBorderBottom="without">
          <TableTd>
            Column texto
          </TableTd>
          <TableTd>
            Column texto
          </TableTd>
          <TableTd>
            Column texto
          </TableTd>
          <TableTd>
            Column texto
          </TableTd>
          <TableTd>
            Column texto
          </TableTd>
          <TableTd>
            Column texto
          </TableTd>
        </TableTr>
      </TableBody>
    </TableContainer>
  )
}