
//class creating remains the same
class order {
    delivered = false;
    constructor(id, message) {
        this.id = id;
        this.message = message;
    }
    //crating function ina different way functionname(){}
    summarize() {
        console.log('summarize()'); //just to know what function is on
        const summary = 'order id: ' +
            this.id + ', message: ' + this.message + ', delivered: ' + this.delivered;
        return summary;
    }

    //function summarize_order(id, message, delivered) {
     //   var summary = 'order id: ' + id + ', message: ' + message + ', delivered: ' + delivered;
     //   return summary;
    //}
    // second variant to do function =()=>{} may be when there is => it is more visual
    summarize_2 = () => {
        console.log('summarize_2()');
        const summary = 'order id: ' +
            this.id + ', message: ' + this.message + ', delivered: ' + this.delivered;
        return summary;
    }
}

// ()=>{}
//creating new class object
let order_obj = new order(1237, 'Second order');
//let order_obj = new order(1237, 'Second order'); its same
const order_summary_1 = order_obj.summarize(); //do not need to write a lot of stuf inside ();
//const order_summary = summarize_order(order_obj.id, order_obj.message, order_obj.delivered);
console.log(order_summary_1);

order_obj.delivered = true;
const order_summary_2 = order_obj.summarize_2();
console.log(order_summary_2);