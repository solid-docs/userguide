---
sidebar_position: 1
title: Views Overview
description: How SolidOS picks a view for each item, and the views available in SolidOS 3.1
---

# Views Overview

SolidOS shows every item in your pod (a folder, a file, a profile, an address book, a chat) in a *view*. A view is also called a *pane*. SolidOS picks the best view for the item when you open it, and you can switch to another one.

## The item header

When you open a file or an app, a header runs across the top:

- **Back arrow**: returns to the folder you came from.
- **Name**, the date it was last changed, and a **Public** or **Private** badge.
- **Manage access** (the person icon): who can see or change the item. See [Manage Access](/views/manage-access).
- **Edit** (the pencil): shown in the Source view of a file you can change. See [Source](/views/source).
- **More options** (the three dots): the list of views for this item.

## Switching views

Click **More options** (the three dots) in the header. The menu lists the views that fit the item, plus **Open in New Tab**. Click a view to show it.

![The More options menu of a Turtle file, listing Data, Source, Data as N3, As RDF/XML, About, Under The Hood and Open in New Tab](/img/ug-views/overview-more-options.png)

Folders have their own three-dot menu next to the grid and list buttons. See [File Explorer](/views/file-explorer).

## Views in SolidOS 3.1

Which views you see depends on the user types you choose under **Preferences** in the account menu. See [User Roles](/reference/user-roles).

| View | What it shows | Who sees it |
|------|---------------|-------------|
| Folder | The contents of a folder as a grid or a list. See [File Explorer](/views/file-explorer) | Everyone |
| [Profile](/views/profile) | A person's public profile | Everyone |
| [Friends](/views/friends) | The people your profile says you know | Everyone, from the account menu |
| [Address Book](/views/addressbook) | Contacts and groups | Everyone |
| [Long Chat](/views/longchat) | A chat room | Everyone |
| [Chat](/views/chat) | The short chat used inside meetings | Power user |
| [Meeting](/views/meeting) | A meeting with tabs for notes, chat and other tools | Power user, to create one |
| [Notepad](/views/notepad) | A shared notepad | Power user, to create one |
| [Scheduled Event](/views/scheduledevent) | A poll to agree a date | Power user, to create one |
| View | A Markdown or HTML file shown as a formatted page | Everyone |
| Image | A picture file | Everyone |
| [Source](/views/source) | The text of a file, with an editor | Everyone |
| [Under The Hood](/views/underthehood) | Technical details, and the delete button | Everyone |
| Data, Data as N3, As RDF/XML, About | The linked data in a file, in different forms | Developer |

![A Markdown file shown in the View view](/img/ug-views/overview-markdown.png)

## Creating new things

In a folder, click **Add**. The menu lists what you can create there. With no user type chosen it offers a tracker, an address book, a long chat, a Dokieli document, a folder, a file and an upload. Choose **Power user** in Preferences to add **New Notepad**, **New Meeting** and **New Schedulable Event**.

![The Add menu with Power user chosen](/img/ug-views/add-menu-power-user.png)

Each choice asks for a name and adds the new item to the folder. Use a name without spaces: on the test pod used for this guide, a name with spaces stopped the folder from loading.

Opening something that already exists, such as a notepad or a meeting, works without Power user.

## Sharing

To control who can see an item, use [Manage Access](/views/manage-access). Some apps also show the older [Sharing](/views/sharing) panel.
