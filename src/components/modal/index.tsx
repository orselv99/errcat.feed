export const Modal = (props: { overlay: boolean; element: JSX.Element }) => {
  return (
    <div>
      {/* overlay */}
      {props.overlay === true && (
        <div className="box-border block fixed top-0 left-0 bottom-0 right-0 bg-black opacity-[0.7] z-[1000]" />
      )}
      {/* modal */}
      <div className="box-border block fixed top-0 left-0 bottom-0 right-0 z-[1001]">
        {props.element}
      </div>
    </div>
  );
};
