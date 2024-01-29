import { Divider, Form } from 'antd';
import AntCalendar from 'component/common/ant-calendar/ant-calendar';
import CustomTable from 'component/common/ant-table/ant-table';
import CurrencyInput from 'component/common/currency-input/currencyInput';
import Loader from 'component/common/loader/loader';
import PhoneInput from 'component/common/phone-number/phone-number';
import SpeechRecognition from 'component/common/speech-recognition/speech-recognition';
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';

export default function Materials() {
  const [form] = Form.useForm();
  const { t } = useTranslation();

  const [pageSize, setPageSize] = useState(10);

  return (
    <div>
      <h3>Start Recording Here</h3>
      <SpeechRecognition />
      <Divider />
      <h3>Inputs </h3>
      <Form layout='vertical' scrollToFirstError form={form}>
        <Form.Item name={'CurrencyInput'} label={t('CurrencyInput')} style={{ width: '300px' }}>
          <CurrencyInput placeholder={t('placeholder')} addonBefore='USD' />
        </Form.Item>
        <Form.Item name='phoneNumber' label={t('PhoneNumber')} style={{ width: '300px' }}>
          <PhoneInput placeholder={t('placeholder')} />
        </Form.Item>
      </Form>
      <Divider />
      <h3>Calendar </h3>
      <AntCalendar />
      <Divider />
      <h3>Table </h3>
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
      <Divider />
      <h3>Loader </h3>
      <Loader></Loader>
      <Divider />
    </div>
  );
}
