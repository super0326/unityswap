import { useEffect, useState } from 'react'

type ApiResponse = {
  data : {
    [key: string]: string
  }
  prices: {
    [key: string]: string
  }
  update_at: string
}

/**
 * Due to Cors the api was forked and a proxy was created
 */
const WDEFI_ADDRESS = '0x291083c8aedfc3cd0384494e1fcdcf2067d28d3e'
const WOOP_ADDRESS = '0x8b303d5bbfbbf46f1a4d9741e491e06986894e18'
// const api = 'https://api.pancakeswap.info/api/v2/tokens/${WDEFI_ADDRESS}' // V2
const api = 'https://api.pancakeswap.info/api/v2/tokens/0x291083c8aedfc3cd0384494e1fcdcf2067d28d3e' // V2
// const api = 'https://api.pancakeswap.info/api/tokens/${WDEFI_ADDRESS}' // V1

const useGetPriceData = () => {
  const [data, setData] = useState<ApiResponse | null>(null)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(api)
        const res: ApiResponse = await response.json()

        setData(res)
      } catch (error) {
        console.error('Unable to fetch price data:', error)
      }
    }

    fetchData()
  }, [setData])

  return data
}

export default useGetPriceData
