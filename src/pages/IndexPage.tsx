import { useDailyMixQuery } from "@/api/hooks";

export const IndexPage = () => {
  const { data, isLoading, error } = useDailyMixQuery();

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error loading daily mix data</p>;

  return (
    <div>
      <p>Hello there </p>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
};
