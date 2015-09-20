# electron-updater-gh-releases-example
An example app for [electron-updater-gh-releases](https://github.com/mugifly/electron-updater-gh-releases).

## How to try

1. Download the app package (e.g. example-win32-ia32-v1.0.0.zip) from [releases page](https://github.com/mugifly/electron-updater-gh-releases-example/releases/tag/v1.0.0). You must choose OLD VERSION.
1. Extract zip file and execute an executable file (example or example.exe) of the app.
1. The example app will start, and it will check a updating.
1. It's a happy ending! The app has been updated to latest version.

## How to build

### 1. Fork the project on GitHub

Firstly please fork a project from https://github.com/mugifly/electron-updater-gh-releases-example/.

Then execute **git clone** command for your forked repository.
Then install the dependency modules with using **npm install** command.

	$ git clone https://github.com/YOUR-NAME/electron-updater-gh-releases-example.git
	$ cd electron-updater-gh-releases-example/
	$ npm install -g grunt-cli
	$ npm install

### 2. Change an account name on source code


Open **app.js** in your text editor.
Then replace the value of *"ghAccountName"* to Your GitHub account name.

```js
// Make an instance of Updater
var updater = new Updater({
	appName: 'example',
	appVersion: manifest.version,
	releaseFileNamePrefix: 'example-',
	ghAccountName: 'YOUR-NAME',
	ghRepoName: 'electron-updater-gh-releases-example'
});
```

Then commit it to the repository.

	$ git commit -a -m "Change: Releases url for me"


### 3. Make an release file (zip file)

The **grunt** command makes an distribution files of the Electron app.

	$ grunt

After executed it, you can found the distribution files in dist/ directory as follows.

* example-linux-ia32/
* example-linux-x64/
* example-win32-ia32/

Nextly, please make a zip file by to compress each directory.
That zip file becomes an *release file*.

	$ zip -r example-linux-ia32-v1.0.0.zip example-linux-ia32/
	$ zip -r example-linux-x64-v1.0.0.zip example-linux-x64/
	$ zip -r example-win32-ia32-v1.0.0.zip example-linux-ia32/

### 4. Upload the release file to Release page on GitHub

Firstly, make a tag to GitHub on your project.
The tag name is should follow to [semantic versioning](http://semver.org/) (e.g. v1.1.0).

	$ git tag v1.1.0
	$ git push origin v1.1.0

Nextly, open your project page in your browser, and access to **"Releases"** page.
Then click "Tags" tab. It will show your pushed tags.

Well then, please click the "Add release notes" of just pushed tag.
And fill to following fields:

* *Release title*: Same as tag name
* *Description this release*: Something is ok
* *Attach binaries*: Drag & drop the release file (zip file) into here

After that, click the "Publish release" button.

Now, your app was uploaded on Releases pages on GitHub.
If you download and execute the app, it says it's latest version.

### X. How to publish a newer version?

1. Make an something changes.
1. Change a version in package.json (e.g. 1.0.0 -> 1.2.0).
1. Make a release file (zip file); See step-3.
1. Make a tag as vX.Y.Z (e.g. v1.2.0) and upload the release file in Releases page; See step-4.

## License
Public Domain
