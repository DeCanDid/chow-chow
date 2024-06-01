import { useState } from "react";
import PaystackPop from "@paystack/inline-js";
export default function PayStack({ onClose }) {
  const [email, setEmail] = useState("");
  const [amount, setAmount] = useState("");
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    const paystack = new PaystackPop();
    paystack.newTransaction({
      key: "pk_test_d7f1c5afaf595f7e123438b658af3cc5428346a8",
      amount: amount * 100,
      email,
      firstname,
      lastname,
      onSuccess(transaction) {
        let message = `Payment complete! Reference ${transaction.reference}`;
        alert(message);
      },
      onCancel() {
        alert("You have cancelled the transaction");
      },
    });
  }
  return (
    <section
      role="dialog"
      class="modal"
      id="modal"
      aria-labelledby="modal-title"
    >
      <a class="modal-overlay" href="#" tabindex="-1">
        &nbsp;
      </a>
      <form className="paymentForm modal-content" onSubmit={handleSubmit}>
        <h2 id="modal-title"> Enter your details! </h2>

        <div class="form-group">
          <label for="email">Email Address</label>
          <input
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            type="email"
            required
          />
        </div>
        <div class="form-group">
          <label for="amount">Amount</label>
          <input
            onChange={(e) => setAmount(Number(e.target.value))}
            value={amount}
            type="tel"
            id="amount"
            required
          />
        </div>
        <div class="form-group">
          <label for="first-name">First Name</label>
          <input
            onChange={(e) => setFirstname(e.target.value)}
            value={firstname}
            type="text"
            id="first-name"
          />
        </div>
        <div class="form-group">
          <label for="last-name">Last Name</label>
          <input
            onChange={(e) => setLastname(e.target.value)}
            value={lastname}
            type="text"
            id="last-name"
          />
        </div>
        <div class="form-submit">
          <button type="submit" onclick="payWithPaystack()" className="pay">
            Pay
          </button>
          <a
            onClick={(t) => onClose(!t)}
            title="Close modal"
            aria-label="Close modal"
            class="modal-close"
            href="#"
          >
            &times;
          </a>
        </div>
      </form>
    </section>
  );
}
