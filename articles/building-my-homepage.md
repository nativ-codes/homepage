---
title: "Building My Personal Homepage: From Idea to Monorepo"
date: "2026-06-28"
description: "A journey through designing and developing my personal website with Next.js, GSAP animations, and Tailwind CSS. How I structured the project and the decisions I made along the way."
tags: ["nextjs", "gsap", "tailwind", "personal-project"]
---

When I decided to build my personal homepage, I knew I wanted something more than just a static portfolio. I wanted an experience that reflects who I am as a developer—someone who appreciates clean design, smooth animations, and thoughtful user interactions.

## The Vision

I started with a simple idea: a single-page website with distinct sections that users navigate through. Each section would feel like its own mini-experience while maintaining visual cohesion. The design language would be bold and modern, with the orange (#ff3d00) accent color representing creativity and energy.

The homepage structure became:
- **Header**: A striking introduction with my name and tagline
- **About**: Who I am and what I do
- **Work**: Showcase of my projects
- **Contact**: How to reach me

## Tech Stack Decisions

Choosing the right tools was crucial. I went with:

### Next.js 14

The app router and static export capabilities made Next.js an easy choice. I needed SEO-friendly pages that could be easily deployed anywhere.

### GSAP + ScrollTrigger

For the scroll-based animations between sections, GSAP's ScrollTrigger was perfect. It allowed me to create:
- Smooth section pinning
- Parallax effects
- Sequential animations as users scroll

### Tailwind CSS

Utility-first CSS at its finest. I could rapidly prototype designs and maintain consistency across the entire site.

### Custom Fonts

The LemonMilk font for headings gives the site its distinctive character. It's bold, modern, and slightly technical—exactly what I was going for.

## The Challenge: Responsiveness

The biggest challenge was making the scroll animations work on both desktop and mobile. Desktop users get the full pinned-section experience, while mobile users get a more traditional scrollable layout.

I ended up creating separate timeline configurations:
- `getAboutLargeScreenTimeline()` for desktop
- `getAboutLeftSmallScreenTimeline()` and `getAboutRightSmallScreenTimeline()` for mobile

This approach let me optimize the animation experience for each device type.

## Lessons Learned

Building this site taught me several valuable lessons:

1. **Start simple, add complexity gradually**: I began with basic HTML and CSS before adding any animations
2. **Test on real devices early**: Animations that look smooth on desktop might be janky on mobile
3. **Performance matters**: GSAP's `will-change` property and careful cleanup of ScrollTrigger instances keep things running smoothly
4. **Design systems save time**: Having consistent colors, spacing, and typography tokens made development much faster

## What's Next

Now that the homepage is live, I'm expanding the project into a monorepo structure. This blog is the first addition, with plans for more interactive features and possibly a project showcase section.

The journey from idea to deployed site took longer than expected, but the result is something I'm proud of—a digital space that truly represents me.

Stay tuned for more updates!
