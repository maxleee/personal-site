---
title: 'Wellness Campaigns'
description: 'A series of three campaigns to support members’ physical and mental health: <a href="https://www.upmchealthplan.com/weightrace">Weight Race</a>, <a href="https://www.upmchealthplan.com/findyourfitness">Find Your Fitness</a>, and <a href="https://www.upmchealthplan.com/roadtoresilience">Road to Resilience</a>. Each campaign runs over a specific 12 or 4 week period, delivering a new content topic each week. I designed and developed templated micro sites to make it easier to swap out the creative design and content for each campaign, but keep the general structure and logic reusable across the three campaigns and for each annual refresh. The sites were built with the React framework Gatsby and used Sanity for Content Management.'
link: 'https://www.upmchealthplan.com/weightrace'
image: '/images/max-michael.svg'
---

We recommend using **Static Generation** (with and without data) whenever possible because your page can be built once and served by CDN, which makes it much faster than having a server render the page on every request.

You can use Static Generation for many types of pages, including:

- Marketing pages
- Blog posts
- E-commerce product listings
- Help and documentation

You should ask yourself: "Can I pre-render this page **ahead** of a user's request?" If the answer is yes, then you should choose Static Generation.

On the other hand, Static Generation is **not** a good idea if you cannot pre-render a page ahead of a user's request. Maybe your page shows frequently updated data, and the page content changes on every request.

In that case, you can use **Server-Side Rendering**. It will be slower, but the pre-rendered page will always be up-to-date. Or you can skip pre-rendering and use client-side JavaScript to populate data.
