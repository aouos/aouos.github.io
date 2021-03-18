module.exports = {
  title: 'AouoPlus',
  description: '求知若渴 虚心若愚',
  base: '/blog/',
  themeConfig: {
    search: true,
    searchMaxSuggestions: 10,
    nav: [
      { text: 'Home', link: '/' },
      { text: 'JavaScript', link: '/javascript/' },
      { text: 'CSS', link: '/css/' }
    ],
    sidebar: {
      '/javascript/': [{
        title: '起步',
        collapsable: false,
        sidebarDepth: 2,
        children: [
          { title: 'one', path: 'start/one' },
          { title: 'two', path: 'start/two' }
        ]
      }],
      '/css/': [{
        title: '起步',
        collapsable: false,
        sidebarDepth: 2,
        children: [
          { title: 'one', path: 'start/one' },
          { title: 'two', path: 'start/two' }
        ]
      }],
      '/': [
        ''
      ]
    },
  }
}