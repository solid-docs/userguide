---
sidebar_position: 8
title: Scheduled Event
description: A poll to find a date that suits everyone
---

# Scheduled Event

A scheduled event is a poll for choosing a date. You propose some times, invite people, and each person answers Yes, Maybe or No for each time.

![A poll with two proposed times](/img/ug-views/scheduledevent-poll.png)

## Create a poll

Creating a poll needs the **Power user** user type. Open the account menu, choose **Preferences**, and select **Power user** under **Level of user**. See [User Roles](/reference/user-roles).

1. Open the folder where it should live.
2. Click **Add**, then **New Schedulable Event**.
3. Type a name (without spaces) and click **Create**.

The poll is a new folder holding two files, `details.ttl` and `results.ttl`. To open the poll, open the folder, click `details.ttl`, then click **event**.

## Fill in the poll

The poll opens as a form in three steps. Use **continue ->** and **\<- go back** to move between them.

1. **Schedule an event**: summary, location, **All Day** or a duration in minutes, a comment, and the name and email of the organiser (**Add author** adds another).

   ![Step 1, Schedule an event](/img/ug-views/scheduledevent-form.png)

2. **Time proposals**: one date and time per row. **Add option** adds a row.

   ![Step 2, Time proposals](/img/ug-views/scheduledevent-times.png)

3. **Who to invite**: one email address per row. **Add invitee** adds a row.

   ![Step 3, Who to invite](/img/ug-views/scheduledevent-invite.png)

On the last step:

- The **envelope** button opens your email program with a message to the invitees. Its subject is the summary followed by "When can we meet?", and its body has a link to the poll.
- **Go to poll** shows the poll itself.

## Answer the poll

The poll shows the summary, the location, the organiser, and a column for each proposed time. Choose **Yes**, **Maybe** or **No** in your row under each time. Your answer is saved when you choose it.

Below the poll, the **wrench** goes back to the form so you can change the poll. Beside it are a refresh button and **Make new scheduler**.

:::caution
Check the times after you continue. On the test pod used for this guide, the first time proposal was not saved and only the other two appeared in the poll.
:::
