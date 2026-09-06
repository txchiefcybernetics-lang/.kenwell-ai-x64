# Kenwell Publisher — Team Name File

A small repository containing an exported HTML file (kenwell-publisher.htm) that appears to represent a "Team / Name" or publisher page exported from a Windows Downloads folder. This README explains what the repository contains, how to view the file, and suggested next steps.

## Contents
- kenwell-publisher.htm — An HTML file (exported/saved copy) that likely contains team information or a publisher page.
- README.md — This file.

## Purpose
This repository stores a snapshot of the exported HTML file so it can be preserved, reviewed, and (optionally) improved or integrated into a website. It is useful when you want to:
- Keep a versioned copy of the exported page.
- Share the file with collaborators.
- Edit and convert the page into a more structured site or component.

## How to view
To view the HTML locally:
1. Download/clone the repository.
2. Open `kenwell-publisher.htm` directly in your web browser (double-click or use File → Open).
   - Some features that rely on local resources or scripts may not work when opened via `file://`.
3. To serve it over HTTP (recommended), run a simple local server from the repository root:
   - Python 3: `python -m http.server 8000` then open `http://localhost:8000/kenwell-publisher.htm`
   - Node (http-server): `npx http-server -p 8000` then open `http://localhost:8000/kenwell-publisher.htm`

## Suggested next steps
- Inspect the HTML for sensitive or personal data before publishing.
- If this file is a single-page export, consider:
  - Breaking content into template(s) (HTML/CSS/JS) for reuse.
  - Converting into a Markdown-based page and adding to a static site generator (Jekyll, Hugo, etc.).
  - Cleaning up inline styles/scripts and moving them into separate files for maintainability.
- Rename the repository to a clearer project name if this is intended to be a project rather than a single-file backup.

## Contributing
If you want to collaborate:
- Open an issue describing what you'd like to change (e.g., clean markup, responsive styles, accessibility fixes).
- Create a branch, make your edits, and submit a pull request with a short description of changes.

## License
No license is included. If you want others to reuse or contribute, add a LICENSE file (for example MIT or Apache-2.0).

## Contact / Maintainer
Repository owner: KENWELL-TX-ORG (as listed in the repository URL).
For questions or changes, create an issue in this repository or contact the repository admin.


# Deep researcher

This Claude Platform agent quickstart's setup as declarative files for the
`ant` CLI:

- `agents/deep-researcher.md`: the agent. Its YAML frontmatter is the body of `POST /v1/agents`; the Markdown under it is the system prompt.

Install the `ant` CLI (https://platform.claude.com/docs/en/cli-sdks-libraries/cli/quickstart), preview the plan, then apply it (https://platform.claude.com/docs/en/cli-sdks-libraries/cli/scripting#version-controlling-api-resources):

```sh
cd deep-researcher
ant apply --dry-run .
ant apply .
```

Nothing here exists yet: the first apply creates it and records the IDs in `claude-lock.json`; later runs keep those resources in sync with these files.

Keep `claude-lock.json` next to these files, and the file names as they are (the IDs are keyed by path). Vault credentials aren't included; a credential typed into the agent config itself (an MCP server's `authorization_token`) is, so move it to a vault before committing these files.
