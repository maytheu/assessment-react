import { useTable, usePagination } from "react-table";

const Table = ({ columns, data }) => {
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    page,
    prepareRow,
    canPreviousPage,
    canNextPage,
    pageOptions,
    pageCount,
    gotoPage,
    nextPage,
    previousPage,
    setPageSize,
    state: { pageIndex, pageSize },
  } = useTable(
    {
      columns,
      data,
      initialState: { pageIndex: 1, pageSize: 20 },
    },
    usePagination
  );
  return (
    <div className="flex flex-col w-full mt-7">
      <div className=" shadow sm:rounded-lg border-b border-gray-200">
        <div className="w-full  overflowauto scrollbar-hide">
          <table
            className="min-w-full max-w-full divide-y divide-gray-200"
            {...getTableProps()}
          >
            <thead>
              {headerGroups.map((headerGroup) => (
                <tr {...headerGroup.getHeaderGroupProps()}>
                  {headerGroup.headers.map((column) => (
                    <th
                      className="px-6 py-3 bg-gray-50 text-left text-xs leading-4 font-medium text-on-background capitalize tracking-wider static"
                      {...column.getHeaderProps()}
                    >
                      {column.render("Header")}
                    </th>
                  ))}
                </tr>
              ))}
            </thead>

            <tbody
              className={`bg-white divide-y divide-gray-200`}
              {...getTableBodyProps()}
            >
              {page.map((row, i) => {
                prepareRow(row);
                return (
                  <tr {...row.getRowProps()}>
                    {row.cells.map((cell) => {
                      return (
                        <td
                          className="px-6 py-4 whitespace-no-wrap text-sm leading-5 font-medium text-on-background "
                          {...cell.getCellProps()}
                        >
                          {cell.render("Cell")}
                        </td>
                      );
                    })}
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
        <div className="flex justify-center py-3 border-t items-center gap-3">
          <div className="inlie-flex -space-x-px ">
            <ButtonPage
              {...{
                disabled: !canPreviousPage,
                onChangePage: () => gotoPage(0),
              }}
            >
              {"<<"}
            </ButtonPage>
            <ButtonPage
              {...{
                disabled: !canPreviousPage,
                onChangePage: () => previousPage(),
              }}
            >
              {"<"}
            </ButtonPage>
            <ButtonPage
              {...{
                disabled: !canNextPage,
                onChangePage: () => nextPage(),
              }}
            >
              {">"}
            </ButtonPage>
            <ButtonPage
              {...{
                disabled: !canNextPage,
                onChangePage: () => gotoPage(pageCount - 1),
              }}
            >
              {">>"}
            </ButtonPage>
          </div>

          <select className="bloc w-1/3 rounded-md border-0 py-1.5  sm:max-w-xs"
            value={pageSize}
            onChange={(e) => {
              setPageSize(Number(e.target.value));
            }}
          >
            {[20, 50, 100].map((pageSize) => (
              <option key={pageSize} value={pageSize}>
                {pageSize}
              </option>
            ))}
          </select>
          <span>
            Page{" "}
            <strong>
              {pageIndex + 1} of {pageOptions.length}
            </strong>{" "}
          </span>
        </div>
      </div>
    </div>
  );
};

const ButtonPage = ({ children, disabled, onChangePage }) => {
  return (
    <button
      onClick={onChangePage}
      disabled={disabled}
      className="bg-white border border-gray-300  hover:bg-blue-500 hover:text-white ml-0 rounded-lg py-2 px-3 text-sm leading-5 font-medium text-on-background disabled:cursor-not-allowed disabled:hover:bg-blue-300"
    >
      {children}
    </button>
  );
};

export default Table;
