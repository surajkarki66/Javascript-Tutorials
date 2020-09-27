// this reference the object that is currently executing

// Regular function => global (window, global)
// method => object

const video = {
  title: "this is amazing.",
  tags: ["a", "b", "c"],
  play: function () {
    console.log(this); // this references  object  itself.
    console.log(this.title);
  },

  showTags: function () {
    this.tags.forEach(function (tag) {
      console.log(this.title, this.tag);
    }, this); // this references the video object
  },
};

video.stop = function () {
  console.log(this);
};

//console.log(video);
//video.play();
//video.stop();
//video.showTags();

// Regular  function  -> this references the global object
function playVideo() {
  // here it referencing the global object window.
  console.log(this);
}

// Constructor function
function Video(title) {
  this.title = title;
  this.info = () => {
    return this.title;
  };
  //console.log(this);
}
const v = new Video("Hello"); // This references the empty object {}

//console.log(v);
//console.log(v.info());
// playVideo();

// In Browser js the global object is the window object.
// this refers to that window object.
// this is reference to window object.
//console.log(window);
//console.log(this.alert());
//console.log(window.document.getElementById());
//window.console.log("Window is global object in Browser js.");
