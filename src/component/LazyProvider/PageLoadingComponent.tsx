import { Backdrop, CircularProgress } from "@mui/material";

export interface IPageLoadingComponentProps {}

export default function PageLoadingComponent(
  props: IPageLoadingComponentProps
) {
  return (
    <div className=" h-screen w-screen justify-center items-center flex ">
      <Backdrop
        sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={true}
      >
        <CircularProgress variant="indeterminate" />
      </Backdrop>
    </div>
  );
}
