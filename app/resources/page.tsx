'use client'

import { useState, useMemo, useEffect, useCallback } from 'react'
import Link from 'next/link'
import { resources, resourceCategories } from '@/lib/resources'
import type { Resource, ResourceCategory, ResourceFileType } from '@/types'

// ── Icons ─────────────────────────────────────────────────────────────────────
function PdfIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M14 2H6C5.46957 2 4.96086 2.21071 4.58579 2.58579C4.21071 2.96086 4 3.46957 4 4V20C4 20.5304 4.21071 21.0391 4.58579 21.4142C4.96086 21.7893 5.46957 22 6 22H18C18.5304 22 19.0391 21.7893 19.4142 21.4142C19.7893 21.0391 20 20.5304 20 20V8L14 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M14 2V8H20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M9 15H8V13H9C9.26522 13 9.51957 13.1054 9.70711 13.2929C9.89464 13.4804 10 13.7348 10 14C10 14.2652 9.89464 14.5196 9.70711 14.7071C9.51957 14.8946 9.26522 15 9 15Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M12 13H13.5C13.8978 13 14.2794 13.158 14.5607 13.4393C14.842 13.7206 15 14.1022 15 14.5C15 14.8978 14.842 15.2794 14.5607 15.5607C14.2794 15.842 13.8978 16 13.5 16H12V13Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M8 13V17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M12 13V17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M17 13V15.5H15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
}

function CsvIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M14 2H6C5.46957 2 4.96086 2.21071 4.58579 2.58579C4.21071 2.96086 4 3.46957 4 4V20C4 20.5304 4.21071 21.0391 4.58579 21.4142C4.96086 21.7893 5.46957 22 6 22H18C18.5304 22 19.0391 21.7893 19.4142 21.4142C19.7893 21.0391 20 20.5304 20 20V8L14 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M14 2V8H20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <line x1="8" y1="13" x2="16" y2="13" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
      <line x1="8" y1="17" x2="16" y2="17" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
      <line x1="12" y1="13" x2="12" y2="17" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
    </svg>
  )
}

function DownloadIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
    </svg>
  )
}

function SearchIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
      <circle cx="11" cy="11" r="8" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-4.35-4.35" />
    </svg>
  )
}

function EyeIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
    </svg>
  )
}

function XIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
    </svg>
  )
}

// ── File type config ───────────────────────────────────────────────────────────
const fileTypeConfig: Record<ResourceFileType, { label: string; color: string; bg: string; border: string }> = {
  pdf:  { label: 'PDF',  color: 'text-red-400',     bg: 'bg-red-950/40',     border: 'border-red-900/40'     },
  csv:  { label: 'CSV',  color: 'text-emerald-400',  bg: 'bg-emerald-950/40', border: 'border-emerald-900/40' },
  xlsx: { label: 'XLSX', color: 'text-blue-400',     bg: 'bg-blue-950/40',    border: 'border-blue-900/40'    },
}

// ── Category color mapping ─────────────────────────────────────────────────────
const categoryColors: Record<ResourceCategory, string> = {
  'Company Overview':         'text-mac-red',
  'Capability Sheets':        'text-blue-400',
  'Safety & Compliance':      'text-amber-400',
  'Technical Specifications': 'text-violet-400',
  'Forms & Templates':        'text-emerald-400',
  'Case Studies':             'text-cyan-400',
}

