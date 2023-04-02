module.exports.possibleMessages = {
    chewy: 'chewy',
    flooring: 'flooring'
};

module.exports.floorScript = {
    siteUrl: 'https://www.flooranddecor.com/order-status',
    orderFormPhoneNum: 'input[name=phoneNbr]',
    orderFormOrderNum: 'input[name=orderNbr]',
    orderSubmitBtn: 'body > div.l-main.ug-everyone.ug-unregistered > div.pt_storefront > div:nth-child(1) > div > div.b-account-order-lookup_container > div.b-account-order-lookup_form > form > button',
    orderStatusElm: '#root > div > div.order-detail.bootstrap > div:nth-child(2) > div.col-sm-8.col-lg-9 > div:nth-child(1) > div > div:nth-child(3) > div.b-order_status_info > p.b-order_status_heading',
    orderBanner: '#root > div > div.order-detail.bootstrap > div:nth-child(2) > div.col-sm-8.col-lg-9 > div:nth-child(1)'
};