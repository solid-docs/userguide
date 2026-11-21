---
sidebar_position: 13
title: File Explorer
description: Browsing folders in SolidOS - grid and list views, the folder tree and item menus
---

# File Explorer

SolidOS shows every folder in a pod in the file explorer. You can see it logged out on any public folder, for example the [test pod's top folder in the SolidOS Browser](https://solidos.org/docs/browser/?uri=https%3A%2F%2Ftestingsolidos.solidcommunity.net%2F).

![The file explorer showing the top folder of a pod, with the folder tree on the left](/img/ug-basics/pod-home-folder-tree.png)

## Parts of the file explorer

**The bar above the folder** shows, from left to right:

- the **breadcrumb**, the path to this folder (for example `Home / public`). Click any part of it to go to that folder.
- the **More options** button (three dots) for the folder itself
- the **Grid view** and **List view** buttons
- the **Add** button, only when you are logged in and allowed to add things to this folder. See [Creating data](../getting-started/creating-data.md).

**The items** in the folder, as cards or as rows. Folders show a folder icon and how many items they hold. Files show a file icon and their name.

**The access icons** on each item:

- a globe: public, anyone can read it
- a padlock: private, only you and the people you have given access can read it (shown only when you are logged in and can see it)

Names are shown the way they read best: a folder called `holiday-photos` is shown as "holiday photos".

## Grid and list

Select **Grid view** for cards or **List view** for a table with a **Name** and an **Actions** column.

![A folder in grid view, with folders, a picture and a text file](/img/ug-basics/folder-grid-view.png)

![A folder in list view](/img/ug-basics/folder-list-view.png)

## The folder tree

When you open the top folder of a pod, a folder tree appears on the left.

- Select the arrow next to a folder to expand or collapse it in the tree.
- Select a name to open that folder or item on the right. The tree stays, with the selected one highlighted.

![The folder tree with the public folder selected](/img/ug-basics/folder-tree-open-subfolder.png)

To make more room, select the small round button with the arrow at the edge of the tree to hide it. Select it again to bring the tree back.

![The file explorer with the folder tree hidden](/img/ug-basics/folder-sidebar-collapsed.png)

When you open a folder further down a pod directly, for example by pasting its address, the file explorer shows that folder without the tree.

## Opening an item

Click an item to open it in its usual view. Folders open in the file explorer; an image shows as a picture; a chat, address book or tracker opens in its own view.

![An image opened from a folder](/img/ug-basics/opened-image.png)

An opened item has a header with:

- a **back arrow** that returns you to the folder
- the item's icon and name
- when it was last changed, and a **Public** badge if anyone can read it
- the **More options** button (three dots)
- for some items, an **Edit** button (pencil)

## The More options menu

Each item, and the folder you are in, has a **More options** button (three dots). Its menu lists:

- the **views** that can show the item, for example **Contents** for a folder, **Image** for a picture, **View** for a web page or text file, **Address book** for an address book, and **Source** and **Under The Hood** for most things. Choose one to show the item that way. Which views appear depends on your [user roles](../reference/user-roles.md).
- **Open in New Tab**, which opens the item's own address in a new browser tab.
- **Manage Access**, when you are logged in and have control of the item. See [Sharing](sharing.md).

![The More options menu of an image](/img/ug-basics/item-more-options-menu.png)

The folder's own menu, in the bar above the items, works the same way for the folder you are in:

![The More options menu of the current folder](/img/ug-basics/folder-more-options-menu.png)

## Empty folders

A folder with nothing in it shows **This folder is empty**. If you are logged in and can write to it, use **Add** to put something in it.

## Related pages

- [Creating data](../getting-started/creating-data.md): add folders, files, uploads and app data, and delete things.
- [Navigation](../getting-started/navigation.md): the header, addresses and the account menu.
- [Under the Hood](underthehood.md): technical details about an item, and deleting it.
- [Sharing](sharing.md): who can see and change an item.
