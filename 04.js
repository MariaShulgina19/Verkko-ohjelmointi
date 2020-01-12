//now changing object to class
class order {
    delivered = false;
    //creating constructor to add id and message
    constructor(id, message) {
        this.id = id;
        this.message = message;
    }
}

//let order = {
//    id: 1234, //const order_id = 1234;
//    message: 'My order', // const order_message = 'My order';
//    delivered: false // let order_delivered = false;
//}

function summarize_order(id, message, delivered) {
    var summary = 'order id: ' + id + ', message: ' + message + ', delivered: ' + delivered;
    return summary;
}
//creating new olio or object here
let order_obj = new order(1237, 'Second order');

const order_summary = summarize_order(order_obj.id, order_obj.message, order_obj.delivered);
//const order_summary = summarize_order(order.id, order.message, order.delivered);
//order.id changed=> order_obj.id
console.log(order_summary);

//changing delivered to true and then printing result
order_obj.delivered = true;
const order_summary_2 = summarize_order(order_obj.id, order_obj.message, order_obj.delivered);
console.log(order_summary_2);