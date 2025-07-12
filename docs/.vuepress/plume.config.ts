import { defineThemeConfig } from "vuepress-theme-plume";
import { navbar } from "./config/navbar";
import { notes } from "./config/notes";

/**
 * @see https://theme-plume.vuejs.press/config/basic/
 */
export default defineThemeConfig({
  logo: "",
  // docsRepo: 'https://github.com/PinkDopeyBug',
  // docsDir: 'docs',
  appearance: true,
  profile: {
    avatar: "/images/avatar.jpg",
    name: "PinkDopeyBug",
    description: "",
    circle: true,
    // location: '',
    // organization: '',
  },
  navbar,
  notes,
  social: [{ icon: "github", link: "https://github.com/PinkDopeyBug" }],
  footer: {
    message:
      '🥼 <a target="_blank" href="https://theme-plume.vuejs.press/">vuepress-theme-plume</a> & ✒️ PinkDopeyBug',
  },
});
