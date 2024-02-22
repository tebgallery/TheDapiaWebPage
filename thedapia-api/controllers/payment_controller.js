import { MercadoPagoConfig,Preference } from 'mercadopago';


export const createOrder = async (req,res) => {
    
    const client = new MercadoPagoConfig({ accessToken: 'TEST-7875454361979160-022016-eedf236cc874abb0cae5e0e3833a4356-1692822410' });

    const preference = new Preference(client);


    const result = await preference.create({
    body: {
        items: [
        {
            title: 'Cartuchera AFA',
            quantity: 1,
            unit_price: 500,
            currency_id: "ARS",
        }
        ],
        back_urls: {
            success: "http://localhost:3000/success",
            failure: "http://localhost:3000/failure",
            pending: "http://localhost:3000/pending",
        },
        notification_url: "http://localhost:3000/webhook",
    }
    })
    .then(console.log)
    .catch(console.log);


    res.send('creando orden')
};

export const receiveWebhook =  (req,res) => {
    console.log(req.query);

    res.send("webhook");
};