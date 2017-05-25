function load() {
   //  console.log(“load event detected!“);
    // note = new Note(“Hi Sophie”);

    // article = new Article();
    headline = new Headline();
    headline.listHeadline();
    controller = new Controller();
    controller.insertHTML();

   // console.log(“hello”);
 }

window.onload = load;
