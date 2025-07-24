function websitebuilder(title, cname, views, monthsOld, duration, thumbnail) {

    let viewstr
    if (views < 1000000) {
        viewstr = views / 1000 + "K";
    }
    else if (views > 1000000) {
        viewstr = views / 1000000 + "M";
    } else {

        viewstr = views / 1000000 + "M";
    }

    let html = `<div class="card">
            <div class="img">
                <img src="${thumbnail}"
                    alt="harrythumbnail">
                <div class="capasule">${duration}</div>
            </div>
            <div class="text">
                <h1>${title}</h1>
                <p>${cname} . ${viewstr} views . ${monthsOld}</p>
            </div>
        </div>`

    document.querySelector(".container").innerHTML = document.querySelector(".container").innerHTML + html;

}

websitebuilder("Introduction to Blackbend", "sidsupreme", 1000000, "12 months ago", "32:10", "https://cdn.fliki.ai/image/page/660ba680adaa44a37532fd97/6663112070e1cfda27f86585.jpg")