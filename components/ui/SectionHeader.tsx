interface SectionHeaderProps {
  eyebrow?: string
  title: string
  description?: string
  centered?: boolean
  light?: boolean
}

export default function SectionHeader({
  eyebrow,
  title,
  description,
  centered = false,
  light = false,
}: SectionHeaderProps) {
  const alignClass = centered ? 'text-center items-center' : 'text-left items-start'
  const accentClass = centered ? 'mx-auto' : ''

  return (
    <div className={`flex flex-col ${alignClass} mb-12`}>
      {eyebrow && (
        <p className="text-mac-red font-semibold text-sm uppercase tracking-widest mb-3">
          {eyebrow}
        </p>
      )}
      <div className={`w-12 h-0.5 bg-mac-red mb-4 ${accentClass}`} />
      <h2
        className={`text-3xl sm:text-4xl font-bold leading-tight ${
          light ? 'text-white' : 'text-white'
        }`}
      >
        {title}
      </h2>
      {description && (
        <p
          className={`mt-4 text-lg leading-relaxed max-w-2xl ${
            light ? 'text-gray-300' : 'text-gray-400'
          } ${centered ? 'mx-auto' : ''}`}
        >
          {description}
        </p>
      )}
    </div>
  )
}
