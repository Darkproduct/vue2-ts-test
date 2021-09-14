const mix = require("laravel-mix");
const path = require("path");

const ResolveTypeScriptPlugin = require("resolve-typescript-plugin").default;
const ESLintPlugin = require("eslint-webpack-plugin");
const ForkTsCheckerWebpackPlugin = require("fork-ts-checker-webpack-plugin");

const Extensions = [".js", ".ts", ".tsx", ".vue"];

mix
  .webpackConfig({
    module: {
      rules: [
        {
          test: /\.tsx?$/,
          loader: "ts-loader",
          options: {
            appendTsSuffixTo: [/\.vue$/],
            transpileOnly: true,
          },
          exclude: /node_modules/,
        },
      ],
    },
    resolve: {
      extensions: Extensions,
      alias: {
        "@": path.resolve(__dirname + "/resources"),
        "@store": path.resolve(__dirname + "/resources/js/store"),
        "@components": path.resolve(__dirname + "/resources/js/components"),
      },
      fullySpecified: false,
      plugins: [new ResolveTypeScriptPlugin()],
    },
    plugins: [
      new ForkTsCheckerWebpackPlugin({
        typescript: {
          extensions: {
            vue: true,
          },
        },
      }),
      new ESLintPlugin({
        extensions: Extensions,
        fix: false,
        emitError: true,
        emitWarning: true,
        failOnError: true,
      }),
    ],
    devtool: "source-map",
  })
  .sourceMaps();

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */

mix
  .ts("resources/js/app.ts", "public/js")
  .sass("resources/sass/app.sass", "public/css")
  .sourceMaps()
  .vue();

mix.extract();
