---
title: 'Community Events'
description: 'Design for Medicare members and prospective members to find events near them to attend.'
image: '/images/GIFsearch.svg'
link: ''
introImage: 'gif'
intro: 'My background is mostly in React, but I wanted to dip into Angular to broaden my knowledge. After learning the fundamentals of both Angular and TypeScript, I built a GIF search app that allows a user to search for GIFs by keyword, and copy the URL to their selected GIF. In addition to building the app, I designed the logo, UI components, and overall layout using Figma.'
tags:
  - 'UX Research'
  - 'UX Design'
  - 'Figma'
---

## Introduction

The previous experience for Medicare members and prospects to find events and meetings near them was dated, unaccessible, and hard to use. As part of a larger transition into Sitecore CMS, I worked with a team consisting of a UX Researcher, Project Manager, and a client stakeholder to better understand the user's needs and expectations to inform a successful redesign.

## Research

To inform the research, we compiled a list of important questions.

<figure class="project-detail-image">
    <img src="/images/events-questions.png" alt="sticky notes with questions about the events experience" />
</figure>

In order to start to answer these questions, the UX Researcher on the team conducted a competitive analysis and synthesized those results for the Product Manager and I to review. They looked at direct competitors like other health insurance companies, and non-direct competitors that host public events like Facebook and Eventbrite. The main dimensions we looked at stemmed from our initial questions, and were:

- The first parameter used to find events (type, location, etc.).
- If the user enters their location, is it their ZIP code, city, address, or other?
- Do they include the events in a map view?
- Do they display the events in a list or calendar format?
- Are they using a third party platform or something custom?

<figure class="project-detail-image">
    <img src="/images/events-competitive.png" alt="a screenshot of the synthesized competitive analysis" />
    <figcaption>A screenshot of a portion of the synthesized competitive analysis in Miro.</figcaption>
</figure>

We also conducted a survey of 100 people who have insurance and would consider attending health insurance related events to better understand our potential user's preferences when interacting with event discovery experiences. 50% of these participants were Medicare age (65+).

<figure class="project-detail-image">
    <img src="/images/events-survey.png" alt="" />
    <figcaption>A screenshot of the results of the preferences survey.</figcaption>
</figure>

From these two research methods we learned a lot about what our users would be expecting, including:

- To search for events by topic and location.
- To indicate their location by ZIP code.
- Most direct competitors did not offer a map view, but some larger non-direct competitors did.
- There was no clear winner between showing events in a list or calendar view.

## Design Exploration

With these findings to guide me, I started to iterate on wireframes to find potential design solutions, starting with an event listing component. I explored including an image, call to actions, a description, time, location, and other information that would be available for each event. I wanted to find a balance of information that would entice the user to click through to the event page, without being too overwhelming.

<figure class="project-detail-image">
    <img src="/images/events-list-wireframe.png" alt="" />
    <figcaption>Wireframes of how an event could display in a list.</figcaption>
</figure>

After exploring the listing component, I worked on wireframes for the actual event information page. This page needed to display all relevant information for the event, encouraging the user to register for the event.

<figure class="project-detail-image">
    <img src="/images/events-page-wireframe.png" alt="" />
    <figcaption>Wireframes of the event information page.</figcaption>
</figure>

After discussing these wireframes with the team, I used their feedback and continued to iterate on the designs, adding more visual design to start to get a real sense of how the event experience could look and function. I used styles and components from our enterprise Design System to inform the visual design so that this experience would be consistent with other site sections and the brand overall.
