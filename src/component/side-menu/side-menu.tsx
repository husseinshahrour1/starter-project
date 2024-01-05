import { Menu } from 'antd';
import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import * as ROUTES from 'routes/routes';
import { UserOutlined } from '@ant-design/icons';
import { useTranslation } from 'react-i18next';
import { MenuProps } from 'antd/lib';

export default function SideMenu() {
  const { t } = useTranslation();
  const location = useLocation();
  const [activeKey, setActiveKey] = useState<string[]>();

  useEffect(() => {
    if (location.pathname) {
      const route = ROUTES.routeKeys.find((route) => route.url === location.pathname);
      if (route) setActiveKey([route.key]);
    }
  }, [location]);

  const items: MenuProps['items'] = [
    {
      key: 'home',
      icon: <UserOutlined />,
      label: <Link to={ROUTES.HOME}> {t('home')}</Link>,
    },
    {
      key: 'materials',
      icon: <UserOutlined />,
      label: <Link to={ROUTES.MATERIALS}> {t('materials')}</Link>,
    },
  ];
  return (
    <div>
      <Menu theme='dark' mode='inline' items={items} selectedKeys={activeKey} />
    </div>
  );
}
