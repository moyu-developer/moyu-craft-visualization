import { createStyles } from '@mantine/core';

export default createStyles((theme) => ({
  layout: {
    display: 'flex',
    justifyContent: 'flex-start',
    height: '100vh',
    width: '100%',
    overflow: 'auto'
  },
  outlet: {
    flex: '1',
    height: '100%',
    padding: theme.spacing.xs
  }
}));