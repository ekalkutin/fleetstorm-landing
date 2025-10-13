import { ThemeConfig, theme as antdTheme } from 'antd';

export const theme: ThemeConfig = {
  token: {
    fontSize: 16,
  },
  components: {
    Layout: {
      headerBg: 'var(--ant-colorBgBase)',
      bodyBg: '#fff',
    },
  },
  algorithm: [antdTheme.defaultAlgorithm],
};
