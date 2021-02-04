module.exports = {
    title: 'PixelTail Wiki',
    base: '',
    ga: 'G-EL9XLR0RJR',
    head: [
        ['link', { rel: 'icon', href: 'https://210-oss-ufile-cn.glowtree.cn/beehive%2F4%2Ffavicon.ico' }]
    ],
    serviceWorker: true,
    markdown: {
        lineNumbers: true,
        externalLinks: { target: '_blank' }
    },
    themeConfig: {
        docsRepo: 'BillZhucn/PixelTailWiki',
        docsBranch: 'master',
        docsDir: 'docs',
        editLinks: true,
        editLinkText: '帮助我们完善本页面',
        nav: [
            { text: '前往皮肤站', link: 'https://skin.2-10.cn/' },
            { text: '捐助众筹', link: 'https://afdian.net/@PixelTail' }
        ],
        sidebar: [
            {
                title: '欢迎来到PixelTail Wiki',
                collapsable: true,
                children:[    
                    ['/', '什么是PixelTail Wiki?'],
                    ['/wiki.md', '加入PixelTail Wiki编写']
                ]
            },
            {
                title: '什么是PixelTail',
                collapsable: true,
                children: [
                    ['whats-pixeltail/introduction.html', '简介'],
                    {
                        title: '服务器玩家守则',
                        collapsable: true,
                        children: [
                            ['play-rules/rules-simple.html', '简易版'],
                            ['play-rules/rules-complete.html', '完整版'],
                        ]
                    },
                    {
                        title: '如何加入PixelTail',
                        collapsable: true,
                        children: [
                            ['getting-start/whitelist.html', '成为Tails'],
                            ['getting-start/littleskin.html', '配置外置登录'],
                            ['getting-start/socialmedia.html', '群组信息']
                        ]
                    },
                    {
                        title: '为PixelTail赞助',
                        collapsable: true,
                        children: [
                            ['play-rules/rules-simple.html', '简易版'],
                            ['play-rules/rules-complete.html', '完整版'],
                        ]
                ]
            },
            {
                title: "Golden Tails(黄金周目)",
                collapsable: true,
                children: [
                    ['gold/intro.html', '黄金周目简介'],
                    ['gold/content.html', '当前游玩内容简介'],
                    ['gold/getting-start.html', '快速入门']
                ]
            },
            {
                title: "Neon(霓虹周目)",
                collapsable: true,
                children: [
                    ['neon/intro.html', '霓虹周目简介'],
                    ['neon/news-and-updates.html', '已公开的消息']
                ]
            },
            {
                title: "PixelTail故事集",
                collapsable: true,
                children: [
                    ['story-collection/admin.html', '历届管理组名单'],
                    ['story-collection/num.html', '数字周目'],
                    ['story-collection/gold.html', '黄金周目'],
                    ['story-collection/neon.html', '霓虹周目'],
                    ['story-collection/builds.html', '建筑集'],
                    ['story-collection/player.html', '玩家名录']
                ]
            }
        ],
        lastUpdated: '最后更新',
        smoothScroll: true
    },
    evergreen: false
}
