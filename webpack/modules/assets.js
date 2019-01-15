// Paths
import { source, statics } from '../paths';

// Plugins
import FaviconsWebpackPlugin from 'favicons-webpack-plugin';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import HtmlWebpackTemplate from 'html-webpack-template';

export const loadFonts = () => ({
    module: {
        rules: [
            {
                test:    /\.eot|ttf|woff2?(\?v=\d+\.\d+\.\d+)?$/,
                include: source,
                use:     {
                    loader:  'file-loader',
                    options: {
                        name: 'fonts/[name].[hash:5].[ext]',
                    },
                },
            }
        ],
    },
});

export const loadSvgImages = () => ({
    module: {
        rules: [
            {
                test:    /\.svg$/,
                include: source,
                use:  [
                        {
                          loader:  'url-loader',
                          options: {
                              fallback: 'file-loader',
                              limit:    8192,
                              name:     'images/[name].[hash:5].[ext]',
                          },
                        }, 
                        {
                          loader: 'image-webpack-loader',
                          options: {
                              disable: false, 
                          },
                        },
                ]
            }
        ],
    },
});

export const loadImages = () => ({
  module: {
    rules: [
      {
        test: /\.(jpe?g|png)$/i,
        include: source,
        use:  [
                {
                  loader: 'responsive-loader',
                  options: {
                    adapter: require('responsive-loader/sharp'),
                    name: 'images/[name].[hash:5]-[width].[ext]',
                    quality: 75,
                    placeholder: true,
                    placeholderSize: 50
                  }
                },
        ]
      }
    ]
  }
});

export const setupHtml = () => ({
    plugins: [
        new HtmlWebpackPlugin({
            inject:   false,
            template: HtmlWebpackTemplate,
            title:    'abz.agency test task',
            favicon:  `${statics}/favicon/abz-favicon-512x512.png`,
            meta: [
                    {
                      name:     'description',
                      content:  'Test task for abz.agency',
                    },
                    {
                      name:     'viewport',
                      content:  'user-scalable=no, width=device-width, initial-scale=1',
                    }
            ],
            appMountIds: ['app'],
        })
    ],
});
