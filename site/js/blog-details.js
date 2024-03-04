const articleblock = {
	data() {
		return {
			articles: [
				{
					id: 1,
					img: 'img/blog/kitchen1.jpg',
					tag: 'Kitchen Design',
					heading: 'Let’s Get Solution For Building Construction Work',
					text: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illum laudantium fuga, incidunt rem tenetur non earum inventore quo ab sapiente dicta. Ratione aliquam corrupti dolorum aut tempore debitis possimus modi. \nLorem ipsum dolor sit amet consectetur adipisicing elit. Rerum eius reprehenderit iure atque dolor, numquam consequuntur ab, deleniti illum at obcaecati? Error nesciunt cum magnam, nostrum eveniet eius voluptates totam?',
					date: '26 December,2022',
				},
				{
					id: 2,
					img: 'img/blog/living1.jpg',
					tag: 'Living Design',
					heading: 'Low Cost Latest Invented Interior Designing \nIdeas.',
					text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat, officiis placeat perferendis laudantium sit adipisci pariatur hic unde. Doloribus, nihil. Delectus natus accusantium pariatur tempore consectetur unde ipsum reprehenderit perferendis. Lorem ipsum, dolor sit amet consectetur adipisicing elit. \nCorporis incidunt doloremque nostrum, necessitatibus perspiciatis, soluta molestiae vitae voluptatibus quae laborum temporibus voluptate amet sed! Quaerat laboriosam possimus perferendis ut fugit.',
					date: '22 December,2022',
				},
				{
					id: 3,
					img: 'img/blog/interior1.jpg',
					tag: 'Interior Design',
					heading: 'Best For Any Office & Business Interior Solution',
					text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus soluta quaerat enim eius dolores autem nihil debitis delectus, magni porro consectetur quo minus veniam corporis incidunt hic eveniet. Rerum, illo? \nLorem ipsum dolor, sit amet consectetur adipisicing elit. Reprehenderit expedita doloremque modi voluptate, vitae cupiditate a autem. Repellendus dolores nihil minima dolorem quam vero ipsam iure adipisci quos. Sed, mollitia!',
					date: '25 December,2022',
				},
				{
					id: 4,
					img: 'img/blog/kitchen2.jpg',
					tag: 'Kitchen Design',
					heading: 'Let’s Get Solution For Building Construction Work',
					text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat, officiis placeat perferendis laudantium sit adipisci pariatur hic unde. Doloribus, nihil. Delectus natus accusantium pariatur tempore consectetur unde ipsum reprehenderit perferendis. Lorem ipsum, dolor sit amet consectetur adipisicing elit. \nCorporis incidunt doloremque nostrum, necessitatibus perspiciatis, soluta molestiae vitae voluptatibus quae laborum temporibus voluptate amet sed! Quaerat laboriosam possimus perferendis ut fugit.',
					date: '26 December,2022',
				},
				{
					id: 5,
					img: 'img/blog/living2.jpg',
					tag: 'Living Design',
					heading: 'Low Cost Latest Invented Interior Designing \nIdeas.',
					text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus soluta quaerat enim eius dolores autem nihil debitis delectus, magni porro consectetur quo minus veniam corporis incidunt hic eveniet. Rerum, illo? \nLorem ipsum dolor, sit amet consectetur adipisicing elit. Reprehenderit expedita doloremque modi voluptate, vitae cupiditate a autem. Repellendus dolores nihil minima dolorem quam vero ipsam iure adipisci quos. Sed, mollitia!',
					date: '22 December,2022',
				},
				{
					id: 6,
					img: 'img/blog/interior2.jpg',
					tag: 'Interior Design',
					heading: 'Best For Any Office & Business Interior Solution',
					text: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illum laudantium fuga, incidunt rem tenetur non earum inventore quo ab sapiente dicta. Ratione aliquam corrupti dolorum aut tempore debitis possimus modi. \nLorem ipsum dolor sit amet consectetur adipisicing elit. Rerum eius reprehenderit iure atque dolor, numquam consequuntur ab, deleniti illum at obcaecati? Error nesciunt cum magnam, nostrum eveniet eius voluptates totam?',
					date: '25 December,2022',
				},
				{
					id: 7,
					img: 'img/blog/Architecture1.jpg',
					tag: 'Architecture Design',
					heading: 'Best For Any Office & Business Architecture Solution',
					text: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illum laudantium fuga, incidunt rem tenetur non earum inventore quo ab sapiente dicta. Ratione aliquam corrupti dolorum aut tempore debitis possimus modi. \nLorem ipsum dolor sit amet consectetur adipisicing elit. Rerum eius reprehenderit iure atque dolor, numquam consequuntur ab, deleniti illum at obcaecati? Error nesciunt cum magnam, nostrum eveniet eius voluptates totam?',
					date: '22 December,2022',
				},
				{
					id: 8,
					img: 'img/blog/Architecture2.jpg',
					tag: 'Architecture Design',
					heading: 'Low Cost Latest Invented Architecture Designing \nIdeas.',
					text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus soluta quaerat enim eius dolores autem nihil debitis delectus, magni porro consectetur quo minus veniam corporis incidunt hic eveniet. Rerum, illo? \nLorem ipsum dolor, sit amet consectetur adipisicing elit. Reprehenderit expedita doloremque modi voluptate, vitae cupiditate a autem. Repellendus dolores nihil minima dolorem quam vero ipsam iure adipisci quos. Sed, mollitia!',
					date: '28 December,2022',
				},
				{
					id: 9,
					img: 'img/blog/bedroom1.jpg',
					tag: 'Bedroom Design',
					heading: 'Latest Invented Bedroom Designing \nIdeas.',
					text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit necessitatibus unde quae non architecto quaerat, iure ipsum temporibus cum corrupti illo minus! Reprehenderit ab sunt libero fuga iste eveniet molestias. Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum provident, nihil minus, atque perspiciatis obcaecati distinctio mollitia tempora molestiae non doloremque ipsa architecto quis facilis beatae. Dicta eligendi nostrum et?',
					date: '27 December,2022',
				},
				{
					id: 10,
					img: 'img/blog/bedroom2.jpg',
					tag: 'Bedroom Design',
					heading: 'Design sprints are great',
					text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum, cum illum! Eos eaque unde natus minima odio, illo delectus non id laudantium magni voluptatem alias eveniet, ea dignissimos sint excepturi similique repellat in quam. Amet fuga provident vel enim beatae mollitia, pariatur itaque minima ut, consectetur corrupti eveniet repellat suscipit?',
					date: '17 December,2022',
				},
			],
			tags: [
				{ text: "Kitchen", active: false },
				{ text: "Bedroom", active: false },
				{ text: "Living", active: false },
				{ text: "Architecture", active: false },
				{ text: "Kitchen Planning", active: false },
				{ text: "Bedroom", active: false },
			],
			filteredArticle: [],
		};
	},
	methods: {
		onPageLoad() {
			this.tags[0].active = true;
			this.filteredArticle = this.articles.filter( (article) => {
				return article.tag.includes(this.tags[0].text);
			});
			filteredArticle.forEach(art => console.log(art.id, art.tag))
		},

		findArticles(tag, $event) {
			console.log(tag);
			console.log($event.target.textContent);
			this.tags.forEach(tag => {
				tag.active = false;
			});
			tag.active = true;
			this.filteredArticle = this.articles.filter((article) => {
				return article.tag.includes(tag.text);
			});

			// this.articles.forEach((article) => {
			// 	// console.log(article.tag);
			// 	if (article.tag.includes($event.target.textContent)) {
			// 		console.log(article.tag);
			// 	}
			// });
		},
	},
	template: `
         <div class="blog-details">
		 	<div v-for="article in filteredArticle" :key="article.id" class="blog-details__article">
				<div class="blog-details__text">
					<h2 class="blog-details__heading">{{ article.heading }}</h2>
				</div>
				<div class="blog-details__textBox">
					<p class="blog-details__text"> {{ article.tag }}
					</p>
				</div>
				<div class="blog-details__img">
					<img :src="article.img" alt="статья">
				</div>
				<div class="blog-details__block">
					<p class="blog-details__date">{{ article.date }}</p>
					<div class="blog-details__date">Interior / Home / Decore</div>
				</div>
				<div class="blog-details__textBox">
					<p class="blog-details__text"> {{ article.text }}
					</p>
				</div>
			</div>
		 </div>

		 <div class="sidebar">
            <h3 class="sidebar__heading">Tags</h3>
            <div class="sidebar__tags">
				<div class="tag" v-for="tag in tags" :key="tag.id" :class="{active:tag.active}" @click="findArticles(tag, $event)">{{ tag.text }}</div>
			</div>
        </div>
    `,
};

