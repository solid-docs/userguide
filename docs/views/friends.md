---
sidebar_position: 5
title: Friends
description: User Guide for the Friends view
---

# Friends View

If you want to view your friends or add someone as a friend to your profile, using the `foaf:knows` predicate, you can use the Friends view.

![Friends View](/img/views/friends/Friends_view.png)

## View

To display your friends:

1. In the SolidOS Databrowser, select **Show your profile** in the top-right dropdown menu. Your profile is displayed.
2. Click the ![Friends](https://solidos.github.io/solid-ui/src/originalIcons/foaf/foafTiny.gif) Friends icon.

The view displays a list of your existing friends.

## Display a Friend's Profile

To display the public profile for an existing friend:

1. Click the ![Goto This](https://solidos.github.io/solid-ui/src/originalIcons/go-to-this.png) Goto This icon next to the user's Profile image/name.
2. The selected friend's public profile will open in a new tab.

## Add a New Friend

To add a new friend to the list:

1. Display the profile of your friend in a new web browser tab.
2. Click-and-drag the icon displayed to the left of the WebID in the web browser address bar onto the Friends list:

![WebID in Address Bar](/img/views/friends/addressbar.png)

3. If valid, the friend is added to the list.

:::tip
Make sure to use the whole WebID of the friend you are adding, including the `#me` or other fragment identifier.
:::

## Remove an Existing Friend

To remove an existing friend:

1. Hover the mouse pointer over the ![Goto This](https://solidos.github.io/solid-ui/src/originalIcons/go-to-this.png) Goto This icon next to the user's Profile image/name.
2. A ![Remove](https://solidos.github.io/solid-ui/src/icons/noun_2188_red.svg) Remove icon is displayed.
3. Click the Remove icon to remove the friend's WebID from the list.
