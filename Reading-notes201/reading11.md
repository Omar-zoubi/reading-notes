## Images
####  Controlling the size and alignment of your images using CSS keeps rules that affect the presentation of your page in the CSS and out of the HTML markup.

#### To align image:
#### 1: The float property is added to the class that was created to represent the size of the image.
#### 2: New classes are created with names such as align-left or align-right to align the images to the left or right of the page. These class names are used in addition to classes that indicate the size of the image

### Centering images Using Css:
#### 1: On the containing element, you can use the text-align property with a value of center.
#### 2: On the image itself, you can use the use the margin property and set the values of the left and right margins to auto.

### Repeating Images:
#### 1.repeat:The background image is repeated both horizontally and vertically (the default way it is shown if the background repeat property isn't used).
#### 2.repeat-x: The image is repeated horizontally only (as shown in the first example on the left).
#### 3.repeat-y The image is repeated vertically only.
#### 4.no-repeat: The image is only shown once. The background-attachment property specifies whether a background image should stay in one position or move as the user scrolls up and down the page. It can have one of two values:
####  -fixed: The background image stays in the same position on the page. 
#### -scroll: The background image moves up and down as the user scrolls up and down the page.


#### You can create image rollover effects by moving the background position of an image.
#### To reduce the number of images your browser has to load, you can create image sprites.

### practical information that will help you launch a successful site.

#### How to Identify Keywords and Phrases
#### 1. Brainstorm List down the words that someone might type into Google to find your site. Be sure to include the various topics, products or services your site is about.
#### 2. Organize Group the keywords into separate lists for the different sections or categories of your website.
#### 3. Compare: It is very unlikely that your site will appear at the top of the search results for every keyword. This is especially true for topics where there is a lot of competition. The more sites out there that have already been optimized for a given keyword, the harder it will be for you to rise up the search results when people search on that term. website.
#### 4. Refine: Now you need to pick which keywords you will focus on. These should always be the ones that are most relevant to each section of your site.
#### 5. Map: Now that you have a refined list of keywords, you know which have the most competition, and which ones are most relevant, it is time to start picking which keywords you will use for each page.


#### Search engine optimization helps visitors find your sites when using search engines.
#### Analytics tools such as Google Analytics allow you to see how many people visit your site, how they find it, and what they do when they get there.
#### To put your site on the web, you will need to obtain a domain name and web hosting.
#### FTP programs allow you to transfer files from your local computer to your web server.
#### Many companies provide platforms for blogging, email newsletters, e-commerce and other popular website tools (to save you writing them from scratch).


### Use of Flash:
#### Since 2005, a number of factors have meant that fewer websites are written in Flash or even use elements of Flash in their pages.
#### When Flash was first released, it was developed to create animations. The technology quickly evolved, however, and people started to use it to build media players and even entire websites. Although Flash is still very popular, in recent years people have been more selective about when they use it (and now rarely consider building an entire website in Flash).

#### Timeline: Flash, VidEo & Audio Web technologies change quickly. Here you can see some of the changes in how animation, video, and audio are created on the web.
![](https://raw.githubusercontent.com/aleen42/PersonalWiki/docs/Programming/HTML/flash_video_audio/timeline.png)


#### We have four `button` — play/pause, stop, rewind, and fast forward. Each <button> `button` has a class name, a data-icon attribute for defining what icon should be shown on each button (we'll show how this works in the below section), and an aria-label attribute to provide an understandable description of each button, since we're not providing a human-readable label inside the tags. The contents of aria-label attributes are read out by screen readers when their users focus on the elements that contain them. There is also a timer `div`, which will report the elapsed time when the video is playing. Just for fun, we are providing two reporting mechanisms — a `span` containing the elapsed time in minutes and seconds, and an extra <div> that we will use to create a horizontal indicator bar that gets longer as the time elapses. To get an idea of what the finished product will look like, check out our finished version.

#### Playing and pausing the video: play.addEventListener('click', playPauseMedia);

#### function playPauseMedia() {
####    if(media.paused) {
####      play.setAttribute('data-icon','u');
####      media.play();
####    } else {
####      play.setAttribute('data-icon','P');
####      media.pause();
####    }
####   }
***to define playPauseMedia()***

#### function stopMedia() {
####    media.pause();
####    media.currentTime = 0;
####    play.setAttribute('data-icon','P');
####   }
***define stopMedia()***
![](https://bashooka.com/wp-content/uploads/2012/10/html5-vid-7.jpg)

***Done by Omar-zoubi***
[GitHub](https://github.com/Omar-zoubi)
