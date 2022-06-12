import './XXXX.styl';
import React from "react";

import { 
  ChakraProvider,
  Button
} from "@chakra-ui/react"

import { 
  // chain, defaultChains, configureChains,
  useConnect, useDisconnect,
  useNetwork,
} from "wagmi";

function XXXX() {

  const {
    connect,
    connectors,
  } = useConnect()

  const {
    disconnect,
  } = useDisconnect()

  console.log('XXXXXXX')
  console.log(connectors)
  
  return pug`
    div  
      Button.my-5(
        colorScheme="teal"
        size="lg"
        outline="none"
        onClick=() => connect()
      ) Fucking Connect

      Button.my-5(
        colorScheme="teal"
        size="lg"
        outline="none"
        onClick=() => disconnect()
      ) Fucking  DisConnect
  `;
}

export default XXXX;
