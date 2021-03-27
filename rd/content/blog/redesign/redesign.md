---
title: Redesigning Rangarajan.Dev
description: Distilling top end personal sites from Tim Ferriss to Paul Graham
date: '2021-03-26'
published: true
---

# Most Top Performers don't even attempt to design their personal sites

Patrick Collison of stripe has one of the best personal sites on the internet, and there's probably no css.

### Ideas > Formatting

***

But I'm not Patrick Collison, and I don't have a podcast that gets 100s of thousands of regular downloads like Tim or James.

So I want to have a site that's beautiful, somewhat simple, and most importantly easy to update.

The primary purpose of my site is to be immensely valuable to the 1% of people who provide me the most value - as opposed to appealing to the masses. Patio11 mentioned this in a podcast with David Perell, and it stuck with me. Writing online is really just thinking out loud, and you want those thoughts to be accessible to the people who make important decisions based on them (potential clients, partners, investors, people who want to collaborate on a project, etc)

Some things I'm going to add

a now page

an ideas page, that uses graphql queries and a random sample of my 10 ideas a day practice to show random ideas on each load

a help page that talks about a couple problems I'm working on, questions I'm dealing with, and provides a way for people to help me out

a here's how I can be helpful page that lists a couple easy things I can do for someone

a how I work page, that has kind of a [dalio/bridgewater](https://bridgewater.com) style inspiration

A list of people I drew inspiration from for this

- traf
- Tim Ferriss
- James Altucher
- Bilal Zaidi (creator lab)
- Patrick Collison
- Derek Sivers
- Austen Allred
- David Perell
- Julian Shapiro
- Medium.com

I started by making a list of all the changes I wanted to make.

Then I sat down with the blog, tabbing through all of these sites while tinkering with font sizes and scales.

I read a bunch of stuff about `rem vs em`, line heights, modular scales, etc.

```python
s = "Python syntax highlighting"
print s
```

I tried to clean up the css to really deliver a great experience (switched some stuff over to sass). [^1]

> Picked a font I was reasonably happy with - I'll probably change all of this again when I build font-finder. I'll write what I learned in short tips there, and use that as a small growth tactic for the app.

[^1] Footnote testing.