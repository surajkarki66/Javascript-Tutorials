// this reference the object that is currently executing

// Regular function => global (window, global)
// method => object


const video = {
    title: 'a',
    play() {
        console.log(this); // this references  object  itself.
        console.log(this.title);
    },

    tags: ['a', 'b', 'c'],
    showTags() {
        this.tags.forEach(function (tag) {
            console.log(this.title, this.tag);
        }, this); // this references the video object
    }
}



video.stop = function () {
    console.log(this);

};

// Regular  function  -> this references the global object 
function playVideo() {
    console.log(this);

}

// Constructer function
function Video(title) {
    this.title = title;
    console.log(this);
}
const v = new Video("Hello"); // This references the empty object {}




playVideo()
video.play();
video.stop();
video.showTags();