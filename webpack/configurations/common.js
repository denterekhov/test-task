// Core
import getRepositoryName from 'git-repo-name';
import chalk from 'chalk';

// Paths
import { source, build } from '../paths';

// Webpack modules
import {
    loadJavaScript,
    loadFonts,
    loadSvgImages,
    loadImages,
    setupHtml,
    setupContextReplacement,
    setupStyledReporting,
    initializeEnvVariables
} from '../modules';

// Instruments
import merge from 'webpack-merge';

export const generateCommonConfiguration = () => {
    const BUILD_ENV = process.env.BUILD_ENV;
    const IS_DEPLOYING_TO_GITHUB_PAGES = process.env.DEPLOY_TARGET === 'github-pages';
    let REPOSITORY_NAME = '';

    try {
        REPOSITORY_NAME = getRepositoryName.sync();
    } catch (error) {
        console.log(
            chalk.whiteBright.bgRed.bold(error)
        );
    }

    return merge(
        // Loaders
        loadJavaScript(),
        loadFonts(),
        loadSvgImages(),
        loadImages(),

        // Plugins
        setupHtml(),
        setupContextReplacement(),
        setupStyledReporting(),
        initializeEnvVariables({
            __ENV__:  JSON.stringify(BUILD_ENV),
            __DEV__:  BUILD_ENV === 'development',
            __PROD__: BUILD_ENV === 'production',
        }),
        {
            entry: {
                source,
            },
            output: {
                path:       build,
                publicPath: IS_DEPLOYING_TO_GITHUB_PAGES ? `/${REPOSITORY_NAME}/` : '/',
            },
            resolve: {
                extensions: ['.mjs', '.js', '.json', '.css', '.m.css', '.png', '.jpg'],
                modules:    [source, 'node_modules'],
            },
            optimization: {
                nodeEnv: process.env.NODE_ENV,
            },
        }
    );
};
