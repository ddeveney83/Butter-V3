# Butter — GitHub + Codex setup guide (Mac-friendly, no coding experience required)

This guide gets the Butter master instructions and **four original concept reference images** into a **new private GitHub repository**, connects Codex, and creates a safe working method. The downloadable ZIP is a delivery container only: **do not upload the ZIP itself to GitHub expecting it to unpack**. Unzip it first and upload the files and `reference/` folder.

## Recommended roles

- **GitHub repository** (`main` branch): canonical, reviewed copy of all source code, specifications and authorised design assets.
- **Codex**: makes code changes on task branches; re-reads `AGENTS.md`, the master spec and the roadmap.
- **Vercel** (later): hosts live Next.js app and supplies URL previews of code proposed through GitHub. Publishing a Vercel app is separate from storing source in GitHub.
- **Never put real API keys, private client data, email submissions or `.env.local` in GitHub.** Add deployment credentials securely in hosting/Codex environment settings when the app requires them.

## Path A — Recommended: use GitHub Desktop on Mac

1. Download the **full Butter v3 ZIP** and double-click it to extract. Keep its contents together; check you see `AGENTS.md`, `BUTTER_MASTER_SPEC.md`, `BUILD_ROADMAP.md`, `CODEX_FIRST_PROMPTS.md` and `reference/`.
2. Install GitHub Desktop from https://desktop.github.com/ and sign into your GitHub account.
3. In GitHub Desktop choose **File > New Repository** (or **Create a New Repository on Your Hard Drive**). Name it **`butter-studio-website`**. Choose a convenient local folder. If it asks to initialise with a README, leave that unticked because this pack already contains one.
4. After creation choose **Repository > Show in Finder** (wording may vary). Open the new repository directory.
5. Copy the **contents** of the extracted Butter folder into that directory — `AGENTS.md` must be at the repository root, not nested inside an extra `Butter-GitHub-Codex-v3/` folder. Include the `reference` folder and `.gitignore` hidden file. On macOS, pressing **Command + Shift + .** in Finder toggles display of hidden files.
6. Return to GitHub Desktop. You should see the newly added files under **Changes**. Enter summary **`Add Butter design brief and Codex build instructions`**, click **Commit to main**, then **Publish repository**. Select **Keep this code private**. (Publishing is uploading the repo to GitHub, not launching a website.)
7. In GitHub, check you can see `AGENTS.md` and all other top-level files. Click `reference/` and verify all four PNGs are there. If you only see one ZIP file, the upload was done incorrectly.

Official how-to: https://docs.github.com/en/desktop/overview/creating-your-first-repository-using-github-desktop

## Path B — Browser-only alternative

1. Go to https://github.com/new and create a **new PRIVATE** repository called **`butter-studio-website`**. You can initialise it with a README if the website requires a first file; replace/edit it when uploading the included `README.md`.
2. Open the repository, select **Add file > Upload files**.
3. **Unzip the package first.** Drag **the individual extracted files and `reference/` directory** into the upload area. GitHub's browser uploader accepts drag-and-drop folders; a browser file chooser may not offer folder selection. If the folder upload fails, use GitHub Desktop (Path A).
4. Commit the changes. Check that `AGENTS.md` is at root and the reference PNGs are inside `reference/`.
5. Do not upload the ZIP as the sole repo file; GitHub does not automatically unpack your ZIP into repository contents.

Official instructions: https://docs.github.com/en/repositories/working-with-files/managing-files/adding-a-file-to-a-repository

## Connect Codex (cloud workflow)

1. In ChatGPT on web/desktop, open **Codex / a new coding task**. If using current Codex Cloud, select **Work in > Cloud**, then **Select environment > Create environment** (or select an existing environment).
2. **Connect GitHub** if prompted. Grant access to your **`butter-studio-website`** repository. A private repo still works with authorised access.
3. Select the repo, choose **Get started**, and let Codex prepare the environment. This is a docs/assets-only starter, so it may have no application dependencies until Phase 0 creates the Next.js app. If setup asks for an install command, explain this is a brand-new project and ask Codex to scaffold it in Phase 0; do not invent credentials or pretend the app already exists.
4. Review the environment setup and **Publish** the environment when ready (publishing the environment is **not** launching the website). Start a new task in that environment.
5. Copy **Prompt 1** from `CODEX_FIRST_PROMPTS.md` to test that it read the brief correctly. Then give **Prompt 2** to implement Phase 0 only.
6. Review changes, ask Codex to run tests and display screenshots where feasible. Ask for a **pull request** instead of automatically writing to the protected production branch. Approve/merge the PR in GitHub only after review.

Official cloud guide: https://learn.chatgpt.com/docs/cloud

### Alternative: Codex on desktop with local files

If you prefer local Codex, open the cloned project folder in a Codex-capable editor/app; ensure the folder is the **GitHub Desktop repository**, not a disconnected ZIP copy. Have Codex create and modify a feature branch. Review and commit/push changes using GitHub Desktop. Do not run both cloud and local edits against different unsynchronised states: **fetch/pull before starting another phase**.

## Safe build-and-review process (repeat per phase)

1. Ensure `main` on GitHub contains the latest **approved** version.
2. Start Codex work on branch `phase-0-foundation`, `phase-1-homepage`, `phase-2-services`, and so on.
3. Codex follows the root `AGENTS.md`, master spec, roadmap and relevant references. It changes code and documents decisions; it reports checks and remaining gaps.
4. Preview the result locally or by a Vercel preview URL (once hosting integration is configured). Review both desktop **and** mobile, including the site's actual behaviour.
5. Review the changes in a GitHub pull request. Request revisions if needed. Merge into `main` **only once you approve them**.
6. Repeat for the next phase. This gives you a permanent history and a reversible way to correct mistakes.
7. Later, connect the repo to Vercel. Configure `main` as production branch and feature branches/PRs for preview URLs. Keep any unreleased, incomplete site non-public or access-controlled, and ensure staging is not indexed.

## Troubleshooting

- **I can't download the big ZIP**: use the smaller instructions-only ZIP and download the four PNGs separately. Preserve their exact filenames under `reference/`.
- **GitHub shows only the ZIP**: delete that uploaded archive, extract it on your Mac, then add the actual files and `reference/` folder.
- **GitHub shows `Butter-GitHub-Codex-v3/AGENTS.md` rather than `/AGENTS.md`**: the folder is nested one level too deep. Move its contents to root.
- **GitHub browser won't let me upload a folder**: use GitHub Desktop, which is simpler for nested folders and repeat updates.
- **Codex can't see the repository**: reconnect GitHub and verify the repo is included in the Codex cloud environment and your account has access.
- **Codex ignores instructions**: verify `AGENTS.md` is at repository root; start a fresh task/session and explicitly tell Codex to read it, `BUTTER_MASTER_SPEC.md` and `BUILD_ROADMAP.md`.
- **Codex can't show an app yet**: correct at the starter-pack stage: the **source code isn't built until Phase 0/1**.
- **Preview changes differ from GitHub main**: check branch name, ensure changes are committed/pushed, and confirm the PR/preview uses that same branch.
- **Private repo vs public website**: a private GitHub repo can still deploy a public website once you decide to launch.

## Important distinction: content approvals

Case-study logos in the mockups, testimonials and metrics are **visual concepts**, not automatic permission to publish client endorsements or business results. Approve legitimate assets and factual wording before a public launch. For good local search reach, the website should accurately say Butter is based in Devon and serves organisations in the South West and across the UK; never invent a Devon office, postal address or client.
