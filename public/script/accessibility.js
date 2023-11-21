const accessibility = JSON.parse(localStorage.getItem("accessibility")) || {};

function toggle_accessibility_setting(name) {
	if (accessibility[name]) {
		delete accessibility[name];
		update_accessibility();
		return true;
	}
	accessibility[name] = true;
	update_accessibility();
	return true;
}

function set_accessibility_setting(name, value) {
	accessibility[name] = value;
	update_accessibility();
	return true;
}

function clear_accessibility_setting(name) {
	if (!accessibility[name]) return false;
	delete accessibility[name];
	update_accessibility();
	return true;
}

function update_accessibility() {
	localStorage.setItem("accessibility", JSON.stringify(accessibility));
}

if (accessibility) {
	if (accessibility.disable_crt) {
		document.querySelector('div#overlay').setAttribute("hidden", true);
		document.body.style.textShadow = "none";
		document.getElementById('toggle-crt').classList.add("disabled");
	}
}

document.getElementById("toggle-crt").addEventListener("click", () => {
	toggle_accessibility_setting("disable_crt");
	document.querySelector('div#overlay').toggleAttribute("hidden");
	document.getElementById('toggle-crt').className = accessibility.disable_crt ? "disabled" : "";
});

