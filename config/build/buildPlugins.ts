import webpack from 'webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';

export const buildPlugins = ({
  htmlPath,
}: {
  htmlPath: string;
}): webpack.WebpackPluginInstance[] => {
  return [
    new HtmlWebpackPlugin({
      title: 'Ulbi.tv',
      template: htmlPath,
    }),
    new webpack.ProgressPlugin(),
    new MiniCssExtractPlugin({ 
      filename: 'style/[name].css',
      chunkFilename: 'style/[name].[contenthash:8].css',
     }),
  ];
};
