import numeral from "numeral";

export default function formatViews(value) {
  return numeral(value).format("0.[0]a");
}
