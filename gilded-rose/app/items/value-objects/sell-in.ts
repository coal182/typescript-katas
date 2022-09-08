export class SellIn {
  constructor(private value: number = 999999) {}

  getValue(): number {
    return this.value;
  }

  decrease(): void {
    if (this.value > 0) this.value--;
  }
}
