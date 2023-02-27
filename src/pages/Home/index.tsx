import { SearchBox } from "../../components/SearchBox";
import { TableData } from "../../components/TableData";
import { Column } from "../../templates/Column";
import { Container } from "../../templates/Container/styles";

export function Home() {
  return (
    <Container>
      <Column justify="center" align="center">
        <SearchBox />

        <TableData />
      </Column>
    </Container>
  )
}