---
sidebar_position: 2
title: Preferences
description: Your SolidOS preferences - user roles, trusted applications and deleting your account
---

# Preferences

The Preferences page holds your user roles, the applications you trust, and, on some servers, a link to delete your account. Only you can see it.

## Opening Preferences

1. [Log in](../getting-started/login-logout.md).
2. Select your picture in the top right corner.
3. Select **Preferences**.

![The Preferences page with both user roles selected](/img/ug-basics/preferences-roles-selected.png)

## User types

**Level of user** is a list with two roles, **Power user** and **Developer**. Selected roles are highlighted. Select one to turn it on; to choose both, hold Ctrl (Command on a Mac) or Shift while you select. Your choice is saved in your pod.

Roles add views and kinds of new things to SolidOS; they never take any away. See [User Roles](user-roles.md) for what each one adds.

## Manage your trusted applications

This table lists other web applications that may use your pod on your behalf, and what each may do: **Read**, **Write**, **Append** and **Control**.

The last row of the table is for a new entry: a field for the application's address (for example `https://trusted.app`), tick boxes for its access modes, and an **Add** button.

The notes on the page explain the limits:

1. Trusted applications get access to all resources that you have access to.
2. You can limit which modes they have by default.
3. They will not gain more access than you have.

Whether a server uses this list, and whether SolidOS itself needs an entry, depends on the server.

## Delete account

When your pod's server offers a page for deleting accounts, this section shows a link to it. Otherwise the section is empty, and you need to ask your provider how to delete your account.

:::warning
Deleting your account deletes all of your data. It cannot be undone.
:::
