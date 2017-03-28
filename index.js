"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var netw_1 = require("netw");
var Promise = require("bluebird");
var netroute = require("netroute");
function netinfo() {
    return new Promise(function (resolve, reject) {
        var gate = netroute.getGateway();
        netw_1.default().then(function (n) {
            var network;
            var networks = n;
            for (var i = 0; i < n.length; i++) {
                if (n[i].gateway === gate) {
                    network = n[i];
                }
            }
            resolve({ network: network, networks: networks });
        }).catch(function (err) {
            reject(err);
        });
    });
}
exports.default = netinfo;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsNkJBQXVCO0FBQ3ZCLGtDQUFvQztBQUVwQyxJQUFNLFFBQVEsR0FBRyxPQUFPLENBQUMsVUFBVSxDQUFDLENBQUE7QUF5QnBDO0lBQ0ksTUFBTSxDQUFDLElBQUksT0FBTyxDQUFhLFVBQVMsT0FBTyxFQUFFLE1BQU07UUFFbkQsSUFBTSxJQUFJLEdBQVcsUUFBUSxDQUFDLFVBQVUsRUFBRSxDQUFDO1FBRTNDLGNBQUksRUFBRSxDQUFDLElBQUksQ0FBQyxVQUFTLENBQUM7WUFDbEIsSUFBSSxPQUFpQixDQUFDO1lBRXRCLElBQU0sUUFBUSxHQUFlLENBQUMsQ0FBQTtZQUM5QixHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUMsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FBQztnQkFDaEMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU8sS0FBSyxJQUFJLENBQUMsQ0FBQyxDQUFDO29CQUN4QixPQUFPLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFBO2dCQUNsQixDQUFDO1lBQ0wsQ0FBQztZQUVELE9BQU8sQ0FBQyxFQUFFLE9BQU8sRUFBRSxPQUFPLEVBQUUsUUFBUSxFQUFFLFFBQVEsRUFBRSxDQUFDLENBQUE7UUFHckQsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLFVBQVMsR0FBRztZQUNqQixNQUFNLENBQUMsR0FBRyxDQUFDLENBQUE7UUFDZixDQUFDLENBQUMsQ0FBQTtJQUdOLENBQUMsQ0FBQyxDQUFBO0FBQ04sQ0FBQztBQXhCRCwwQkF3QkMiLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgbmV0dyBmcm9tIFwibmV0d1wiXG5pbXBvcnQgKiBhcyBQcm9taXNlIGZyb20gXCJibHVlYmlyZFwiO1xuXG5jb25zdCBuZXRyb3V0ZSA9IHJlcXVpcmUoXCJuZXRyb3V0ZVwiKVxuXG5pbnRlcmZhY2UgSVNjYW4ge1xuICAgIGVzc2lkOiBzdHJpbmc7XG4gICAgbWFjOiBzdHJpbmc7XG4gICAgc2lnbmFsOiBzdHJpbmc7XG59XG5cbmludGVyZmFjZSBJTmV0d29yayB7XG4gICAgdHlwZTogc3RyaW5nO1xuICAgIG1hYzogc3RyaW5nO1xuICAgIGludGVyZmFjZTogc3RyaW5nO1xuICAgIGVzc2lkPzogc3RyaW5nO1xuICAgIHNjYW4/OiBJU2NhbltdO1xuICAgIGlwPzogc3RyaW5nO1xuICAgIGdhdGV3YXk/OiBzdHJpbmc7XG59XG5cblxuaW50ZXJmYWNlIElOZXRTdGF0dXMge1xuXG4gICAgbmV0d29ya3M6IElOZXR3b3JrW107XG4gICAgbmV0d29yazogSU5ldHdvcms7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIG5ldGluZm8oKSB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlPElOZXRTdGF0dXM+KGZ1bmN0aW9uKHJlc29sdmUsIHJlamVjdCkge1xuXG4gICAgICAgIGNvbnN0IGdhdGU6IHN0cmluZyA9IG5ldHJvdXRlLmdldEdhdGV3YXkoKTtcblxuICAgICAgICBuZXR3KCkudGhlbihmdW5jdGlvbihuKSB7XG4gICAgICAgICAgICBsZXQgbmV0d29yazogSU5ldHdvcms7XG5cbiAgICAgICAgICAgIGNvbnN0IG5ldHdvcmtzOiBJTmV0d29ya1tdID0gblxuICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBuLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgaWYgKG5baV0uZ2F0ZXdheSA9PT0gZ2F0ZSkge1xuICAgICAgICAgICAgICAgICAgICBuZXR3b3JrID0gbltpXVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcmVzb2x2ZSh7IG5ldHdvcms6IG5ldHdvcmssIG5ldHdvcmtzOiBuZXR3b3JrcyB9KVxuXG5cbiAgICAgICAgfSkuY2F0Y2goZnVuY3Rpb24oZXJyKSB7XG4gICAgICAgICAgICByZWplY3QoZXJyKVxuICAgICAgICB9KVxuXG5cbiAgICB9KVxufSJdfQ==
