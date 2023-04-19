import { Container } from "./styles";

type SearchInputProps = {
  handleOnChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
}

function SearchInput({ handleOnChange }: SearchInputProps) {

  return (
    <Container>
      <input onChange={handleOnChange} name="search" placeholder="Buscar" type='text' />
    </Container>
  );
}

export default SearchInput;
