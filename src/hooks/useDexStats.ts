import { useState, useEffect } from 'react'
import { Exchange } from '../apollo/client'
import { GLOBAL_DATA } from '../apollo/queries'
import { useSlowRefreshEffect } from './useRefreshEffect'


async function getGlobalData() {
    let data: any = {}
    try {
        // fetch the global data
        const result = await Exchange.query({
            query: GLOBAL_DATA(),
            fetchPolicy: 'cache-first',
        })
        data = result.data.odonswapFactories[0]
    } catch (e) {
        console.log(e)
    }
    
    return data
}

// DEX stats
export default () => {
    const [stats, setStats] = useState(null);

    useSlowRefreshEffect(() => {
        const fetchStats = async () => {
            const res = await getGlobalData()
            setStats(res)
        }

        fetchStats()
    }, [])
  
    return stats;
}
