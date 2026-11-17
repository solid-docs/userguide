---
sidebar_position: 10
title: Sharing
description: The older Sharing panel that some apps still show
---

# Sharing

In SolidOS 3.1 you control who can see or change an item with [Manage Access](/views/manage-access). Some apps still show the older **Sharing** panel described here. The [Address Book](/views/addressbook) shows it when you choose **Sharing** from its three-dot menu at the top right.

![The Sharing panel of an address book](/img/ug-views/sharing.png)

## What the panel shows

The panel lists five groups, each with what its members may do:

| Group | Can |
|-------|-----|
| **Owners** | read, write, and control sharing |
| **Editors** | read and change information |
| **Posters** | add new information, and read but not change existing information |
| **Submitters** | add new information but not read any |
| **Viewers** | read but not change information |

Each person in a group is shown with their name and a link icon.

## Controls

- The green **+** opens a row of icons for the kinds of agent that can be added.
- A button **Set the sharing of folder contents separately from the sharing for the folder**.
- A button **Remove custom sharing settings for this book -- just use default for public**.

When you create a group in an address book, the right side shows **Sharing for group** with the same groups and a **Set specific sharing for this group** button.

:::caution
On the test pod used for this guide, changes made in this panel were not saved: the server refused the change. If that happens, use [Manage Access](/views/manage-access).
:::
