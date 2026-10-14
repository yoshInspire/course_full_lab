'use client';

import { useActionState } from 'react';
import { createInvoice } from './actions';
import { customers } from './data';

export default function CreateInvoicePage() {
  const [state, formAction] = useActionState(createInvoice, {});

  return (
    <div>
      <h1>Создать инвойс</h1>
      <form action={formAction}>
        <div>
          <label>
            Customer:
            <select name="customer_id" required>
              {customers.map((c) => (
                <option key={c.id} value={c.id}>
                  {c.name}
                </option>
              ))}
            </select>
          </label>
        </div>
        <div>
          <label>
            Amount (cents):
            <input type="number" name="amount" min="1" required />
          </label>
        </div>
        <div>
          <label>
            Status:
            <select name="status" required>
              <option value="pending">Pending</option>
              <option value="paid">Paid</option>
              <option value="void">Void</option>
            </select>
          </label>
        </div>
        <button type="submit">Create Invoice</button>
      </form>
      <div data-testid="error-message">{state.error}</div>
    </div>
  );
}