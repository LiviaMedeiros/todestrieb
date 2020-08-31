# This document
The point of this file is to explain Author's point of view on legal status of each file in repository.

# Terminology
- `Author` = [me](https://github.com/LiviaMedeiros)
- `Good People` ※ = Magica Quartet/Aniplex, Magia Record Partners
- `Third Parties` = Everyone else

※ No irony here.

# Repository tree
Let's consider `/docs/` to be root. Each directory includes all its descendants.

0. accompanying data:
    - *outside of root*, `/404.html`, `/favicon.ico`, `/CNAME`, `/manifest.json`, `/css/`
1. third-party files:
    - `/magica/js/libs/`
    - `/magica/json/font/`
2. the code:
    - `/magica/setup.html`
    - `/magica/js/sa/NA.js`
    - `/magica/css/browser.css`
3. everything else

`0` and `2` are made by Author and are distributed under [GNU AGPLv3](LICENSE).<br>
`1` are made by Third Parties and retain their terms.<br>
`3` belongs to Good People.

Any modifications of files in `3` made by Author are not moving ownership nor intellectual property rights away from Good People.<br>
Any files in `3` made by Author are considered to be a gift (i.e. all rights are transferred) to Good People.<br>
Files added in future may be added to any category, or even force creation of new one. Obviously, if new files are not listed in this document, they go into `3` by default.

For additional clarification, all files from `3` are based only on Gallery Mode of game which reached End of Service. It is not related to any gameplay features. It is not related to any online features. It is not related to any other version of the game (JP in particular).<br>
Modifications of original files are aimed only on performance optimization and following modern web standards, and only where needed.<br>
Files in `2` may have intentional partial resemblance with original but are not derived from it and do not include parts of it.<br>
Author encourages users to consider, understand and share the nature and intentions of this project; and to respect rights of Third Parties and Good People.

# Contacting
If you are from Third Parties and wish something, e.g. a particular notice to be added, feel free to contact Author for that.<br>
If you are from Good People, feel free to not only use anything here but also ask for sources, comments, etc.<br>
The right to adjust license model is reserved by the Author, and I am willing to make it as permissive for Good People as needed, if they want to.

# Contributing
`2` is the core code. `js/sa/NA.js` may look bad and there are no source maps: just deal with it.

You may contribute to html/css part for better crossbrowser support and accessibility, just make sure you know what you're doing.<br>
If you want to improve the js part without asking to make it more readable, send adjustments as patches.<br>
Unless it's about something really worth it, consider any files (including html/css ones) not from `2` to be immutable.<br>
By submitting anything to this project you totes agree with everything described here, and confirm that you understand all potential risks.
