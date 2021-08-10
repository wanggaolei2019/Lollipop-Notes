module.exports = {
    title: 'Lollipop Notes',
    description: 'Something random.Just to get out of boredom',

    themeConfig: {
        //logo: '/img/logo.ico',
        nav: [
            {
                text: 'Java基础',
                // ariaLabel: 'Language Menu',
                items: [
                    { text: 'On Java8', link: '/on-java8.html'},
                    // { text: 'On Java8', link: '/on-java8.html', target:'_blank'},
                ]
            }
        ],
        sidebar: [
            ['/on-java8', 'On Java8']
        ]
    }

}