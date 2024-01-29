import React from 'react';
import { DatePicker, Form, Input, Modal, Select } from 'antd';
// import { useTranslation } from 'react-i18next';

interface Props {
  setIsModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
  isModalOpen: boolean;
}
const EventModal = (props: Props) => {
  const [form] = Form.useForm();

  //   const { t } = useTranslation();

  const { setIsModalOpen, isModalOpen } = props;
  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <Modal
        title={<h3>Event title</h3>}
        centered
        open={isModalOpen}
        onOk={handleOk}
        width={'25vw'}
        onCancel={handleCancel}
      >
        <Form layout='vertical' scrollToFirstError form={form}>
          <Form.Item name={'text'}>
            <Input type='text' placeholder='Enter event name' />
          </Form.Item>
          <Form.Item name={'datePicker'}>
            <DatePicker className='w-100' />
          </Form.Item>
          <Form.Item name={'dateRange'}>
            <DatePicker.RangePicker className='w-100' />
          </Form.Item>
          <Form.Item name={'select'}>
            <Select
              defaultValue='lucy'
              options={[
                { value: 'jack', label: 'Jack' },
                { value: 'lucy', label: 'Lucy' },
                { value: 'Yiminghe', label: 'yiminghe' },
                { value: 'disabled', label: 'Disabled', disabled: true },
              ]}
            />
          </Form.Item>
          <Form.Item name={'textArea'}>
            <Input.TextArea rows={4} placeholder='Enter text here' />
          </Form.Item>
        </Form>
      </Modal>
    </>
  );
};

export default EventModal;
