---
sidebar_position: 2
title: Log In / Log Out
description: How to log in to SolidOS with your WebID and log out again
---

# Log In / Log Out

Logging in tells SolidOS who you are. After that it can show your private data and anything other people have shared with you, and lets you change things you are allowed to change.

## Log in

1. Select **Log In** in the top right corner.
2. The **Select an identity provider** dialog opens. The **Solid Identity Provider** field is filled in for you: with the provider you used last time, or otherwise with the site you are on.

   ![The Select an identity provider dialog](/img/ug-basics/login-dialog.png)

3. If that is not your provider, open the field and choose one from the list, or type your provider's address (for example `https://solidcommunity.net`).

   ![The list of suggested identity providers](/img/ug-basics/login-provider-list.png)

4. Select **Login**. Your browser goes to your provider's sign-in page.
5. Sign in there. Each provider has its own page; some offer passkeys or other ways to sign in besides a username and password. This is one example:

   ![An identity provider's sign-in page](/img/ug-basics/provider-sign-in-page.png)

6. Your browser comes back to the page you started from. In place of **Log In** and **Sign Up**, the header now shows your picture (or a placeholder) with a small arrow.

To leave the dialog without logging in, select **Cancel** or the close button.

## What changes after you log in

| | Logged out | Logged in |
|---|---|---|
| See public data | Yes | Yes |
| See your private data and data shared with you | No | Yes |
| **Add** button in folders you can write to | No | Yes |
| **Manage Access** in item menus | No | Yes, where you have control |
| Account menu (Profile, Friends, Storage, Dashboard, Preferences, Sign out) | No | Yes |

You stay logged in when you reload the page or come back to it later in the same browser.

## The account menu

Select your picture in the top right corner to open the account menu:

![The account menu](/img/ug-basics/account-menu.png)

- **Profile**: your profile. You can edit it from there.
- **Friends**: the people listed as friends in your profile.
- **Storage**: the top folder of your pod.
- **Dashboard**: a page for creating new things.
- **Preferences**: your [preferences](../reference/preferences.md), including your [user roles](../reference/user-roles.md).
- **Sign out**: log out.

## Log out

1. Select your picture in the top right corner.
2. Select **Sign out**.

You stay on the same page, now as a logged-out visitor: **Log In** and **Sign Up** are back, the **Add** button is gone, and only public data is shown.

![The same folder after signing out](/img/ug-basics/signed-out-folder.png)

Log out when you have used a shared computer.

## If logging in does not work

- Check that you chose the provider that issued your WebID. Your WebID usually starts with your provider's address, for example `https://alice.solidcommunity.net/profile/card#me` belongs to `https://solidcommunity.net`.
- If you have forgotten your password, ask your provider; SolidOS never sees it.
- If you are logged in but cannot open something, the owner may not have given you access to it.
