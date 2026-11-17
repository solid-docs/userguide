---
sidebar_position: 4
title: Creating Data
description: How to create folders, files and app data in your pod, upload files, and delete things
---

# Creating and Deleting Data

You can add things to any folder you are allowed to write to, and delete things you are allowed to delete. You need to be [logged in](login-logout.md).

## Add something to a folder

1. Open the folder in the [file explorer](../views/file-explorer.md). If you can write to it, an **Add** button is shown at the right of the bar above the items.
2. Select **Add**. A menu lists what you can create:

   ![The Add menu](/img/ug-basics/add-menu.png)

   - **New Tracker**: an issue tracker
   - **New Address Book**: an [address book](../views/addressbook.md) for contacts and groups
   - **New Long Chat**: a [chat](../views/longchat.md)
   - **New Dokieli Document**: a document you can write and publish with [dokieli](https://dokie.li/)
   - **New Folder**: an empty folder
   - **New File**: an empty file
   - **Upload**: a file from your computer

   With the Power user [role](../reference/user-roles.md) turned on, the menu also offers **New Notepad**, **New Meeting** and **New Schedulable Event**:

   ![The Add menu for a power user](/img/ug-basics/add-menu-power-user.png)

3. For anything except **Upload**, a dialog asks for a name. Type it and select **Create**.

   ![The New Folder dialog](/img/ug-basics/new-folder-dialog.png)

:::warning Use names without spaces
Use letters, numbers and hyphens, for example `holiday-photos`. SolidOS shows hyphens as spaces, so this folder is listed as "holiday photos". A name typed with a space can produce an address that some servers list incorrectly, after which the folder that holds it may fail to load.
:::

### What happens next

- **New Folder**: the folder appears in the current folder.
- **New File**: the file opens in an editor, ready for you to type. Give the name an ending that says what it is, such as `.txt` or `.md`.
- **New Address Book**, **New Long Chat**, **New Tracker**: each is created as a folder holding its data. It is listed in the current folder; click it to open the address book, chat or tracker.
- A new address book is private, even when you create it in a public folder:

  ![A new, empty address book marked Private](/img/ug-basics/new-address-book.png)

- A new tracker opens with a message saying its settings need an update. See the [issue tracker's documentation](https://github.com/solidos/issue-pane/blob/main/README.md).

## Upload files

- Select **Add**, then **Upload**, and choose one or more files on your computer, or
- drag files from your computer onto the items area of the folder.

The files are stored in the folder you are looking at. Folders cannot be dropped; upload the files inside them instead.

## Edit a text file

1. Open the file's **More options** menu (three dots) and choose **Source**.
2. Select the **Edit** button (pencil) in the item header.
3. Make your changes. An **Unsaved** label appears in the header.
4. Select **Save Changes**, or **Cancel** to throw your changes away.

![Editing a text file, with Cancel and Save Changes](/img/ug-basics/editing-a-text-file.png)

See [Source](../views/source.md) for more about the editor.

## Delete something

Deleting is done from **Under The Hood**.

1. Open the item's **More options** menu (three dots) and choose **Under The Hood**.
2. Select the red delete button (a white bar on a red circle) at the top right.

   ![Under The Hood for an image, with the red delete button at the top right](/img/ug-basics/under-the-hood.png)

3. A dialog asks **Are you sure you want to delete ...? This can't be undone.** Select **Delete**, or **Cancel** to keep it.

   ![The Delete resource dialog](/img/ug-basics/delete-confirm.png)

4. A message confirms that the item was deleted. Select **OK**.

   ![The Resource deleted message](/img/ug-basics/resource-deleted.png)

Deleting a folder deletes everything in it as well.

See [Under the Hood](../views/underthehood.md) for the rest of that view.
