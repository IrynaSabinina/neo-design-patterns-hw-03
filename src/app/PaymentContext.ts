import { PaymentProviderFactory } from "../core/PaymentProviderFactory";

export class PaymentContext {
  private paymentProvider = this.factory.createPaymentProvider();

  constructor(private factory: PaymentProviderFactory) {}

  processPayment(amount: number) {
    this.paymentProvider.authorize(amount);

    // Для імітації генерації transactionId
    const transactionId = Math.random().toString(36).substr(2, 6);

    this.paymentProvider.capture(transactionId);
    this.paymentProvider.refund(transactionId);
  }
}
