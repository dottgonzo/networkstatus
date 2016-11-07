import netw from "netw"
import * as Promise from "bluebird";

const netroute = require("netroute")

interface IScan {
    essid: string;
    mac: string;
    signal: string;
}

interface INetwork {
    type: string;
    mac: string;
    interface: string;
    essid?: string;
    scan?: IScan[];
    ip?: string;
    gateway?: string;
}


interface INetStatus {

    networks: INetwork[];
    network: INetwork;
}

export default function netinfo() {
    return new Promise<INetStatus>(function(resolve, reject) {

        const gate: string = netroute.getGateway();

        netw().then(function(n) {
            let network: INetwork;

            const networks: INetwork[] = n
            for (var i = 0; i < n.length; i++) {
                if (n[i].gateway === gate) {
                    network = n[i]
                }
            }

            resolve({ network: network, networks: networks })


        }).catch(function(err) {
            reject(err)
        })


    })
}