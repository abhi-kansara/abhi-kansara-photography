"use server";

import { identity } from "@/lib/identity";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendInquiry(formData: FormData) {
  const form_name = formData.get("name") as string;
  const form_email = formData.get("email") as string;
  const form_details = formData.get("details") as string;
  const form_honeypot = formData.get("website") as string; // Honeypot field

  // Simple honeypot check
  if (form_honeypot) {
    return { success: true, message: "Spam detected" };
  }

  if (!form_name || !form_email || !form_details) {
    return { success: false, error: "Please fill in all fields." };
  }

  try {
    const { data, error } = await resend.emails.send({
		from: `Photography Inquiry <${identity.email}>`,
		to: identity.email,
		subject: `New Inquiry from ${form_name}`,
		replyTo: form_email,
		html: `
        <h1>New Portfolio Inquiry</h1>
        <p><strong>Name:</strong> ${form_name}</p>
        <p><strong>Email:</strong> ${form_email}</p>
        <p><strong>Details:</strong></p>
        <p>${form_details.replace(/\n/g, "<br>")}</p>
      `,
	});

    if (error) {
      console.error("Resend Error:", error);
      return { success: false, error: "Failed to send email. Please try again later." };
    }

    return { success: true };
  } catch (err) {
    console.error("Inquiry Action Error:", err);
    return { success: false, error: "An unexpected error occurred." };
  }
}
