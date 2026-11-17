---
sidebar_position: 12
title: Under the Hood
description: Technical details of an item, and the delete button
---

# Under the Hood

The Under The Hood view shows a few technical details about an item, and has the button that deletes it. It is in the **More options** menu of every file and folder; you do not need a special user type.

![Under The Hood for a Turtle file](/img/ug-views/underthehood.png)

## Open it

1. Open the file.
2. Click **More options** (the three dots) at the top right.
3. Choose **Under The Hood**.

## What it shows

- **Uri**: the item's name and a link icon. A green dot before the name means SolidOS fetched it without problems.
- **Editable**: how SolidOS writes changes to the item, here **SPARQL**.
- A red **minus** button: delete.
- A refresh button.

## Delete a file

1. Open **Under The Hood** for the file.
2. Click the red minus button (**Remove this file**).
3. A **Delete resource** dialog asks if you are sure. Click **Delete**, or **Cancel**.

After the delete, SolidOS shows the folder the file was in.

![The Delete resource dialog](/img/ug-views/underthehood-delete.png)

:::warning
Deleting cannot be undone.
:::
