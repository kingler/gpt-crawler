import { Config } from "./src/config";

export const defaultConfig: Config = {
  url: "https://platform.openai.com/docs/guides/prompt-engineering",
  match: "https://platform.openai.com/docs/guides/prompt-engineering/**",
  maxPagesToCrawl: 200,
  outputFileName: "output.json",
};
