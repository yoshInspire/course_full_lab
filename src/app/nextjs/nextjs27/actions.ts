"use server";

import { z } from "zod";
import { createInvoice } from "./data";

const InvoiceSchema = z.object({
  customer_id: z.string().min(1, "Выберите клиента"),
  amount: z.coerce.number().min(1, "Сумма должна быть больше 0"),
  status: z.string().min(1, "Выберите статус"),
});

export type InvoiceState = {
  errors?: {
    customer_id?: string[];
    amount?: string[];
    status?: string[];
  };
  message?: string;
  success?: boolean;
};

export async function createInvoiceAction(
  prevState: InvoiceState,
  formData: FormData
): Promise<InvoiceState> {
  const validatedFields = InvoiceSchema.safeParse({
    customer_id: formData.get("customer_id"),
    amount: formData.get("amount"),
    status: formData.get("status"),
  });

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      message: "Ошибка валидации",
    };
  }

  createInvoice({
    customer_id: validatedFields.data.customer_id,
    amount: validatedFields.data.amount,
    status: validatedFields.data.status,
  });

  return {
    success: true,
    message: "Инвойс успешно создан",
  };
}