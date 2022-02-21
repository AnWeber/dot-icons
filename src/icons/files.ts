import { FileIcon } from "../types";

export const files: Array<FileIcon> = [
  {
    name: "default file",
    fileName: "document",
    file: true,
  },
  {
    name: "typescript",
    fileName: "document_dot",
    dark: {
      color: "#42A5F5",
      color2: "#90CAF9",
    },
    fileExtensions: ["ts", "tsx"],
    languageIds: ["typescript", "typescriptreact"],
  },
  {
    name: "javascript",
    fileName: "document_dot",
    dark: {
      color: "#EF5350",
      color2: "#EF9A9A",
    },
    fileExtensions: ["js", "ejs", "mjs", "jsx", "esx", "coffee", "dart"],
    languageIds: ["javascript", "javascriptreact", "coffeescript"],
  },
  {
    name: "json",
    fileName: "document_dot",
    dark: {
      color: "#26A69A",
      color2: "#80CBC4",
    },
    fileExtensions: [
      "json",
      "graphql",
      "yml",
      "yaml",
      "properties",
      "ini",
      "prop",
      "props",
    ],
    fileNames: [
      ".graphqlconfig",
      ".graphqlrc",
      ".graphqlrc.json",
      ".graphqlrc.js",
      ".graphqlrc.ts",
      ".graphqlrc.toml",
      ".graphqlrc.yaml",
      ".graphqlrc.yml",
      "graphql.config.json",
      "graphql.config.js",
      "graphql.config.ts",
      "graphql.config.toml",
      "graphql.config.yaml",
      "graphql.config.yml",
    ],
    languageIds: ["yaml", "json", "jsonc", "json5", "proto"],
  },
  {
    name: "css",
    fileName: "document_dot",
    dark: {
      color: "#FFA726",
      color2: "#FFCC80",
    },
    fileExtensions: ["css", "sass", "less", "scss"],
    fileNames: ["dockerfile"],
    languageIds: ["sass", "scss", "less", "css", "postcss"],
  },
  {
    name: "xml",
    fileName: "document_dot",
    dark: {
      color: "#66BB6A",
      color2: "#A5D6A7",
    },
    fileExtensions: [
      "vue",
      "jsp",
      "xml",
      "xquery",
      "dtd",
      "xsd",
      "iml",
      "vsixmanifest",
      "html",
      "htm",
      "asp",
      "aspx",
      "php",
      "pug",
    ],
    fileNames: [".htaccess"],
    languageIds: [
      "xml",
      "xquery",
      "xsl",
      "handlebars",
      "pug",
      "php",
      "html",
      "viml",
      "sml",
      "vue",
      "vue-postcss",
      "vue-html",
      "jade",
    ],
  },
  {
    name: "images",
    fileName: "document_dot",
    dark: {
      color: "#FFCA28",
      color2: "#FFE082",
    },
    fileExtensions: [
      "jpg",
      "png",
      "svg",
      "gif",
      "ico",
      "jpeg",
      "tif",
      "tiff",
      "ami",
      "apx",
      "bmp",
      "bpg",
      "brk",
      "dds",
      "dng",
      "eps",
      "exr",
      "fpx",
      "gbr",
      "img",
      "jbig2",
      "jb2",
      "jng",
      "jxr",
      "pbm",
      "pgf",
      "pic",
      "raw",
      "webp",
      "psd",
      "psb",
    ],
  },
  {
    name: "java",
    fileName: "document_dot",
    dark: {
      color: "#FFA726",
      color2: "#FFCC80",
    },
    fileExtensions: [
      "java",
      "jar",
      "py",
      "pm",
      "raku",
      "hx",
      "hs",
      "kt",
      "kts",
    ],
    languageIds: ["java", "hack", "perl", "python"],
  },
  {
    name: "c#",
    fileName: "document_dot",
    dark: {
      color: "#42A5F5",
      color2: "#90CAF9",
    },
    fileExtensions: [
      "cs",
      "cpp",
      "c",
      "cxx",
      "csx",
      "cc",
      "h",
      "hpp",
      "pas",
      "asm",
      "s",
      "vb",
      "vba",
      "vbs",
      "go",
      "fs",
      "fsx",
      "fsi",
      "fsproj",
      "rs",
    ],
    languageIds: [
      "c",
      "objective-c",
      "objective-cpp",
      "go",
      "csharp",
      "fsharp",
      "rust",
    ],
  },
  {
    name: "environment",
    fileName: "document_dot",
    dark: {
      color: "#26A69A",
      color2: "#80CBC4",
    },
    fileExtensions: ['env'],
    fileNames: [
      ".env",
      ".environment",
      ".env.local",
      ".env.dev",
      ".env.test",
      ".env.stage",
      ".env.prod",
    ],
  },
  {
    name: "application",
    fileName: "document_dot",
    dark: {
      color: "#BDBDBD",
      color2: "#E0E0E0",
    },
    fileExtensions: ["exe", "bash", "sh", "bat", "zsh", "cmd", "ps1"],
    fileNames: ["pre-commit", "pre-push", "post-merge"],
    languageIds: ["bat", "awk", "shellscript", "powershell"],
  },
  {
    name: "http",
    fileName: "document_dot",
    dark: {
      color: "#8D6E63",
      color2: "#BCAAA4",
    },
    fileExtensions: ["http", "rest"],
  },
  {
    name: "build files",
    fileName: "document_dot",
    dark: {
      color: "#EC407A",
      color2: "#F48FB1",
    },
    fileExtensions: ["make", "mk", "cmake", "gradle", "toml"],
    fileNames: [
      ".angular-cli.json",
      ".babel-plugin-macrosrc.js",
      ".babel-plugin-macrosrc.json",
      ".babel-plugin-macrosrc.yaml",
      ".babel-plugin-macrosrc.yml",
      ".babel-plugin-macrosrc",
      ".babelrc.cjs",
      ".babelrc.js",
      ".babelrc.json",
      ".babelrc.mjs",
      ".babelrc",
      ".browserslistrc",
      ".eslintcache",
      ".eslintrc-jsdoc.js",
      ".eslintrc-md.js",
      ".eslintrc.cjs",
      ".eslintrc.js",
      ".eslintrc.json",
      ".eslintrc.yaml",
      ".eslintrc.yml",
      ".eslintrc",
      ".jestrc.js",
      ".jestrc.json",
      ".jestrc",
      ".mocharc.js",
      ".mocharc.json",
      ".mocharc.jsonc",
      ".mocharc.yaml",
      ".mocharc.yml",
      ".postcssrc.js",
      ".postcssrc.json",
      ".postcssrc.yml",
      ".postcssrc",
      ".prettierignore",
      ".prettierrc.cjs",
      ".prettierrc.js",
      ".prettierrc.json",
      ".prettierrc.json5",
      ".prettierrc.toml",
      ".prettierrc.yaml",
      ".prettierrc.yml",
      ".prettierrc",
      ".renovaterc.json",
      ".renovaterc",
      ".stylelintignore",
      ".stylelintrc.cjs",
      ".stylelintrc.js",
      ".stylelintrc.json",
      ".stylelintrc.yaml",
      ".stylelintrc.yml",
      ".stylelintrc",
      "angular-cli.json",
      "angular.json",
      "apollo.config.js",
      "babel-plugin-macros.config.js",
      "babel-transform.js",
      "babel.config.cjs",
      "babel.config.js",
      "babel.config.json",
      "babel.config.mjs",
      "browserslist",
      "build.gradle",
      "docker-compose.alpha.yaml",
      "docker-compose.alpha.yml",
      "docker-compose.beta.yaml",
      "docker-compose.beta.yml",
      "docker-compose.ci.yaml",
      "docker-compose.ci.yml",
      "docker-compose.dev.yaml",
      "docker-compose.dev.yml",
      "docker-compose.development.yaml",
      "docker-compose.development.yml",
      "docker-compose.local.yaml",
      "docker-compose.local.yml",
      "docker-compose.override.yaml",
      "docker-compose.override.yml",
      "docker-compose.prod.yaml",
      "docker-compose.prod.yml",
      "docker-compose.production.yaml",
      "docker-compose.production.yml",
      "docker-compose.stage.yaml",
      "docker-compose.stage.yml",
      "docker-compose.staging.yaml",
      "docker-compose.staging.yml",
      "docker-compose.test.yaml",
      "docker-compose.test.yml",
      "docker-compose.testing.yaml",
      "docker-compose.testing.yml",
      "docker-compose.web.yaml",
      "docker-compose.web.yml",
      "docker-compose.worker.yaml",
      "docker-compose.worker.yml",
      "docker-compose.yaml",
      "docker-compose.yml",
      "dockerfile.alpha",
      "dockerfile.beta",
      "dockerfile.ci",
      "dockerfile.dev",
      "dockerfile.development",
      "dockerfile.local",
      "dockerfile.prod",
      "dockerfile.production",
      "dockerfile.stage",
      "dockerfile.staging",
      "dockerfile.test",
      "dockerfile.testing",
      "dockerfile.web",
      "dockerfile.worker",
      "dockerfile",
      "gatsby-browser.js",
      "gatsby-config.js",
      "gatsby-node.js",
      "gatsby-ssr.js",
      "gatsby.config.js",
      "gradle-wrapper.properties",
      "gradle.properties",
      "gruntfile.babel.coffee",
      "gruntfile.babel.js",
      "gruntfile.babel.ts",
      "gruntfile.coffee",
      "gruntfile.js",
      "gruntfile.ts",
      "gulpfile.babel.js",
      "gulpfile.js",
      "gulpfile.mjs",
      "gulpfile.ts",
      "jenkinsfile",
      "jest-e2e.config.cjs",
      "jest-e2e.config.js",
      "jest-e2e.config.json",
      "jest-e2e.config.mjs",
      "jest-e2e.config.ts",
      "jest-e2e.json",
      "jest-github-actions-reporter.js",
      "jest-unit.config.js",
      "jest.config.cjs",
      "jest.config.js",
      "jest.config.json",
      "jest.config.mjs",
      "jest.config.ts",
      "jest.e2e.config.cjs",
      "jest.e2e.config.js",
      "jest.e2e.config.json",
      "jest.e2e.config.mjs",
      "jest.e2e.config.ts",
      "jest.e2e.json",
      "jest.json",
      "jest.setup.js",
      "jest.setup.ts",
      "jest.teardown.js",
      "karma-main.js",
      "karma-main.ts",
      "karma.conf.coffee",
      "karma.conf.js",
      "karma.conf.ts",
      "karma.config.js",
      "karma.config.ts",
      "mocha.opts",
      "netlify.json",
      "netlify.toml",
      "netlify.yaml",
      "netlify.yml",
      "nodemon-debug.json",
      "nodemon.json",
      "nuxt.config.js",
      "nuxt.config.ts",
      "package.json",
      "pom.xml",
      "postcss.config.cjs",
      "postcss.config.js",
      "prettier.config.cjs",
      "prettier.config.js",
      "protractor.conf.coffee",
      "protractor.conf.js",
      "protractor.conf.ts",
      "protractor.config.js",
      "protractor.config.ts",
      "renovate-config.json",
      "renovate.json",
      "renovate.json5",
      "rollup-config.js",
      "rollup-config.ts",
      "rollup.config.base.js",
      "rollup.config.base.ts",
      "rollup.config.common.js",
      "rollup.config.common.ts",
      "rollup.config.dev.js",
      "rollup.config.dev.ts",
      "rollup.config.js",
      "rollup.config.prod.js",
      "rollup.config.prod.ts",
      "rollup.config.prod.vendor.js",
      "rollup.config.prod.vendor.ts",
      "rollup.config.ts",
      "stories.js",
      "stories.jsx",
      "stories.mdx",
      "stories.svelte",
      "stories.ts",
      "stories.tsx",
      "story.js",
      "story.jsx",
      "story.mdx",
      "story.ts",
      "story.tsx",
      "stylelint.config.cjs",
      "stylelint.config.js",
      "tailwind.config.cjs",
      "tailwind.config.js",
      "tailwind.config.ts",
      "tailwind.js",
      "tailwind.ts",
      "tsconfig-base.json",
      "tsconfig.base.json",
      "tsconfig-build.json",
      "tsconfig.build.json",
      "tsconfig-test.json",
      "tsconfig.test.json",
      "tsconfig.json",
      "vercel.json",
      "vetur.config.js",
      "vetur.config.ts",
      "vue.config.js",
      "vue.config.ts",
      "webpack.base.cjs",
      "webpack.base.js",
      "webpack.base.ts",
      "webpack.cjs",
      "webpack.client.cjs",
      "webpack.client.js",
      "webpack.client.ts",
      "webpack.common.cjs",
      "webpack.common.js",
      "webpack.common.ts",
      "webpack.config.babel.js",
      "webpack.config.babel.ts",
      "webpack.config.base.babel.js",
      "webpack.config.base.babel.ts",
      "webpack.config.base.cjs",
      "webpack.config.base.js",
      "webpack.config.base.ts",
      "webpack.config.cjs",
      "webpack.config.client.cjs",
      "webpack.config.client.js",
      "webpack.config.client.ts",
      "webpack.config.coffee",
      "webpack.config.common.babel.js",
      "webpack.config.common.babel.ts",
      "webpack.config.common.cjs",
      "webpack.config.common.js",
      "webpack.config.common.ts",
      "webpack.config.dev.babel.js",
      "webpack.config.dev.babel.ts",
      "webpack.config.dev.cjs",
      "webpack.config.dev.js",
      "webpack.config.dev.ts",
      "webpack.config.js",
      "webpack.config.prod.babel.cjs",
      "webpack.config.prod.babel.js",
      "webpack.config.prod.babel.ts",
      "webpack.config.prod.cjs",
      "webpack.config.prod.js",
      "webpack.config.prod.ts",
      "webpack.config.production.babel.js",
      "webpack.config.production.babel.ts",
      "webpack.config.production.cjs",
      "webpack.config.production.js",
      "webpack.config.production.ts",
      "webpack.config.server.cjs",
      "webpack.config.server.js",
      "webpack.config.server.ts",
      "webpack.config.staging.babel.js",
      "webpack.config.staging.babel.ts",
      "webpack.config.staging.cjs",
      "webpack.config.staging.js",
      "webpack.config.staging.ts",
      "webpack.config.test.cjs",
      "webpack.config.test.js",
      "webpack.config.test.ts",
      "webpack.config.ts",
      "webpack.config.vendor.cjs",
      "webpack.config.vendor.js",
      "webpack.config.vendor.production.cjs",
      "webpack.config.vendor.production.js",
      "webpack.config.vendor.production.ts",
      "webpack.config.vendor.ts",
      "webpack.dev.cjs",
      "webpack.dev.js",
      "webpack.dev.ts",
      "webpack.development.cjs",
      "webpack.development.js",
      "webpack.development.ts",
      "webpack.dist.cjs",
      "webpack.dist.js",
      "webpack.dist.ts",
      "webpack.js",
      "webpack.mix.cjs",
      "webpack.mix.js",
      "webpack.prod.cjs",
      "webpack.prod.config.cjs",
      "webpack.prod.config.js",
      "webpack.prod.js",
      "webpack.prod.ts",
      "webpack.production.cjs",
      "webpack.production.js",
      "webpack.production.ts",
      "webpack.server.cjs",
      "webpack.server.js",
      "webpack.server.ts",
      "webpack.test.cjs",
      "webpack.test.js",
      "webpack.test.ts",
      "webpack.ts",
      "webpackfile.cjs",
      "webpackfile.js",
      "webpackfile.ts",
    ],
    languageIds: ["toml", "makefile", "groovy"],
  },
  {
    name: "meta files",
    fileName: "document_dot",
    dark: {
      color: "#7E57C2",
      color2: "#B39DDB",
    },
    fileExtensions: ['md', 'txt', 'doc', 'docx'],
    fileNames: [
      'contributing.md',
      'CONTRIBUTING.md',
      'copying.md',
      'copying.txt',
      'copying',
      'copyright.md',
      'copyright.txt',
      'copyright',
      'licence.md',
      'licence.txt',
      'licence',
      'license.md',
      'license.txt',
      'license',
      'LICENSE',
      "changelog.md",
      "CHANGELOG.md",
      "readme.md",
      "README.md",
      "security.md",
      "SECURITY.md",
    ],
  },
  {
    name: "hidden files",
    fileName: "document_dot",
    dark: {
      color: "#BDBDBD",
      color2: "#E0E0E0",
    },
    fileExtensions: ["lock"],
    fileNames: [
      ".dockerignore",
      ".eslintignore",
      ".gitattributes",
      ".gitconfig",
      ".gitignore_global",
      ".gitignore",
      ".gitinclude",
      ".gitkeep",
      ".gitmodules",
      ".huskyrc.js",
      ".huskyrc.json",
      ".huskyrc.yaml",
      ".huskyrc.yml",
      ".huskyrc",
      ".jshintignore",
      ".npmignore",
      ".vscodeignore",
      "git-history",
      "husky.config.js",
      "package-lock.json",
      "yarn.lock",
    ],
    languageIds: ["git", "git-commit", "git-rebase", "ignore"],
  },
];