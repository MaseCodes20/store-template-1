import React, { useEffect, useState } from "react";

function SaleBar() {
  const [switchDisplay, setSwitchDisplay] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setSwitchDisplay(!switchDisplay);
    }, 5000);
  }, [switchDisplay]);

  return (
    <div className="text-center p-8 bg-slate-500/10">
      {switchDisplay ? (
        <p className="font-semibold">Free shipping on Orders above $100</p>
      ) : (
        <p className="font-semibold">Save Up to 40% Off</p>
      )}
    </div>
  );
}

export default SaleBar;
