var web3;

async function Connect(){
    await window.web3.currentProvider.enable();
    web3 =new Web3(window.web3.currentProvider);
}
