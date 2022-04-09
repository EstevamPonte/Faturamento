export interface IAlertBoxContext {
  alertBox: IAlertBox,
  setAlertBox(value: IAlertBox): void
}

export interface IAlertBox {
  show: Boolean,
  message?: string,
  style?: "error" | "warning" | "success"
}