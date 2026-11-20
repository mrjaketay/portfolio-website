import {
  siAsana, siClickup, siJira, siHelpscout, siNotion, siGmail, siGooglesheets, siZoom, siGooglemeet,
  siPython, siPostgresql, siReact, siTypescript, siNodedotjs, siVite, siGithub, siZapier, siMake, siN8n,
  siDavinciresolve, siFlutter, siFirebase, siRender, siHostinger, siNextdotjs, siPrisma,
} from 'simple-icons'

// svg marks from simple-icons, png for the ones they don't ship
const svg = {
  Asana: siAsana, ClickUp: siClickup, Jira: siJira, 'Help Scout': siHelpscout, Notion: siNotion,
  Gmail: siGmail, 'Google Sheets': siGooglesheets, Zoom: siZoom, 'Google Meet': siGooglemeet,
  Python: siPython, PostgreSQL: siPostgresql, React: siReact, TypeScript: siTypescript,
  'Node.js': siNodedotjs, Vite: siVite, GitHub: siGithub, Zapier: siZapier, Make: siMake, n8n: siN8n,
  'DaVinci Resolve': siDavinciresolve, Flutter: siFlutter, Firebase: siFirebase, Render: siRender,
  Hostinger: siHostinger, 'Next.js': siNextdotjs, Prisma: siPrisma,
}

const png = {
  Excel: '/icons/excel.png', 'Microsoft Teams': '/icons/teams.png', CapCut: '/icons/capcut.png',
  Photoshop: '/icons/photoshop.png', ChatGPT: '/icons/chatgpt.png', Canva: '/icons/canva.png',
  LinkedIn: '/icons/linkedin.png',
}

export default function ToolIcon({ name, size = 22 }) {
  const icon = svg[name]
  if (icon) {
    return (
      <svg className="tool-icon" width={size} height={size} viewBox="0 0 24 24" role="img" aria-label={name}>
        <path d={icon.path} fill={`#${icon.hex}`} />
      </svg>
    )
  }
  if (png[name]) {
    const wide = name === 'Canva'
    return (
      <img className="tool-icon" src={png[name]} alt={name} height={size} width={wide ? size * 3.1 : size} decoding="async" />
    )
  }
  return null
}

// chip = icon + name, used in lists of tools
export function ToolChip({ name }) {
  const iconOnlyName = name === 'Canva'
  return (
    <span className="tool-chip">
      <ToolIcon name={name} size={20} />
      {!iconOnlyName && <span>{name}</span>}
    </span>
  )
}
