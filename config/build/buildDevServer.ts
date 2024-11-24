import path from 'path';
import type { Configuration as DevServerConfiguration } from 'webpack-dev-server';
import type { IBuildOptions } from './types/config';

export const buildDevServer = (options: IBuildOptions): DevServerConfiguration => {
  const { port } = options;

  const devServer: DevServerConfiguration = {
    static: path.resolve(__dirname, 'build'),
    open: true,
    port,
    historyApiFallback: true,
    hot: true,
  };

  return devServer;
};
