import React from 'react';
import { Table, TablePaginationConfig } from 'antd';
import { FilterValue } from 'antd/lib/table/interface';
import { antTableYscroll, antTableYscrollFilter } from 'constants/app-constants';

interface CustomTableProps {
  columns: any[];
  rowKey: string;
  filter: boolean;
  pageSizeOptions?: number[];
  totalItems?: number | undefined;
  pageSize?: number;
  currentPage?: number;
  isLoading: boolean;
  dataSource: any[] | undefined;
  setPageSize?: (size: number) => void;
  handlePageChange?: (
    pagination: TablePaginationConfig,
    filters: Record<string, FilterValue | null>,
  ) => void;
}

const CustomTable: React.FC<CustomTableProps> = ({
  columns,
  totalItems,
  pageSizeOptions,
  pageSize,
  filter,
  setPageSize,
  currentPage,
  isLoading,
  dataSource,
  rowKey,
  handlePageChange,
}) => {
  return (
    <Table
      rowKey={rowKey}
      columns={columns}
      pagination={{
        pageSizeOptions: pageSizeOptions,
        total: totalItems,
        pageSize: pageSize,
        current: currentPage ? currentPage + 1 : 1,
        onShowSizeChange(_current, size) {
          if (setPageSize) setPageSize(size);
        },
      }}
      scroll={{
        scrollToFirstRowOnChange: true,
        x: 1200,
        y: filter ? antTableYscroll : antTableYscrollFilter,
      }}
      loading={isLoading}
      dataSource={dataSource}
      className={`table ${filter ? 'ant-table-filter ' : 'ant-table-no-filter '}`}
      onChange={handlePageChange}
    />
  );
};

export default CustomTable;
