/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import type { LoadContext, Plugin, OptionValidationContext, ThemeConfig, ThemeConfigValidationContext } from '@docusaurus/types';
import type { PluginOptions, Options } from './options';
export default function pluginGoogleAnalytics(context: LoadContext, options: PluginOptions): Plugin;
export declare function validateOptions({ validate, options, }: OptionValidationContext<Options, PluginOptions>): PluginOptions;
export declare function validateThemeConfig({ themeConfig, }: ThemeConfigValidationContext<ThemeConfig>): ThemeConfig;
export type { PluginOptions, Options };
