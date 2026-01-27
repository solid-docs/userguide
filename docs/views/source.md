---
sidebar_position: 11
title: Source
description: User Guide for the Source view
---

# Source View

The Source view lets you view and edit the raw source code of data resources stored in your Solid Pod. This is essential for working with RDF data formats like Turtle, viewing HTML content, or editing any text-based resource.

![Source View](/img/views/source/Source_View.png)

## Supported Formats

The Source view works with various text-based formats:

| Format | Extension | Description |
|--------|-----------|-------------|
| Turtle | `.ttl` | RDF serialization format (most common in Solid) |
| JSON-LD | `.jsonld` | JSON-based RDF format |
| RDF/XML | `.rdf` | XML-based RDF format |
| N-Triples | `.nt` | Line-based RDF format |
| HTML | `.html` | Web pages and documents |
| Plain Text | `.txt` | Simple text files |
| JSON | `.json` | JavaScript Object Notation |
| Markdown | `.md` | Lightweight markup |

## Viewing Source

To display the Source view:

1. Navigate to the resource in the SolidOS Databrowser
2. Click the ![Source](https://solidos.github.io/solid-ui/src/icons/noun_109873.svg) Source icon in the view selector
3. The raw source content is displayed in a text panel

The Source view shows the exact content stored on the server, without any interpretation or rendering.

## Editing Source

To edit a resource's source:

1. Click ![Edit](https://solidos.github.io/solid-ui/src/icons/noun_253504.svg) below the Source view panel
2. The text becomes editable
3. Make your changes directly in the text area

:::note
You need write permission on the resource to edit it. If the Edit button is not visible, you may not have sufficient access.
:::

## Saving Changes

To save your edits:

1. Click ![Continue](https://solidos.github.io/solid-ui/src/icons/noun_1180158.svg) (the checkmark icon) below the panel
2. SolidOS validates the syntax based on the file type:
   - **Valid syntax**: Changes are saved to the server
   - **Invalid syntax**: An error message describes the issue

### Validation

For RDF formats (Turtle, JSON-LD, etc.), SolidOS checks that:
- The syntax is correct
- URIs are properly formatted
- Prefixes are defined before use

Fix any reported errors before saving.

## Canceling Edits

To discard changes without saving:

1. Click ![Cancel](https://solidos.github.io/solid-ui/src/icons/noun_1180156.svg) (the X icon) below the panel
2. Your edits are discarded
3. The original content is restored

## Common Use Cases

### Viewing ACL Files
Access Control List (`.acl`) files control permissions. Use Source view to:
- See who has access to a resource
- Understand permission rules
- Debug access issues

### Editing Profile Data
Your profile (`card#me`) is stored as Turtle. Use Source view to:
- Add custom properties
- Fix malformed data
- Add vocabulary prefixes

### Creating New Resources
When creating resources via the Source view:
1. Navigate to a folder
2. Use the create option to make a new file
3. Enter the content in Source view
4. Save to create the resource

### Debugging Data Issues
When other views don't display correctly:
1. Open Source view to see the raw data
2. Check for syntax errors or malformed triples
3. Fix issues directly in the source

## Tips

:::tip
- **Prefixes**: In Turtle files, define prefixes at the top (e.g., `@prefix foaf: <http://xmlns.com/foaf/0.1/> .`)
- **Backup**: Copy content before major edits in case you need to restore
- **Validation**: Use external validators for complex RDF if SolidOS reports errors
:::

## User Role

The Source view is available to all users by default. See [User Roles](/reference/user-roles) for more information.
