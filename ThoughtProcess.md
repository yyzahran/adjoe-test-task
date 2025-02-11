<a name="readme-top"></a>
Here I'll walk you through the approach I took while working on the tasl.
<br />
<!-- TABLE OF CONTENTS -->
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#intuition">Intuition</a>
    </li>
    <li><a href="#approach">Approach</a></li>
    <li>
      <a href="#challenges">Challenges</a>
    </li>
    <li><a href="#to-the-reviewers">To the reviewers</a></li>
  </ol>
<br />

### Intuition

After reading the pdf provided for the challenge. I started by prioritizing my time to tackle the tasks. I figured the second one will the biggest, so I opted for getting the first and third out of the door first

<br />

### Approach

I did some exploratory testing quickly first on the given app with both its versions to find out what regressions were introduced in the one under test. I logged three bugs and a potential fourth, I did not want to get sidetracked by this task no matter how interesting it is because I knew I had two other ones to complete.

For the second, quickly I settled for JS and Selenium, I created the npm project and created an initial test case to open up the app page so I get back to it after the third one.

The third task was fun to work, I organized the 5 tickets as I see fit, that is by no means an absolute ordering, it's what I see the best based on the given title and the time I had. I mentioned that I can move things around in my assessments of the tickets too.

Back to the automation test, I found out that the page was a canvas and not a regular document which is the main event of the task, canvases can be more challenging to handle when automating as they encompass the whole, well, canvas in them themselves, I noticed right away that that the button was centered in the page so I tried out getting the x and y offsets for the page, dividing them by two and clicking in that spot.

More about the structure of the project can be found in the [README.md](README.md).

<br />

## Challenges

The main challenge was organizing my time and not getting drawn to one of the tasks on the expense of the others. Here're some the challenges that I can think of that I faced:
- Time-constraint, there can more time spent of the first task, for sure, which is pretty much exploratory testing of the app. Different combinations of browsers, screen sizes, devices, and operating systems can be used to increase the test coverage scenarios. I already noticed a firefox-specific bug so there easily could be other bugs on other platforms
- The canvas element proved to be the challenging part of the task by far. I did my best to get it to pass, I tried different combinations of offsets, but it was not enough to get the button to be clicked. Throughout my work, I did not deal with canvases much, it's definitely something that I am going to look into later during the weekend to familiarize myself with it, if anything it was a learning experience for me. I am certain, had it not been for the time-constraint, I would have had a better chance of handling the second question in a better way

<br />

## To the reviewers
Thanks a lot for reading this and for the opportunity. I hope you enjoy going through the project as much as I enjoyed working on it. I am looking forward to discussing my approach with you later.