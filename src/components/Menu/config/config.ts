import {
  MenuItemsType,
  DropdownMenuItemType,
  SwapIcon,
  SwapFillIcon,
  EarnFillIcon,
  EarnIcon,
  TrophyIcon,
  TrophyFillIcon,
  NftIcon,
  NftFillIcon,
  MoreIcon,
  FarmIcon,
  PoolIcon,
  AddIcon,
  AddLpIcon,
  GroupsIcon,
} from '@pancakeswap/uikit'
import { ContextApi } from '@pancakeswap/localization'
import { nftsBaseUrl } from 'views/Nft/market/constants'
import { perpLangMap } from 'utils/getPerpetualLanguageCode'
import { perpTheme } from 'utils/getPerpetualTheme'
import { DropdownMenuItems } from '@pancakeswap/uikit/src/components/DropdownMenu/types'
import { SUPPORT_ONLY_MOONRIVER } from 'config/constants/supportChains'

export type ConfigMenuDropDownItemsType = DropdownMenuItems & { hideSubNav?: boolean }
export type ConfigMenuItemsType = Omit<MenuItemsType, 'items'> & { hideSubNav?: boolean; image?: string } & {
  items?: ConfigMenuDropDownItemsType[]
}

const addMenuItemSupported = (item, chainId) => {
  if (!chainId || !item.supportChainIds) {
    return item
  }
  if (item.supportChainIds?.includes(chainId)) {
    return item
  }
  return {
    ...item,
    disabled: true,
  }
}

const config: (t: ContextApi['t'], isDark: boolean, languageCode?: string, chainId?: number) => ConfigMenuItemsType[] =
  (t, isDark, languageCode, chainId) =>
    [
      // {
      //   label: t('Trade'),
      //   icon: SwapIcon,
      //   fillIcon: SwapFillIcon,
      //   href: '/swap',
      //   showItemsOnMobile: false,
      //   items: [
      //     {
      //       label: t('Swap'),
      //       href: '/swap',
      //     },
      //     {
      //       label: t('Liquidity'),
      //       href: '/liquidity',
      //     },
      //   ].map((item) => addMenuItemSupported(item, chainId)),
      // },
      {
        label: t('Swap'),
        href: '/swap',
        icon: SwapIcon,
        fillIcon: SwapFillIcon,
        supportChainIds: SUPPORT_ONLY_MOONRIVER,
        image: '/images/decorations/pe2.png',
        items: [
        ],
      },
      {
        label: t('Liquidity'),
        href: '/liquidity',
        icon: AddLpIcon,
        fillIcon: AddLpIcon,
        supportChainIds: SUPPORT_ONLY_MOONRIVER,
        image: '/images/decorations/pe2.png',
        items: [
        ],
      },
      {
        label: t('Farms'),
        href: '/farms',
        icon: FarmIcon,
        fillIcon: FarmIcon,
        supportChainIds: SUPPORT_ONLY_MOONRIVER,
        image: '/images/decorations/pe2.png',
        items: [
        ],
      },
      {
        label: t('Pools'),
        href: '/pools',
        icon: PoolIcon,
        fillIcon: PoolIcon,
        supportChainIds: SUPPORT_ONLY_MOONRIVER,
        items: [
        ],
      },
      {
        label: t('Referral'),
        href: `/referral`,
        icon: GroupsIcon,
        fillIcon: GroupsIcon,
        supportChainIds: SUPPORT_ONLY_MOONRIVER,
        image: '/images/decorations/nft.png',
        items: [
        ],
      },
      {
        label: '',
        href: '/',
        icon: MoreIcon,
        hideSubNav: true,
        items: [
          {
            label: t('Info'),
            href: '/',
            supportChainIds: SUPPORT_ONLY_MOONRIVER,
          },
          // {
          //   label: t('IFO'),
          //   href: '/ifo',
          //   supportChainIds: SUPPORT_ONLY_MOONRIVER,
          //   image: '/images/ifos/ifo-bunny.png',
          // },
          {
            type: DropdownMenuItemType.DIVIDER,
          },
          {
            label: t('Blog'),
            href: 'https://medium.com/pancakeswap',
            type: DropdownMenuItemType.EXTERNAL_LINK,
          },
          {
            label: t('Docs'),
            href: 'https://docs.pancakeswap.finance',
            type: DropdownMenuItemType.EXTERNAL_LINK,
          },
        ].map((item) => addMenuItemSupported(item, chainId)),
      },
    ].map((item) => addMenuItemSupported(item, chainId))

export default config
