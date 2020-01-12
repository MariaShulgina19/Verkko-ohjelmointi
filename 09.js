function sleep(ms)
{
    return new Promise(resolve => setTimeout(resolve, ms));
}

class order {

    products =[];
    delivered=false;
    constructor (id, message){
        this.id=id;
        this.message=message;
}



add_product = (product) => {
    //adding products to the array
    this.product.push(product);
}
deliver = async () => {
    await sleep(1000);
    this.delivered = true;
    return;
}


//second variant
//async means for server that this is not synchronised
summarize = async () => {
    console.log('start summarize');
    await sleep(1000);
n
    //console.log(this.summarize_2);
    const summary = 'order id:'+ this.id + ',message:'+ this.message + ',delicered:' +this.delivered;
    summary +=',Products: [';this.products.forEach((product,index) =>{
        summary+=products +', ';
        summary += ']';
    });
    console.log('end summaraze')
    return summary;
}
//()=>{}

}

let order_oj= new order (127, 'second order');


//adding products to array/table
order_oj.add_product('coffee');
order_oj.add_product('milk');

order_oj.deliver().then(() =>{
    console.log('delivered!');
    return order_oj.summarize();
}).then((summary)=>{

console.log(summary);

});
