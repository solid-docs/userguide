---
sidebar_position: 8
title: Scheduled Event
description: User Guide for the Scheduled Event view
---

# Scheduled Event View

The Scheduled Event view enables you to create availability polls for coordinating meeting times with participants. It's similar to tools like Doodle but stores data in your Solid Pod.

## Features

- Create scheduling polls with multiple time options
- Collect availability responses from participants
- View results in an interactive matrix
- Send email invitations to participants
- Full control over your scheduling data

## Creating a Poll

The poll creation uses a wizard-style interface with three steps:

1. **Basic Information** - Enter the poll title and description
2. **Time Options** - Add the available meeting times/dates
3. **Access Settings** - Configure who can view and respond

Use the **Continue** button to proceed through each step, or **Go Back** to make changes.

## Responding to a Poll

When you receive a scheduling poll:

1. Open the poll link
2. For each time option, select your availability:
   - **Yes** - Available at this time
   - **Maybe** - Might be available
   - **No** - Not available
3. Your response is saved automatically

## Results Matrix

The results are displayed in an interactive matrix:

| | Monday 9am | Monday 2pm | Tuesday 10am |
|---|:---:|:---:|:---:|
| Alice | Yes | No | Maybe |
| Bob | Yes | Yes | No |
| Carol | Maybe | Yes | Yes |

- **Columns** - Available time options with start times
- **Rows** - Participants who have responded
- **Cells** - Individual availability responses

Your own response appears at the bottom for easy editing.

## Inviting Participants

After creating a poll:

1. Click the invite/share option
2. An email template is generated with:
   - Pre-filled subject line
   - Link to the poll
   - Space for recipient addresses
3. Send the invitation to participants

## Access Control

Polls support granular access control:

- **Owner** - Full read/write/control permissions
- **Public read-only** - Anyone can view results but not respond
- **Public read-write** - Anyone can view and respond

Configure access during poll creation or via the [Sharing](/views/sharing) view.

## Data Storage

Scheduled Event polls are stored as RDF resources:

- `details.ttl` - Poll configuration and metadata
- `results.ttl` - Participant responses
- `index.html` - Web interface

All data is stored in your Solid Pod in standard formats.

## User Role

The Scheduled Event view is available to users with the **Power User** role. See [User Roles](/reference/user-roles) for more information.

## Related Views

- [Meeting](/views/meeting) - For managing meeting details and agendas
