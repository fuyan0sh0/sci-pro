export default {
    base: process.env.NODE_ENV === 'production' ? '/sci-pro/' : '/',
    themeConfig: {
        siteTitle: "SCI-Pro",
        nav: [
            { text: "指南", link: "/guild/installation" },
            { text: "组件", link: "/components/demo/" },
        ],
        sidebar: {
            "/guild/": [
                {
                    text: "基础",
                    items: [
                        {
                            text: "安装",
                            link: "/guild/installation",
                        },
                        {
                            text: "快速开始",
                            link: "/guild/quickstart",
                        },
                    ],
                },
                {
                    text: "进阶",
                    items: [
                        {
                            text: "xx",
                            link: "/xx",
                        },
                    ],
                },
            ],
            "/components/": [
                {
                    text: "基础组件",
                    items: [
                        {
                            text: "demo",
                            link: "/components/demo",
                        }
                    ],
                }
            ]
        },
        socialLinks: [
            { icon: "github", link: "https://github.com/fuyan0sh0/sci-pro" },
        ],
    },
};
