import React from "react";
import {
  DataTable,
  TableContainer,
  TableToolbar,
  TableToolbarMenu,
  TableBatchActions,
  TableBatchAction,
  TableToolbarContent,
  TableToolbarSearch,
  TableToolbarAction,
  Table,
  TableBody,
  TableHeader,
  TableHead,
  TableRow,
  TableSelectRow,
  TableCell,
  TableSelectAll,
  Button,
} from "@carbon/react";
import { TrashCan, Add, Save, Download } from "@carbon/react/icons";
import { rows, headers } from "./usesData";

const UsersTable = () => {
  function batchActionClick(selectedRows) {}

  return (
    <DataTable rows={rows} headers={headers}>
      {({
        rows,
        headers,
        getHeaderProps,
        getRowProps,
        getSelectionProps,
        getToolbarProps,
        getBatchActionProps,
        onInputChange,
        selectedRows,
        getTableProps,
        getTableContainerProps,
      }) => {
        const batchActionProps = getBatchActionProps();

        return (
          <TableContainer
            title="DataTable"
            description="With batch actions. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas accumsan mauris sed congue egestas. Integer varius mauris vel arcu pulvinar bibendum non sit amet ligula. Nullam ut nisi eu tellus aliquet vestibulum vel sit amet odio."
            {...getTableContainerProps()}>
            <TableToolbar {...getToolbarProps()}>
              <TableBatchActions {...batchActionProps}>
                <TableBatchAction
                  tabIndex={batchActionProps.shouldShowBatchActions ? 0 : -1}
                  renderIcon={TrashCan}
                  onClick={batchActionClick(selectedRows)}>
                  Delete
                </TableBatchAction>
                <TableBatchAction
                  hasIconOnly
                  iconDescription="Add"
                  tooltipPosition="bottom"
                  tabIndex={batchActionProps.shouldShowBatchActions ? 0 : -1}
                  renderIcon={Add}
                  onClick={batchActionClick(selectedRows)}>
                  Delete
                </TableBatchAction>
                <TableBatchAction
                  hasIconOnly
                  iconDescription="Save"
                  tooltipPosition="bottom"
                  tabIndex={batchActionProps.shouldShowBatchActions ? 0 : -1}
                  renderIcon={Save}
                  onClick={batchActionClick(selectedRows)}>
                  Save
                </TableBatchAction>
                <TableBatchAction
                  tabIndex={batchActionProps.shouldShowBatchActions ? 0 : -1}
                  renderIcon={Download}
                  onClick={batchActionClick(selectedRows)}>
                  Download
                </TableBatchAction>
              </TableBatchActions>
              <TableToolbarContent aria-hidden={batchActionProps.shouldShowBatchActions}>
                <TableToolbarSearch
                  tabIndex={batchActionProps.shouldShowBatchActions ? -1 : 0}
                  onChange={onInputChange}
                />
                <TableToolbarMenu tabIndex={batchActionProps.shouldShowBatchActions ? -1 : 0}>
                  <TableToolbarAction onClick={() => alert("Alert ")}>Action</TableToolbarAction>
                  <TableToolbarAction onClick={() => alert("Alert ")}>Action</TableToolbarAction>
                  <TableToolbarAction onClick={() => alert("Alert ")}>Action</TableToolbarAction>
                </TableToolbarMenu>
                <Button
                  tabIndex={batchActionProps.shouldShowBatchActions ? -1 : 0}
                  onClick={() => {}}
                  size="small"
                  kind="primary">
                  Add new
                </Button>
              </TableToolbarContent>
            </TableToolbar>
            <Table {...getTableProps()}>
              <TableHead>
                <TableRow>
                  <TableSelectAll {...getSelectionProps()} />
                  {headers.map((header, i) => (
                    <TableHeader key={i} {...getHeaderProps({ header })}>
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
          </TableContainer>
        );
      }}
    </DataTable>
  );
};

export default UsersTable;
