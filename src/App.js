
import './App.css';
import GooglePayButton from '@google-pay/button-react';
import React from 'react';

function App() {
  return (
    <div className="App">
      <h1>Google pay</h1>
      <GooglePayButton
        environment="TEST"
        paymentRequest={{
          apiVersion: 2,
          apiVersionMinor: 0,
          allowedPaymentMethods: [
            {
              type: 'CARD',
              parameters: {
                allowedAuthMethods: ['PAN_ONLY','CRYPTOGRAM_3DS'],
                allowedCardNetworks: ['MASTERCARD','VISA'],
              },
              tokenizationSpecification: {
                type: 'PAYMENT_GATEWAY',
                parameters: {
                  gateway: 'example',
                  gatewayMerchantId: 'exampleGatewayMerchantId'
                },
              },
            },
          ],
          merchantInfo: {
            merchantId: '12345678901234567890',
            merchantName: 'Demo Merchant',
          },
          transactionInfo: {
            totalPriceStatus: 'FINAL',
            totalPriceLabel: 'Total',
            totalPrice: '1',
            currencyCode: 'USD',
            countryCode: 'US',
          },
          shippingAddressRequired: 'true',
          callbackIntents: ['SHIPPING_ADDRESS','PAYMENT_AUTHORIZATION'],
        }}
        onLoadPaymentData={paymentRequest => {
          console.log('Success',paymentRequest);
        }}
        onPaymentAuthorized={paymentData => {
          console.log('Payment Authorised Success', paymentData)
          return{transactionState: 'SUCCESS'}
        }}
        onPaymentDataChanged={paymentData => {
          console.log('On payment data changed', paymentData)
          return{}
        }}
        existingPaymentMethodRequired='false'
        //shippingAddressRequired='true'
        buttonColor='black'
        buttonType='buy'
      />
    </div>
  );
}

export default App;
