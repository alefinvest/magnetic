import { Box } from "@mui/material";
import { useRecordContext } from "react-admin";

import { Company, Contact } from "../types";

const sizeInPixel = {
  medium: 42,
  small: 20,
};

export const LogoField = ({
  size = "medium",
}: {
  size?: "small" | "medium";
}) => {
  const record = useRecordContext<Company | Contact>();
  if (!record) return null;
  return (
    <Box
      component="img"
      src={record.logo}
      alt={record.name}
      title={record.name}
      width={sizeInPixel[size]}
      height={sizeInPixel[size]}
      sx={{ objectFit: "contain" }}
    />
  );
};
