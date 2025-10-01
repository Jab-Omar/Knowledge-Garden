import { QuartzConfig } from "./quartz/cfg"
import * as Plugin from "./quartz/plugins"

/**
 * Quartz 4 Configuration
 *
 * See https://quartz.jzhao.xyz/configuration for more information.
 */
const config: QuartzConfig = {
  configuration: {
    pageTitle: "📚 Notes Hub",
    pageTitleSuffix: "",
    enableSPA: true,
    enablePopovers: true,
    analytics: {
      provider: null,
    },
    locale: "en-US",
    baseUrl: "Jab-Omar.github.io/Knowledge-Garden",
    ignorePatterns: ["private", "templates", ".obsidian"],
    defaultDateType: "created",
    theme: {
      fontOrigin: "googleFonts",
      cdnCaching: true,
      typography: {
        title : "Roboto Slab",
        header: "Roboto",
        body: "Open Sans",
        code: "Fira Code",
      },
      colors: {
        lightMode: {
        light: "#fcfcfc",
        lightgray: "#e5e5e5",
        gray: "#b0b0b0",
        darkgray: "#333333",
        dark: "#1a1a1a",
        secondary: "#1e6f9f",
        tertiary: "#7daea3",
        highlight: "rgba(255, 235, 59, 0.15)",
        textHighlight: "rgba(255, 245, 130, 0.2)",
        },
        darkMode: {
        light: "#1a1a1a",
        lightgray: "#3a3a3a",
        gray: "#7a7a7a",
        darkgray: "#e0e0e0",
        dark: "#ffffff",
        secondary: "#5aa3cc",
        tertiary: "#7daea3",
        highlight: "rgba(255, 235, 59, 0.15)",
        textHighlight: "rgba(255, 245, 130, 0.2)",
        },
      },
    },
  },
  plugins: {
    transformers: [
      Plugin.FrontMatter(),
      Plugin.CreatedModifiedDate({
        priority: ["frontmatter", "git", "filesystem"],
      }),
      Plugin.SyntaxHighlighting({
        theme: {
          light: "github-light",
          dark: "github-dark",
        },
        keepBackground: false,
      }),
      Plugin.ObsidianFlavoredMarkdown({ enableInHtmlEmbed: false }),
      Plugin.GitHubFlavoredMarkdown(),
      Plugin.TableOfContents(),
      Plugin.CrawlLinks({ markdownLinkResolution: "shortest" }),
      Plugin.Description(),
      Plugin.Latex({ renderEngine: "katex" }),
    ],
    filters: [Plugin.RemoveDrafts()],
    emitters: [
      Plugin.AliasRedirects(),
      Plugin.ComponentResources(),
      Plugin.ContentPage(),
      Plugin.FolderPage(),
      Plugin.TagPage(),
      Plugin.ContentIndex({
        enableSiteMap: true,
        enableRSS: true,
      }),
      Plugin.Assets(),
      Plugin.Static(),
      Plugin.Favicon(),
      Plugin.NotFoundPage(),
      // Comment out CustomOgImages to speed up build time
      Plugin.CustomOgImages(),
    ],
  },
}

export default config
