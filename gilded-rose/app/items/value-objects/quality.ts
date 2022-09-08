export class Quality {
  private readonly MAX_VALUE = 50;
  private readonly MIN_VALUE = 0;

  constructor(private value: number) {
    this.value = this.getValidValue(value);
  }

  getValue(): number {
    return this.value;
  }

  getValidValue(value: number): number {
    if (value > this.MAX_VALUE) return this.MAX_VALUE;
    if (value < this.MIN_VALUE) return this.MIN_VALUE;
    return value;
  }

  decrease(): void {
    if (this.value > this.MIN_VALUE) this.value--;
  }

  increase(): void {
    if (this.value < this.MAX_VALUE) this.value++;
  }

  setToMinValue(): void {
    this.value = this.MIN_VALUE;
  }
}
