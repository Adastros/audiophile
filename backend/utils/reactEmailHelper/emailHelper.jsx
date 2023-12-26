import React from "react";
import { Resend } from "resend";
import { render } from "@react-email/components";
import OrderConfirmation from "../htmlEmail/OrderConfirmation.js";

const sendEmail = async (data) => {
  // Create new Resend Client
  const resend = new Resend(process.env.REACT_APP_RESEND_API);

  // Render the email template
  const reactEmailTemplate = <OrderConfirmation data={data} />;
  const htmlEmailTemplate = render(reactEmailTemplate);

  // Get the user's email
  const userEmail = data.email;

  const emailResponse = await resend.emails.send({
    from: `audiophile <${process.env.REACT_APP_FROM_EMAIL}>`,
    to: userEmail,
    subject: "audiophile Order Confirmation",
    html: htmlEmailTemplate,
  });

  return emailResponse;
};

export default sendEmail;
