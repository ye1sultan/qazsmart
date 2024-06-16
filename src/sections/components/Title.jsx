import React from "react";
export default function Title({ name }) {
  return (
    <div className="w-full capitalize">
      <h3 className="text-2xl md:text-3xl leading-6 font-medium text-neutral-950">
        <span className="underline underline-offset-4 decoration-neutral-950">{name}</span>
      </h3>
    </div>
  );
}
