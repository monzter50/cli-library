import { packageJsontailwindCss } from '../packages-json.js';
import { htmlTailwindCss } from '../html.js';
import { tailwindCss,tailwindConfig } from '../css.js';
import { gitignoreContent } from '../gitignore.js';
export const htmlProjectStructure = (name, description) => ({
    'js': {
        'components': {
            'Header.js': '',
            'Footer.js': '',
            'Sidebar.js': ''
        },
        'utils': {
            'helpers.js': '',
            'constants.js': ''
        },
        'index.js': ''
    },
    'css': {
        'main.css': tailwindCss.trim()
    },
    'tailwind.config.js': tailwindConfig.trim(),
    'index.html': htmlTailwindCss(name).trim(),
    '.gitignore': gitignoreContent.trim(),
    'README.md': '# Project Documentation',
    'package.json': JSON.stringify(packageJsontailwindCss(name,description), null, 2)
});
