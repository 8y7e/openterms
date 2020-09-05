export const when = (condition, value) => (condition ? value : '');

export const validate = (schema, options) => Object.keys(schema).reduce((acc, key) => {
  const type = schema[key];
  const value = options[key];
  if (typeof type !== 'string') return [...acc, ...validate(type, value)];
  if (typeof value !== type) return [...acc, key];
  return acc;
}, []);

export const run = (generator, schema, options) => {
  const errors = validate(schema, options);
  if (!errors.length) return generator(options);
  throw new Error(`Following options are invalid or missing: ${errors.join(', ')}`);
};
