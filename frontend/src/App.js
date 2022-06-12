import logo from './logo.svg';
import './App.styl';

// React 相關 
import React, { 
  useCallback, useEffect, useState 
} from "react";
import { 
  Link, NavLink, Redirect, Route, Switch, useLocation 
} from "react-router-dom";

// UI Component 相關｜https://github.com/chakra-ui/chakra-ui/
import { 
  ChakraProvider,
  Button
} from "@chakra-ui/react"

// 區塊鏈的常數們（待處理）
import { 
  NETWORKS, 
  INFURA_KEY,
  INFURA_NODE_ID,
} from "./constants/networks"; 

// wagmi + ethers 相關 
import { providers } from "ethers";
import { 
  WagmiConfig, createClient, 
  chain, defaultChains, configureChains,
} from "wagmi";
import { publicProvider } from 'wagmi/providers/public'
import { infuraProvider } from 'wagmi/providers/infura'
import { jsonRpcProvider } from 'wagmi/providers/jsonRpc'
import { InjectedConnector } from "wagmi/connectors/injected";
import { MetaMaskConnector } from 'wagmi/connectors/metaMask'
import { WalletConnectConnector } from "wagmi/connectors/walletConnect";


// 接外部的 API
// Uniswap

// Router 指向的頁面
import { 
  XXXX
  // Homepage
} from "./Pages"; 

// 合約相關（待處理）
// import deployedContracts from "./contracts/hardhat_contracts.json";
// import externalContracts from "./contracts/external_contracts";

/**
 * Redux Notes
 * 最好的教學文件：https://chentsulin.github.io/redux/docs/introduction/PriorArt.html
 * 
 * ＊ 撰寫 reducer，作為改變 state 的主要方式。
 * 1. reducer 是 pure function，傳入的參數分別是欲更動的 state 以及 action 名稱
 * 2. reducer 以 return 方式賦與 state 新的值。請勿直接更動 state
 * 3. 不像 Flux 或 Vuex，Redux 沒有 dispatcher 的概念（但還是有 dispatch）。因為是依賴 pure function 達成變更 state 的目的，而非 event emmiter。
 * 
 * reducer 解析與註釋：https://chentsulin.github.io/redux/docs/basics/Reducers.html
 * 1.『state 的形狀』程式碼區塊的整包物件是一個 state，下面的 state 也是指這包 
 * 2. Object.assign 傳入的參數，第二個名為 state，是引入原本的值；第三個則是欲更動的部位
 * 
 * 搭配 RxJS 的妙用？
 * - RxJS 可將所有 event 變成 stream 透過 Observer 來監聽？此理解待確認。
 * - 兩位能做到的事情很像？
 * 
 * Redux Thunk，非同步的擴充武器
 * 1. 封裝 Middleware，執行非同步行為。
 * 
 * ＊ action？
 * https://chentsulin.github.io/redux/docs/basics/Actions.html
 * 1. 感覺 redux 是派發變更的統合管理方式？
 * 2. 描述發生的事，但不指定 app state 如何變更。這是 reducer 的工作
 * 
 * 以 helper 的方式取用 dispatch
 * 
 * 完整範例：
 * 01__Workshop/plugins/redux-master
 * 1. 初學範例，已加上教學註解 - counter-vanilla、counter
 * 2. 
 * 
 * 常用套件：
 * 'prop-types' - React 使用的型別套件
 */ 

/**
 * javascript 
 * █ class
 * - super - 繼承父 class
 * - static - 定義給 class 的靜態方法
 * https://developer.mozilla.org/zh-TW/docs/Web/JavaScript/Reference/Classes/static
 * 
 */ 



console.log('%INDEX', 'background: #436822; padding: .125em .4em; color: white; font-size: 32px; font-weight: 600')

function App() {

  // 先建立 provider，用項目方擁有的節點，由上往下迭代（下面最先）
  const { chains, provider } = configureChains(
    Object.values(chain), // 將物件展開城 array
    [
      infuraProvider({ INFURA_NODE_ID }),
      jsonRpcProvider({
        rpc: (chain) => {
          // if (chain.Localhost )
          // console.log(chain.rpcUrls.default)
          return { 
            http: chain.rpcUrls.default
          }
        },
      }),
    ],
  )

  const client = createClient({
    autoConnect: true, // 默默幫你連
    connectors: [
      new WalletConnectConnector({
        chains,
        options: {
          qrcode: true,
        },
      }),
      new MetaMaskConnector({ chains }),
      new InjectedConnector({ 
        chains,
        options: {
          name: 'Injected',
          shimDisconnect: true,
        },
      }), // 把所有鏈都加進去
    ],
    provider,
  })

  // console.log(client.connectors)


  return pug`
    // ████████  ██     ██  ███████ 
       ██     ██ ██     ██ ██ 
       ██     ██ ██     ██ ██ 
       ████████  ██     ██ ██  ██████
       ██        ██     ██ ██     ██
       ██        ██     ██ ██     ██
       ██         ███████   ███████   - start

    //- 引入 wagmi
    WagmiConfig(client=client)

      ChakraProvider
        main
          XXXX
          

      //- 引入 Chakra UI
        ChakraProvider
        .App.d-flex.flex-column
          
          //- Header

          main.flex-fill
            .px-2
              img.App-logo(src=logo alt="logo")
              
              //- 測試用內頁    
              
              //- ┏━━━━━━━━━━━━━━┓
                  ┃ LOOP Example ┃
                  ┗━━━━━━━━━━━━━━┛
                  以事件 call setTestValue(testValue - 1);
                  不能在 render 時 useState，因為偵測到狀態改變會 rerender，導致 infinite loop
                - let testIndex = testValue
                while (testIndex > 0)
                  //- 每一個 loop 所建立的 dom 需要有一個 uniqle key value，很重要！
                  div(key=testIndex) #{testIndex}
                  - testIndex--
              //- ━━━━━━━━━━━━━━━


              p Edit 
                code src/App.js
                |  and save to reload.
              
              
              //- ┏━━━━━━━━━━━━━━━━━┓
                  ┃ onClick Example ┃
                  ┗━━━━━━━━━━━━━━━━━┛
                  Button 是 Chakra UI 提供的 Component
                  setTestValue 賦值不可使用 testValue--，因為這等同於對常數本身做運算
                Button.my-5(
                  colorScheme="teal"
                  size="lg"
                  outline="none"
                  onClick=() => {
                    setTestValue(testValue - 1) 
                  }
                  _focus={
                    boxShadow: 'none',
                  }
                ) testValue - 1
                //- ━━━━━━━━━━━━━━━━━━


              a.App-link(href="https://reactjs.org" target="_blank" rel="noopener noreferrer")
              |Learn React

        //- Footer
      
    // █████████ ██     ██ ███████
       ██        ███    ██ ██     ██
       ██        ████   ██ ██     ██
       █████████ ██ ███ ██ ██     ██
       ██        ██   ████ ██     ██
       ██        ██    ███ ██     ██
       █████████ ██     ██ ███████
  `
}

export default App;
