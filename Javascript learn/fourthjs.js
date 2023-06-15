const channel = {
    title: "this practice",
    subscribe(){
        console.log(this); // this represents current object
    },

};

channel.share =function (){
    console.log(this);
};

channel.subscribe();

///////////////////////////  updation /////////////////////////

const channel2 = {
    title: "this practice",
    subscribe(){
        console.log(this); // this represents current object
    },

};

function share (channel_title)
{
    this.channel_title = channel_title;
    console.log(this);  // carefull in calling this because it calls windows function
}

const sharevideo = new share("this practice")

///////////////////////   EX 2  ///////////////////////

// method this calling  => obj

// function this calling  => global(sometimes calls window functions because of conflicted names)

const channel3 = {
    title: "this practice",
    languages: ["tamil","malayalam","telugu"],
    subscribe(){
        console.log(this); // this represents current object
    },
    showvideos(){
        console.log(this.languages);
    }
    
};


channel3.showvideos();




///////////////////////   EX 3  ///////////////////////
const channel4 = {
    title: "this practice",
     video_title : "javascript",
    languages: ["tamil","malayalam","telugu"],
    subscribe(){
        console.log(this); // this represents current object
    },
    showvideos(){
        this.languages.forEach(function (lang) {
            console.log(this.video,lang);
        },{video: "js"} );
        
    },
    
};


channel4.showvideos();


//////////////////////   EX 4  ///////////////////////
const channel5 = {
    title: "this practice",
     video_title : "javascript",
    languages: ["tamil","malayalam","telugu"],
    subscribe(){
        console.log(this); // this represents current object
    },
    showvideos(){
        this.languages.forEach(function (lang) {
            console.log(this.video_title,lang.toUpperCase());
        },this ); // whole object is called by this within the function
        
    },
    
};


channel5.showvideos();


//////////////////////   ex 5 most easy way ///////////////////////
const channel6 = {
    title: "this practice",
     video_title : "javascript2",
    languages: ["tamil","malayalam","telugu"],
    subscribe(){
        console.log(this); // this represents current object
    },
    showvideos(){

        let anyname = this;
        this.languages.forEach(function (lang) {
            console.log(anyname.video_title,lang.toUpperCase());
        },); // whole object is called by this within the function
        
    },
    
};


channel6.showvideos();


///   ex 6 ////


function playvideo(){

    console.log(this);
}
playvideo.call({ video_title : "javascript call"}); // it is automatically shown when it is called
playvideo.apply({ video_title : "javascript apply"}); // it is automatically shown when it is called
playvideo2.bind({ video_title : "javascript bind"}); // it is not automatically shown when it is called

///   ex 7 ////


function playvideo2(){

    console.log(this);
}
playvideo2.call({ video_title : "javascript call"}); // it is automatically shown when it is called
playvideo2.apply({ video_title : "javascript apply"}); // it is automatically shown when it is called
let newmethod = playvideo2.bind({ video_title : "javascript bind"}); // it is not automatically shown when it is called

console.log(newmethod());


/////////////////////   ex 8 most easy way ///////////////////////
const channel7 = {
    title: "this practice",
     video_title : "javascript3",
    languages: ["tamil","malayalam","telugu"],
    subscribe(){
        console.log(this); 
    },
    showvideos(){

        this.languages.forEach(function (lang) {
            console.log(this.video_title,lang.toUpperCase());
        }.bind(this)); // using bind method
    },
    
};


channel7.showvideos();




/////////////////////   ex 9 most easy way ///////////////////////
const channel8 = {
    title: "this practice",
     video_title : "javascript4",
    languages: ["tamil","malayalam","telugu"],
    subscribe(){
        console.log(this); 
    },
    showvideos(){

        this.languages.forEach( (lang) => {   /// using arrow function
            console.log(this.video_title,lang.toUpperCase());
        }); 
    },
    
};


channel8.showvideos();


