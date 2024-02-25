import { Content } from "@prismicio/client";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";

/**
 * Props for `Textblock`.
 */
export type TextblockProps = SliceComponentProps<Content.TextblockSlice>;

/**
 * Component for "Textblock" Slices.
 */
const Textblock = ({ slice }: TextblockProps): JSX.Element => {
  return (
    <div className="max-w-prose">
      <PrismicRichText field={slice.primary.text} />
    </div>
  );
};

export default Textblock;
