const { sendWhatsAppNotification } = require('../config/twilio');

const processContactForm = async (req, res) => {
  const { name, email, service, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ error: 'Faltan campos requeridos' });
  }

  try {
    // Crear mensaje para WhatsApp
    const whatsappMsg = `
    📌 Nuevo mensaje de contacto:
    Nombre: ${name}
    Email: ${email}
    Servicio: ${service || 'No especificado'}
    Mensaje: ${message}
    `;

    // Enviar notificación
    await sendWhatsAppNotification(whatsappMsg);

    res.status(200).json({ 
      success: true,
      message: 'Mensaje recibido. Te contactaremos pronto.' 
    });
  } catch (error) {
    console.error('Error procesando formulario:', error);
    res.status(500).json({ error: 'Error al procesar el formulario' });
  }
};

module.exports = { processContactForm };