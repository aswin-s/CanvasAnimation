(function () {

    let canvas = document.querySelector(".stage");
    let context = canvas.getContext("2d")
    let imgCache = [];
    let currentFrame = 1;
    // pre-load images
    for (let i = 1; i <= 263; i++) {
        let img = new Image();
        img.src = "./img/drop (" + i + ").png";
        imgCache.push(img);
    }

    window.addEventListener("load", function () {
        gameLoop();
    });


    function drawFrame(frameIndex) {
        context.drawImage(imgCache[frameIndex], 0, 0);
    }
    function gameLoop() {

        if (currentFrame >= 263)
            currentFrame = 1;

        drawFrame(currentFrame++);
        requestAnimationFrame(gameLoop);
    }

} ());