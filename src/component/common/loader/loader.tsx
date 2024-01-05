import { Spin } from 'antd';
import React from 'react';
type Props = {
  children?: JSX.Element;
  className?: string;
  loading?: boolean;
  loadingText?: boolean;
};
export default function Loader({ children, loading, className, loadingText }: Props) {
  return (
    <Spin spinning={loading} tip={loadingText && 'Loading'} className={className}>
      {children}
    </Spin>
  );
}
