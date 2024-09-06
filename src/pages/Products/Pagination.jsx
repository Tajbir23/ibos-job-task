

const Pagination = () => {
  return (
    <div className="flex items-center justify-center my-4">
      {/* Previous Button */}
      <button
        className="px-3 py-1 border rounded bg-gray-600 disabled:opacity-50"
        disabled
      >
        &lt;
      </button>

      {/* Page Numbers */}
      <button className="px-3 py-1 mx-1 border rounded border-black text-black">
        1
      </button>
      <button className="px-3 py-1 mx-1 border rounded border-gray-300 text-gray-500">
        2
      </button>
      <span className="mx-1">...</span>
      <button className="px-3 py-1 mx-1 border rounded border-gray-300 text-gray-500">
        9
      </button>
      <button className="px-3 py-1 mx-1 border rounded border-gray-300 text-gray-500">
        10
      </button>

      {/* Next Button */}
      <button className="px-3 py-1 border rounded text-gray-400 hover:bg-gray-100">
        &gt;
      </button>
    </div>
  );
};

export default Pagination;
