type MetricCardProps = {
  value: string;
  label: string;
};

export function MetricCard({ value, label }: MetricCardProps) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
      <p className="text-3xl font-semibold text-[#071A2F]">{value}</p>
      <p className="mt-2 text-sm font-medium uppercase tracking-[0.2em] text-slate-500">{label}</p>
    </div>
  );
}
