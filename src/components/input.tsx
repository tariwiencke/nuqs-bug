'use client';

import { useQueryParams } from '@/lib/nuqs';

export default function Input() {
  const [{ search, category }, setQueryParams] = useQueryParams();
  return (
    <div>
      <input
        type="text"
        value={search}
        onChange={(e) => setQueryParams({ search: e.target.value })}
      />
      <input
        type="text"
        value={category}
        onChange={(e) => setQueryParams({ category: e.target.value })}
      />
    </div>
  );
}
