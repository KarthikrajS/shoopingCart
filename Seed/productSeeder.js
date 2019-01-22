var Product = require('../models/product');
var mongoose = require('mongoose');
var Promise = require('bluebird');

mongoose.Promise =Promise;
mongoose.connect('mongodb://localhost:27017/stonedBox',{ useNewUrlParser: true });
var products = [
    new Product({
    imagePath:'http://cdn.shoplightspeed.com/shops/610593/files/2916227/mystery-box-mystery-box-25000.jpg',
    title:'Mystery Box',
    description: 'Surprise Yourself!!',
    price: 10
}),
    new Product({
        imagePath:'http://cdn.shoplightspeed.com/shops/610593/files/2916227/mystery-box-mystery-box-25000.jpg',
        title:'Subscription Box',
        description: 'Surprise Yourself!!',
        price: 20
    }),
    new Product({
        imagePath:'http://cdn.shoplightspeed.com/shops/610593/files/2916227/mystery-box-mystery-box-25000.jpg',
        title:'Gift Box',
        description: 'Surprise Yourself!!',
        price: 30
    })

];

var done=0;
for( var i=0;i<products.length;i++){
    products[i].save(function(err,result){
        done++;
        if(done === products.length){
            mongoose.disconnect();
        }

    });
}
