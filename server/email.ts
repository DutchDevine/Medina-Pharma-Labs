import nodemailer from "nodemailer";
import type { CartItem } from "@shared/schema";

const BCC_ADDRESSES = "renzodezwart@renzodezwart.pl, renzodezwart@gmail.com";

if (!process.env.SMTP_USER || !process.env.SMTP_PASS) {
  console.warn(
    "[email] WARNING: SMTP_USER or SMTP_PASS is not set. Order confirmation emails will fail. " +
    "Please configure these environment variables."
  );
}

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST ?? "smtp.transip.email",
  port: Number(process.env.SMTP_PORT ?? 465),
  secure: true,
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
});

export interface OrderDetails {
  customerName: string;
  customerEmail: string;
  address: string;
  city: string;
  postalCode: string;
  country: string;
  notes?: string;
  items: CartItem[];
  subtotalEur: number;
  shippingEur: number;
  totalEur: number;
  orderNumber: string;
}

function escapeHtml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#x27;");
}

function buildOrderHtml(order: OrderDetails): string {
  const itemRows = order.items
    .map(
      (item) =>
        `<tr>
          <td style="padding:8px;border-bottom:1px solid #eee;">${escapeHtml(item.product.brand)} – ${escapeHtml(item.product.name)}</td>
          <td style="padding:8px;border-bottom:1px solid #eee;text-align:center;">${item.quantity}</td>
          <td style="padding:8px;border-bottom:1px solid #eee;text-align:right;">€${(item.product.priceEur * item.quantity).toFixed(2)}</td>
        </tr>`
    )
    .join("");

  return `
<!DOCTYPE html>
<html lang="nl">
<head><meta charset="UTF-8"><title>Orderbevestiging</title></head>
<body style="font-family:Arial,sans-serif;color:#333;max-width:600px;margin:0 auto;">
  <div style="background:#1a1a2e;padding:24px;text-align:center;">
    <h1 style="color:#fff;margin:0;font-size:22px;">Medina Pharma Labs</h1>
    <p style="color:#aaa;margin:4px 0 0;">Orderbevestiging</p>
  </div>

  <div style="padding:24px;">
    <p>Beste ${escapeHtml(order.customerName)},</p>
    <p>Bedankt voor uw bestelling! Hieronder vindt u een overzicht van uw order.</p>

    <p><strong>Ordernummer:</strong> ${escapeHtml(order.orderNumber)}</p>

    <h2 style="font-size:16px;border-bottom:2px solid #eee;padding-bottom:8px;">Bestelde producten</h2>
    <table style="width:100%;border-collapse:collapse;font-size:14px;">
      <thead>
        <tr style="background:#f5f5f5;">
          <th style="padding:8px;text-align:left;">Product</th>
          <th style="padding:8px;text-align:center;">Aantal</th>
          <th style="padding:8px;text-align:right;">Prijs</th>
        </tr>
      </thead>
      <tbody>${itemRows}</tbody>
    </table>

    <table style="width:100%;margin-top:16px;font-size:14px;">
      <tr>
        <td style="padding:4px;">Subtotaal:</td>
        <td style="padding:4px;text-align:right;">€${order.subtotalEur.toFixed(2)}</td>
      </tr>
      <tr>
        <td style="padding:4px;">Verzendkosten (DHL):</td>
        <td style="padding:4px;text-align:right;">€${order.shippingEur.toFixed(2)}</td>
      </tr>
      <tr style="font-weight:bold;font-size:16px;">
        <td style="padding:8px 4px;">Totaal:</td>
        <td style="padding:8px 4px;text-align:right;">€${order.totalEur.toFixed(2)}</td>
      </tr>
    </table>

    <h2 style="font-size:16px;border-bottom:2px solid #eee;padding-bottom:8px;margin-top:24px;">Verzendadres</h2>
    <p style="line-height:1.6;">
      ${escapeHtml(order.customerName)}<br>
      ${escapeHtml(order.address)}<br>
      ${escapeHtml(order.postalCode)} ${escapeHtml(order.city)}<br>
      ${escapeHtml(order.country)}
    </p>

    ${order.notes ? `<h2 style="font-size:16px;">Opmerkingen</h2><p>${escapeHtml(order.notes)}</p>` : ""}

    <p style="margin-top:32px;color:#666;font-size:13px;">
      Heeft u vragen? Neem contact met ons op via info@medinapharmalabs.eu.<br>
      Medina Pharma Labs
    </p>
  </div>
</body>
</html>`;
}

export async function sendOrderConfirmation(order: OrderDetails): Promise<void> {
  const senderEmail = process.env.SMTP_FROM ?? "info@medinapharmalabs.eu";
  const subject = `Orderbevestiging #${order.orderNumber} – Medina Pharma Labs`;
  const html = buildOrderHtml(order);

  await transporter.sendMail({
    from: `"Medina Pharma Labs" <${senderEmail}>`,
    to: order.customerEmail,
    bcc: BCC_ADDRESSES,
    subject,
    html,
  });
}
