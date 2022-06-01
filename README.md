# Scaffold（尚未完成）

## 1 - 簡介

scaffold-lionvincent-master-v1.0.0

文森的獨特開發框架，專為開發區塊鏈 APP 使用。

目前適用範圍為 Ethereum，今後將會持續擴充至常用公鏈（例如：Solona？）


### 開發框架的創作步驟（若想直接使用的話可跳過此部分）

```shell
// v1.0.0 使用
yarn init
yarn install
yarn cache clean
yarn create react-app fronrend
cd fronrend 
yarn eject // 註1
cd ../
yarn add hardhat
yarn add bootstrap
yarn add react-router-dom
yarn add @chakra-ui/react @emotion/react@^11 @emotion/styled@^11 framer-motion@^6
yarn add ethers wagmi 
yarn add stylus stylus-loader
yarn add mathjs dayjs -W
yarn add @chakra-ui/icons react-icons -W 
yarn add --dev babel-plugin-transform-react-pug babel-plugin-transform-react-jsx eslint eslint-plugin-react-pug // 註2
mkdir hardhat
cd hardhat 
npx hardhat 

// 今後升級 v2.0.0 使用
yarn redux
```

> #### 註解
> 1. 在 Create React App 中修改 Webpack 設定，以調整 Webpack Alias 為例｜https://snh90100.medium.com/59fd9eeeffe7
> 2. 在 Create React App 加入 Pug 的步驟｜https://stackoverflow.com/questions/56513346/how-to-use-pug-templating-engine-with-reactjs
> 3. 

> #### Debug
> - `TypeError: utils.getReturnPropertyAndNode is not a function`
> Solution：https://www.kotokaze.net/blogs/47m8xckei

