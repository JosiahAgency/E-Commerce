import mongoose from 'mongoose';

const orderSchema = new mongoose.Schema({
    userId: {type: String, required: true, ref: 'user'},
    items: [{
        product: {type: String, required: true, ref: 'product'},
        quantity: {type: Number, required: true},
    }],
    address: {type: String, ref: 'address', required: true},
    amount: {type: Number, required: true},
    status: {type: String, required: true, default: 'Order Placed'},
    date: {type: Number, required: true},
})

const Order = mongoose.models.Order || mongoose.model('Order', orderSchema)

export default Order;