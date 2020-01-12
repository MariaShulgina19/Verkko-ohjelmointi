
// creating ogject instead of varaables by itself

let order = {
    id: 1234, //const order_id = 1234;
    message: 'My order', // const order_message = 'My order';
    delivered: false // let order_delivered = false;
}

//function stays the same
function summarize_order(id, message, delivered) {
    var summary = 'order id: ' + id + ', message: ' + message + ', delivered: ' + delivered;
    return summary;
}

const order_summary = summarize_order(order.id, order.message, order.delivered);
console.log(order_summary);

//changing status of order till true
order.delivered = true;
const order_summary_2 = summarize_order(order.id, order.message, order.delivered);
console.log(order_summary_2);

//changing order Id, when id is ingergr and can be change via object
order.id = 5436;
const order_summary_3 = summarize_order(order.id, order.message, order.delivered);
console.log(order_summary_3);
//printing third time with changed order id
