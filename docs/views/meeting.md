---
sidebar_position: 6
title: Meeting
description: User Guide for the Meeting view
---

# Meeting View

The Meeting view, also known as Meetulater, allows you to schedule a meeting with multiple attendees, and capture information related to the meeting.

## View

To view an existing meeting:

1. In the SolidOS Databrowser, navigate to and click on the meeting.
2. If valid, the meeting details are displayed in a Meeting view:

![Meeting (Meetulater)](/img/views/meeting/Meeting_View.png)

Each meeting can have:

- A title
- A location
- Start and end dates
- General meeting comments
- Optional set of tools for capturing additional meeting details

Additionally, you can:

- Set the background colour of the tabs
- Create a **Public link to this meeting** - If selected, a link to the meeting is shown under **Public Things** on your Dashboard
- Include a **Personal note of this meeting**

:::tip
If you have edit permissions to the meeting, any edits you make are immediately saved.
:::

## Attendees

Attendees can be added to the meeting. To invite the first attendee:

1. Highlight a WebID.
2. Drag-and-drop the WebID onto the meeting tab bar.
3. An **Attendees** tab will be created.

To invite more attendees:

1. Make sure the **Attendees** tab is active.
2. The list of existing meeting attendees is displayed in an [Address Book](/views/addressbook) group.
3. Highlight a WebID.
4. Drag-and-drop the WebID onto the tab bar.
5. The new attendee will be added to the meeting.

:::tip
You may need to refresh the web page to see new meeting attendees.
:::

## Add Tools

In addition to the basic meeting information and tools, you can add more tools to the meeting to capture additional details:

1. Click the ![Add](https://solidos.github.io/solid-ui/src/icons/noun_19460_green.svg) icon below the displayed meeting.
2. Several icons are displayed showing the tools that can be added:
   - ![Participants](https://solidos.github.io/solid-ui/src/icons/noun_339237.svg) **Participants** - Lists everyone who has joined the meeting
   - ![Schedule Poll](https://solidos.github.io/solid-ui/src/icons/noun_346777.svg) **Schedule Poll** - Setup a poll of users on when to schedule another meeting
   - ![Agenda](https://solidos.github.io/solid-ui/src/icons/noun_48218.svg) **Agenda** - Setup a meeting agenda *(Note: This functionality is currently disabled)*
   - ![Shared Notes](https://solidos.github.io/solid-ui/src/icons/noun_79217.svg) **Shared Notes** - A shared multi-user [Note Pad](/views/notepad)
   - ![Chat](https://solidos.github.io/solid-ui/src/icons/noun_346319.svg) **[Chat](/views/chat)** - A short chat session
   - ![Actions](https://solidos.github.io/solid-ui/src/icons/noun_17020.svg) **Actions** - [Issue Tracker](https://github.com/solidos/issue-pane/blob/main/README.md) to track issues and action items
   - ![Video Call](https://solidos.github.io/solid-ui/src/icons/noun_260227.svg) **Video Call** - Conduct a video call for the meeting *(Note: Availability depends on browser iFrame rules and camera permissions)*
   - ![Sharing](https://solidos.github.io/solid-ui/src/icons/noun_123691.svg) **[Sharing](/views/sharing)** - Display/update the sharing permissions for the meeting
   - ![Meeting](https://solidos.github.io/solid-ui/src/icons/noun_66617.svg) **Meeting** - Setup another meeting
3. Click the appropriate icon for the tool you want to add.
4. If appropriate, a new tab for the selected tool is added to the tab bar for the meeting.
5. Click on the tool tab to activate/display the tool.

## Add Meeting Materials

For reference, meeting materials available via a URL can be added to the meeting:

1. Highlight the web page URL for the material.
2. Drag-and-drop the URL onto the tab bar.
3. If appropriate, a new tab for the material is added to the tab bar for the meeting.
4. Click on the appropriate materials tab to display the material.
5. Where possible, the material is displayed in an [iFrame](https://www.w3.org/TR/2011/WD-html5-20110525/the-iframe-element.html#the-iframe-element) within your web browser.

:::tip
To resize the iFrame containing the material, use the resizing bar in the bottom-right corner of the iFrame.
:::