> #### Vscode 安裝
> - [vscode-react-pug](https://marketplace.visualstudio.com/items?itemName=kaminaly.vscode-react-pug)
> - [stylus](https://marketplace.visualstudio.com/items?itemName=sysoev.language-stylus)

## 2 - 使用方式

- Get Started：`yarn app`
- 前端開發：`yarn start`
- 編譯前端檔案：`yarn build`

### 前端

```shell
// 啟動 APP
cd frontend // 到 frontend 資料夾
yarn start // 啟動

// 安裝套件
cd ../ // 安裝前端套件，要先回到上一層目錄 /scaffold（同時也是根目錄）
yarn add {套件名稱}
```
#### 使用時注意
1. 前端需要的套件，請裝在該 Scaffold 根目錄，不要裝在 frontend 內。因為我有在 `config/webpack.config.js` 設置 `alias`。
2. 裝套件，使用指令 yarn add {name}。
3. 共用的 css 放在 index.css or public/index.html。例如：bootstrap

#### 補充
**好用的 UI Compoenet：[資料來源](https://5xruby.tw/posts/react-design-systems)**  
經典的 React 實作版 [Material Design](https://mui.com/zh/)  
柔和、舒適的 [Chakra](https://chakra-ui.com/)、[GitHub](https://github.com/chakra-ui/chakra-ui/)  
高度客製化的選擇 [atomize](https://atomizecode.com/)  
IBM 風格 [Carbon](https://carbondesignsystem.com/components/accordion/usage/#behaviors)  

### 合約

```shell
```

#### 使用時注意：
<!--  -->


### 教學資源

#### 中文
- [Redux](https://chentsulin.github.io/redux/docs/introduction/PriorArt.html)
- [React Day25 - Async Action 與 redux-thunk](https://ithelp.ithome.com.tw/articles/10187438)

#### English
- [如何組織你的 React + Redux 寫 code 基礎架構](https://www.pluralsight.com/guides/how-to-organize-your-react-+-redux-codebase)
[結構化你的 React + Redux APP](https://dev.to/olumidesamuel_/structuring-redux-in-a-react-web-app-1i21)


## 開發的細節

### 開發環境：

- 管理工具
Yarn + Webpack

> Yarn 的教學
主要：https://www.casper.tw/nodejs/2016/10/18/yarn/
Workspaces：https://tokileecy.medium.com/cbb16bb780ec

```shell
yarn install // npm install
yarn add {package} -dev // npm install --save {package} -dev
yarn remove {package}
yarn add {package} -W // remove 之後重新 add 需要加 -W｜https://classic.yarnpkg.com/en/docs/cli/add
```

> 使用 create-react-app 時就會自動安裝 Webpack 了
https://snh90100.medium.com/59fd9eeeffe7

- 開發合約
**v1.0.0**
```
部署：hardhat 
測試鏈：ganache 
合約模板：openzeeplin 
```

**v2.0.0**
```
// ...
```

- 前端建置
**v1.0.0**
```
框架：react + jsx + create-react-app 
HTML：Pug 
CSS：stylus 
UI Component：Bootstrap v5、Chakra // 預設未引入 Chakra
其他：dayjs、math.js、uniswap?
和區塊鏈溝通：wagmi + ethers 
 
棄用：web3modal、Ant Design 
```

**v2.0.0**
```
其他：redux 
```

- 其他工具
**v2.0.0**
```
壓縮圖片：Gulp + TinyPng 
```

### 資料夾架構

```
├- node_modules/   // 前後端會用到的模組通通裝在這！frontend 裡頭的同名資料夾，僅保持 for create-react-app 的狀態
├- frontend/       // 前端部分
|  ├- node_modules/    // for create-react-app，不要在這裡裝任何東西！
|  ├- config/          // create-react-app 輸出的 webpack 設定，盡可能別動它
|  ├- public/          // react-app 共用檔
|  ├- scripts/         // 跟 /config 一樣
|  └- src/             // 開發的內容
|     ├- Componenets/       // 模組們：為最小單位
|     ├- Containers/        // 頁面的肉：裡面可包含數個模組
|     ├- Pages/             // 頁面：router 指向的檔案
|     ├- store/             // redux - v2.0.0 才會有
|     ├- reducer/           // redux - v2.0.0 才會有
|     ├- utils/             // 擴充用的 js
|     ├- App.js             // react-app 主體
|     └- index.js           // webpack 進入點
└- hardhat/        // hardhat 專案，合約使用
   ├- artifacts/       // 編譯完 ABI 介面等等
   ├- contracts/       // 撰寫合約
   ├- scripts/         // 部署合約的 js 檔
   └- test/            // 寫測試的 js 檔
```

### Errors

#### Create-react-app 編譯後，檔案的路徑預設指向根目錄

Solution：`frontend/package.json` 加入 `"homepage": "{路徑}"`。

#### Create-react-app 編譯後，檔案不符合 MIME ...

Solution：找不到檔案。因為編譯後的檔案有加 hash，因此需將 `static` 整包上傳。

#### Hardhat v2.9.3 不支援 node v17

Solution：版本將至 node v16  
Link：https://github.com/NomicFoundation/hardhat/issues/2570

```shell
// 清除所有 cache
brew cleanup -n
brew cleanup -s node
brew cleanup --prune-prefix

// 安裝 node.js v16
brew uninstall node
brew install node@16
brew reinstall node@16

// 移除已安裝套件的 symlink，但是不移除套件
brew unlink node

// 連結至 node 16，如果無法就加上 --overwrite（看 terminal 的回應）
brew link node@16
brew link --overwrite node@16
```

#### zsh: command not found: npm

Solution：https://medium.com/hybrid-maker/bfc9b8bb0808

1. Command + Shift + P -> 搜尋 setting.json
2. `"terminal.integrated.shell.osx": "/bin/zsh",`

接著 /.zshrc 加上任一個試試  
`source /Users/fangweiren/.bash_profile`  
`export PATH=/opt/homebrew/bin:/usr/local/bin:/usr/bin:/bin:/usr/sbin:/sbin`  
`export PATH=/opt/homebrew/bin:$PATH`  