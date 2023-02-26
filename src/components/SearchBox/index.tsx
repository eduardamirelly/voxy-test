import { MagnifyingGlass } from "phosphor-react";
import { SearchContainer, SearchIcon, SearchInput } from "./styles";

export function SearchBox() {
  return (
    <SearchContainer>
      <SearchInput placeholder="Search..." />
      <SearchIcon>
        <MagnifyingGlass size={32} />
      </SearchIcon>
    </SearchContainer>
  )
}