---
sidebar_position: 3
title: FAQ
description: Frequently Asked Questions about SolidOS
---

# Frequently Asked Questions

## General

### What is SolidOS?

SolidOS (also known as the SolidOS Databrowser Frontend) is the default interface to Solid. It enables you to create, share, and collaborate on data stored within Solid Pods with your friends and contacts through social networks and applications.

### What is a Solid Pod?

A Solid Pod is your personal data store in the Solid ecosystem. It's where your data lives, and you control who has access to it.

### What is a WebID?

A WebID is your unique identifier in the Solid ecosystem. It's a URL that points to your profile document and is used to authenticate you across different Solid applications.

## Authentication

### Why do I need to log in?

You need to log in to access your private data and data that others have shared with you. Without logging in, you can only see publicly available data.

### How do I choose an Identity Provider?

When logging in, you can either enter your WebID directly or select from a list of identity providers. If you already have a Solid account, use the identity provider where your Pod is hosted.

## Views and Features

### Why don't I see all the views?

The views available to you depend on your selected [user role](/reference/user-roles). By default, only standard social views are shown. To access Developer or Power User views, you need to enable those roles in your [Preferences](/reference/preferences#role).

### How do I change my user role?

1. Click your profile image and select **Preferences**
2. Under **User types**, select the roles you want
3. Refresh your browser for changes to take effect

See [User Roles](/reference/user-roles) for more information.

## Sharing and Permissions

### How do I share a resource?

Use the [Sharing view](/views/sharing) to control who can access your resources. You can grant access to specific users, groups, or make resources public.

### What are the different permission levels?

- **Owners** - Full control including the ability to manage permissions
- **Editors** - Can read, create, update, and delete
- **Posters** - Can read and create (append)
- **Submitters** - Can create only
- **Viewers** - Read-only access

## Troubleshooting

### Why can't I see another person's Pod?

Make sure you've added the origin of that Pod as a trusted app on your own profile. Also ensure you're logged in with your WebID.

### Why aren't my role changes taking effect?

You need to refresh your web browser after changing roles in Preferences.

### How do I delete a resource?

Use the [Under the Hood](/views/underthehood) view to delete resources. You need delete permission on the resource.

## Getting Help

### Where can I get more help?

- [Solid Project](https://solidproject.org/) - Official Solid documentation
- [Solid Forum](https://forum.solidproject.org/) - Community discussion forum
- [Matrix Chat](https://matrix.to/#/#solid_solidos:gitter.im) - Real-time chat with the community
- [SolidOS GitHub](https://github.com/SolidOS) - Report issues and contribute
