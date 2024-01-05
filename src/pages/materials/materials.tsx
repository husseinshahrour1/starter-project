import { Form } from 'antd';
import CustomTable from 'component/common/ant-table/ant-table';
import CurrencyInput from 'component/common/currency-input/currencyInput';
import Loader from 'component/common/loader/loader';
import PhoneInput from 'component/common/phone-number/phone-number';
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';

export default function Materials() {
  const [form] = Form.useForm();
  const { t } = useTranslation();

  const [pageSize, setPageSize] = useState(10);

  return (
    <div>
      <Form layout='vertical' scrollToFirstError form={form}>
        <Form.Item name={'CurrencyInput'} label={t('CurrencyInput')} style={{ width: '300px' }}>
          <CurrencyInput placeholder={t('placeholder')} addonBefore='USD' />
        </Form.Item>
        <Form.Item name='phoneNumber' label={t('PhoneNumber')} style={{ width: '300px' }}>
          <PhoneInput placeholder={t('placeholder')} />
        </Form.Item>
      </Form>
      <CustomTable
        rowKey={'id'}
        columns={[
          {
            key: '1',
            title: 'Id',
            dataIndex: 'id',
          },
          {
            key: '2',
            title: 'Item',
            dataIndex: 'item',
          },
          {
            key: '3',
            title: 'Device Name',
            dataIndex: 'deviceName',
          },
          {
            key: '4',
            title: 'Store Name',
            dataIndex: 'storeName',
          },
        ]}
        totalItems={60}
        pageSize={pageSize}
        setPageSize={setPageSize}
        filter={true}
        currentPage={0}
        isLoading={false}
        pageSizeOptions={[4, 10, 20, 50, 100]}
        dataSource={[]}
        // handlePageChange={handlePageChange}
      />
      <Loader></Loader>
    </div>
  );
}
