import { Select } from 'antd';
import { useTranslation } from 'react-i18next';

const { Option } = Select;

function LanguageSwitcher() {
  const { i18n } = useTranslation();

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  const handleLanguageChange = (value: string) => {
    changeLanguage(value);
  };

  return (
    <Select defaultValue='en' style={{ margin: 15 }} onChange={handleLanguageChange}>
      <Option value='en'>English</Option>
      <Option value='ar'>Arabic</Option>
    </Select>
  );
}

export default LanguageSwitcher;
