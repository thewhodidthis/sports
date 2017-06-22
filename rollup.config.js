import babel from 'rollup-plugin-babel';

export default {
  entry: 'index.es',
  plugins: [
    babel(),
  ],
  targets: [
    {
      format: 'iife',
      moduleName: 'sports',
      dest: 'dist/sports.js',
    },
    {
      format: 'cjs',
      dest: 'index.js',
    }
  ]
};
