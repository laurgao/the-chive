import { useState } from "react";
import Modal from "react-modal";

const test = () => {
    const [newProjectOpen, setNewProjectOpen] = useState<boolean>(false);
    return (
        <div>
            <button onClick = {() => setNewProjectOpen(true)}>New Project</button>
            <Modal
                isOpen={newProjectOpen}
                onRequestClose={() => setNewProjectOpen(false)}
                ariaHideApp={false} // Add this if you want the rest of the app to be shown when the modal is open
                >
                <p>This is modal!</p>
            </Modal>
        </div>
    )
}

export default test
