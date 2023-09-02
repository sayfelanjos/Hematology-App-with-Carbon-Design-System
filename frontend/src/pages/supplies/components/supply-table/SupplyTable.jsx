import React from "react";
import { rowData, headerData } from "./SupplyData";

import {
  TableContainer,
  Table,
  DataTable,
  TableHeader,
  TableHead,
  TableBody,
  TableCell,
  TableRow,
  TableToolbar,
  TableToolbarAction,
  TableToolbarSearch,
  TableBatchActions,
  TableBatchAction,
  TableSelectAll,
  TableSelectRow,
  TableToolbarMenu,
  Pagination,
  TableToolbarContent,
  ButtonSet,
  Button,
} from "@carbon/react";
import { TrashCan, Save } from "@carbon/react/icons";

function SupplyTable() {
  return (
    <DataTable rows={rowData} headers={headerData} locale="pt">
      {({
        rows,
        headers,
        getHeaderProps,
        getRowProps,
        getSelectionProps,
        getTableProps,
        getTableContainerProps,
        selectedRows,
      }) => (
        <TableContainer title="Lista de Suprimentos" description="" {...getTableContainerProps()}>
          <TableToolbar>
            <TableBatchActions
              shouldShowBatchActions={selectedRows.length}
              totalSelected={selectedRows.length}>
              <TableBatchAction iconDescription="Delete" renderIcon={TrashCan}>
                Delete
              </TableBatchAction>
              <TableBatchAction iconDescription="Save" renderIcon={Save}>
                Save
              </TableBatchAction>
            </TableBatchActions>
            <TableToolbarContent>
              <TableToolbarSearch />
              <TableToolbarMenu>
                <TableToolbarAction onClick={() => {}}>Action 1</TableToolbarAction>
                <TableToolbarAction onClick={() => {}}>Action 2</TableToolbarAction>
                <TableToolbarAction onClick={() => {}}>Action 3</TableToolbarAction>
                <TableToolbarAction onClick={() => {}}>Action 4</TableToolbarAction>
              </TableToolbarMenu>
              <ButtonSet>
                <Button kind="primary" href={"/supplies/new"}>
                  Primary button
                </Button>
              </ButtonSet>
            </TableToolbarContent>
          </TableToolbar>
          <Table {...getTableProps()}>
            <TableHead>
              <TableRow>
                <TableSelectAll {...getSelectionProps()} />
                {headers.map((header, i) => (
                  <TableHeader
                    key={i}
                    {...getHeaderProps({ header, isSortable: true, onInputChange: true })}>
                    {header.header}
                  </TableHeader>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row, i) => (
                <TableRow key={i} {...getRowProps({ row })}>
                  <TableSelectRow {...getSelectionProps({ row })} />
                  {row.cells.map((cell) => (
                    <TableCell key={cell.id}>{cell.value}</TableCell>
                  ))}
                </TableRow>
              ))}
            </TableBody>
          </Table>
          <Pagination
            backwardText="Previous page"
            disabled="false"
            forwardText="Next page"
            isLastPage="false"
            itemsPerPageText="Items per page:"
            page={1}
            pageInputDisabled="false"
            pageNumberText="Page Number"
            pageSize={10}
            pageSizeInputDisabled="false"
            pageSizes={[10, 20, 30, 40, 50]}
            pagesUnknown="false"
            size="md"
            totalItems={103}
          />
        </TableContainer>
      )}
    </DataTable>
  );
}

export default SupplyTable;
