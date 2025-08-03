# neo-design-patterns-hw-03

## Опис проєкту

Цей проєкт імітує архітектуру платіжної системи з підтримкою кількох платіжних провайдерів: Stripe, PayPal та ApplePay.

Використано патерни проектування:

- **Factory Method** — для створення платіжних провайдерів через фабрики.
- **Abstract Factory** — для уніфікованого створення провайдерів і відокремлення логіки їх ініціалізації.
- **Dependency Injection** через конструктор PaymentContext для гнучкості та розширюваності.

---

## Структура проєкту

/src
/core
PaymentProvider.ts # Інтерфейс платіжного провайдера
PaymentProviderFactory.ts # Інтерфейс фабрики провайдерів
/providers
/stripe
StripePaymentProvider.ts # Реалізація Stripe провайдера
StripeFactory.ts # Фабрика для Stripe
/paypal
PaypalPaymentProvider.ts # Реалізація PayPal провайдера
PaypalFactory.ts # Фабрика для PayPal
/apple
ApplePaymentProvider.ts # Реалізація Apple Pay провайдера
AppleFactory.ts # Фабрика для Apple Pay
/app
PaymentContext.ts # Контекст для роботи з провайдерами
main.ts # Точка входу, динамічний вибір провайдера


---

## Запуск проєкту

1. Встановити залежності:

npm install

Запустити платіжний сценарій з вибором провайдера через параметр командного рядка:

npx ts-node src/main.ts stripe
npx ts-node src/main.ts paypal
npx ts-node src/main.ts apple

## Приклад виводу
## Для stripe:

[Stripe] Authorizing $100
[Stripe] Capturing transaction 4g7rfa
[Stripe] Refunding transaction 4g7rfa

##Для paypal:

[PayPal] Authorizing $100
[PayPal] Capturing transaction epv2y
[PayPal] Refunding transaction epv2y

## Використані патерни
Factory Method

- Abstract Factory
- Dependency Injection
