require('dotenv').config();
const twilio = require('twilio');

const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const twilioPhone = process.env.TWILIO_PHONE_NUMBER;
const myPhone = process.env.MY_PHONE_NUMBER;

const client = new twilio(accountSid, authToken);

const sendWhatsAppNotification = async (message) => {
  try {
    await client.messages.create({
      body: message,
      from: `whatsapp:${twilioPhone}`,
      to: `whatsapp:${myPhone}`
    });
    console.log('Notificación WhatsApp enviada');
  } catch (error) {
    console.error('Error enviando WhatsApp:', error);
  }
};

module.exports = { sendWhatsAppNotification };