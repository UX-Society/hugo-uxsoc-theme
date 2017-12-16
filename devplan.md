# Dev Plan

## The Problem
The original concept was to have one, global UXSoc website that all chapters would contribute to.
However, UX Society as a whole could run into the following problems with the original setup:
- A new UX Society chapter does not have a consultancy team, so why would they have a work section?
- A new UX Society chapter decides to hold events every week, so who is in charge of updating the events on the global UXSoc site?

Having each chapter have a modular theme that they can host as well as having a global UXSoc theme can alleviate these problems.
Content will be more streamlined to each chapter and work for updating the website can be easily delegated to UX Society officers.
In the end, this website should serve as a resource that contributes to UX Society's global vision, together with resources like the branding manual.

## Requirements
The [Hugo framework](http://gohugo.io/) shall be used to create a UXSoc theme that modularizes sections of the website.
This is so that in the future, chapters shall be able to enable/disable particular sections of the website depending on their needs.
These sections of the website shall be configured through a configuration file (config.toml).

Each chapter shall be responsible for hosting this site, modifying it, and administering it. The sites shall be hosted under these domain names like so:
- admu.uxsociety.org
- addu.uxsociety.org
- chapmanu.uxsociety.org
- dlsu.uxsociety.org

There shall also be a global version of this website which will be administered by chapter heads, hosted under:
- uxsociety.org

### Setting up your dev environment

**1. You will need to [install Hugo](https://gohugo.io/getting-started/installing/).**

For Mac, if you have Homebrew already installed: `brew install hugo`

For Windows, if you have Chocolatey already installed: `choco install hugo -confirm`

**2. You will need to [install Yarn](https://yarnpkg.com/lang/en/docs/install/).**

Yarn replaces npm as our package manager. This is used to do a lot of things like:
- Installing bootstrap
- Linting javascript
- Compiling SCSS into CSS
- Using modular scale to help with media queries

For Mac, if you have Homebrew already installed: `brew install yarn`

For Windows, if you have Chocolatey already installed: `choco install yarn`

**3. You will need to clone this repository onto your local machine. Do this any way you like.**

You can do this easily through the command line: `git clone https://github.com/UXSoc/hugo-uxsoc-theme.git`

**4. Go into `themes/hugo-uxsoc-theme` and type:**

`yarn install`
This will install the packages through yarn.

`yarn run watch`
This is a script that watches for changes and compiles SCSS into CSS. Please have this running at all times when you're coding.

**5. Go back into the root directory and start the Hugo server:**

```
cd ../..
hugo server
```

## Team
- ChapmanU
  - Xavi Ablaza
  - Michael Pollind
- ADMU
  - Vince Vertulfo
  - Levy Medina
  - Royce Chan
- ADDU
  - ?
- DLSU
  - ?
