[<img src="https://todestrieb.magica-us.com/img/gallery.png" />](https://todestrieb.magica-us.com)

Unofficial web version of Magia Record English: standalone Gallery Mode.

![deployment](https://github.com/LiviaMedeiros/todestrieb/actions/workflows/pages/pages-build-deployment/badge.svg)

# Key features
- ***Magical Girls Gallery in your browser!***
  - No need to install the app, no need to use emulator.
  - Supports PC, mobile devices, smart TV, bank terminals and more.
- ***Get them on the fly!***
  - No need to permanently store ~6GB of gamedata on your device. ※
- ***Easy to "transfer"!***
  - Just drop your file and the gallery is ready.
  - Import on one device doesn't remove your data on another.
  - Can be used simultaneously on multiple devices.
  - Can be used simultaneously with original app. ※
- ***No region lock!***
  - Accessible outside of NA: no proxy required, no country code.
- ***Bugfixes!***
  - No more ★5 cosplay from capped girls.
  - No terrible lags nor crashes if you have too many units.
  - EX Skills look pretty again.
  - No blackscreen problem.
  - "Too sensitive" tap-after-scroll behaviour can be disabled.
- ***Better appearance!***
  - Web version uses fonts from the playable game, not from v1.2.0. ※※
- ***Suffer alone!***
  - No multiplayer, no connections to server API to play.
  - Be aware that the server support for the original app may be discontinued eventually.
- ***Works offline!***
  - Once launched and cached, the gallery might work without internet connection.
  - Supports installing to improve offline experience even further.
- ***No sounds, no videos!***
  - It's easy to implement, but <s>unless I'll get explicit permission from Aniplex</s> there will be no sound effects, no [Inevitabilis](https://www.madoka-magica.com/tv/bddvd/cd_st.html) as BGM, and no transformation videos in this version.
- ***Accessibility!***
  - Supports mouse, supports mousewheel, touch effects are ported.
  - Supports basic keyboard interaction: Tab, Shift+Tab, Enter, PgUp, PgDown, etc.
  - Supports native "back" button on mobile devices.
  - Supports "history back" and "history forward" browser functions.
- ***Adjustability!***
  - See [Adjustments section](#adjustments).
- ***Hidden features!***
  - And easter eggs. Find them by your own.
- ***More features in the futures!*** Perhaps.

※ Deletion of original app is not recommended.<br>
※※ The playable game used the following font: Koruri (TrueType Font).


# Limitations
- Recommended screen ratio is between 4:3 and 128:75, recommended window width for desktop mode is 1024 (i.e. from 1024x600 to 1024x768).
- Extra screen height will just add a gap, lack of height may cause inconvenience. See [Android installation](#android-installation).
- Internet connection is required for the first launch. Offline navigation is possible but limited by amount of fully loaded Magical Girls.
- Recommended browsers: anything modern but WebKit-based is most preferable.
- At this moment, the goal of this project is to preserve the Gallery and fix its issues. Not to make it more functional.
- I do not store/collect/process any personal data via web version. However, any induced emotions may be used to adjust the entropy.

# Getting Started
To use web Gallery, you must import your list of Magical Girls first. There are two ways to do that, choose one:

1. Locate the text file somewhere in `/data/data/com.aniplex.magireco.en/files/` on your device with working Magia Record English.
2. Use [NAgitan](https://xn--80aalyho.xn--p1ai/magireco/NAgitan/acceptance) to export data from your `user.zip` backup, and save that data by clicking on bottom right corner of page.<br>
<img src="https://todestrieb.magica-us.com/img/tutorial/NAgitan.png" />

※ Import via file is not a transfer: if you kept the file copy in original location, it will still allow playing the original app as well.<br>
※ The file starts with `{"data":{` and must be less than 4KB. Do not throw wrong files.

Then visit the [import page](https://todestrieb.magica-us.com/setup).

Click basically anywhere in the middle of screen, or drag&drop the file. On mobile devices, it may ask you for a permission to upload.<br>
To delete your data, doubleclick the "back" button.

## Android installation
Unfortunately, browsing on mobile devices in landscape mode may be hard: small screen height is reduced to nothing by status bar, address bar, tabs bar and so on.<br>
On top of that, some bars are breaking page layout. So instead of futile efforts to fit the gallery in a narrow ribbon, the most recommended way is to view the Gallery is via shortcut.

If you use Google Chrome on Android device, you can visit the [Gallery](https://todestrieb.magica-us.com/), open menu (`⋮`) and select "Add to Homu screen".<br>
<img src="https://todestrieb.magica-us.com/img/tutorial/homuscreen.png" /><br>
That's all: The Gallery can be opened directly as standalone app, without address bar.<br>
Similar features are supported by other browsers and operating systems. Also you can do the same thing ("create shortcut") on PC, and adjust the window size to your preferences.

Additionally, the gallery can be installed as a standalone application. This is the most preferable way to use it on both mobile and desktop devices.

※ This method doesn't go fullscreen, i.e. remove the status bar (with clock and battery) nor navigation bar (Back, Home and App Overview).<br>
The reason behind preserving status bar is that it can't be removed without hiding navigation bar as well.<br>
The reason behind preserving navigation bar is a bug on some devices: they intercept any touch as "reveal navbar" command, and hide it again by timeout.

Full-fledged PWA, as well as a number of different options to make it installable, portable and accessible offline, are rejected for several reasons. One of them is that official app already covers that.

# Adjustments
Setup page allows to adjust some settings. Click on Gear Icon (<img src="https://todestrieb.magica-us.com/img/misc/global_etc.png" valign="middle" height="20" />) to open. Doubleclick on Homushield (<img src="https://todestrieb.magica-us.com/img/misc/icon_reset.png" valign="middle" height="20" />) to reset.
- `fix scrollbug` is an optional fix for touch devices: when you tap on someone in the list and scroll, it doesn't open that someone. This bug still happens in live JP game (especially on some emulators) so the fix is not enabled by default.
- `fix titlebug` fixes unit titles (e.g. "Kimono") by adding brackets and extra spacing.
- `keep statbug` brings back ★★★★★ish stats for capped girls.
- `keep exbug` brings back a visual glitch for EX Skills.
- `limit width` keeps the width as 1024px instead of streching to full screen.
- `limit height` keeps the main list in the normal view area, disallowing it to stretch out of it if your window has more height than needed (i.e. desktop or portrait orientation).
- `hide missing` purges all Magical Girls that you didn't pull.
- `show kana` enables hiragana transcript in the list.

Also there are hidden adjustments. They can be enabled by using a method described in the next section.

# Testing
If for some reason you don't have the file (e.g. if you played only JP and want to experience the suffering of NA players) or want to test, erase the contents of AP counter and type a cheatcode, without quotes or spaces. For example, `mackingham` adds all reputable M-Girls. `f4samurai` restores stat calculation bug, EX skill bug, sensitive scroll and wrong font. Of course there are (and will be) more of these.

Another option is to visit [demo version](https://todestrieb.magica-us.com/mackingham) first.

※ Using cheats will reset your Magical Girls list, and may force state of some settings.

# Contributing
The Gallery code follows the **D**espair **O**riented **P**rinciples of **P**rogram **E**ngineering **L**aws. Contributions must follow them as well.<br>
Otherwise the contribution may be rejected without explanation.

If you still wish to participate, read [Contributing guide](CONTRIBUTING.md) first.

# License
No, don't just read [License file](LICENSE). And do not assume that its text is applied to the whole repository.
Instead, still read [Contributing guide](CONTRIBUTING.md). Its main purpose is to explain license status of each file.

# Copyright notice
`Todestrieb`: Magical Girls Gallery<br>
© 2021 LiviaMedeiros

Based on [Magia Record: Puella Magi Madoka Magica Gaiden](https://magiarecord-en.com/) — Copyright by Magica Quartet/Aniplex, Magia Record Partners
