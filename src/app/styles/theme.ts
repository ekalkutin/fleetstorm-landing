import { ThemeConfig, theme as antdTheme } from 'antd';

export const theme: ThemeConfig = {
  cssVar: true,
  token: {
    colorPrimary: '#73B18A',
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
