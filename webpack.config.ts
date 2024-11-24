import webpack from 'webpack';
import path from 'path';
import { buildWebpackConfig } from './config/build/buildWbpackConfig';
import type { BuildPathsType, BuildModeType, IEnvVars } from './config/build/types/config';

const paths: BuildPathsType = {
  build: path.resolve(__dirname, 'build'),
  entry: path.resolve(__dirname, 'src', 'index.tsx'),
  html: path.resolve(__dirname, 'public', 'index.html'),
  src: path.resolve(__dirname, 'src'),
};

const getConfig = (env: IEnvVars) => {
  const mode: BuildModeType = (env.mode as BuildModeType) || 'development';
  const isDev = mode === 'development';
  const PORT = Number(env.port) || 3000;

  const config: webpack.Configuration = buildWebpackConfig({
    mode,
    paths,
    isDev,
    port: PORT,
  });

  return config;
};

export default getConfig;
