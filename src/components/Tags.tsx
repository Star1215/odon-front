import {
  AutoRenewIcon,
  BlockIcon,
  CommunityIcon,
  RefreshIcon,
  Tag,
  TagProps,
  Text,
  TimerIcon,
  TooltipText,
  useTooltip,
  VerifiedIcon,
  VoteIcon,
} from '@pancakeswap/uikit'
import { useTranslation } from '@pancakeswap/localization'
import { memo } from 'react'
import { variant } from '@pancakeswap/uikit/src/components/Skeleton/types'

const CoreTag: React.FC<React.PropsWithChildren<TagProps>> = (props) => {
  const { t } = useTranslation()
  return (
    <Tag
      variant="secondary"
      style={{ background: 'none', color: 'white', border: '2px solid white' }}
      outline
      startIcon={<VerifiedIcon width="18px" color="secondary" mr="4px" />}
      {...props}
    >
      {t('Core')}
    </Tag>
  )
}

const FarmAuctionTagToolTipContent = memo(() => {
  const { t } = useTranslation()
  return <Text color="text">{t('Farm Auction Winner, add liquidity at your own risk.')}</Text>
})

const FarmAuctionTag: React.FC<React.PropsWithChildren<TagProps>> = (props) => {
  const { t } = useTranslation()
  const { targetRef, tooltip, tooltipVisible } = useTooltip(<FarmAuctionTagToolTipContent />, { placement: 'right' })
  return (
    <>
      {tooltipVisible && tooltip}
      <TooltipText ref={targetRef} style={{ textDecoration: 'none' }}>
        <Tag variant="failure" outline startIcon={<CommunityIcon width="18px" color="failure" mr="4px" />} {...props}>
          {t('Farm Auction')}
        </Tag>
      </TooltipText>
    </>
  )
}

const CommunityTag: React.FC<React.PropsWithChildren<TagProps>> = (props) => {
  const { t } = useTranslation()
  return (
    <Tag variant="failure" outline startIcon={<CommunityIcon width="18px" color="failure" mr="4px" />} {...props}>
      {t('Community')}
    </Tag>
  )
}

const DualTag: React.FC<React.PropsWithChildren<TagProps>> = (props) => {
  const { t } = useTranslation()
  return (
    <Tag variant="textSubtle" outline {...props}>
      {t('Dual')}
    </Tag>
  )
}

const ManualPoolTag: React.FC<React.PropsWithChildren<TagProps>> = (props) => {
  const { t } = useTranslation()
  return (
    <Tag variant="tertiary" outline startIcon={<RefreshIcon width="18px" color="white" mr="4px" />} {...props}>
      {t('Manual')}
    </Tag>
  )
}

const CompoundingPoolTag: React.FC<React.PropsWithChildren<TagProps>> = (props) => {
  const { t } = useTranslation()
  return (
    <Tag variant="success" outline startIcon={<AutoRenewIcon width="18px" color="success" mr="4px" />} {...props}>
      {t('Auto')}
    </Tag>
  )
}

const VoteNowTag: React.FC<React.PropsWithChildren<TagProps>> = (props) => {
  const { t } = useTranslation()
  return (
    <Tag variant="success" startIcon={<VoteIcon width="18px" color="success" mr="4px" />} {...props}>
      {t('Vote Now')}
    </Tag>
  )
}

const SoonTag: React.FC<React.PropsWithChildren<TagProps>> = (props) => {
  const { t } = useTranslation()
  return (
    <Tag variant="binance" startIcon={<TimerIcon width="18px" color="success" mr="4px" />} {...props}>
      {t('Soon')}
    </Tag>
  )
}

const ClosedTag: React.FC<React.PropsWithChildren<TagProps>> = (props) => {
  const { t } = useTranslation()
  return (
    <Tag variant="textDisabled" startIcon={<BlockIcon width="18px" color="textDisabled" mr="4px" />} {...props}>
      {t('Closed')}
    </Tag>
  )
}

export {
  CoreTag,
  FarmAuctionTag,
  DualTag,
  ManualPoolTag,
  CompoundingPoolTag,
  VoteNowTag,
  SoonTag,
  ClosedTag,
  CommunityTag,
}
