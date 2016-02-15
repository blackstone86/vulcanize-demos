> "Vulcanize is a build tool for HTMLImports and Web Components."
>
> -- [vulcanize](https://github.com/Polymer/vulcanize/)

## How to use

First, clone the repo.

```bash
$ git clone https://github.com/blackstone86/vulcanize-demos.git
```

Then, install the dependencies locally and vulcanize globally.

```bash
$ cd vulcanize-demos
$ npm install
$ npm install --global vulcanize
```

Enter the `vulcanize-demos` rootdirectory.

Build all demos by Grunt 

```bash
$ grunt
```

Build all demos by Gulp

```bash
$ gulp
```

Build all demos by Broccoli

```bash
$ broccoli build buildByBroccoli
```

Build all demos Without Build Tool

```bash
$ node vulcanizeAll.js
```

## Index

- [demo01: inline style](https://github.com/blackstone86/vulcanize-demos/tree/master/demo01)
- [demo02: inline scripts](https://github.com/blackstone86/vulcanize-demos/tree/master/demo02)
- [demo03: external script](https://github.com/blackstone86/vulcanize-demos/tree/master/demo03)
- [demo04: external stylesheet](https://github.com/blackstone86/vulcanize-demos/tree/master/demo04)
- [demo05: excluded folder](https://github.com/blackstone86/vulcanize-demos/tree/master/demo05)
- [demo06: excluded comments](https://github.com/blackstone86/vulcanize-demos/tree/master/demo06)
- [demo07: excluded imports](https://github.com/blackstone86/vulcanize-demos/tree/master/demo07)
- [demo08: strip excludes](https://github.com/blackstone86/vulcanize-demos/tree/master/demo08)
- [demo09: redirects](https://github.com/blackstone86/vulcanize-demos/tree/master/demo09)
- [demo10: input url](https://github.com/blackstone86/vulcanize-demos/tree/master/demo10)
- [demo11: abspath](https://github.com/blackstone86/vulcanize-demos/tree/master/demo11)
- [demo12: add imports](https://github.com/blackstone86/vulcanize-demos/tree/master/demo12)
- [demo13: escape xss](https://github.com/blackstone86/vulcanize-demos/tree/master/demo13)

## License

MIT
