## MUI ![ci](https://travis-ci.org/Muxi-Studio/MUI.svg?branch=dev)

Muxi UI is an UI Component collection for developing PC web applications, based on Vuejs.

Designed by MED(Muxi UED).

### Todo

+ Add scss structure, and scss config for webpack
+ Build a demo page, like [this](http://element.eleme.io)
+ Grid system
+ Develop all the component

### Basic Usage

#### Using Standalone Bundle(CDN)

```
<script src="./lib/vue.js"></script>
<script src="./dist/main.js"></script> // script tag should be put after vuejs
<script src="./dist/style.js"></script>
```

#### Using NPM

Intall MUI using

`npm install muxiui`

Then

```
import MUI from "muxiui"
import 'muxiui/dist/style.js'

Vue.use(MUI)

```

### Documentation

Working on it

### Development

`npm install`

`npm run dev`

webpack-dev-server will run on port 9000, so we can get bundle with `http://localhost:9000/dist/main.js`(Component code) and `http://localhost:9000/dist/style.js`(Style), without losing the power of hot reloading.

[Demo repo](https://github.com/Muxi-Studio/muxiui), you can use this repo to test your code.

### Contributor 

Special thanks to our Designer [CAMOCAT](http://camocat.me)!


+ [Amanda111](https://github.com/amanda111)
+ [stephenLYao](https://github.com/stephenLYao)
+ [zxc0328](https://github.com/zxc0328)

### Lisence

MIT