import css from 'next/css'
import my_theme from '../../data/theme'

const theme = my_theme

const _tag = css({
  color: theme.colors.text,
  fontWeight: '700',
  transition: 'all 0.4s 0.2s ease-in-out',
  borderRadius: '5px',
  padding: '1px 3px 1px 3px',
  backgroundColor: theme.colors.trans_primary,
  textDecoration: 'none',
  ':hover': {
    transform: 'scale(1.05, 1.4)',
    transitionDelay: '0s',
    transitionDuration: '0.2s',
    backgroundColor: theme.colors.primary,
  }
})

const _button = css({
  background: theme.colors.white,
  color: theme.colors.primary,
})

export { theme, _tag, _button }
