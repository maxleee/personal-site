---
title: 'GIFsearch'
description: "I built this project while learning Angular and TypeScript. It utilizes the Giphy Search API to display gifs based on user provided keywords. My favorite feature is related to accessibility, it pauses the gif playback according to the user's prefers-reduced-motion settings."
image: '/images/GIFsearch.svg'
link: 'https://verdant-entremet-0d54ae.netlify.app/'
introImage: '/images/gif-ui.png'
intro: 'My background is mostly in React, but I wanted to dip into Angular to broaden my knowledge. After learning the fundamentals of both Angular and TypeScript, I built a GIF search app that allows a user to search for GIFs by keyword, and copy the URL to their selected GIF. In addition to building the app, I designed the logo, UI components, and overall layout using Figma.'
tags:
  - 'Angular'
  - 'TypeScript'
  - 'REST API'
  - 'Figma'
---

## Learning Angular and TypeScript

My journey into learning Angular started with the [Tour of Heroes](https://angular.io/tutorial/tour-of-heroes) tutorial project featured in the Angular documentation. This guide provided me with a solid foundational grasp of creating components, project structuring, and data fetching. Seeking to deepen my understanding, I found the [Angular Crash Course](https://www.youtube.com/watch?v=3dHNOWTI7H8) on YouTube, hosted by Traversy Media. This resource not only reinforced my grasp of the initial tutorial's concepts but also provided an alternate perspective on their practical application.

Prior to embarking on this project, I had encountered TypeScript and grasped its fundamental principles, but I had not yet used it firsthand. However, embracing its syntax proved to be a seamless process, revealing its inherent value. While there's still more to explore in the realm of TypeScript, I'm eagerly anticipating the opportunity to integrate it into future projects.

## Designing the app UI

Before diving into the code, I began by crafting a simple UI design using Figma. I kicked off the process by creating the logo, drawing inspiration from the search functionality. Establishing a complementary color palette to harmonize the UI components, I then turned my attention to shaping the functionality of the search component. One of my ambitious ideas was to emulate the gradient from the logo for the input's active state. Beyond that, I crafted additional components including the Autoplay toggle, GIF grid, and URL Copy notification.

You're welcome to view my [working Figma file](https://www.figma.com/file/AiK4ZExoQREqChBgzvVaU7/gif-search?type=design&node-id=0%3A1&mode=design&t=k47vOwgNFG9Go7T7-1).

## Building the app

With a confident grasp of the design in hand, I delved into constructing the app within the Angular framework. Armed with insights from the two tutorial projects I completed earlier, I began translating my vision into reality. The ability to reference the tutorial project code proved invaluable in recalling techniques like exporting data from class components, iterating through data within the view, and data retrieval from APIs.

Navigating the GIPHY API was a relatively straightforward endeavor, thanks to their detailed documentation. Crafting the request within the URL, then passing the response data to the designated components for presentation was the essence of the process.

Although I was focused on implementing functional features, regrettably, I couldn't allocate time for realizing the ambitious active state concept for the search input. My research indicated that achieving this might require some SVG intricacies. Given my primary focus on learning Angular and TypeScript, I opted for a more simplified yet brand-consistent active state.

One of the standout features I developed was the AutoPlay functionality. A user-friendly toggle positioned at the top empowers users to halt the playback of all GIFs. This implementation aligns seamlessly with [WCAG 2.1 Success Criterion 2.2.2: Pause, Stop, Hide (Level A)](https://www.w3.org/WAI/WCAG21/Understanding/pause-stop-hide.html) which stipulates that: "For any moving, blinking or scrolling information that (1) starts automatically, (2) lasts more than five seconds, and (3) is presented in parallel with other content, there is a mechanism for the user to pause, stop, or hide it unless the movement, blinking, or scrolling is part of an activity where it is essential..."

Moreover, to ensure inclusivity, if the users' 'prefers-reduced-motion' setting is enabled to minimize motion, the toggle defaults to the paused state.

## A positive learning experience

Overall this project was a joy to work on. I enjoy learning new things and finding practical ways to implement what I have learned. I look forward to working with Angular more in the future sh
ould the opportunity present itself.
