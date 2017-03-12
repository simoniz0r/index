---
title: discorddownloader
layout: discorddownloader
permalink: /discorddownloader
---

<head>
<style>
table {
    border-collapse: collapse;
    width: 100%;
}

td, th {
    border: 1px solid #000000;
    text-align: left;
    padding: 8px;
}

tr:nth-child(even) {
    background-color: #252525;
}
tr:nth-child(odd) {
	background-color: #353535;
}
</style>
</head>
<h1 align="center">discorddownloader</h1>
<h3 align="center">A bash script that will download, extract, and create symbolic links for all versions of Discord on any distro. It can also be used to update all versions of Discord just by going through the installation process again. This script can also install BetterDiscord and BeautifulDiscord.  If run into any problems, join the <a href="https://discord.gg/FFWVWPA" target="_blank">discorddownloader Discord Server</a> and ask for help in #dd-help.</h3> 
<br>
<br>
<center><img src="https://raw.githubusercontent.com/simoniz0r/discorddownloader/master/Screenshot.png"></center>
<br>
<br>
<table>
  <tr>
    <th>Downloads</th>
    <th>Usage</th>
    <th>Related links</th>
  </tr>
  <tr>
	<td valign="top"><h3 align="left"><a href="https://github.com/simoniz0r/discorddownloader/releases/latest" target="_blank">Releases Page</a></h3><h3 align="left"><a href="https://raw.githubusercontent.com/simoniz0r/discorddownloader/master/discorddownloader.sh" download>Direct Download</a></h3></td>
	<td valign="top"><h3 align="left">All of the install options require `wget`.</h3><h3 align="left">Run `discordownloader.sh` and select one of the installation options.</h3><h3 align="left">Some of the commands involved in the install process will require root access.</h3><h3 align="left">You do not need to run this script as root; you will be asked to input your password when root access is needed.</h3><h4 align="left">1. Discord Canary will be installed to either `/opt/DiscordCanary/` or the directory of your choice.</h4><h4 align="left">2. Discord PTB will be installed to either `/opt/DiscordPTB/` or the directory of your choice.</h4><h4 align="left">3. Discord Stable will be installed to either `/opt/Discord/` or the directory of your choice.</h4><h4 align="left">4. Install <a href="https://github.com/Jiiks/BetterDiscordApp" target="_blank">BetterDiscord</a> to existing Discord install directory (requires npm, nodejs, unzip).</h4><h4 align="left">5. Install <a href="https://github.com/leovoel/BeautifulDiscord" target="_blank">BeautifulDiscord</a> (requires python3.x, python3-pip).</h4><h4 align="left">6. Uninstall: choose the version of Discord to uninstall.</h4><h4 align="left">7. Exit script without installing.</h4><h3 align="left">Note: This script can only maintain one install directory of each Discord version.  You will be prompted to remove your previous install if you try to install the same version of Discord twice.</h3><h3 align="left">After your selected version of Discord has been installed, you will then be asked if you would like to install BetterDiscord or BeautifulDiscord.</h3><h4 align="left">1. Install [BetterDiscord](https://github.com/Jiiks/BetterDiscordApp) (requires npm, nodejs, unzip)</h4><h5 align="left">* BetterDiscord install uses <a href="https://github.com/Ckath/Discord-stuff/blob/master/scripts/tape.sh" target="_blank">tape.sh</a> to allow installation to any directory and with multiple Discord installs.</h5><h5 align="left">* BetterDiscord does not fully support Linux and may break at any time.</h5><h5 align="left">* If you install BetterDiscord, I recommend grabbing the <a href="https://github.com/IRDeNial/BD-Even-Better-Repo" target="_blank">Even Better Repo</a> plugin.  It allows you to install plugins and themes through the Discord Settings menu.</h5><h4 align="left">2. Install <a href="https://github.com/leovoel/BeautifulDiscord" target="_blank">BeautifulDiscord</a> (requires python3.x, python3-pip)</h4><h5 align="left">* BeautifulDiscord will be installed and the <a href="http://www.simonizor.gq/discordthemes">ArcDarkAutohideMod theme</a> will be downloaded to `~/.config/discorddownloader/ArcDarkAutohideMod.css`</h5><h5 align="left">* BeautifulDiscord requires `psutil`; the script will take care of installing it for you.  If you have an older version of psutil on your system, you should remove it before running this script or update it yourself using `pyton3-pip`</h5><h4 align="left">3. No thanks.  Just let me use Discord.</h4></td>
  <td valign="top"><h3 align="left"><a href="http://www.simonizor.gq/CHANGELOG">Changelog</a></h3><h3 align="left"><a href="http://www.simonizor.gq/CREDITS">Credits</a></h3></td>
  </tr>
</table>