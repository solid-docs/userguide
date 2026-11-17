---
sidebar_position: 6
title: Meeting
description: Plan a meeting and keep its notes and chat together
---

# Meeting

A meeting keeps the details of a meeting, and tools such as shared notes and a chat, together in one place. Each tool is a tab on the left.

![A meeting with its tabs](/img/ug-views/meeting.png)

## Create a meeting

Creating a meeting needs the **Power user** user type. Open the account menu, choose **Preferences**, and select **Power user** under **Level of user**. See [User Roles](/reference/user-roles).

1. Open the folder where it should live.
2. Click **Add**, then **New Meeting**.
3. Type a name (without spaces) and click **Create**.

The meeting appears in the folder. Click it to open it.

## Meeting details

The first tab holds **Details of meeting**: name, location, start, end, comment and tab colour. Type in a field; the change is saved when you leave it. Once you give the meeting a name, the first tab shows it.

Below the details are **public link to this meeting** and **private link to this meeting**, and the people taking part.

## Add tools

Click the green **+** below the tabs. A row of icons opens. Click an icon to add that tool as a new tab:

![The row of tool icons](/img/ug-views/meeting-tools.png)

- **People**: a list of participants. It needs an address book listed in your pod's type index; without one it shows an error.
- **Calendar**: a poll to choose a date. See [Scheduled Event](/views/scheduledevent).
- **List**: an agenda. This one is switched off.
- **Notepad**: **Shared Notes**, a [notepad](/views/notepad) for the meeting.
- **Speech bubble**: **Chat**, a [chat](/views/chat) for the meeting.
- **Tick**: **Actions**, a list of action items.
- **Camera**: a video call.
- **Paper clip**: attach meeting materials.
- **Rainbow**: **Sharing**.
- **Arrows around people**: a meeting inside this meeting.

Click a tab to open its tool. The tip under the details says you can also drag the address of a web page onto the tab bar to add it as meeting material.

:::caution
Add the tools you want before you fill in the details. On the test pod used for this guide, tools added to a meeting whose details had already been saved did not come back after the page was reloaded.
:::

## Known problems

**Shared Notes** and **Chat** work. On the test pod used for this guide, **Actions** showed "Cannot load state store", and the **Sharing** tab left the meeting and showed the folder instead. To change who can open the meeting, use [Manage Access](/views/manage-access).
