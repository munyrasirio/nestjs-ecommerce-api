export class GetProductDTO {
  constructor(
    readonly id: string,
    readonly userId: string,
    readonly name: string,
  ) {}
}
