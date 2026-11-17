---
sidebar_position: 1
title: Introduction
description: What SolidOS is and how to open it
---

# Introduction to SolidOS

[Solid](https://solidproject.org/) keeps your data in a **pod**, a personal data store on the web that you control, separate from the apps that use it. **SolidOS** is a data browser for pods. It shows what is in a pod (profiles, folders, files, address books, chats and more) and lets you create, edit and delete it.

This guide describes SolidOS 3.1.

## Key ideas

**Pod.** Your data store on the web. A pod is a set of folders and files, each with its own web address.

**WebID.** The web address that identifies you, for example `https://alice.solidcommunity.net/profile/card#me`. You log in with the identity provider that issued it.

**Views.** SolidOS shows each thing in a view that fits it: a profile as a profile page, a folder as a file explorer, an image as a picture, an address book as a contact list. Some things can be shown in more than one view; you pick another one from the item's menu (see [The file explorer](../views/file-explorer.md)).

## Two ways to open SolidOS

### From a pod

Many Solid servers show SolidOS when you open a pod address in your web browser. Which version you get depends on the server.

### From mashlib.com

[mashlib.com](https://mashlib.com/) runs SolidOS 3.1 and can show any pod. Paste the address of a pod, folder, profile or document into the address field at the top and select **Go**, or pick one of the examples below it.

![The mashlib.com start page with an address field and example links](/img/ug-basics/mashlib-start-page.png)

The address of what you are looking at stays in that field, so you can copy it, or change it and select **Go** again.

## What you see without logging in

Anyone can look at the public parts of a pod. This is the public profile of a test account:

![A public profile shown in SolidOS, logged out](/img/ug-basics/profile-logged-out.png)

And this is the top folder of the same pod. The owner's name and picture are shown above the folder.

![The top folder of a pod, with the folder tree on the left](/img/ug-basics/pod-home-folder-tree.png)

You can open both yourself:

- [The test profile on mashlib.com](https://mashlib.com/?uri=https%3A%2F%2Ftestingsolidos.solidcommunity.net%2Fprofile%2Fcard%23me)
- [The test pod's top folder on mashlib.com](https://mashlib.com/?uri=https%3A%2F%2Ftestingsolidos.solidcommunity.net%2F)

## Public and private data

- **Public** things can be read by anyone. In the file explorer they carry a globe icon.
- **Private** things can only be read by people who have been given access. When you are logged in and allowed to see them, they carry a padlock icon. When you are not, you see at most their name, with no item count and no icon.
- To see your private data, or data others have shared with you, [log in](login-logout.md).

## Getting a pod

Select **Sign Up** in the top right corner. It opens [solidproject.org/get_a_pod](https://solidproject.org/get_a_pod), which lists places that offer pods.

The login dialog also suggests these identity providers, each of which offers accounts:

- Solid Community: [solidcommunity.net](https://solidcommunity.net)
- Solid Web: [solidweb.org](https://solidweb.org)
- Solid Web ME: [solidweb.me](https://solidweb.me)
- Inrupt.com: [login.inrupt.com](https://login.inrupt.com)

You can also run your own server, for example [Community Solid Server](https://github.com/CommunitySolidServer/CommunitySolidServer) or [JavaScript Solid Server](https://github.com/JavaScriptSolidServer/JavaScriptSolidServer).

## Next steps

1. [Log in](login-logout.md) to see your private data.
2. [Find your way around](navigation.md) the header, menus and folders.
3. [Create data](creating-data.md): folders, files, uploads, address books and chats.
