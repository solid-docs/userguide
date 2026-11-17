---
sidebar_position: 1
title: User Roles
description: How the Power user and Developer roles change what SolidOS offers
---

# User Roles

SolidOS can show the same thing in many views. To keep menus short, some views, and some kinds of new things, are offered only to people who have turned on a role:

- **Power user**: extra views and extra things to create, such as notepads, meetings and scheduling polls.
- **Developer**: views of the raw data behind a thing.

With no role turned on you get the standard views. Roles only add; they never take anything away.

:::note
If the best view for a thing needs a role you have not turned on, SolidOS still opens the thing in that view. The role only decides whether the view is listed in menus.
:::

## Setting your roles

1. [Log in](../getting-started/login-logout.md).
2. Select your picture in the top right corner, then **Preferences**.
3. Under **Level of user**, select **Power user**, **Developer**, or both (hold Ctrl, Command on a Mac, or Shift to select both).

Your roles are stored in your pod and are private. See [Preferences](preferences.md).

## What each role adds

### In the Add menu

| Item | Needs |
|------|-------|
| New Tracker, New Address Book, New Long Chat, New Dokieli Document, New Folder, New File, Upload | No role |
| New Notepad, New Meeting, New Schedulable Event | Power user |

![The Add menu with the Power user role turned on](/img/ug-basics/add-menu-power-user.png)

### In the More options menu

The top of an item's **More options** menu lists the views that can show it. These are some of the names you will see there:

| View | Shows | Needs |
|------|-------|-------|
| Contents | A folder in the [file explorer](../views/file-explorer.md) | No role |
| Image | A picture | No role |
| View | A web page, Markdown or text file | No role |
| Address book, Contact | An [address book](../views/addressbook.md) or one contact | No role |
| Chat channnel (spelled this way in the menu) | A [chat](../views/longchat.md) | No role |
| Tracker | An issue tracker | No role |
| Friends | The friends listed in a profile | No role |
| Source | The item's raw text, which you can [edit](../views/source.md) | No role |
| Under The Hood | Technical details, and [deleting](../getting-started/creating-data.md#delete-something) | No role |
| Notepad | A shared [notepad](../views/notepad.md) | Power user |
| Meeting | A [meeting](../views/meeting.md) | Power user |
| Scheduling poll | A [scheduling poll](../views/scheduledevent.md) | Power user |
| Slideshow | The pictures in a folder, one at a time | Power user |
| About, Data, Data as N3, As RDF/XML | The data behind the item, as tables or as text | Developer |

This is the More options menu of a text file for someone with the Developer role. **About** is the Developer view:

![More options menu of a text file with the Developer role](/img/ug-basics/more-options-developer.png)

**Manage Access** appears in the same menu whenever you are logged in and have control of the item; it does not depend on a role.
