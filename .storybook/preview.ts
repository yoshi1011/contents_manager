import { setup, type Preview } from "@storybook/vue3";
import { registerPlugins } from "../app/typescript/plugins";
import { withVuetifyTheme } from "./withVuetifyTheme.decorator.ts";

setup((app) => {
  registerPlugins(app);
})

const preview: Preview = {
  parameters: {
    actions: {argTypesRegex: "^on[A-Z].*"},
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export default preview;
export const decorators = [withVuetifyTheme]