/* <div class="blog-details">
	<div class="blog-details__article">
		<div class="blog-details__text">
			<h2 class="blog-details__heading">{{ article.heading }}</h2>
		</div>
		<div class="blog-details__img">
			<img :src="article.img" alt="статья">
		</div>
		<div class="blog-details__block">
			<p class="blog-details__date">{{ article.date }}</p>
			<div class="blog-details__date">Interior / Home / Decore</div>
		</div>
		<div class="blog-details__textBox">
			<p class="blog-details__text"> {{ article.text }}
			</p>
		</div>
	</div>
</div> */



// <div class="blog-details" >
//     <div v-for="article in articles" :key="article.id" class="blog-details__article">
//         <div class="blog-details__img">
//             <img :src="article.img" alt="статья">
//             <p class="blog-details__tag">{{ article.tag }}</p>
//         </div>
//         <div class="blog-details__text">
//             <h2 class="blog-details__heading">{{ article.heading }}</h2>
//         </div>
//         <div class="blog-details__block">
//             <p class="blog-details__date">{{ article.date }}</p>
//             <div class="blog-details__btn"><i class="fa-solid fa-chevron-right"></i></div>
//         </div>
//     </div>
//         </div>

//         <div class="sidebar">
//             <h3 class="sidebar__heading">Tags</h3>
//             <div class="sidebar__tags">
//                 <div class="tag" @click="findArticles($event)">Kitchen</div>
//                 <div class="tag" @click="findArticles($event)">Bedroom</div>
//                 <div class="tag" @click="findArticles($event)" > Building</div >
// <div class="tag" @click="findArticles($event)" > Architecture</div >
//     <div class="tag" @click="findArticles($event)" > Kitchen Planning</div >
//         <div class="tag" @click="findArticles($event)" > Bedroom</div >
//             </div >
//         </div >
