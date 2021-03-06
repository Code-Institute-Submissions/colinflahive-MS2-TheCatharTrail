# <p align="center">Testing Results for [The Cathar Trail](https://karzuin.github.io/First-milestone-project/)<p>

Below are the testing requirements for The Cathar Trail website.

* The 'direct input' field on the [W3C HTML Validator](https://validator.w3.org/#validate_by_input) website was used to validate the html code.
All files passed with the exception of the index.html file which showed the following error.

#### index.html
<p align="center"><img width="350" height="300" src="assets/images/index-html-error.jpg"></p>
<p align="center"><img width="350" height="300" src="assets/images/index-html-results.jpg"></p>

#### experience.html
No errors, no warnings reported:

<p align="center"><img width="350" height="300" src="assets/images/experience-results.jpg"></p>

#### castles.html
No errors, no warnings reported:

<p align="center"><img width="350" height="300" src="assets/images/castles-results.jpg"></p>

#### contact.html
No errors, no warnings reported:

<p align="center"><img width="350" height="300" src="assets/images/contact-results.jpg"></p>


* CSS was inserted in to the 'direct input' field on the W3C CSS Validation Service website [Jigsaw](https://jigsaw.w3.org/css-validator/#validate_by_input)
revealed no errors either.

#### Style.css:
No errors, no warnings reported:

<p align="center"><img width="350" height="300" src="assets/images/css-results.jpg"></p>

---

#### Header Section

The Header section is set to 'fixed-top' so that the user does not lose sight of the menu and by clicking on the logo in the top
left corner, it returns the user back to the homepage.  All links to the individual pages were tested and each page opened as 
expected when clicked.

#### Index file

The zoom effect set in CSS responded as expected when the page loaded on the browser and on variod devices. When the page is reloaded
in the browser, the zoom effect responds accordingly.

#### Experience file

The slideshow at the top of the page loads correctly when the page launches. The display responds and loads on interval as expected 
which was taken from [Bootstrap Carousel](https://getbootstrap.com/docs/4.3/components/carousel/).  Additionally it reacts responsively
when loaded on other devices and terminals without any impact on the images.

The use of the video was to give the users a more visual experience of what the region has to offer the visitors.  Playback and display
responds as expected without any significant delays on loading time across the devices and browsers it was tested on.

At the end of the section on History, the link embedded in to the code directing users to the local tourism website launches in the same 
window so that users are not overwhelmed with new windows opening which may direct them away from the website they are using. There are no
issues or concerns with the browser opening the link and users should be able to investigate more detail about the region from what the 
local tourism website has to offer.

The cards displayed at the bottom of the page highlight the top hotel, restaurant and activity within the region with the image highlighting
the venue.  The cards flip on all devices without any issues and the images display clearly. There were no issues with the social media icons
not opening, when the user clicks on each of the icons it brings the user to the homepage of each of the social media applications so that the
user can read any feedback received.

#### Castles file

The page focuses solely on the location of the castles in the region.  There are over 12 castles in total on the Cathar Trail, however, this 
website only focuses on a select few. The user is able to click on each of the markers on each map which will highlight the name and location 
of each of the restaurants, castles, hotels and activities.  The maps seem to render as required and markers and contents of the markers are 
visible on all devices.

#### Contact file

When the page renders, the information to the user displays as desired, on completion of the contact form/submission of the email the form resets
to a blank template.  Submission of a query was tested on iPhone X & iPhone 5/SE on Google Developer Tools and form submitted as expected.

#### Footer Section

All social media icons are linked to their respective sites and open on a separate page for the user for ease of use and navigation so that they don't 
lose the place where they are on the site0.  It was tested across all the devices each opened as expected. Additionally, as stated the social media icons
on each of the cards on the Experience page all opened on the respective sites accordingly.

---

### Browser Test

|      Browser      | Responsive | Links/URL's | Media | Renders |
|:-----------------:|:----------:|-------------|:-----:|---------|
|   Google Chrome   |    Good    |     Good    |  Good |   Good  |
|      Firefox      |    Good    |     Good    |  Good |   Good  |
|       Opera       |    Good    |     Good    |  Good |   Good  |
|       Safari      |    Good    |     Good    |  Good |   Good  |
|        Edge       |    Good    |     Good    |  Good |   Good  |

### Device Test

|    Device    | Responsive | Links/URL's | Media | Renders |
|:------------:|:----------:|-------------|:-----:|---------|
|   Galaxy S5  |    Good    |     Good    |  Good |   Good  |
|    Pixel 2   |    Good    |     Good    |  Good |   Good  |
|  iPhone 5/SE |    Good    |     Good    |  Good |   Good  |
| iPhone 6/7/8 |    Good    |     Good    |  Good |   Good  |
|   iPhone X   |    Good    |     Good    |  Good |   Good  |
|     iPad     |    Good    |     Good    |  Good |   Good  |
|   iPad Pro   |    Good    |     Good    |  Good |   Good  |
|  Surface Duo |    Good    |     Good    |  Good |   Good  |

###  Developer Tools Lighthouse

<p align="center"><img width="350" height="300" src="assets/images/lighthouse-results.jpg"></p>

Feedback on the "Performance" criteria were broadly directed at the size of the images used on the site.  The comments and feedback 
provided by the facility in Developer Tools has been noted and will be followed in future projects.  Due to time constraints I was 
unable to make any adjustments to the size of the files at this point or else the delivery deadline would have been missed.

