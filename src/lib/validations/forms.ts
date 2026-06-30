import { z } from "zod";

export const bookingFormSchema = z.object({
  fullName: z.string().min(2, "Full name is required"),
  email: z.string().email("Please enter a valid email address"),
  phone: z
    .string()
    .min(10, "Please enter a valid phone number")
    .regex(/^[\d\s()+-]+$/, "Invalid phone number format"),
  propertyAddress: z.string().min(5, "Please enter your property address"),
  serviceType: z.string().min(1, "Please select a type of service"),
  preferredDate: z.string().min(1, "Please select a preferred date"),
  preferredTime: z.string().min(1, "Please select a preferred time"),
  additionalDetails: z.string().optional(),
});

export type BookingFormValues = z.infer<typeof bookingFormSchema>;

/** @deprecated Use bookingFormSchema — kept for any legacy imports */
export const quoteFormSchema = bookingFormSchema;
export type QuoteFormValues = BookingFormValues;

export const contactFormSchema = z.object({
  name: z.string().min(2, "Name is required"),
  email: z.string().email("Please enter a valid email address"),
  phone: z.string().optional(),
  subject: z.string().min(3, "Subject is required"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

export type ContactFormValues = z.infer<typeof contactFormSchema>;

export const timeOptions = [
  "8:00 AM – 10:00 AM",
  "10:00 AM – 12:00 PM",
  "12:00 PM – 2:00 PM",
  "2:00 PM – 4:00 PM",
  "4:00 PM – 6:00 PM",
  "Flexible",
];
