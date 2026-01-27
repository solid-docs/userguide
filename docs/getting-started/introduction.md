---
sidebar_position: 1
title: Introduction
description: Introduction to SolidOS and the Databrowser
---

# Introduction to SolidOS

[Solid](https://solidproject.org/) empowers users and organizations to separate their data from the applications that use it. It allows people to look at the same data with different apps at the same time. It opens brand new avenues for creativity, problem-solving, and commerce.

[SolidOS Databrowser Frontend](https://github.com/solidos), which we name SolidOS for simplicity, is your default interface to Solid. It provides all the functionality needed to manage data on Solid—from basic contact management and collaboration to complex research workflows.

## What Can You Do with SolidOS?

SolidOS enables you to:

| Feature | Description |
|---------|-------------|
| **Manage Contacts** | Create and organize [address books](/views/addressbook) with contacts and groups |
| **Collaborate** | Share [meetings](/views/meeting), [chats](/views/longchat), and [notepads](/views/notepad) with others |
| **Control Access** | Set fine-grained [permissions](/views/sharing) on who can see and edit your data |
| **View Your Profile** | Customize your [public profile](/views/profile) visible to others |
| **Organize Files** | Navigate and manage folders and resources in your Pod |
| **Schedule Events** | Coordinate availability with [scheduling polls](/views/scheduledevent) |

## Key Concepts

### Pods
A **Pod** (Personal Online Datastore) is your personal data storage on the web. You control who can access your Pod and what they can do with your data.

### WebID
Your **WebID** is your identity on the decentralized web—a URL that uniquely identifies you (e.g., `https://alice.solidcommunity.net/profile/card#me`).

### Views
SolidOS displays data through different **views** (also called panes). Each view presents data in a format suited to its type—contacts in an address book view, messages in a chat view, etc.

## Accessing Data

To access data stored in a Solid Pod:

1. In a web browser, navigate to the Pod URL (e.g., [`https://suser.solidcommunity.net`](https://suser.solidcommunity.net))
2. You'll see the public data within the Pod:

![Home View (Public)](/img/Public_Home.png)

Click the view icons below the header to see different presentations. For example, the Folder view:

![Folder View (Public)](/img/Public_Folder.png)

:::tip
Click the Solid logo in the top-left corner to return to the default Home view.
:::

## Public vs. Private Data

- **Public data** is visible to anyone who visits your Pod URL
- **Private data** requires [logging in](/getting-started/login-logout) and having appropriate permissions
- You control what's public and private via the [Sharing](/views/sharing) view

## Getting a Pod

To use SolidOS fully, you need a Solid Pod. You can get one from:

- [solidcommunity.net](https://solidcommunity.net) - Community-run Pod provider
- [inrupt.net](https://inrupt.net) - Hosted by Inrupt
- Self-hosted using [Community Solid Server](https://github.com/CommunitySolidServer/CommunitySolidServer)

## Next Steps

1. [Log in](/getting-started/login-logout) to access your private data
2. [Navigate](/getting-started/navigation) your Pod's folders and files
3. [Create data](/getting-started/creating-data) like contacts, chats, and meetings

:::note
- When viewing another person's Pod, add their Pod origin as a trusted app in your profile
- To use Developer or Power User features on other Pods, make your preferences file (`/settings/prefs.ttl`) world-readable
:::
