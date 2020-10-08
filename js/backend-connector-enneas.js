var modals = {};

function isInt(n) {
	return n % 1 === 0;
}

function transformData(data) {
	for (var i = 0; i < data.length; i++) {
		if (data[i].price) {
			data[i].price = data[i].price.toString();
			var splitted = data[i].price.split('.');
			if (splitted.length < 2) {
				data[i].price = `${splitted[0]},00`
			} else {
				if (splitted[1].length < 2) {
					splitted[1] = `${splitted[1]}0`
				}
				data[i].price = `${splitted[0]},${splitted[1]}`
			}
		} else {
			data[i].price = ""
		}
		if (!data[i].description) {
			data[i].description = ""
		} else {
			data[i].description = `${data[i].description}`
		}
		if (!data[i].photoUrl) {
			data[i].photoUrl = ""
		}
	}
}

function construct(address = "http://cornega-backend.herokuapp.com/public", user = "5c4378222fa55c0e0fc6234a") {
	var elements = document.getElementsByClassName("catalog-api");
	Array.prototype.forEach.call(elements, function (element) {
		var category = element.getAttribute("category");
		request(`${address}/${user}/products?category=${category}`, function (data) {
			transformData(data.data);
			if (category == "eventsgr" || category == "eventsen") {
				element.innerHTML = createEventElements(data.data);
				return;
			}

			element.innerHTML = createProductElements(data.data);
		})
	});
}

function request(url, callback) {
	var xmlhttp = createCORSRequest("GET", url);

	xmlhttp.onreadystatechange = function () {
		if (this.readyState == 4 && this.status == 200) {
			var res = JSON.parse(this.responseText);
			callback(res);
		}
	};

	xmlhttp.send();
}

function createEventElements(data) {
	var html = `<div id="events"><a class="closeicE" onclick="off1()">×</a>`
	for (var i = 0; i < data.length; i++) {
		html += `<div class="containers">`
		if (data[i].photoUrl) {
			html += `<img src="${data[i].photoUrl}" alt="Avatar" style="width:90px">`
		}
		html += `<p><span>${data[i].name}</span></p>`
		if (data[i].date) {
			html += `<p>${data[i].date}</p>`
		}
		html += `<p>${data[i].description}</p>`
		html += `</div>`
	}
	html += `</div>`

	return html;
}

function createProductElements(data) {
	var html = "<dl>";
	for (var i = 0; i < data.length; i++) {
		html += `<dt onclick="on3('${data[i]._id}')" class="catalog-item catalog-title">${data[i].name}......${data[i].price ? data[i].price + "€" : ""}</dt><dd onclick="on3('${data[i]._id}')">${data[i].description}</dd>`
		// Modal
		if (data[i].photoUrl) {
			modals[data[i]._id] = `<a class="closeicS" onclick="off3()">&times;</a>
			<div id="text"><img class="open_image"  src="${data[i].photoUrl}"></div>`
		}

	}
	html += "</dl>"
	return html;
}

function createCORSRequest(method, url) {
	var xhr = new XMLHttpRequest();
	if ("withCredentials" in xhr) {

		// Check if the XMLHttpRequest object has a "withCredentials" property.
		// "withCredentials" only exists on XMLHTTPRequest2 objects.
		xhr.open(method, url, true);

	} else if (typeof XDomainRequest != "undefined") {

		// Otherwise, check if XDomainRequest.
		// XDomainRequest only exists in IE, and is IE's way of making CORS requests.
		xhr = new XDomainRequest();
		xhr.open(method, url);

	} else {

		// Otherwise, CORS is not supported by the browser.
		xhr = null;

	}

	return xhr;
}

