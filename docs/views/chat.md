---
sidebar_position: 3
title: Chat
description: User Guide for the Short Chat view
---

# Chat View

The Chat view provides a simple chat discussion interface for short conversations.

:::note
The Short Chat pane is **deprecated** in favor of [Long Chat](/views/longchat). It is only available to Power Users to discourage creating new chat resources with this format.
:::

## Features

- Simple real-time messaging interface
- Message count displayed in labels (e.g., "Chat (5)")
- Messages stored in your Solid Pod as RDF data
- Access control via [Sharing](/views/sharing) permissions

## Data Storage

Chat messages are stored using semantic web standards:
- Messages saved in Turtle (RDF) format
- Each message includes author attribution and timestamp
- Data stored in your Pod for full ownership

## User Role

The Chat view is available to users with the **Power User** role. See [User Roles](/reference/user-roles) for more information.

## Related Views

- [Long Chat](/views/longchat) - Recommended for new conversations, supports multi-day chats with more features
- [Meeting](/views/meeting) - Includes chat functionality within meeting context
