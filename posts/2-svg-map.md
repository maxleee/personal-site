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

Coverage maps are used across the UPMC Health Plan website to communicate which insurance plans and coverage options are available across the state of Pennsylvania.

Originally, these maps were created as a JPG, creating concerns for accessibility if the same information wasn’t also listed as text content. To remedy this, I created SVG versions of the maps with a code structure that mimics lists, allowing screen reader users the ability to perceive the content with the same asset as sighted users.

These SVGs were tedious to make and involved copying and pasting the code for the selected counties into the correct list elements, in alphabetical order. This could take a full workday or more to create one map asset. Instead of continuing to create the SVG maps manually, I built a UI using React to select all the options needed for a map, and preview and generate the SVG code.

With this new utility, web content managers can create coverage maps in minutes. It is simple to use and requires no design or development resources.

The first version of the utility allowed for a map with two different categories, essentially an ‘included’ area and a ‘non-included’ area. This covered most of the use cases but there was still a handful of maps that needed more than two categories that still needed to be created manually. I iterated on the original utility to add a feature to add up to five different categories in one map.

The next planned iteration will provide more options for fill colors and patterns to be more accessible for low-vision and color-blind users.
