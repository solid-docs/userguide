---
sidebar_position: 10
title: Sharing
description: User Guide for the Sharing view
---

# Sharing View

Solid allows you to control who can access folders and data resources within your Pod, and what permission they have — i.e., read, create, update, and/or delete.

## View

To display the Sharing view for a folder or data resource:

1. In the SolidOS Databrowser, navigate to the resource.
2. Select the ![Sharing](https://solidos.github.io/solid-ui/src/icons/padlock-timbl.svg) Sharing view.
3. The Sharing settings for the selected resource are displayed:

![Sharing View](/img/views/sharing/Sharing_View.png)

For each of the Sharing groups - Owners, Editors, Posters, Submitters, Viewers - the Sharing view displays the group members and the assigned permissions.

:::tip
Clicking the ![Goto](https://solidos.github.io/solid-ui/src/originalIcons/go-to-this.png) Goto icon next to the user's Profile image/name will display the user's profile.
:::

## Specific Sharing for a Resource

By default, resources within a folder inherit the permissions from the parent folder.

To set specific sharing for the resource:

1. Click the **Set the sharing of folder contents separately from the sharing for the folder** button.
2. This causes the sharing groups (Owners, Editors, Posters, Submitters, Viewers) for the specific resource to be displayed.

To reset the sharing for the resource back to the default:

1. Click the **Stop specific sharing for this folder/file** button.

## Custom Sharing

The sharing permissions for a given resource can be updated to provide access to specific users, groups, bots, authenticated agents, trusted applications, or even everyone.

### Add

To add a user/group/bot as Viewers:

1. Click the ![Add](https://solidos.github.io/solid-ui/src/icons/noun_34653_green.svg) Add icon.
2. Icons are displayed for each of the entities that can be given access to the resource:
   - ![User](https://solidos.github.io/solid-ui/src/icons/noun_15059.svg) **User**
   - ![Group](https://solidos.github.io/solid-ui/src/icons/noun_339237.svg) **Group**
   - ![Everyone](https://solidos.github.io/solid-ui/src/icons/noun_98053.svg) **Everyone**
   - ![Authenticated Agent](https://solidos.github.io/solid-ui/src/icons/noun_99101.svg) **Authenticated Agent**
   - ![Bot](https://solidos.github.io/solid-ui/src/icons/noun_Robot_849764.svg) **Bot**
   - ![Trusted Applications](https://solidos.github.io/solid-ui/src/icons/noun_15177.svg) **Trusted Applications**
3. Select the entity type for which you want to provide access.
   - If a User, Group, or Bot is selected:
     1. A text box is displayed allowing the URI for the entity to be entered.
     2. Enter the URI for the entity and click ![Continue](https://solidos.github.io/solid-ui/src/icons/noun_1180158.svg) Continue.
     3. The entered entity is added as a Viewer.
   - If Everyone or Authenticated Agent is selected:
     1. Everyone or Authenticated Agent is immediately added as a Viewer.
   - If Trusted Applications is selected:
     1. A list of your trusted applications is displayed.
     2. Select the Trusted Applications you want to give access.
     3. The selected Trusted Applications are added as Viewers.
4. Once added, the sharing access of the entity can be adjusted.

:::tip
To add an entity directly to a specific sharing group, either:
- Click-and-drag the URI for the entity onto the sharing group; or,
- Enter and display the URI for the entity in a new browser tab, and then click-and-drag the icon displayed to the left of the URI in the web browser address bar onto the sharing group:

![WebID in Address Bar](/img/views/sharing/addressbar.png)
:::

### Adjust

To move an entity between sharing groups:

1. Click-and-drag the entity between the sharing groups.

### Remove

To remove an entity from a sharing group:

1. Hover the mouse pointer over the ![Goto This](https://solidos.github.io/solid-ui/src/originalIcons/go-to-this.png) Goto This icon next to the user's Profile image/name.
2. A ![Remove](https://solidos.github.io/solid-ui/src/icons/noun_2188_red.svg) Remove icon is displayed.
3. Click the Remove icon to remove the sharing access for the entity.
