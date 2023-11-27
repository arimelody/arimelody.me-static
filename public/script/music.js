function create_music_card(item) {
	var artist = "ari melody";
	if (item.artists) {
		artist = item.artists.join(", ");
	}
	let card = document.createElement('a');
	card.href = `/music/${item.id}`;
	card.classList.add("music");
	card.id = item.id;
	card.innerHTML = 
		`<div class="music-artwork">
			<img src=${item.artwork || '/img/music_artwork/placeholder.jpg'} alt="${item.title} artwork" width=128>
		</div>
		<div class="music-details">
			<h1 class="music-title">${item.title}</h1>
			<h2 class="music-artist">${artist}</h2>
			<h3 class="music-type-${item.type}">${item.type}</h3>
			<ul class="music-links">
				${ item.links.map(link => {
					return `<li><a href="${link.url}">${link.title.toLowerCase()}</a></li>`
				}).join("") }
			</ul>
		</div>`;
	return card;
}

document.querySelectorAll("h2.question").forEach(element => {
	element.onclick = (e) => {
		const url = `${window.location.protocol}//${window.location.host}${window.location.pathname}#${e.target.id}`;
		window.location = url;
	};
});

fetch('/music.json')
	.then(res => {
		if (!res.ok) {
			throw new Error(`Failed to download music data! ${res.status}`);
		}
		return res.json();
	})
	.then(music => {
		let music_container = document.getElementById('music-container');
		for (index in music) {
			let item = music[index];
			let dom = create_music_card(item);
			music_container.append(dom);
		};
	});