// ── CSV table viewer ───────────────────────────────────────────────────────────
function CsvViewer({ filePath }: { filePath: string }) {
  const [rows, setRows] = useState<string[][]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)

  useEffect(() => {
    setLoading(true)
    setError(false)
    fetch(filePath)
      .then((r) => {
        if (!r.ok) throw new Error('fetch failed')
        return r.text()
      })
      .then((text) => {
        // Simple CSV parse (handles quoted fields)
        const parsed = text.trim().split('\n').map((line) => {
          const cells: string[] = []
          let cur = ''
          let inQuote = false
          for (const ch of line) {
            if (ch === '"') { inQuote = !inQuote }
            else if (ch === ',' && !inQuote) { cells.push(cur); cur = '' }
            else { cur += ch }
          }
          cells.push(cur)
          return cells
        })
        setRows(parsed)
        setLoading(false)
      })
      .catch(() => { setError(true); setLoading(false) })
  }, [filePath])

  if (loading) return (
    <div className="flex items-center justify-center h-full text-gray-500 text-sm">Loading…</div>
  )
  if (error || rows.length === 0) return (
    <div className="flex items-center justify-center h-full text-gray-500 text-sm">Unable to load preview.</div>
  )

  const [header, ...body] = rows

  return (
    <div className="overflow-auto h-full p-4">
      <table className="w-full text-xs border-collapse min-w-max">
        <thead>
          <tr className="bg-[#1A1A1A]">
            {header.map((h, i) => (
              <th key={i} className="text-left text-[#CC1F1F] font-bold uppercase tracking-wider px-4 py-2.5 border border-[#2A2A2A] whitespace-nowrap">
                {h}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {body.map((row, ri) => (
            <tr key={ri} className={ri % 2 === 0 ? 'bg-[#111111]' : 'bg-[#161616]'}>
              {row.map((cell, ci) => (
                <td key={ci} className="text-gray-400 px-4 py-2 border border-[#2A2A2A] whitespace-nowrap">
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

// ── Quick View Modal ───────────────────────────────────────────────────────────
function QuickViewModal({ resource, onClose }: { resource: Resource; onClose: () => void }) {
  const ft = fileTypeConfig[resource.fileType]
  const catColor = categoryColors[resource.category]

  // Escape key closes
  useEffect(() => {
    const handler = (e: KeyboardEvent) => { if (e.key === 'Escape') onClose() }
    window.addEventListener('keydown', handler)
    return () => window.removeEventListener('keydown', handler)
  }, [onClose])

  // Lock body scroll
  useEffect(() => {
    document.body.style.overflow = 'hidden'
    return () => { document.body.style.overflow = '' }
  }, [])

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6"
      onClick={onClose}
    >
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" />

      {/* Modal */}
      <div
        className="relative z-10 flex flex-col w-full max-w-5xl rounded-xl overflow-hidden border border-white/10 shadow-2xl"
        style={{ height: 'min(90vh, 900px)' }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* ── Header ── */}
        <div className="flex items-center gap-3 bg-[#111111] border-b border-white/8 px-4 py-3 flex-shrink-0">
          {/* File type icon */}
          <div className={`flex-shrink-0 w-8 h-8 rounded-md ${ft.bg} border ${ft.border} flex items-center justify-center`}>
            {resource.fileType === 'pdf'
              ? <PdfIcon className={`w-4 h-4 ${ft.color}`} />
              : <CsvIcon className={`w-4 h-4 ${ft.color}`} />
            }
          </div>

          {/* Title + category */}
          <div className="flex-1 min-w-0">
            <p className={`text-[10px] font-bold uppercase tracking-widest ${catColor} leading-none mb-0.5`}>
              {resource.category}
            </p>
            <h2 className="text-white font-semibold text-sm leading-tight truncate">
              {resource.title}
            </h2>
          </div>

          {/* Actions */}
          <div className="flex items-center gap-2 flex-shrink-0">
            {/* File size badge */}
            <span className={`hidden sm:inline-flex text-[10px] font-bold uppercase tracking-widest ${ft.color} ${ft.bg} border ${ft.border} px-2 py-0.5 rounded`}>
              {ft.label} · {resource.fileSize}
            </span>

            {/* Download */}
            <a
              href={resource.filePath}
              download
              title="Download"
              className="flex items-center gap-1.5 bg-[#CC1F1F] hover:bg-[#B01A1A] text-white text-xs font-semibold px-3 py-1.5 rounded-lg transition-colors"
            >
              <DownloadIcon className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Download</span>
            </a>

            {/* Close */}
            <button
              onClick={onClose}
              title="Close (Esc)"
              className="flex items-center justify-center w-8 h-8 rounded-lg bg-white/5 hover:bg-white/10 text-gray-400 hover:text-white transition-colors"
            >
              <XIcon className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* ── Viewer body ── */}
        <div className="flex-1 bg-[#0A0A0A] overflow-hidden">
          {resource.fileType === 'pdf' ? (
            <iframe
              src={resource.filePath}
              className="w-full h-full border-0"
              title={resource.title}
            />
          ) : (
            <CsvViewer filePath={resource.filePath} />
          )}
        </div>
      </div>
    </div>
  )
}

// ── Resource card ──────────────────────────────────────────────────────────────
function ResourceCard({
  resource,
  onQuickView,
}: {
  resource: Resource
  onQuickView: (r: Resource) => void
}) {
  const ft = fileTypeConfig[resource.fileType]
  const catColor = categoryColors[resource.category]

  return (
    <div className="group relative bg-mac-gray border border-mac-gray-light rounded-xl p-5 hover:border-mac-red/30 transition-all duration-200 flex flex-col">
      {/* Featured badge */}
      {resource.featured && (
        <span className="absolute top-4 right-4 text-[10px] font-bold uppercase tracking-widest text-mac-red bg-mac-red/10 border border-mac-red/20 px-2 py-0.5 rounded-full">
          Featured
        </span>
      )}

      {/* File type icon + title */}
      <div className="flex items-start gap-4 mb-4">
        <div className={`flex-shrink-0 w-11 h-11 rounded-lg ${ft.bg} border ${ft.border} flex items-center justify-center`}>
          {resource.fileType === 'pdf'
            ? <PdfIcon className={`w-5 h-5 ${ft.color}`} />
            : <CsvIcon className={`w-5 h-5 ${ft.color}`} />
          }
        </div>
        <div className="min-w-0">
          <span className={`text-[10px] font-bold uppercase tracking-widest ${catColor}`}>
            {resource.category}
          </span>
          <h3 className="text-white font-semibold text-sm leading-snug mt-0.5 group-hover:text-mac-red transition-colors">
            {resource.title}
          </h3>
        </div>
      </div>

      {/* Description */}
      <p className="text-gray-500 text-xs leading-relaxed mb-4 flex-1">
        {resource.description}
      </p>

      {/* Tags */}
      {resource.tags && resource.tags.length > 0 && (
        <div className="flex flex-wrap gap-1.5 mb-4">
          {resource.tags.slice(0, 4).map((tag) => (
            <span
              key={tag}
              className="text-[10px] text-gray-600 bg-white/5 border border-white/5 px-2 py-0.5 rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>
      )}

      {/* Footer: size + actions */}
      <div className="flex items-center justify-between gap-2 pt-3 border-t border-white/5">
        <div className="flex items-center gap-2">
          <span className={`text-[10px] font-bold uppercase tracking-widest ${ft.color} ${ft.bg} border ${ft.border} px-2 py-0.5 rounded`}>
            {ft.label}
          </span>
          <span className="text-gray-600 text-xs">{resource.fileSize}</span>
        </div>

        <div className="flex items-center gap-2">
          {/* Quick View */}
          <button
            onClick={() => onQuickView(resource)}
            className="inline-flex items-center gap-1.5 bg-white/5 border border-white/10 text-gray-300 hover:text-white hover:border-white/20 text-xs font-semibold px-3 py-1.5 rounded-lg transition-colors"
          >
            <EyeIcon className="w-3.5 h-3.5" />
            Quick View
          </button>

          {/* Download */}
          <a
            href={resource.filePath}
            download
            className="inline-flex items-center gap-1.5 bg-mac-red text-white text-xs font-semibold px-3 py-1.5 rounded-lg hover:bg-mac-red-light transition-colors"
            onClick={(e) => e.stopPropagation()}
          >
            <DownloadIcon className="w-3.5 h-3.5" />
            Download
          </a>
        </div>
      </div>
    </div>
  )
}

// ── Main page ──────────────────────────────────────────────────────────────────
export default function ResourcesPage() {
  const [search, setSearch] = useState('')
  const [activeCategory, setActiveCategory] = useState<ResourceCategory | 'All'>('All')
  const [activeFileType, setActiveFileType] = useState<ResourceFileType | 'All'>('All')
  const [previewResource, setPreviewResource] = useState<Resource | null>(null)

  const handleQuickView = useCallback((r: Resource) => setPreviewResource(r), [])
  const handleClosePreview = useCallback(() => setPreviewResource(null), [])

  const filtered = useMemo(() => {
    return resources.filter((r) => {
      const matchesCategory = activeCategory === 'All' || r.category === activeCategory
      const matchesFileType = activeFileType === 'All' || r.fileType === activeFileType
      const q = search.toLowerCase()
      const matchesSearch =
        !q ||
        r.title.toLowerCase().includes(q) ||
        r.description.toLowerCase().includes(q) ||
        (r.tags ?? []).some((t) => t.toLowerCase().includes(q))
      return matchesCategory && matchesFileType && matchesSearch
    })
  }, [search, activeCategory, activeFileType])

  const countByCategory = useMemo(() => {
    const map: Record<string, number> = { All: resources.length }
    resourceCategories.forEach((cat) => {
      map[cat] = resources.filter((r) => r.category === cat).length
    })
    return map
  }, [])

  const pdfCount = resources.filter((r) => r.fileType === 'pdf').length
  const csvCount = resources.filter((r) => r.fileType === 'csv').length

  return (
    <>
      {/* Quick View modal — rendered at root so it overlays everything */}
      {previewResource && (
        <QuickViewModal resource={previewResource} onClose={handleClosePreview} />
      )}

      {/* ── Hero ─────────────────────────────────────────────────────────── */}
      <section className="pt-36 pb-14 bg-mac-dark relative overflow-hidden">
        <div className="absolute left-0 top-0 bottom-0 w-1 bg-mac-red" />
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,0.02) 1px, transparent 1px),
                              linear-gradient(90deg, rgba(255,255,255,0.02) 1px, transparent 1px)`,
            backgroundSize: '60px 60px',
          }}
        />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 mb-5 text-xs uppercase tracking-widest">
            <Link href="/" className="text-gray-600 hover:text-gray-400 transition-colors">Home</Link>
            <span className="text-gray-700">/</span>
            <span className="text-mac-red">Resources</span>
          </div>

          <div className="w-12 h-0.5 bg-mac-red mb-5" />
          <h1 className="text-5xl sm:text-6xl font-black text-white mb-4 leading-tight">
            Resources &amp; Downloads
          </h1>
          <p className="text-gray-400 text-lg max-w-2xl mb-8">
            Capability sheets, safety forms, technical specifications, and company documents —
            ready for client presentations, prequalification packages, and field use.
          </p>

          <div className="flex flex-wrap gap-6">
            {[
              { label: 'Total Documents', value: resources.length },
              { label: 'PDF Files',       value: pdfCount },
              { label: 'Data / CSV Files',value: csvCount },
              { label: 'Categories',      value: resourceCategories.length },
            ].map((stat) => (
              <div key={stat.label} className="flex items-baseline gap-2">
                <span className="text-2xl font-black text-mac-red">{stat.value}</span>
                <span className="text-gray-500 text-xs uppercase tracking-widest">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Filter bar ───────────────────────────────────────────────────── */}
      <section className="sticky top-[72px] z-30 bg-mac-dark/95 backdrop-blur-sm border-b border-white/5 py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center">
            {/* Search */}
            <div className="relative flex-1 min-w-0 max-w-sm">
              <SearchIcon className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-600 pointer-events-none" />
              <input
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search documents…"
                className="w-full bg-mac-gray border border-mac-gray-light rounded-lg pl-9 pr-4 py-2 text-sm text-white placeholder-gray-600 focus:outline-none focus:border-mac-red/50 transition-colors"
              />
              {search && (
                <button
                  onClick={() => setSearch('')}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-600 hover:text-gray-400"
                >
                  ✕
                </button>
              )}
            </div>

            {/* File type filter */}
            <div className="flex items-center gap-1.5 flex-shrink-0">
              {(['All', 'pdf', 'csv'] as const).map((ft) => (
                <button
                  key={ft}
                  onClick={() => setActiveFileType(ft)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-semibold uppercase tracking-widest transition-colors ${
                    activeFileType === ft
                      ? 'bg-mac-red text-white'
                      : 'bg-mac-gray border border-mac-gray-light text-gray-500 hover:text-white hover:border-white/20'
                  }`}
                >
                  {ft === 'All' ? 'All Types' : ft.toUpperCase()}
                </button>
              ))}
            </div>

            <span className="text-gray-600 text-xs ml-auto flex-shrink-0 hidden sm:block">
              {filtered.length} of {resources.length} documents
            </span>
          </div>

          {/* Category pills */}
          <div className="flex gap-2 mt-3 overflow-x-auto pb-1 scrollbar-hide">
            {(['All', ...resourceCategories] as const).map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat as ResourceCategory | 'All')}
                className={`flex-shrink-0 inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium transition-colors whitespace-nowrap ${
                  activeCategory === cat
                    ? 'bg-mac-red/15 text-mac-red border border-mac-red/30'
                    : 'bg-white/5 text-gray-500 border border-transparent hover:border-white/10 hover:text-gray-300'
                }`}
              >
                {cat}
                <span className={`text-[10px] font-bold ${activeCategory === cat ? 'text-mac-red' : 'text-gray-700'}`}>
                  {countByCategory[cat] ?? 0}
                </span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* ── Resource grid ─────────────────────────────────────────────────── */}
      <section className="py-12 bg-mac-dark min-h-[60vh]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {filtered.length === 0 ? (
            <div className="text-center py-24">
              <p className="text-gray-600 text-lg mb-2">No documents match your filters.</p>
              <button
                onClick={() => { setSearch(''); setActiveCategory('All'); setActiveFileType('All') }}
                className="text-mac-red text-sm hover:underline"
              >
                Clear all filters
              </button>
            </div>
          ) : (
            <>
              {activeCategory === 'All' && !search ? (
                resourceCategories.map((cat) => {
                  const items = filtered.filter((r) => r.category === cat)
                  if (items.length === 0) return null
                  return (
                    <div key={cat} className="mb-12">
                      <div className="flex items-center gap-4 mb-6">
                        <h2 className={`text-sm font-bold uppercase tracking-[0.15em] ${categoryColors[cat]}`}>
                          {cat}
                        </h2>
                        <div className="flex-1 h-px bg-white/5" />
                        <span className="text-gray-700 text-xs">{items.length} docs</span>
                      </div>
                      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                        {items.map((r) => (
                          <ResourceCard key={r.id} resource={r} onQuickView={handleQuickView} />
                        ))}
                      </div>
                    </div>
                  )
                })
              ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  {filtered.map((r) => (
                    <ResourceCard key={r.id} resource={r} onQuickView={handleQuickView} />
                  ))}
                </div>
              )}
            </>
          )}
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────────────────────────────── */}
      <section className="py-16 bg-mac-gray border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <h2 className="text-white text-2xl font-bold mb-1">Need a custom document?</h2>
            <p className="text-gray-400 text-sm max-w-md">
              If you need a document that isn't listed here — a project-specific capability statement,
              custom safety plan, or bid package — contact our team.
            </p>
          </div>
          <Link href="/contact" className="btn-primary flex-shrink-0">
            Contact Our Team
          </Link>
        </div>
      </section>
    </>
  )
}
