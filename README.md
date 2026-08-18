# Aaditya's Lab Hub — Clean Single-Page Version

This version intentionally uses NO nested index.html files.

## Files

- `index.html` — the whole website shell
- `style.css` — design
- `data.js` — all subjects and experiment content
- `app.js` — website behavior
- `assets/` — screenshots and other files

## Uploading to GitHub

Put these files directly in the root of your repository:

```text
index.html
style.css
data.js
app.js
assets/
```

Then enable GitHub Pages:

Settings → Pages → Deploy from a branch → `main` → `/ (root)`.

## Changing a subject name

Open `data.js` and edit:

```js
name: "VLSI"
```

to another name.

Do not change the `id` unless you know why. The `id` is used internally by the page.

## Editing an experiment

In `data.js`, find the subject and experiment and replace:

- `name`
- `aim`
- `theory`
- `code`
- `result`
- `screenshots`

Example:

```js
{
  number: 1,
  name: "1:4 DEMUX",
  aim: "To implement a 1:4 demultiplexer.",
  theory: "A DEMUX routes one input to one selected output.",
  code: `module demux_1to4(
    input I,
    input S1,
    input S0,
    output Y0,Y1,Y2,Y3
  );
  assign Y0 = I & ~S1 & ~S0;
  assign Y1 = I & ~S1 & S0;
  assign Y2 = I & S1 & ~S0;
  assign Y3 = I & S1 & S0;
  endmodule`,
  screenshots: [
    "assets/demux-output.png",
    "assets/demux-circuit.png"
  ],
  result: "The 1:4 DEMUX was implemented successfully."
}
```

## Adding screenshots

1. Upload the image to the `assets/` folder.
2. Put its path in the experiment's `screenshots` array.

For example:

```js
screenshots: [
  "assets/experiment-01-output.png"
]
```

## Why this version is simpler

There are no 100+ HTML pages, no nested relative links, and no separate subject page files. GitHub Pages only needs the one root `index.html`.
