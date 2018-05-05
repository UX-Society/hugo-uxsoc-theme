UXSoc Chapter Website Theme for Hugo

https://laughing-brattain-01ecb0.netlify.com/

# Quick Setup

This is basic set-up and assumes that yarn and hugo are already installed, if not check out the devplan.md file

**Install the needed packages for the server/yarn compiler in _/themes/hugo-uxsoc-theme_**
`yarn install`

**Run hugo server in same folder: _/themes/hugo-uxsoc-theme_**
`yarn run server`
access at http://localhost:1313/ 

**Run yarn to compile SASS into CSS also in _/themes/hugo-uxsoc-theme_**

`yarn run watch`

Use multiple terminal tabs to conveniently run both these tabs at once

# File Overview

**config.toml** contains all the content that the static site generator (hugo) fills into the page dynamically

**netlify.toml** used by the host https://www.netlify.com/ to specify the correct version of hugo

**content/** case-study files

**themes/hugo-uxsoc-theme/** Bulk of theme
`~` indicates that the previous path for a file/folder is this

**~/admu** the compiled site do *NOT* edit these files

**~/archetypes** template files for the site

**~/layout** html pages

**~/node_modules** the packages needed, not a direct part of the project (my be global instead)

**~/src** javascript and sass files

**~/static** fonts, images, and base javascript/css

**~/devplan.md** Outlines how to setup fully, and what need to be worked on

**~/package.json** All on the packages needed (*NOT* all the dependencies, that is auto-generated in ~/package-lock.json)

**~/theme.toml** theme template info

**~/hugo-version.json** designates the hugo version, which is downloaded by the package hugo-cli.
Available at https://github.com/UXSoc/hugo-cli for more documentation

# Tip

Use markdown preview to easliy read all the *.md files
To install: `npm install -g markdown-preview`

Open files with `markdown-preview <filename>`


 
