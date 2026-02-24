import Link from 'next/link'

interface ButtonProps {
  href?: string
  onClick?: () => void
  variant?: 'primary' | 'outline' | 'ghost'
  size?: 'sm' | 'md' | 'lg'
  children: React.ReactNode
  className?: string
  type?: 'button' | 'submit' | 'reset'
  disabled?: boolean
  external?: boolean
}

const sizeClasses = {
  sm: 'px-4 py-2 text-xs',
  md: 'px-6 py-3 text-sm',
  lg: 'px-8 py-4 text-base',
}

const variantClasses = {
  primary:
    'bg-mac-red hover:bg-mac-red-dark text-white border border-transparent',
  outline:
    'bg-transparent border border-white/30 hover:border-white text-white hover:bg-white/5',
  ghost:
    'bg-transparent border border-transparent text-mac-silver hover:text-white',
}

export default function Button({
  href,
  onClick,
  variant = 'primary',
  size = 'md',
  children,
  className = '',
  type = 'button',
  disabled = false,
  external = false,
}: ButtonProps) {
  const baseClasses =
    'inline-flex items-center gap-2 font-semibold uppercase tracking-wider rounded transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-mac-red focus:ring-offset-2 focus:ring-offset-mac-dark disabled:opacity-50 disabled:cursor-not-allowed'

  const classes = `${baseClasses} ${sizeClasses[size]} ${variantClasses[variant]} ${className}`

  if (href) {
    const linkProps = external
      ? { target: '_blank', rel: 'noopener noreferrer' }
      : {}
    return (
      <Link href={href} className={classes} {...linkProps}>
        {children}
      </Link>
    )
  }

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={classes}
    >
      {children}
    </button>
  )
}
