
//simulating data base delay in ms
function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

class order {
    delivered = false;
    constructor(id, message) {
        this.id = id;
        this.message = message;
    }
    summarize = async () => { //summarize_2 = () => { asunc added that server can work with many orders same time
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
// creating chain of orderd .then
order_obj.summarize().then((summary) => {
    console.log(summary);
//if to leave only order_obj.summarize(); then it will write start summarize and end summarize
    // instead of const order_summary_1 = order_obj.summarize();
});