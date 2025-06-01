const PropertySkeleton = () => {
  return (
    <div className="container mx-auto animate-pulse bg-white p-4 rounded-md shadow">
      <div className="bg-gray-200 h-32 w-full mb-4 rounded"></div>
      <div className="h-4 bg-gray-200 rounded w-3/4 mb-2"></div>
      <div className="h-4 bg-gray-200 rounded w-1/2"></div>
    </div>
  );
};

const PropertySkeletonGrid = ({ count = 6 }) => {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {Array.from({ length: count }).map((_, i) => (
        <PropertySkeleton key={i} />
      ))}
    </div>
  );
};

export default PropertySkeletonGrid;
