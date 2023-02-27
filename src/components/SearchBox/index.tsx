import { MagnifyingGlass } from "phosphor-react";
import { SearchContainer, SearchIcon, SearchInput } from "./styles";

interface SearchBoxProps {
  onInput: (event: string) => void;
}

export function SearchBox({ onInput }: SearchBoxProps) {
  return (
    <SearchContainer>
      <SearchInput placeholder="Search..." onChange={(e) => onInput(e.target.value)} />
      <SearchIcon>
        <MagnifyingGlass size={32} />
      </SearchIcon>
    </SearchContainer>
  )
}