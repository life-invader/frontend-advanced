import path from 'path';
import webpack from 'webpack';
import { IBuildOptions } from './types/config';

export const buildResolvers = (options: IBuildOptions): webpack.ResolveOptions => {
  return {
    extensions: ['.tsx', '.ts', '.js'],
    preferAbsolute: true,
    mainFiles: ['index'],
    alias: {
      '@app': path.resolve(__dirname, 'src/utilities/'),
    },
    modules: [options.paths.src, 'node_modules'],
  };
};
