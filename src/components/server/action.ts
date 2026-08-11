"use server";

import { Resend } from "resend";
import { render } from "@react-email/render";
import * as z from "zod";
import ContactEmail from "./contact-template";

const resend = new Resend(process.env.RESEND_API_KEY);

export type FormState = {
  success?: boolean;
  error?: string;
  message?: string;
};

export async function submitContactForm(
  _prevState: FormState,
  formData: FormData,
): Promise<FormState> {
  try {
    const formSchema = z.object({
      name: z.string().min(1, "Name is required"),
      email: z.string().email("Please enter a valid email address"),
      message: z.string().min(10, "Message must be at least 10 characters"),
    });

    const rawData = Object.fromEntries(formData.entries());
    const { data, success, error: validationError } = formSchema.safeParse(rawData);
    
    if (!success) {
      return {
        success: false,
        error: validationError.issues[0]?.message || "Please fill in all fields correctly",
      };
    }

    // Send notification email to portfolio owner
    const ownerEmail = "Kevintruong6587@gmail.com";
    const notificationHtml = await render(
      ContactEmail({
        name: data.name,
        email: data.email,
        message: data.message,
      })
    );

    const { error: notificationError } = await resend.emails.send({
      from: "onboarding@resend.dev",
      to: [ownerEmail],
      subject: `New Contact Form Submission from ${data.name}`,
      html: notificationHtml,
    });

    if (notificationError) {
      console.error("Resend error (notification email):", notificationError);
      return {
        success: false,
        error: "Failed to send message. Please try again or email me directly.",
      };
    }

    return {
      success: true,
      message: "Message sent successfully! I'll get back to you as soon as possible.",
    };
  } catch (error) {
    console.error("Server action error:", error);
    return {
      success: false,
      error: "Something went wrong. Please try again.",
    };
  }
}
