import React, { useState } from 'react';
import { Modal, Form, Select, Input, Checkbox, DatePicker, InputNumber, Flex } from 'antd';

const { Option } = Select;

interface CustomRecurrencePopupProps {
  visible: boolean;
  onCancel: () => void;
  onOk: any;
}

interface CustomRecurrenceData {
  repeatEvery: number;
  repeatOn: string;
  ends: 'never' | 'afterOccurrences' | 'endDate';
  occurrences?: number;
  endDate?: string;
}

const CustomRecurrencePopup: React.FC<CustomRecurrencePopupProps> = ({
  visible,
  onCancel,
  onOk,
}) => {
  const [form] = Form.useForm();
  const [ends, setEnds] = useState('never');

  const handleCustomRecurrenceOk = () => {
    form.validateFields().then((values) => {
      onOk(values as CustomRecurrenceData);
      form.resetFields();
    });
  };

  const handleEndsChange = (endsValue: 'never' | 'afterOccurrences' | 'endDate') => {
    setEnds(endsValue);
  };

  return (
    <Modal
      title='Custom Recurrence'
      open={visible}
      onOk={handleCustomRecurrenceOk}
      onCancel={onCancel}
      destroyOnClose
    >
      <Form form={form} layout='vertical' scrollToFirstError initialValues={{ ends: 'never' }}>
        <Flex gap='middle'>
          <label> Repeat Every</label>
          <Form.Item
            labelAlign={'left'}
            name='repeatEvery'
            rules={[{ required: true, message: 'Please enter the repeat every value!' }]}
          >
            <InputNumber min={1} />
          </Form.Item>
          <Form.Item name='repeatEvery1' className='w-50'>
            <Select className='w-100'>
              <Option value='day'>Day</Option>
              <Option value='week'>Week</Option>
              <Option value='month'>Month</Option>
              <Option value='year'>Year</Option>
            </Select>
          </Form.Item>
        </Flex>
        <Form.Item label='Repeat On' name='repeatOn'>
          <Checkbox.Group>
            <Checkbox value='sunday'>S</Checkbox>
            <Checkbox value='monday'>M</Checkbox>
            <Checkbox value='tuesday'>T</Checkbox>
            <Checkbox value='wednesday'>W</Checkbox>
            <Checkbox value='thursday'>T</Checkbox>
            <Checkbox value='friday'>F</Checkbox>
            <Checkbox value='saturday'>S</Checkbox>
          </Checkbox.Group>
        </Form.Item>
        <Form.Item label='Ends' name='ends'>
          <Select onChange={handleEndsChange}>
            <Option value='never'>Never</Option>
            <Option value='afterOccurrences'>After occurrences</Option>
            <Option value='endDate'>On a specific date</Option>
          </Select>
        </Form.Item>
        {ends === 'afterOccurrences' && (
          <Form.Item
            label='Occurrences'
            name='occurrences'
            rules={[{ required: true, message: 'Please enter the number of occurrences!' }]}
          >
            <Input type='number' min={1} />
          </Form.Item>
        )}
        {ends === 'endDate' && (
          <Form.Item
            label='End Date'
            name='endDate'
            rules={[{ required: true, message: 'Please select the end date!' }]}
          >
            <DatePicker />
          </Form.Item>
        )}
      </Form>
    </Modal>
  );
};

export default CustomRecurrencePopup;
