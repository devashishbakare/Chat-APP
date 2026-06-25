export const Modal = ({ alert, onClose }) => {
  if (!alert) return null;

  return (
    <div
      className="fixed inset-0 z-[60] flex items-center justify-center"
      onClick={onClose}
    >
      <div className="absolute inset-0 bg-primary/40 backdrop-blur-md" />
      <div
        className="relative w-full max-w-2xl bg-primary-container text-on-primary rounded-xl shadow-2xl overflow-hidden animate-in fade-in zoom-in duration-300"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="p-8 border-b border-white/10 flex justify-between items-start">
          <div>
            <div className="mb-4">
              <span
                className={`px-4 py-1 rounded-full text-xs font-bold uppercase border ${alert.severity.color}`}
              >
                {alert.severity.label}
              </span>
              <span className="ml-3 font-label-caps text-label-caps text-on-primary-container">
                {alert.service} Infrastructure
              </span>
            </div>
            <h3 className="font-headline-md text-headline-md">{alert.title}</h3>
            <p className="text-on-primary-container font-label-mono text-label-mono mt-1">
              {new Date(alert.timestamp).toLocaleString()}
            </p>
          </div>
          <button
            onClick={onClose}
            className="text-on-primary-container hover:text-white"
          >
            <span className="material-symbols-outlined" data-icon="close">
              close
            </span>
          </button>
        </div>

        <div className="p-8 space-y-6">
          <div>
            <h4 className="font-label-caps text-label-caps text-secondary mb-2 uppercase">
              Incident Description
            </h4>
            <p className="text-body-lg text-body-lg text-on-primary-container leading-relaxed">
              {alert.desc}
            </p>
          </div>

          <div className="grid grid-cols-2 gap-6">
            <div className="bg-white/5 p-4 rounded-lg border border-white/5">
              <span className="font-label-caps text-label-caps text-on-primary-container block mb-1">
                PROBE SOURCE
              </span>
              <span className="font-headline-sm text-headline-sm">
                {alert.source}
              </span>
            </div>
            <div className="bg-white/5 p-4 rounded-lg border border-white/5">
              <span className="font-label-caps text-label-caps text-on-primary-container block mb-1">
                LATENCY IMPACT
              </span>
              <span className="font-headline-sm text-headline-sm text-error">
                {alert.latency}
              </span>
            </div>
          </div>

          <div>
            <h4 className="font-label-caps text-label-caps text-secondary mb-2 uppercase">
              Remediation Steps
            </h4>
            <ul className="list-disc list-inside text-body-md text-on-primary-container space-y-1">
              <li>Restart affected microservice container (v1.2.4)</li>
              <li>Flush Redis cache on Region-East-1</li>
              <li>Review recent security policy changes in Okta console</li>
            </ul>
          </div>
        </div>

        <div className="p-8 bg-black/20 flex gap-4">
          <button className="flex-1 bg-secondary text-on-secondary py-3 rounded-lg font-bold hover:bg-secondary-container transition-all">
            Acknowledge
          </button>
          <button className="flex-1 bg-error text-white py-3 rounded-lg font-bold hover:opacity-90 transition-all">
            Escalate Incident
          </button>
        </div>
      </div>
    </div>
  );
};
