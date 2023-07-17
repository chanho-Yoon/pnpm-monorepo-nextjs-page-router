export interface ApiErrorResponse {
  code: number
  message: string
}

export interface ApiResponse<T> {
  code: number
  message: string
  result: T
}
