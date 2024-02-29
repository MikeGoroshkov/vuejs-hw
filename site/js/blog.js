const app = {
    data() {
        return {
            articles: [
                {
                    id: 1,
                    img: 'img/blog/kitchen1.jpg',
                    tag: 'Kitchen Design',
                    heading: 'Let’s Get Solution For Building Construction Work',
                    date: '26 December,2022'
                },
                {
                    id: 2,
                    img: 'img/blog/living1.jpg',
                    tag: 'Living Design',
                    heading: 'Low Cost Latest Invented Interior Designing \nIdeas.',
                    date: '22 December,2022'
                },
                {
                    id: 3,
                    img: 'img/blog/interior1.jpg',
                    tag: 'Interior Design',
                    heading: 'Best For Any Office & Business Interior Solution',
                    date: '25 December,2022'
                },
                {
                    id: 4,
                    img: 'img/blog/kitchen2.jpg',
                    tag: 'Kitchen Design',
                    heading: 'Let’s Get Solution For Building Construction Work',
                    date: '26 December,2022'
                },
                {
                    id: 5,
                    img: 'img/blog/living2.jpg',
                    tag: 'Living Design',
                    heading: 'Low Cost Latest Invented Interior Designing \nIdeas.',
                    date: '22 December,2022'
                },
                {
                    id: 6,
                    img: 'img/blog/interior2.jpg',
                    tag: 'Interior Design',
                    heading: 'Best For Any Office & Business Interior Solution',
                    date: '25 December,2022'
                }
            ],
        }
    },
    methods: {

    }
}

Vue.createApp(app).mount('#app');