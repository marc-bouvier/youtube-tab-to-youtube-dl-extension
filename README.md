# youtube-tab-to-youtube-dl-extension

[![Deno](https://github.com/marc-bouvier/youtube-tab-to-youtube-dl-extension/actions/workflows/deno.yml/badge.svg)](https://github.com/marc-bouvier/youtube-tab-to-youtube-dl-extension/actions/workflows/deno.yml)

Chrome/Firefox extension to generate youtube-dl cli command from tab into clipboard.

## Build with make command (recommended)

To assemble and test the extension some targets for `make` are provided from the `Makefile` file.

If you don't want to use make, please skip to the "Build manually" section below.

On Windows, you may use WSL to run `make` from linux. 
You can also install [make from chocolatey](https://chocolatey.org/packages/make).

If `make` detects that it is run from Windows, it will use powershell command instead of shell commands for maximal compatibility.

### Build all and run tests

The following command will
- scaffold `generated` folder and sub-folders
- Install deno if necessary
- Run tests with deno
- generate Chrome extension into `generated/chrome` folder
- generate Firefox extension into `generated/firefox` folder

```bash
make
```

### Build and install for chrome

To generate extension for chrome into `generated/chrome` :

```bash
make chrome
```

In a chrome based browser open [chrome://extensions](chrome://extensions)
- Check "Developer mode" if it is not already enabled
- Load Unpacked
- Choose `generated\chrome` folder
- The extension should be loaded

### Build and install for Firefox

To generate extension for chrome into `generated/firefox` :

```bash
make firefox
```

In Firefox browser open [about:debugging#/runtime/this-firefox](about:debugging#/runtime/this-firefox)
- Load temporary Addon
- Choose `generated\firefox\manifest.json`
- The extension should be loaded

### Test with deno

```
make test
```

## Build manually

If you don't have the `make` command installed you can still assemble the extension manually the following way:

- create a folder called `generated` 

### For chrome extension
- create a folder called `generated/chrome`
- copy `chrome/manifest.json` into `generated/chrome`
- copy the consent of the `shared` folder into `generated/chrome`

### For Firefox extension
- create a folder called `generated/firefox`
- copy `firefox/manifest.json` into `generated/firefox`
- copy the consent of the `shared` folder into `generated/firefox`

### Test with deno

First, you need to install deno : https://deno.land/#installation

```
deno test
```

## Project structure

| Folder / File | Purpose |
| ------ | ------- |
| `.github` | Continuous integration with Github Actions |
| `chrome` | Chrome specifics (mostly manifest) |
| `firefox` | Firefox specifics (mostly manifest) |
| `generated` | (non versioned) output folder where extension are generated. Will be created by `make` targets. |
| `shared` | Common code for the extension. `make` targets will copy contents from this folder into appropriate target folders. |
| `showcase` | Pictures and gifs for documentation purpose |
| `tests` | Automatic tests for deno runtime to execute |
| `credits.md` | Attributions for non owned resources (e.g. icons) |
| `Makefile` | Build targets to be run with `make` command |
| `making-of.md` | Some educational informations on how this extension was built |
