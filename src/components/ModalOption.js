import React from 'react';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';

const ModalOption = (props) => (
    <Modal
            open={!!props.selectedOption}
            aria-labelledby="Your option"
            aria-describedby="The option you have picked"
            className="modal"
            closeAfterTransition
            BackdropComponent={Backdrop}
            BackdropProps={{
                timeout: 500,
                }}
            >
                <div className="modal-container">
                    <h3>Your option is:</h3>
                    <p>{props.selectedOption}</p>
                    <button
                        className="little-button"
                        onClick={props.closeModal}
                    >
                        Close
                    </button>
                </div>
    </Modal>
);

export default ModalOption;