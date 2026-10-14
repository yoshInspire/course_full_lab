'use server';

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { z } from "zod";
import { addInvoice } from "./data";

const InvoiceSchema = z.object({
  customer_id: z.string().min(1),
  amount: z.coerce.number().positive(),
  status: z.enum(["pending", "paid", "void"]),
});

export async function createInvoice(formData: FormData) {
  const { customer_id, amount, status } = InvoiceSchema.parse({
    customer_id: formData.get("customer_id"),
    amount: formData.get("amount"),
    status: formData.get("status"),
  });
  const amountInCents = Math.round(amount * 100);
  const date = new Date().toISOString().split("T")[0]!;

  addInvoice({ customer_id, amount: amountInCents, status, date });

  revalidatePath("/nextjs/nextjs20/invoices");
  redirect("/nextjs/nextjs20/invoices");
}