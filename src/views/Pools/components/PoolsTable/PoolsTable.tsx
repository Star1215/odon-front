import { useRef } from 'react'
import styled from 'styled-components'
import { DeserializedPool } from 'state/types'
import PoolRow, { VaultPoolRow } from './PoolRow'

interface PoolsTableProps {
  pools: DeserializedPool[]
  account: string
  urlSearch?: string
}

const StyledTable = styled.div`
  border-radius: ${({ theme }) => theme.radii.card};
  scroll-margin-top: 64px;
  > div:not(:last-child) {
    border-bottom: 2px solid ${({ theme }) => theme.colors.disabled};
  }
`

const StyledTableBorder = styled.div`
  border-radius: ${({ theme }) => theme.radii.card};
  padding: 1px 1px 3px 1px;
  background-size: 400% 400%;
  background-color: rgba(255, 255, 255, 0.03);
  box-shadow: inset 0px 0px 22.0779px rgba(255, 255, 255, 0.05), inset 0px 1.2987px 1.2987px rgba(255, 255, 255, 0.15);
  backdrop-filter: blur(27.9221px);
  border-radius: 16px;
`

const PoolsTable: React.FC<React.PropsWithChildren<PoolsTableProps>> = ({ pools, account, urlSearch }) => {
  const tableWrapperEl = useRef<HTMLDivElement>(null)

  return (
    <StyledTableBorder>
      <StyledTable id="pools-table" role="table" ref={tableWrapperEl}>
        {pools.map((pool) =>
          pool.vaultKey ? (
            // <VaultPoolRow
            //   initialActivity={urlSearch.toLowerCase() === pool.earningToken.symbol?.toLowerCase()}
            //   key={pool.vaultKey}
            //   vaultKey={pool.vaultKey}
            //   account={account}
            // />
            <></>
          ) : (
            <PoolRow
              initialActivity={urlSearch.toLowerCase() === pool.earningToken.symbol?.toLowerCase()}
              key={pool.sousId}
              sousId={pool.sousId}
              account={account}
            />
          ),
        )}
      </StyledTable>
    </StyledTableBorder>
  )
}

export default PoolsTable
