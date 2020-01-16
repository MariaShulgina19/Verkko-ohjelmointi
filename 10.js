//käytää sleep(ms) apufuntiona

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}
//luo luokka nimeltä  worker
class worker {
    constructor (n_food){
        this.n_food=n_food;  
    }
   

        //lisää luokalle asyncroninen do_work(duration) metodi
        do_work = async (duration) => {
        console.log('tarkistetaan onko ruokaa jäjellä');
        if (this.n_food<1){
          
        console.log(':( ei ole ruoka');}
        else {

        await sleep(duration); // jos ruokaa on, niin työtä tehdän DURATIOn ajan verran
        //this.n_food=this.n_food-1; //työn jälkeen kuluu yksi annos ruokaa to check
        this.n_food--;
        console.log('Ruoka jäjellä: '+ this.n_food +' portions!'); //printing how much food is left
        console.log('työ tehty, WELL DONE!');
        console.log();
        
        }
            return; //Promise<void>
        }
}
    
let worker_obj = new worker (10); //adding worker with three portion of food

worker_obj.do_work(2000).then(() => { //worker_obj.do_work(2000).then(() => {
    return worker_obj.do_work(1000); //worker_obj.do_work(1000);
}).then(() =>{                          //return --wait when one work is done
    return worker_obj.do_work(3000);
}).then(() =>{
    return worker_obj.do_work(2000);
}).then(() =>{
    return worker_obj.do_work(1500);
});