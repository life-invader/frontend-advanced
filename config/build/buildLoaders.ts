import webpack from 'webpack';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import type { IBuildOptions } from './types/config';

export const buildLoaders = (options: IBuildOptions): webpack.RuleSetRule[] => {
  const { isDev } = options;

  const tsLoader = {
    test: /\.tsx?$/,
    use: 'ts-loader',
    exclude: /node_modules/,
  };

  const styleLoader = {
    test: /\.s[ac]ss$/i,
    use: [
      isDev ? 'style-loader' : MiniCssExtractPlugin.loader,
      {
        loader: 'css-loader',
        options: {
          modules: {
            auto: (resourcePath: string, _resourceQuery: string, _resourceFragment: string) => {
              return resourcePath.includes('.module.scss');
            },
            localIdentName: isDev ? '[local]::module-[hash:base64]' : '[hash:base64]',
          },
        },
      },
      'sass-loader',
    ],
  };

  return [tsLoader, styleLoader];
};
