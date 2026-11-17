---
sidebar_position: 11
title: Source
description: View and edit the text of a file in your pod
---

# Source

The Source view shows the text of a file, such as a Turtle (`.ttl`) data file or a Markdown (`.md`) file, in an editor with line numbers and colours. If you can change the file, you can edit and save it here.

![A Turtle file in the Source view](/img/ug-views/source.png)

## Open the Source view

A Turtle file newly created with **Add** > **New File** opens in the Source view. Otherwise:

1. Open the file.
2. Click **More options** (the three dots) at the top right.
3. Choose **Source**.

## Edit a file

1. Click **Edit** (the pencil) in the header.
2. Change the text.
3. Click **Save Changes**, or **Cancel** to throw the change away. **Cancel** shows "Source changes canceled."

While you have unsaved changes, an **Unsaved** badge shows in the header.

![Editing a Turtle file](/img/ug-views/source-edit.png)

### Mistakes in data files

For a Turtle file, SolidOS checks the text when you click **Save Changes**. If there is a mistake, it does not save, and shows a message with the line number. Fix the line and save again, or click **Cancel**.

![The message for a mistake on line 15](/img/ug-views/source-error.png)

## Prettify

**Prettify**, below the editor, rewrites a Turtle file in a tidier layout and drops prefixes the file does not use. The result is marked **Unsaved**; the file in your pod is not changed by Prettify alone.

## Who can edit

You need write access to the file to save changes. See [Manage Access](/views/manage-access).
