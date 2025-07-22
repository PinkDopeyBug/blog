import { defineThemeConfig } from "vuepress-theme-plume";
import { navbar } from "./config/navbar";
import { notes } from "./config/notes";

export default defineThemeConfig({
  logo: "",
  appearance: true,
  profile: {
    avatar: "/images/avatar.jpg",
    name: "PinkDopeyBug",
    description: "",
    circle: true,
  },
  navbar,
  notes,
  social: [{ icon: "github", link: "https://github.com/PinkDopeyBug" }],
  footer: {
    message:
      '🥼 <a target="_blank" href="https://theme-plume.vuejs.press/">vuepress-theme-plume</a> & ✒️ PinkDopeyBug',
  },
});
