export interface ProjectStructure {
    js?: {
        components: Record<string, string>;
        utils: Record<string, string>;
        "index.js": string;
    };
    css?: {
        "main.css": string;
    };
    html?: {
        "index.html": string;
    };
    ".gitignore": string;
    "README.md"?: string;
    "tailwind.config.js"?: string;
    "package.json": string;
}
