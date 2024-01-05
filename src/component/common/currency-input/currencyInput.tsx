import { InputNumber } from 'antd';
import { SizeType } from 'antd/es/config-provider/SizeContext';

interface CurrencyInputProps {
  onChange?: (value: string | number | null) => void;
  onBlur?: () => void;
  value?: string | number;
  disabled?: boolean;
  size?: SizeType;
  allowNegative?: boolean;
  id?: string;
  placeholder?: string;
  addonBefore?: string;
  defaultValue?: number;
}

export default function CurrencyInput({
  onChange,
  value,
  disabled,
  size,
  id,
  addonBefore,
  placeholder,
  defaultValue,
  onBlur,
  allowNegative = false,
}: CurrencyInputProps) {
  return (
    <>
      <InputNumber
        size={size}
        id={id}
        defaultValue={defaultValue}
        className={`w-100 `}
        addonBefore={addonBefore}
        disabled={disabled}
        placeholder={placeholder}
        formatter={(value) => `${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
        parser={(value) => (value ? value.replace(/\$\s?|(,*)/g, '') : '')}
        onChange={onChange}
        onBlur={onBlur}
        precision={2}
        value={value}
        autoFocus
        controls={false}
        min={allowNegative ? undefined : 0}
        onKeyDown={(e) => {
          const re = allowNegative ? /[0-9A-F:h.t-]+/g : /[0-9A-F:h.t]+/g;
          if (
            !(
              (e.ctrlKey && e.key === 'c') ||
              (e.ctrlKey && e.key === 'v') ||
              (e.ctrlKey && e.key === 'x') ||
              re.test(e.key) ||
              e.key === 'Tab'
            )
          ) {
            e.preventDefault();
          }
        }}
      />
    </>
  );
}
