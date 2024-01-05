import React from 'react';
import { InputNumber } from 'antd';

interface PhoneNumberProps {
  onChange?: (value: string | number | null) => void;
  value?: string | number;
  disabled?: boolean;
  allowNegative?: boolean;
  id?: string;
  placeholder?: string;
  addonBefore?: string;
}

const PhoneInput = ({ onChange, value, disabled, placeholder }: PhoneNumberProps) => {
  const formatPhoneNumber = (value: string | number | undefined): string => {
    if (typeof value === 'string') {
      const phoneNumber = value.replace(/\D/g, '');

      if (phoneNumber.length <= 3) {
        return phoneNumber;
      } else if (phoneNumber.length <= 7) {
        return `(${phoneNumber.slice(0, 3)}) ${phoneNumber.slice(3)}`;
      } else {
        return `(${phoneNumber.slice(0, 3)}) ${phoneNumber.slice(3, 6)}-${phoneNumber.slice(
          6,
          10,
        )}`;
      }
    }

    return ''; // Handle undefined or non-string cases
  };

  const parsePhoneNumber = (value: string | undefined): string | number => {
    if (typeof value === 'string') {
      // Remove all non-numeric characters
      return value.replace(/\D/g, '');
    }

    return ''; // Handle undefined or non-string cases
  };
  return (
    <InputNumber
      // You can set your initial phone number here
      formatter={formatPhoneNumber}
      parser={parsePhoneNumber}
      onChange={onChange}
      className={`w-100 `}
      disabled={disabled}
      placeholder={placeholder}
      value={value}
    />
  );
};

export default PhoneInput;
