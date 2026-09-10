import logoPng from '/logo-mark.png'

type LogoProps = {
  /** height in px; width keeps the original 1024:572 ratio */
  size?: 'sm' | 'md' | 'lg'
  withName?: boolean
}

const heights = { sm: 28, md: 40, lg: 64 } as const

/**
 * Brand logo treatment. The original JPEG is never modified; this uses the
 * transparent variant derived from it (public/logo-mark.png). No animation
 * beyond a simple entrance fade handled by the page, never a loop.
 */
export function Logo({ size = 'md', withName = false }: LogoProps) {
  return (
    <span className="logo" data-size={size}>
      <img
        src={logoPng}
        alt="AH logo"
        width={Math.round(heights[size] * (1024 / 572))}
        height={heights[size]}
        className="logo__mark"
      />
      {withName && <span className="logo__name">AH<span className="logo__name-dim"> · Data Engineer</span></span>}
    </span>
  )
}
