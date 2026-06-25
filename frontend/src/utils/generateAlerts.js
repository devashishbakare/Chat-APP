export const generateAlerts = (num) => {
  const services = ["Coda", "Scaleway", "Okta"];
  const severities = [
    {
      label: "Critical",
      color: "bg-error/15 text-error border-error/20",
      rank: 3,
    },
    {
      label: "Warning",
      color: "bg-[#fbbf2415] text-[#fbbf24] border-[#fbbf2420]",
      rank: 2,
    },
    {
      label: "Info",
      color: "bg-secondary/15 text-secondary border-secondary/20",
      rank: 1,
    },
  ];
  const titles = [
    "Service Latency",
    "Database Connection Failure",
    "Authentication Spike",
    "Worker Timeout",
    "Storage Limit Reached",
  ];
  //   const serviceStyles = {
  //     'Coda': { label: 'Coda', icon: 'auto_awesome', color: 'text-purple-400' },
  //     'Scaleway': { label: 'Scaleway', icon: 'cloud', color: 'text-blue-400' },
  //     'Okta': { label: 'Okta', icon: 'key', color: 'text-teal-400' }
  //   };

  return Array.from({ length: num }, (_, i) => {
    const service = services[Math.floor(Math.random() * services.length)];
    const severity = severities[Math.floor(Math.random() * severities.length)];
    return {
      id: i + 1,
      title: `${service} ${titles[Math.floor(Math.random() * titles.length)]}`,
      service: service,
      severity: severity,
      timestamp: new Date(
        Date.now() - Math.floor(Math.random() * 100000000),
      ).toISOString(),
      desc: "Anomalous traffic patterns detected in production cluster. Response times have exceeded the 500ms threshold for 3 consecutive cycles. Immediate investigation required into the node balancer configurations.",
      source: `PROBE-${Math.random().toString(36).substring(7).toUpperCase()}`,
      latency: `${Math.floor(Math.random() * 900) + 100}ms`,
    };
  });
};
