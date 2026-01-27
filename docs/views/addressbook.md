---
sidebar_position: 2
title: Address Book
description: User Guide for the Address Book view
---

# Address Book

The Address Book view allows you to maintain your contacts, including grouping them together.

## View

To display an address book:

1. In the SolidOS Databrowser, navigate to the address book.
2. The address book should automatically be displayed:

![Address Book](/img/views/addressbook/Addressbook_View.png)

:::tip
If the address book is not automatically displayed, click ![Address Book](https://solidos.github.io/solid-ui/src/icons/noun_99101.svg) in the address book header.
:::

## Contacts

### Display a Contact

To display the details for a contact:

1. Optionally, select the [group](#groups)(s) of which the contact is a member to filter the list of contacts.
2. Click the name of the contact to display.
3. The details of the contact are displayed in a [Profile](/views/profile) view:

![Address Book Contact](/img/views/addressbook/Addressbook_Contact.png)

4. Via the [Profile](/views/profile) view, you can edit the contact details.

:::tip
To select all groups, click the **All** button. To select a subset of the groups, click the group name while holding the Shift/Command key.
:::

### Search

You can search for contacts within the address book:

1. Enter the search term in the search bar at the top of the Address Book view.
2. The names of any contacts, in the selected groups, that match the search term are listed.

### Add a New Contact

To create a new contact record:

1. Select the group(s) into which the new contact should be appended.
2. Click the **New Contact** button.
3. Enter the name for the new Contact.
4. Click ![Continue](https://solidos.github.io/solid-ui/src/icons/noun_1180158.svg) Continue icon to create the Contact.
5. A [Profile](/views/profile) view for the new Contact is displayed allowing the details to be entered.

:::note
A contact must be a member of at least one group.
:::

### Delete an Existing Contact

To delete an existing contact:

1. Display the details for the contact.
2. At the bottom of the [Profile](/views/profile), hover the mouse pointer over the profile.
3. A ![Remove](https://solidos.github.io/solid-ui/src/icons/noun_2188_red.svg) Remove icon is displayed.
4. Click the Remove icon to delete the contact.

## Groups

Contacts can be assembled into groups. A single contact may be a member of multiple groups.

### New Group

New contact groups can be created:

1. Click the **New Group** button.
2. Enter the name for the new group.
3. Click ![Continue](https://solidos.github.io/solid-ui/src/icons/noun_1180158.svg) Continue icon to create the group.

### Delete Group

To delete an existing group:

1. Hover the mouse cursor over the Group name.
2. A ![Remove](https://solidos.github.io/solid-ui/src/icons/noun_2188_red.svg) Remove icon is displayed.
3. Click the Remove icon to delete the group.

### Group Sharing

Individual groups can be shared differently than the whole address book.

To adjust the sharing:

1. Select the group to adjust.
2. Click the displayed ![Sharing](https://solidos.github.io/solid-ui/src/icons/noun_123691.svg) Sharing icon.
3. The Sharing settings for the group are displayed:

![Address Book Group Sharing](/img/views/addressbook/Addressbook_Group_Sharing.png)

4. To set custom sharing for this group:
   1. Click the **Set specific sharing for the group** button.
   2. This causes the sharing groups (Owners, Editors, Posters, Submitters, Viewers) for the group to be displayed.
   3. Permissions for users can be added, adjusted, and/or removed.
5. To reset sharing for this group back to the default:
   1. Click the **Stop specific sharing for this group** button.

For detailed instructions on managing sharing permissions, see the [Sharing](/views/sharing) view documentation.

## Tools

The various Address Book tools allow you to review and maintain the address book:

- **Sharing for the Address Book** - Allows the [sharing](/views/sharing) for the address book to be viewed and modified.
- **Check Individual Card Access for Selected Groups** - Who can access which groups?
- **Find Duplicate Cards** - Scans the contacts to determine any duplicate records. If any are found, they can be repaired.
- **Find Individuals with no Group** - Determines if any contacts are not in any group.
- **Public Link to this Address Book** - Generates a public link to the address book that is displayed in the **Public things** panel under **Your stuff** on your Dashboard.
- **Personal Note of this Address Book** - Generates a private link to the address book that is displayed in the **Private things** panel under **Your stuff** on your Dashboard.
- **Load Main Index** - Reloads the main people index.
- **Statistics** - Generates statistics for the address book.
