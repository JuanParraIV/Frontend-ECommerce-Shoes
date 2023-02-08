import { StyledButton, StyledLi, StyledNav } from "./style";

interface PaginatedProps<T> {
  data: T[];
  itemsPerPage: number;
  totalItemsLength: number;
  setCurrentPage: (_value: number) => void;
  currentPage: number;
  indexOfFirst: number;
  indexOfLast: number;
  paginated: (number: number) => void;
}

const Paginated = <T extends object>(props: PaginatedProps<T>) => {
  const { itemsPerPage, totalItemsLength, setCurrentPage, paginated } = props;
  const { currentPage, indexOfFirst, indexOfLast } = props;

  const pageNumber = Math.ceil(totalItemsLength / itemsPerPage);
  const pageNumbers = Array.from({ length: pageNumber }, (_, index) => index + 1);
  const forward = (pageNumber: number) => {
    setCurrentPage(
      pageNumber === pageNumbers.length ? pageNumber : pageNumber + 1
    );
  };

  const backward = (pageNumber: number) => {
    setCurrentPage(pageNumber === 1 ? pageNumber : pageNumber - 1);
  };
  return (
    <StyledNav>
      {pageNumbers[0] && (
        <ul className="flex">
          <StyledButton onClick={() => backward(currentPage)}>Previous</StyledButton>
          {pageNumbers &&
            pageNumbers.map((number) => {
              if (currentPage === number)
                return (
                  <li
                    className="py-1 px-3 m-1 flex text-center rounded shadow-lg border-b-4 border-yellow-400 rounded-lg"
                    key={number}
                    onClick={() => paginated(number)}
                  >
                    {number}
                  </li>
                );
              else
                return (
                  <StyledLi key={number} onClick={() => paginated(number)}>
                    {number}
                  </StyledLi>
                );
            })}
          <StyledButton onClick={() => forward(currentPage)}>Next</StyledButton>
        </ul>
      )}
    </StyledNav>
  );
};

export default Paginated;
