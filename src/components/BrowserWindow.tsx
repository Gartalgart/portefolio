import type { ReactNode } from "react";

/* Fenêtre de navigateur : barre d'adresse + contenu 16:10. */
export default function BrowserWindow({ host, children, className = "" }: { host: string; children: ReactNode; className?: string }) {
  return (
    <div className={`overflow-hidden rounded-xl border border-line-strong bg-surface ${className}`}>
      <div className="flex items-center gap-3 border-b border-line bg-surface-2 px-3.5 py-2.5" aria-hidden="true">
        <span className="flex gap-1.5">
          <span className="h-2.5 w-2.5 rounded-full bg-line-strong" />
          <span className="h-2.5 w-2.5 rounded-full bg-line-strong" />
          <span className="h-2.5 w-2.5 rounded-full bg-line-strong" />
        </span>
        <span className="min-w-0 flex-1 truncate rounded-md bg-bg px-3 py-1 text-center font-mono text-[11px] text-muted">{host}</span>
      </div>
      <div className="relative aspect-[16/10] bg-surface-2">{children}</div>
    </div>
  );
}
