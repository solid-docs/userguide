---
sidebar_position: 4
title: Long Chat
description: User Guide for the Long Chat view
---

# Long Chat View

The Long Chat view is the modern chat interface for persistent, multi-day conversations in SolidOS. It replaces the deprecated [Short Chat](/views/chat) pane.

## Features

- Persistent chat channels organized by date
- Real-time messaging with multiple participants
- Message threading support
- Customizable display preferences
- Participant management

## Layout

The Long Chat interface uses a three-column layout:

- **Left panel** - Participants list showing who is in the chat
- **Center** - Main chat area with messages
- **Right panel** - Thread view and preferences

## Sending Messages

1. Type your message in the input area at the bottom
2. Press **Enter** to send (or **Shift+Enter** if configured in preferences)
3. Messages appear in the chat with your name and timestamp

## Preferences

Click the settings button in the toolbar to customize your chat experience:

| Preference | Description |
|------------|-------------|
| Color by user | Display each user's messages in a different color |
| Expand images | Show image URLs as inline images |
| Newest first | Display newest messages at the top |
| Author on left | Show author name and date on the left side |
| Shift+Enter sends | Use Shift+Enter instead of Enter to send |
| Image height | Configure the height of inline images |

## Participants

### View Participants

Click the participants button in the toolbar to see everyone in the chat.

### Managing Access

Chat access is controlled through the [Sharing](/views/sharing) system:

- **Control** - Full management including permissions
- **Read/Write** - Can read and post messages
- **Read** - Can view messages only
- **Append** - Can add messages but not read others

## Toolbar

The bottom toolbar provides quick access to:

- ![Participants](https://solidos.github.io/solid-ui/src/icons/noun_339237.svg) **Participants** - View and manage chat members
- **Other chats** - Navigate to other chat channels
- **Settings** - Open preferences panel

## Data Storage

Long Chat stores messages as RDF resources in Turtle format:

- Messages include author, timestamp, and content
- Threading information preserved
- All data stored in your Solid Pod
- Full ownership and portability of your conversations

## Related Views

- [Chat](/views/chat) - Deprecated simple chat (Power Users only)
- [Meeting](/views/meeting) - Includes chat functionality for meetings
