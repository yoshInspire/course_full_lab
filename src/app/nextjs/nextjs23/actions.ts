'use server';

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { createInvoiceData } from "./data";

export type State = { error?: string };

export async function createInvoice(prevState: State, formData: FormData): Promise<State> {
  const customer_id = formData.get("customer_id") as string;
  const amount = Number(formData.get("amount"));
  const status = formData.get("status") as "pending" | "paid" | "void";

  try {
    createInvoiceData({ customer_id, amount, status });
  } catch (error) {
    return { error: error instanceof Error ? error.message : "Failed to create invoice" };
  }

  // redirect бросает исключение, поэтому вызывается вне try
  revalidatePath("/nextjs/nextjs23/invoices");
  redirect("/nextjs/nextjs23/invoices");
}