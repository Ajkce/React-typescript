const currency_format = new Intl.NumberFormat(undefined, {
  currency: "AUD",
  style: "currency",
});

export function formatCurrency(number: number) {
    return currency_format.format(number)
}
