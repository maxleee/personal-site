---
title: 'Wellness Campaigns'
description: 'A series of three campaigns to support members physical and mental health: <a href="https://www.upmchealthplan.com/weightrace">Weight Race</a>, <a href="https://www.upmchealthplan.com/findyourfitness">Find Your Fitness</a>, and <a href="https://www.upmchealthplan.com/roadtoresilience">Road to Resilience</a>. Each campaign runs over a specific 12 or 4 week period, delivering a new content topic every week. I designed and developed templated micro sites to make it easier to swap out the creative design and content for each campaign, but keep the general structure and logic reusable across the three campaigns and for each annual refresh. The sites were built with Gatsby and used Sanity for Content Management.'
link: 'https://www.upmchealthplan.com/weightrace'
image: '/images/findYourFitness.svg'
introImage: '/images/findYourFitness.svg'
intro: 'This collection of websites serves as a content hub for participants engaged in wellness programs. Weekly, participants have the opportunity to tailor their wellness journey by selecting from available content topics. These websites, complemented by an effective email campaign, not only foster user engagement but also provide a platform for enriching well-being.'
tags:
  - 'React'
  - 'Gatsby'
  - 'styled-components'
  - 'Adobe Xd'
  - 'Sanity CMS'
  - 'GraphQL'
---

## Omni-channel campaigns to support members' wellness

Wellness Campaigns at UPMC Health Plan are omni-channel initiatives designed to bolster members' wellness objectives. Each year, there are three campaigns, each spanning either 12 or 4 weeks, that concentrate on distinct aspects of well-being. These campaigns are strategically timed and are characterized by a unique thematic approach.

The creative design for each campaign is exclusively crafted by the creative team, resulting in a distinctive visual identity. This creative material plays a pivotal role in pre-campaign promotion through various means, including emails, newsletter articles, posters, and direct mail pieces. Throughout the campaign, the same creative concept is extended to provide ongoing support for campaign content.

In 2020, I spearheaded the conceptualization and development of the creative for "Weight Race," a campaign centered around weight loss and healthy eating.

Subsequently, in 2021, I took the lead in developing the creative for "Find Your Fitness," a campaign centered on physical activity, as well as "Road to Resilience," which was dedicated to mental health.

<figure class="project-detail-image">
    <img src="/images/findYourFitness.png" alt="screenshots of Find Your Fitness campaign collateral" />
    <figcaption>Email and Web designs for Find Your Fitness</figcaption>
</figure>
<figure class="project-detail-image">
    <img src="/images/roadToResilience.png" alt="screenshots of Road to Resilience campaign collateral" />
    <figcaption>Email and Web designs for Road to Resilience</figcaption>
</figure>

For other iterations of these campaigns, I collaborated closely with fellow designers to execute email and web channel tactics, aligning them seamlessly with their creative visions.

## Content based websites

The campaign websites serve as hubs of information, supporting participants in their individual wellness journeys. Each week introduces a fresh set of two or three topics, the user selects one of these options to focus on for the week.

A unique feature of the website is its ability to save the user's chosen topic for the week in local storage. This functionality ensures that even as users navigate through past weeks, they encounter the content they previously selected. This approach provides a tailored experience without necessitating a login process.

In addition to the main topics, each week offers a selection of resources that are accessible regardless of the user's chosen topic.

These campaign websites are crafted using the React framework Gatsby. In the most recent iterations, the content is hosted within Sanity CMS, adding a layer of dynamic flexibility to the platform.

## Iterating and improving the websites

These campaigns offer an avenue for continuous iteration due to their consistent structure. As a team, we capitalized on the lessons from preceding campaigns to drive enhancements for subsequent ones. Over the years, the website segment of these campaigns has undergone several iterations and improvements, geared toward enhancing member experiences and streamlining content management and execution processes.

### 2019

- Content updates were performed manually on a weekly basis, involving the upload of new HTML and JavaScript files for each content change.

### 2020

- I introduced automation into the equation by storing campaign content in a JSON file. This allowed for the seamless loading of all campaign content at the start of the campaign.
- Subsequently, I migrated the content to Sanity CMS, empowering content owners to independently edit campaign content.
- I refined the Sanity schema to create a universal content data structure applicable across all campaigns, consolidating all content for the three campaigns within a single Sanity instance.

### 2021

- Leveraging Optimizely and their React SDK, I strategically implemented additional Calls to Action (CTAs) to guide members into the authenticated tracking experience, qualifying as campaign completion. These experiments yielded success, boosting engagement and completions.

### 2022

- Due to shifting priorities, these campaigns required swift execution. The infrastructure developed over previous years proved instrumental in ensuring efficient execution by the team.

Previous editions of the campaign websites are no longer accessible, but you're welcome to explore the most recent iterations (as of 2022) for each campaign:

[Weight Race](https://www.upmchealthplan.com/weightrace)

[Find Your Fitness](https://www.upmchealthplan.com/findyourfitness)

[Road to Resilience](https://www.upmchealthplan.com/roadtoresilience)
