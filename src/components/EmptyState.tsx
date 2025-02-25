import React from "react";
import { LinkIcon } from "../Icons";

function EmptyState() {
  return (
    <div className="text-center py-12">
      <div className="mx-auto h-24 w-24 text-gray-400">
        <LinkIcon />
      </div>
      <h3 className="mt-2 text-lg font-medium text-gray-900">No URLs yet</h3>
      <p className="mt-1 text-sm text-gray-500">
        Start by adding your first URL above.
      </p>
    </div>
  );
}

export default EmptyState;
