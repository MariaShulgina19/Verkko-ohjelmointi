function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

class order {
    delivered = false;
    constructor(id, message) {
        this.id = id;
        this.message = message;
    }

    // adding new function deliver that change delivererd satus to delivered

    deliver = async () => {
        await sleep(1000);
        this.delivered = true;
        return;
    }

    summarize = async () => {
        console.log('start summarize');

        //Simulate database delay or heavy calculation
        await sleep(1000);
        const summary = 'order id: ' +
            this.id + ', message: ' + this.message + ', delivered: ' + this.delivered;
        console.log('end summarize');
        return summary;
    }
}

let order_obj = new order(1237, 'Second order');
//adding delivery to chain
order_obj.deliver().then(() => { //this new
    console.log('delivered!'); // this new
    return order_obj.summarize();
}).then((summary) => {
    console.log(summary);
    // it was:
    //order_obj.summarize().then((summary) => {
    //console.log(summary);
});