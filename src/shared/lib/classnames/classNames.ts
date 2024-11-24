type ModifiersType = Record<string, boolean>;

export const classNames = (
  cls: string,
  modifiers: ModifiersType = {},
  additional: string[] = [],
) => {
  return [
    cls,
    Object.entries(modifiers)
      .filter(([_key, value]) => Boolean(value))
      .map(([key]) => `${cls}--${key}`),
    ...additional,
  ].join(' ');
};
