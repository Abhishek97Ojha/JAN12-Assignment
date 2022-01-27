var like = 0;
var dislike = 0;
var lshow = document.getElementById('likeshow');
var dshow = document.getElementById('dislikeshow');

function countLike() {
    if (like > dislike || like == dislike) {
        like = like + 1;
        lshow.innerText = like;
        dshow.innerHTML = dislike;
    } else {
        if (like <= 0) {
            dislike = dislike - 1;
            dshow.innerText = dislike;
        } else {
            like = like + 1;
            lshow.innerText = likes;
        }
    }
}

function countDislike() {
    if (dislike > like || dislike == like) {
        dislike = dislike + 1;
        dshow.innerText = dislike;
    } else {
        if (dislike <= 0) {
            like = like - 1;
            lshow.innerText = like;
        } else {
            dislike = dislike + 1;
            dshow.innerText = dislike;
        }

    }
}