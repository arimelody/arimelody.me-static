const header_links = document.getElementById("header-links");
const hamburger = document.getElementById("header-links-toggle");

function type_out(e) {
        const text = e.innerText;
        const original = e.innerHTML;
        e.innerText = "";
        const delay = 25;
        let chars = 0;

        function insert_char(character, parent) {
                const c = document.createElement("span");
                c.innerText = character;
                parent.appendChild(c);
                c.classList.add("newchar");
        }

        function normalize() {
                e.innerHTML = original;
        }

        function increment_char() {
                const newchar = text.substring(chars - 1, chars);
                insert_char(newchar, e);
                chars++;
                if (chars <= text.length) {
                        setTimeout(increment_char, delay);
                } else {
                        setTimeout(normalize, 250);
                }
        }

        increment_char();
}

function fill_list(list) {
	const items = list.querySelectorAll("li a, li span");
	items.innerText = "";
	const delay = 100;

	items.forEach((item, iter) => {
		item.style.animationDelay = `${iter * delay}ms`;
		item.style.animationPlayState = "playing";
	});
}

[...document.querySelectorAll("h1, h2, h3, h4, h5, h6")]
	.filter((e) => e.innerText != "")
	.forEach((e) => {
		type_out(e);
	});
[...document.querySelectorAll("ol, ul")]
	.filter((e) => e.innerText != "")
	.forEach((e) => {
		fill_list(e);
	});

function toggle_header_links() {
        header_links.classList.toggle("open");
}

document.addEventListener("click", event => {
        if (!header_links.contains(event.target) && !hamburger.contains(event.target)) {
                header_links.classList.remove("open");
        }
});