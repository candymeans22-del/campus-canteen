const paths = {
  home: "M3 11l9-8 9 8M5 10v10h14V10M10 20v-6h4v6",
  menu: "M5 4h14v16H5zM9 9h6M9 13h6",
  info: "M12 3a9 9 0 1 0 0 18a9 9 0 0 0 0-18zM12 11v5M12 8v.01",
  mail: "M3 6h18v12H3zM3 7l9 6 9-6",
  cart: "M3 4h2l2.4 11h10.2L20 7H6.2M9 19.5v.01M17 19.5v.01",
  search: "M11 4a7 7 0 1 0 0 14a7 7 0 0 0 0-14zM20 20l-3.5-3.5",
  leaf: "M5 19C5 9 11 4 20 4c0 9-5 15-15 15zM5 19l8-8",
  clock: "M12 3a9 9 0 1 0 0 18a9 9 0 0 0 0-18zM12 7v5l3 2",
  arrow: "M5 12h14M13 6l6 6-6 6",
  sparkle: "M12 3l1.8 5.2L19 10l-5.2 1.8L12 17l-1.8-5.2L5 10l5.2-1.8z",
  bars: "M4 7h16M4 12h16M4 17h16",
  facebook: "M14 8h3V4h-3a4 4 0 0 0-4 4v3H7v4h3v6h4v-6h3l1-4h-4V8z",
  instagram: "M7 3h10a4 4 0 0 1 4 4v10a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4V7a4 4 0 0 1 4-4zM12 8a4 4 0 1 0 0 8a4 4 0 0 0 0-8zM17.5 6.5v.01",
  x: "M5 4l14 16M19 4L5 20",
};

function Icon({ name, size = 20 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor"
      strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d={paths[name]} />
    </svg>
  );
}

export default Icon;
