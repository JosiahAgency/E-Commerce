import mongoose from 'mongoose';

const orderSchema = new mongoose.Schema({
    userId: {type: String, required: true, ref: 'User'},
    items: [{
        product: {type: String, required: true, ref: 'Product'},
        quantity: {type: Number, required: true},
    }],
    address: {type: String, ref: 'Address', required: true},
    amount: {type: Number, required: true},
    status: {type: String, required: true, default: 'Order Placed'},
    date: {type: Number, required: true},
})

const Order = mongoose.models.Order || mongoose.model('Order', orderSchema)

export default Order;