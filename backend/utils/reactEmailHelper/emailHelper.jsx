import React from "react";
import { Resend } from "resend";
import { render } from "@react-email/components";
import OrderConfirmation from "../htmlEmail/OrderConfirmation.js";

const sendEmail = async (data) => {
  // Create new Resend Client
  const resend = new Resend(process.env.REACT_APP_RESEND_API);

  const reactEmailTemplate = <OrderConfirmation data={data} />;
  const htmlEmailTemplate = render(reactEmailTemplate);

  const emailResponse = await resend.emails.send({
    from: "audiophile <onboarding@resend.dev>",
    to: [process.env.REACT_APP_TEST_EMAIL],
    subject: "audiophile Order Confirmation",
    html: htmlEmailTemplate,
  });

  return emailResponse;
};

export default sendEmail;
