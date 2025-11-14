import { Product } from "@/data-list/products";

/**
 * Genera un mensaje estructurado de WhatsApp para realizar un pedido
 * @param product - Producto del cual se generará el mensaje
 * @returns Mensaje codificado para URL de WhatsApp
 */

export const getWhatsAppMessage = (product: Product): string => {
  const isPedido = product?.stock <= 0;
  const isNew = product?.condition === "new";
  const condition = isNew ? "Nuevo" : "Reacondicionado";

  const message = `Hola 👋, acabo de completar mi pedido en *iubizon* 🤖 (dale "enviar" para confirmar tu orden)

🆔 Id producto: ${product?.id}
🛍 Producto: 1 x ${product?.type} ${product?.name} (${condition})${isPedido ? " - *A PEDIDO*" : ""}
🔗 Link producto: https://iubizon.com/productos/${product?.id}
💰 *Total a Pagar: S/${product.totalPayment?.toFixed(2)}*

${isPedido ? "⚠️ *Producto a pedido:* Consultaremos disponibilidad y tiempo de entrega." : ""}

🔴 El envío llega en 24-72 horas hábiles, y te contactarán cuando estén cerca 🚚
🔴 Recibirás asesorías por nuestro número personal para clientes fidelizados.
🔴 Si adquirió alguna promoción, será incluido dentro de su pedido y lo mandaremos en conjunto con su pedido!

¡Gracias por tu confianza! – Equipo de *iubizon company sac* 💜`;

  return encodeURIComponent(
    message.replace(/#/g, "%23").replace(/&/g, "%26").replace(/\+/g, "%2B"),
  );
};
