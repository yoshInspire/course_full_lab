'use server';

import { revalidatePath } from "next/cache";
import { deleteInvoice as removeInvoice } from "./data";

export async function deleteInvoice({ id }: { id: string }) {
  removeInvoice(id);
  revalidatePath("/nextjs/nextjs22/invoices");
}