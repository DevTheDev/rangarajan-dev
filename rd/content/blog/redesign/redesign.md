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

# Why you should do this

Having good design isn't just a question of style, but of substance.[^bignote]


> Picked a font I was reasonably happy with - I'll probably change all of this again when I build font-finder. I'll write what I learned in short tips there, and use that as a small growth tactic for the app.

# Wrangling web

Web design is tough - as barely a designer and barely a web programmer it's even more tough. 

That being said, I think most drag and drop editors enforce really bad habits (blurring lines between css and js, increasing size + load times).
As a marketer, nothing I hate more than writing a bunch of great funnel copy and then the page load time kills half your conversions.

So I started by finding people's sites who had elements I liked, and then figuring out how to recreate/approximate them in gatsby.

For example - the hero/signature font for this site is mostly ripped directly from Traf, but I had to build it from the ground up as a gatsby component (you can snag just the project dock from my github, should work with any gatsby site).

For the blog, I tried to follow typographic guidelines and styling. It's not perfect, and I'll make a second pass at some point.

Julian Shapiro writes beautiful handbooks with awesome graphics, but I especially love his minimalist navigation. He has almost a 2D thing for handbooks, with multiple pages and multiple sections.

I created my own toc version based off of his, but had to figure out how to get the page position in react/gatsby. I'll build the second layer later if I decide to write multi chapter content.

David Perrel has the coolest footnote styling, where it pops up on the side of the page as a note, so I tried to recreate that. I'm limited in that my content is all written in markdown files, so I can't just apply styling in specific cases.

# Other pages

Derek Sivers invented(?) the /now page. So I built one too, it's a cool idea.

I wanted a link in bio tool for instagram/clubhouse, so I made one at rangarajan.dev/links

Some other stuff was originated by this tweet of mine - thinking of your website like an api

Help page: 


[^1]: Footnote testing

[^bignote]: This is a big footnote
    it's really fukcing big
    here's how it looks