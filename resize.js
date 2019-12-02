function onImagesLoaded(event) {
    var images = document.getElementsByTagName("img");
    var loaded = images.length;
    for (var i = 0; i < images.length; i++) {
        if (images[i].complete) {
            loaded--;
        }
        else {
            images[i].addEventListener("load", function() {
                loaded--;
                if (loaded == 0) {
                    event();
                }
            });
        }
        if (loaded == 0) {
            event();
        }
    }
}

onImagesLoaded(function() {
    var images = document.getElementsByClassName("mp-html-thumbnail");
    for (let item of images) {
        console.log(item.width);
        if ( ((item.width)/100 * 68) > (635 - 18)) {
            item.style.zoom = Math.floor(((635 - 18) / ( (item.width) / 100)) - 1).toString() + '%';
        }
    }
});

