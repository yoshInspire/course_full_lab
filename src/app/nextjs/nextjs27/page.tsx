"use client";

import { useActionState } from "react";
import { createInvoiceAction, type InvoiceState } from "./actions";

const initialState: InvoiceState = {};

export default function Page() {
  const [state, formAction] = useActionState(createInvoiceAction, initialState);

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-6">Создание инвойса</h1>

      <form action={formAction} className="space-y-4 max-w-md">
        <div>
          <label htmlFor="customer_id" className="block text-sm font-medium">
            Клиент
          </label>
          <select
            id="customer_id"
            name="customer_id"
            className="mt-1 block w-full border rounded p-2"
          >
            <option value="">Выберите клиента</option>
            <option value="customer_1">Alice Johnson</option>
            <option value="customer_2">Bob Smith</option>
            <option value="customer_3">Carol White</option>
          </select>
          {state.errors?.customer_id?.map((error) => (
            <p key={error} className="text-sm text-red-500">
              {error}
            </p>
          ))}
        </div>

        <div>
          <label htmlFor="amount" className="block text-sm font-medium">
            Сумма ($)
          </label>
          <input
            type="number"
            id="amount"
            name="amount"
            className="mt-1 block w-full border rounded p-2"
          />
          {state.errors?.amount?.map((error) => (
            <p key={error} className="text-sm text-red-500">
              {error}
            </p>
          ))}
        </div>

        <div>
          <label htmlFor="status" className="block text-sm font-medium">
            Статус
          </label>
          <select
            id="status"
            name="status"
            className="mt-1 block w-full border rounded p-2"
          >
            <option value="">Выберите статус</option>
            <option value="pending">pending</option>
            <option value="paid">paid</option>
            <option value="void">void</option>
          </select>
          {state.errors?.status?.map((error) => (
            <p key={error} className="text-sm text-red-500">
              {error}
            </p>
          ))}
        </div>

        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          Создать
        </button>

        {state.success && <p className="text-green-600">{state.message}</p>}
      </form>
    </div>
  );
}