/* eslint-disable no-useless-escape */
import { defineConfig, presetAttributify, presetIcons, presetTypography, presetUno } from "unocss";

import presetAutoprefixer from "unocss-preset-autoprefixer";
import transformerDirectives from "@unocss/transformer-directives";
import transformerVariantGroup from "@unocss/transformer-variant-group";

export default defineConfig({
  rules: [
    [/^h-([\.\d]+)$/, ([_, num]) => ({ height: `${num}px` })],
    [/^w-([\.\d]+)$/, ([_, num]) => ({ width: `${num}px` })],
    [/^w-100vw$/, ([_, num]) => ({ width: "100vw" })],
    [/^b-r-([\.\d]+)$/, ([_, num]) => ({ "border-radius": `${num}px` })],
  ],
  transformers: [transformerDirectives(), transformerVariantGroup()],
  presets: [
    presetAttributify(),
    presetIcons({
      autoInstall: true,
    }),
    presetUno(),
    presetTypography(),
    presetAutoprefixer(["defaults", "not IE 11"]),
  ],
});
