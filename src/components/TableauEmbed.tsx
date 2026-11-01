type TableauEmbedProps = {
  id: string;
  src: string;
  toolbar?: "hidden" | "top" | "bottom";
  hideTabs?: boolean;
};

/**
 * Tableau Embedding API v3 web component wrapper.
 *
 * The tableau.embedding.3.latest.min.js script is loaded once in index.html,
 * which registers the <tableau-viz> custom element. This component renders
 * that element with the given props.
 */
export default function TableauEmbed({
  id,
  src,
  toolbar = "bottom",
  hideTabs = true,
}: TableauEmbedProps) {
  return (
    <tableau-viz
      id={id}
      src={src}
      toolbar={toolbar}
      hide-tabs={hideTabs}
      style={{ width: "100%", minHeight: 800, display: "block" }}
    />
  );
}
