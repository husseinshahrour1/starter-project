import React, { useState } from 'react';
import { Modal, Button, Form, Input, DatePicker, Select } from 'antd';
import CustomRecurrencePopup from './CustomRecurrencePopup';

const { Option } = Select;
interface Props {
  setIsModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
  isModalOpen: boolean;
}
const CalendarEventPopup = (props: Props) => {
  const { setIsModalOpen, isModalOpen } = props;

  const [customRecurrenceVisible, setCustomRecurrenceVisible] = useState(false);

  const handleCreateEvent = () => {
    // For simplicity, log the event details for now

    handleCancel();
  };

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const showCustomRecurrencePopup = () => {
    setCustomRecurrenceVisible(true);
  };

  const handleCustomRecurrenceCancel = () => {
    setCustomRecurrenceVisible(false);
  };

  const handleCustomRecurrenceOk = (customRecurrence: string) => {
    // Handle custom recurrence logic
    console.log('Custom Recurrence Pattern:', customRecurrence);
    setCustomRecurrenceVisible(false);
  };

  const [form] = Form.useForm();
  const handleRepeatDropdownVisibleChange = (open: boolean) => {
    if (open && form.getFieldValue('repeat') === 'custom') {
      showCustomRecurrencePopup();
    }
  };
  return (
    <>
      <Button type='primary' onClick={showModal}>
        Create Event
      </Button>
      <Modal
        title='Create Calendar Event'
        open={isModalOpen}
        centered
        onOk={handleCreateEvent}
        onCancel={handleCancel}
      >
        <Form layout='vertical' scrollToFirstError form={form}>
          {/* Add form fields for event details, e.g., title, description, date, etc. */}
          <Form.Item
            label='Event Title'
            name='title'
            rules={[{ required: true, message: 'Please enter the event title!' }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label='Event Date'
            name='date'
            rules={[{ required: true, message: 'Please select the event date!' }]}
          >
            <DatePicker showTime className='w-100' />
          </Form.Item>
          <Form.Item label='Repeat' name='repeat' initialValue='none'>
            <Select onSelect={handleRepeatDropdownVisibleChange}>
              <Option value='none'>None</Option>
              <Option value='daily'>Daily</Option>
              <Option value='weekly'>Weekly</Option>
              <Option onClick={showCustomRecurrencePopup} value='custom'>
                Custom
              </Option>
            </Select>
          </Form.Item>
        </Form>
      </Modal>
      <CustomRecurrencePopup
        visible={customRecurrenceVisible}
        onCancel={handleCustomRecurrenceCancel}
        onOk={handleCustomRecurrenceOk}
      />
    </>
  );
};

export default CalendarEventPopup;
