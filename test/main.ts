import netstatus from '../index'
import * as chai from 'chai'


const expect = chai.expect;
let networking;


before(function (done) {
    this.timeout(15000);

    netstatus().then(function (data) {
        networking = data
        done()
    }).catch((err) => {
        console.log("error", err)
        done()
    });
});


// write tests about multiple values (2 ip or 2 gateway for the same interface)
describe("netw object", function () {




    it("should return an object", function () {
        expect(networking).to.be.ok;
    });

    it("should contains network object", function () {
        expect(networking).to.have.property('network').that.is.an('Object');
    });

    it("networks contains networks array", function () {
        expect(networking).to.have.property('networks').that.is.an('Array');
    });



    describe("network entry", function () {


        it("default network structure contains interface, type and mac", function () {

            expect(networking.network).to.have.property('interface').to.be.a('string');
            expect(networking.network).to.have.property('type').to.be.a('string');
            expect(networking.network).to.have.property('mac').to.be.a('string');
            var options = ['wifi', 'wired','virtual'];
            expect(options).to.include(networking.network.type);

        });


        it("network structure contains interface, type and mac", function () {
            for (var i = 0; i < networking.networks.length; i++) {
                expect(networking.networks[i]).to.have.property('interface').to.be.a('string');
                expect(networking.networks[i]).to.have.property('type').to.be.a('string');
                expect(networking.networks[i]).to.have.property('mac').to.be.a('string');
            }
        });

        it("validate type of interface for API compatibility", function () {
            var options = ['wifi', 'wired', 'virtual'];
            for (var i = 0; i < networking.networks.length; i++) {
                expect(options).to.include(networking.networks[i].type);
            }
        });

        describe("wifi property (if wifi device is present on your computer", function () {

            it("wifi networks scan", function () {
                for (var i = 0; i < networking.networks.length; i++) {
                    if (networking.networks[i].type === 'wifi') {
                        expect(networking.networks[i]).to.have.property('scan').to.be.an('array');
                    }
                }
            });

            it("check essid if present", function () {
                for (var i = 0; i < networking.networks.length; i++) {
                    if (networking.networks[i].type === 'wifi' && networking.networks[i].gateway && networking.networks[i].essid) {
                        expect(networking.networks[i]).to.have.property('essid').to.be.a('string');
                    }
                }
            });

        });

    });

});
