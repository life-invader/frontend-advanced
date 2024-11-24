export type BuildModeType = 'none' | 'development' | 'production';

export type BuildPathsType = {
  entry: string;
  build: string;
  html: string;
  src: string;
};

export interface IEnvVars {
  mode: BuildModeType;
  port: number;
}

export interface IBuildOptions {
  mode: BuildModeType;
  paths: BuildPathsType;
  isDev: boolean;
  port: number;
}
