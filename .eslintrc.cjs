module.exports = {
    extends: ['@aglaya/eslint-config/library'],
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaVersion: 2020,
        sourceType: 'module',
        project: './tsconfig.json',
        tsconfigRootDir: __dirname,
    },
    env: {
        node: true,
        es2020: true,
    },
    rules: {
        // Add any CLI-specific rules here
    },
    ignorePatterns: ['dist', 'node_modules', '*.js', '*.d.ts'],
};
