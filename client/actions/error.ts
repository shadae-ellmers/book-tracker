export interface ErrorAction {
  type: 'SET_ERROR'
  payload: string
}

export function setError(message: string): ErrorAction {
  return { type: 'SET_ERROR', payload: message }
}
