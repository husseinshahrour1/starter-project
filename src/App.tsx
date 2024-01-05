import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import i18n from 'i18next';
import { useTranslation, initReactI18next } from 'react-i18next';
import enTranslation from './locales/en.json';
import arTranslation from './locales/ar.json';
import { ConfigProvider } from 'antd';
import arEG from 'antd/lib/locale/ar_EG';
import 'styles/main.scss';
import { router } from 'routes/router';
import { RouterProvider } from 'react-router-dom';
const queryClient = new QueryClient();

i18n.use(initReactI18next).init({
  resources: {
    en: { translation: enTranslation },
    ar: { translation: arTranslation },
  },
  lng: 'en', // default language
  fallbackLng: 'en', // fallback language
  interpolation: {
    escapeValue: false,
  },
});

function App() {
  const { i18n } = useTranslation();

  return (
    <QueryClientProvider client={queryClient}>
      <ConfigProvider
        direction={i18n.language === 'ar' ? 'rtl' : 'ltr'}
        locale={i18n.language === 'ar' ? arEG : undefined}
      >
        <RouterProvider router={router} />
      </ConfigProvider>
    </QueryClientProvider>
  );
}

export default App;
