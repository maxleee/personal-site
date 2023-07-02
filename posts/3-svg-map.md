---
title: 'SVG Map Generator'
description: 'This tool allows users to create coverage maps quickly. Creating maps was a tedious process that required design and development resources, but now anyone can easily create a coverage map on their own. In addition to saving time, the tool also allows for increased accessibility of the map content by using a thoughtfully constructed SVG instead of a JPG.'
link: 'https://friendly-bubblegum-837166.netlify.app'
image: '/images/map-generator.svg'
intro: 'When I started working at UPMC Health Plan, creating coverage maps was a tedious, time-consuming process. I wanted to make it easier for anyone on our team to create a map, so I created a new utility that would allow us to make maps quickly and easily. The utility also works better than our previous method because it uses carefully crafted SVG markup instead of a JPG, so that users using assistive technology can access the content of the maps.'
introImage: '/images/CoverageMapGenerator.png'
tags:
  - 'React'
  - 'SVG'
---

## From JPG to SVG

Coverage maps are used across the UPMC Health Plan public site to communicate which insurance plans and coverage options are available across the state of Pennsylvania.

In the past, these maps were created as a JPG, an artifact of print marketing materials. Using these JPGs to communicate complex information on the web created concerns for accessibility. If the same information wasn’t also listed as text content, then these maps really only served sighted users and left a segment of our users in the dark. To remedy this, I created SVG versions of the maps with a code structure that mimics lists, allowing screen reader users the ability to perceive the content with the same asset as sighted users.

## SVG was an improvement, but tedious

These SVGs were great for accessibility and creating a nice crisp graphic for the web. However, they were tedious to make and involved copying and pasting the code for the selected counties into the correct list elements, in alphabetical order. This could take a full workday or more to create one map asset.
Staring down a group of 4+ maps that needed to be created, I blocked out a workday to see if the idea of creating a UI to generate the maps was a feasible solution.

## Creating an MVP

The map generator MVP had a few features:

- A user could select whether each county was included in that plan or not.
- Included and non-inlcuded groups had a custom title
- The map had a custom title
- A user can preview and download the SVG map based on the data provided.

I reached for create-react-app because I knew it would be a simple one page app. This first iteration of the app only supported two groups of counties, included, and non-included. I thought the simplest way to indicate that a county needed to be included would be with one long checklist, and text inputs for the required titles. The form data was stored in state, then used to map over the counties within the SVG to place them into the correct group of counties, included or non-included. Placing the counties in their correct group applies visual styling and acts as a list for non-sighted users. The group titles are used to title the lists and create a visual key below the map.
As the user is inputing the data required for their map, a preview of the SVG is updating live. Since the form data was stored in state, this was easy to rerender a new SVG with every state change. I used the npm package react-code-blocks to display a preview of the SVG code so that more savvy users could double check the code output next to the visual.
Once the user is satisfied with their map, they can download as an SVG. The browser creates the SVG file using the Blob constructor of the File API.

## Success and future improvements

In that first day I was able to have most of the functionality up and running, so I knew that it would be worth it to spend another day or two finishing up the app, solving any small bugs, and adding some visual polish.

The tool was used internally by my team at UPMC Health Plan and has been a huge time saver while increasing the accessibility of our content at the same time. Now anyone from designers and developers to content and product managers can create the maps they need to communicate different product coverage across the state.

While the MVP with two map groups covered most of the use cases, there was still a handful of maps that needed more than two groups or categories, and I still had to create those manually. I iterated on the original utility to add the ability to select up to five different categories in one map. This involved refactoring how the state was stored and manipulated to create the groups, as well as the frontend visuals to create and remove groups.

The next planned iteration will provide more options for fill colors and patterns to create more contrast between the groups and be more accessible for low-vision and color-blind users.
