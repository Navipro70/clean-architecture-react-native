class NetworkRequestError {
  name = ''
  message = ''
  statusCode = 0
  constructor({ message, statusCode }: { message: string; statusCode: number }) {
    this.message = message
    this.statusCode = statusCode
  }
}

// TODO Add in
// axios.interceptors.response.use(
//     response => response,
//     handleDefaultInterception,
//   );

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const handleDefaultInterception = async (error: any) => {
  console.log(error)
  if (error?.response?.status === 408 || error?.code === 'ECONNABORTED') {
    return Promise.reject(
      new NetworkRequestError({
        message: 'Timeout for request',
        statusCode: error.response.status,
      }),
    )
  }

  return Promise.reject(error)
}
