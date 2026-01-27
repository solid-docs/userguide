---
sidebar_position: 7
title: Note Pad
description: User Guide for the Note Pad view
---

# Note Pad View

The Note Pad view provides a collaborative notepad for real-time shared note-taking. Multiple users can edit the same document simultaneously, with changes synchronized across all participants.

## Features

- Real-time collaborative editing
- Multiple users can edit simultaneously
- Changes sync automatically across sessions
- Notes stored in your Solid Pod
- Configurable access control

## Creating a Notepad

To create a new notepad:

1. Navigate to the folder where you want to create the notepad
2. Click the ![Create](https://solidos.github.io/solid-ui/src/icons/noun_34653_green.svg) Create icon
3. Select ![Note Pad](https://solidos.github.io/solid-ui/src/icons/noun_79217.svg) **Note Pad**
4. Enter a name for your notepad
5. Click ![Continue](https://solidos.github.io/solid-ui/src/icons/noun_1180158.svg) Continue

You can also specify a custom URI location for the notepad.

## Editing Notes

Once created, simply click in the notepad area and start typing:

- Changes are saved automatically
- Other participants see updates in real-time
- No explicit save button needed

## Collaboration

### Sharing a Notepad

To collaborate with others:

1. Open the notepad's [Sharing](/views/sharing) view
2. Add participants with appropriate permissions:
   - **Read/Write** - Can view and edit
   - **Read only** - Can view but not edit
3. Share the notepad URL with participants

### Real-time Sync

When multiple users edit the same notepad:

- Changes appear instantly for all participants
- Each user's cursor position is independent
- Conflicts are handled automatically

## Access Control

Notepads support flexible access control:

| Access Level | Can View | Can Edit |
|--------------|:--------:|:--------:|
| Owner | Yes | Yes |
| Read/Write | Yes | Yes |
| Read only | Yes | No |
| No access | No | No |

Configure access via the [Sharing](/views/sharing) view.

## Starting Another Notepad

From within an existing notepad, you can quickly create a new one:

1. Click **Start another pad** button
2. Choose a location or enter a custom URI
3. The new notepad opens in the current view

## Data Storage

Notepads store content as RDF resources:

- Content saved in Turtle format
- Linked-list structure for text entries
- Metadata includes title, creation date, and author
- All data stored in your Solid Pod

Files created:
- `pad.ttl` - Main content
- `index.html` - Web interface

## User Role

The Note Pad view is available to users with the **Power User** role. See [User Roles](/reference/user-roles) for more information.

## Related Views

- [Meeting](/views/meeting) - Includes shared notes functionality for meetings
