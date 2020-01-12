//creating varaibles, later we will change them to const or let
var order_id = 1234;
var order_message = 'My order';
var order_delivered = false;

//creating function or "metod"
function summarize_order(id, message, delivered) {
    var summary = 'order id: ' + id + ', message: ' + message + ', delivered: ' + delivered;
    return summary;
}
//creating new varaable and  connecting to it function
var order_summary = summarize_order(order_id, order_message, order_delivered);

console.log(order_summary);