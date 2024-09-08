import { siteConfig } from './lib/site-config'

export default siteConfig({
  // the site's root Notion page (required)
  rootNotionPageId: '67b39848cef94612b01ca6c1dc4d81a6',

  // if you want to restrict pages to a single notion workspace (optional)
  // (this should be a Notion ID; see the docs for how to extract this)
  rootNotionSpaceId: null,

  // basic site info (required)
  name: 'JavaScript Cebu Community',
  domain: 'jscebu.org',
  author: 'JavaScript Cebu',

  // open graph metadata (optional)
  description: 'Community homepage for JavaScript Cebu',

  // social usernames (optional)
  facebook: 'JavascriptCebu',
  twitter: 'JavascriptCebu',
  github: 'javascriptcebu',
  // linkedin: 'fisch2',
  // mastodon: '#', // optional mastodon profile URL, provides link verification
  // newsletter: '#', // optional newsletter URL
  // youtube: '#', // optional youtube channel name or `channel/UCGbXXXXXXXXXXXXXXXXXXXXXX`

  // default notion icon and cover images for site-wide consistency (optional)
  // page-specific values will override these site-wide defaults
  defaultPageIcon: null,
  defaultPageCover: null,
  defaultPageCoverPosition: 0.5,

  // whether or not to enable support for LQIP preview images (optional)
  isPreviewImageSupportEnabled: true,

  // whether or not redis is enabled for caching generated preview images (optional)
  // NOTE: if you enable redis, you need to set the `REDIS_HOST` and `REDIS_PASSWORD`
  // environment variables. see the readme for more info
  isRedisEnabled: false,

  // map of notion page IDs to URL paths (optional)
  // any pages defined here will override their default URL paths
  // example:
  //
  pageUrlOverrides: {
    '/mission-vision': '0c6ba96856cb4941b4f5eb8f0a9d2c25',
    '/members': 'c69fd58103314a0a871b5f072b9a8ef8',
    '/ideas': 'ab4c593485a04708aef5aa418bdac513',
    '/meeting-notes': '7cf10a64c4c64281845df4adc45a1f95',
    '/tasks': '7e7678d78abd4bde8be7226af06c3487',
    '/official-links': 'cb911533889445dfa31333f69e65eb0e',
    '/events': 'f9d73a52a4424b9f9a80c9520d5bef8f'
  },
  // pageUrlOverrides: null,

  // whether to use the default notion navigation style or a custom one with links to
  // important pages. To use `navigationLinks`, set `navigationStyle` to `custom`.
  // navigationStyle: 'default'
  navigationStyle: 'custom',
  navigationLinks: [
    {
      title: 'Events',
      pageId: 'f9d73a52a4424b9f9a80c9520d5bef8f'
    },
    {
      title: 'Official Links',
      pageId: 'cb911533889445dfa31333f69e65eb0e'
    },
    {
      title: 'Blog',
      url: 'https://blog.jscebu.org'
    }
  ]
})
