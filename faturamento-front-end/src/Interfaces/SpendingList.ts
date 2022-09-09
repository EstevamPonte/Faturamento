export interface IStatus {
  id: number,
  name: string
}

export interface IControl {
  id: number,
  name: string
}

export interface IBank {
  id: number,
  name: string,
  total: number,
  date_created: Date,
  user_reference: string
  itens: Array<IItens>
  controls: Array<IControl>
  status: Array<IStatus>
  getSpendingListHelper(): void
  date_item: string
  value_per_month: number
}

export interface IItens {
  id: number,
  name: string,
  value: number,
  date_created: Date,
  final_installment: Date,
  instellment: number,
  user_reference: string,
  control: IControl,
  status: IStatus,
  date_item: Date
}
