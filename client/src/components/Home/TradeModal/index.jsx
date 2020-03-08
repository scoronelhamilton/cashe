import React from 'react';
import Modal from 'react-modal';
import TradeFormContainer from '../../../containers/TradeForm/index';

const TradeModal = ({ modalIsOpen, setModalIsOpen }) => {
  Modal.setAppElement('#app');

  return (
    <Modal
      isOpen={modalIsOpen}
      id="trade-modal"
      className="modal"
      overlayClassName="modal-overlay"
    >
      <div className="modal-wrapper">
        <button
          type="button"
          className="close-modal-button"
          onClick={() => setModalIsOpen(false)}
        >
          &times;
        </button>
        <div className="modal-container">
          <TradeFormContainer />
        </div>
      </div>
    </Modal>
  );
};

export default TradeModal;
