import { cbModal, Icon } from "@contentstack/venus-components";
import expand from "./assets/Icon.png";

function App() {
  const ModalComponent = ({ closeModal }) => (
    <div
      style={{
        width: "calc(100vw - 100px)",
        height: "calc(100vh - 100px)",
        borderRadius: "inherit",
      }}
    >
      <div className="flex FullPage_Modal_Header">
        <h6 className="ml-30 mt-20"> Header </h6>
        <Icon
          icon="Compress"
          size="small"
          className="Tab__icon mt-20"
          hover={true}
          hoverType="secondary"
          style={{ marginRight: "30px", marginLeft: "auto", cursor: "pointer" }}
          onClick={closeModal}
        />
      </div>
      <div className="mt-30 mr-20 ml-20 mb-20">Modal content goes here</div>
    </div>
  );

  const openModal = () => {
    cbModal({
      component: (props) => <ModalComponent {...props} />,
      modalProps: {
        size: "customSize",
        shouldCloseOnOverlayClick: true,
      },
    });
  };

  return (
    <>
      <div className="d-flex" onClick={openModal} role="button">
        <img src={expand} alt="modal" className="me-2" />
        click me
      </div>
    </>
  );
}

export default App;
