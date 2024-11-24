import webpack from 'webpack';
import { buildPlugins } from './buildPlugins';
import { buildLoaders } from './buildLoaders';
import { buildResolvers } from './buildResolvers';
import { buildDevServer } from './buildDevServer';
import type { IBuildOptions } from './types/config';

export const buildWebpackConfig = (options: IBuildOptions): webpack.Configuration => {
  const { mode, paths, isDev } = options;

  return {
    mode: mode,
    entry: paths.entry,
    output: {
      filename: '[name].[contenthash].js',
      path: paths.build,
      clean: true,
    },
    plugins: buildPlugins({ htmlPath: paths.html }),
    module: {
      // Конфигурация loader'ов.
      // Обработка не js/ts файлов (картинки, стили и пр.)
      rules: buildLoaders(options),
    },
    // Можно не указывать их расширения при импорте
    resolve: buildResolvers(options),
    devtool: isDev ? 'inline-source-map' : undefined,
    devServer: isDev ? buildDevServer(options) : undefined,
  };
};
